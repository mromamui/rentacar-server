'use strict'

import express from 'express'
let server = express()

import loggerMiddleware from "./middlewares/logger.js"
server.use(loggerMiddleware)

server.get('/', (req, res, next) => {
    res.send('Bienvenido al servidor de Rent-A-Car')
})

import rentacarV1 from './rentacar/v1/index.js'
server.use('/rentacar/v1/', rentacarV1)

// Manejar los errores
import errorsMiddleware from "./middlewares/errors.js"
server.use(errorsMiddleware)

export default async function startApi(config) {
    server.listen(config.port, () => {
        console.log(`Server listening at ${config.port}`)
    })
}
