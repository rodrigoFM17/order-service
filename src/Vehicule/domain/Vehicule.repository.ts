import Vehicule from "./Vehicule";

export default interface VehiculeRepository {

    getAll(): Promise<Vehicule[] | null>
    buyVehicule(id: String): Promise<Vehicule | null>
}