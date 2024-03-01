
import express from 'express'
const vehiculeRouter = express.Router()
import { buyVehiculeController, listAllController } from './dependecies'

vehiculeRouter.post('/order', buyVehiculeController.run.bind(buyVehiculeController))
vehiculeRouter.get('/', listAllController.run.bind(listAllController))

export default vehiculeRouter

