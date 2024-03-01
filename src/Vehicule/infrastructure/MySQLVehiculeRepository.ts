import query from '../../database/db.config'
import Vehicule from '../domain/Vehicule';
import VehiculeRepository from '../domain/Vehicule.repository';

export default class MySQLVehiculeRepository implements VehiculeRepository {

    async getAll(): Promise<Vehicule[] | null> {
        
        try{

            const [vehicules]: any = await query('select * from vehicules ', [])
            return vehicules
        } catch(e: any){
            console.log(e)
            return null
        }
    }

    async buyVehicule(id: String): Promise<Vehicule | null> {

        try{

            return null

            

        } catch(e: any){
            return null
        }
        
    }
    
}