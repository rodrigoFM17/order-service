import { Request, Response } from "express";
import BuyVehiculeUseCase from "../../application/BuyVehiculeUseCase";
import Vehicule from "../../domain/Vehicule";

export default class BuyVehiculeController {

    constructor( readonly buyVehiculeUseCase: BuyVehiculeUseCase){}

    run = async (req: Request, res: Response) => {

        try{

            const {id, model, year, brand, price} = req.body
            const vehiculeToBuy = new Vehicule(id, model, year, brand, price)

            const success = await this.buyVehiculeUseCase.run(vehiculeToBuy)

            success ? 
            res.status(200).json({
                message: 'la peticion de pago se esta procesando',
                success
            })
            :
            res.status(300).json({
                message: 'la peticion de pago no pudo ser procesada',
                success
            })

        } catch(e){

            console.log(e)
            res.status(500).json({
                error: {
                    message: 'hubo un error en el servidor',
                    error: e
                }
            })
        }

    }
}