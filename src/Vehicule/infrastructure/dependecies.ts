import BuyVehiculeUseCase from "../application/BuyVehiculeUseCase";
import ListAllUseCase from "../application/ListAllUseCase";
import MySQLVehiculeRepository from "./MySQLVehiculeRepository";
import BuyVehiculeController from "./controllers/BuyVehiculeController";
import ListAllController from "./controllers/ListAllController";
import { RabbitMQPayment } from "./services/RabbitMQPayment";



const rabbitMQPayment = new RabbitMQPayment()
const buyVehiculeUseCase = new BuyVehiculeUseCase(rabbitMQPayment)
export const buyVehiculeController = new BuyVehiculeController(buyVehiculeUseCase)

const mySQLVehiculeRepository = new MySQLVehiculeRepository
const listAllUseCase = new ListAllUseCase(mySQLVehiculeRepository)
export const listAllController = new ListAllController(listAllUseCase)