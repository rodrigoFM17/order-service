import { Request, Response } from "express";
import ListAllUseCase from "../../application/ListAllUseCase";

export default class ListAllController {

    constructor( readonly listAllUseCase: ListAllUseCase ){}

    run = async (req: Request, res: Response) => {

        try{

            const vehicules = await this.listAllUseCase.run()

            vehicules ? 
            res.status(200).json({
                message: 'se obtuvieron los vehiculos correctamente',
                data: vehicules
            })
            :
            res.status(200).json({
                message: 'hubo un error al obtener los vehiculos'
            })

        } catch(e: any){
            console.log(e)
            return res.status(500).json({
                error: {
                    message: 'hubo un error al intentar obtener todos los vehiculos',
                    error: e.message
                }
            })
        }


    }
}