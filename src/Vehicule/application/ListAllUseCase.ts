import VehiculeRepository from "../domain/Vehicule.repository";

export default class ListAllUseCase {
    
    constructor( readonly vehiculeRepository: VehiculeRepository){}

    run = async () => {

        try{

            const vehicules = this.vehiculeRepository.getAll()
            return vehicules

        } catch (e: any){
            console.log(e)
            return null
        }
    }
}