import Vehicule from "../../domain/Vehicule";
import IPayment from "../../domain/services/IPayment";
import amqp from 'amqplib/callback_api'
import 'dotenv/config'

export class RabbitMQPayment implements IPayment {

    async managePayment(vehiculeToBuy: Vehicule): Promise<Boolean> {

        try{ 

            const options = {
                username: process.env.USER_AMQP,
                password: process.env.PASSWORD_AMQP,
                port: 5672
            }
            const urlAmqp = process.env.URL_AMQP || ""

            amqp.connect(urlAmqp,options, (error, connection) => {
                if (error)
                throw error

                connection.createChannel((error, channel) => {
                    if(error)
                    throw error
                    
                    const exchange = process.env.EXCHANGE || ''
                    const stringifiedVehicule = JSON.stringify(vehiculeToBuy)
                    channel.assertExchange(exchange,'direct',{ durable: true})

                    const success = channel.publish(exchange,'', Buffer.from(stringifiedVehicule))

                    success ? 
                    console.log(`message sent: ${stringifiedVehicule}`)
                    : 
                    console.log('no se envio el mensaje')
                    
                    return success
                })
            })

            return true

        } catch(e:any){
            console.log(e)
            return false
        }


        
    }

}