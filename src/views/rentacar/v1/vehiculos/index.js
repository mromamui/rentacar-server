'use strict'

import { Router } from 'express'
let router = Router()

// TODO

router.param('idVehiculo', (req, res, next, idVehiculo) => {
    // TODO: Recuperar identificador de vehículo
})

import alquileres from './alquileres/index.js'
router.use('/:idVehiculo/alquileres', alquileres)

import disponibilidad from './disponibilidad/index.js'
router.use('/:idMedico/disponibilidad', disponibilidad)

export default router