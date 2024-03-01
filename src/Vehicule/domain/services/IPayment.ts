import Vehicule from "../Vehicule";

export default interface IPayment {

    managePayment(vehiculeToBuy: Vehicule): Promise<Boolean>
}