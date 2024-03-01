import Vehicule from "../domain/Vehicule";
import IPayment from '../domain/services/IPayment'

export default class BuyVehiculeUseCase {

    constructor( readonly paymentService: IPayment){}

    run = async (vehicule: Vehicule) => {

        try{
            
            return await this.paymentService.managePayment(vehicule)

        }catch(e: any){
            console.log(e)
            return null
        }

    }
}