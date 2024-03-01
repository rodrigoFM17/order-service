import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.use(express.json())

import vehiculeRouter from './src/Vehicule/infrastructure/Vehicule.route'
app.use('/vehicules', vehiculeRouter)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`escuchando en el puerto ${PORT}`)
})