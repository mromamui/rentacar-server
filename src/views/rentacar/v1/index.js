'use strict'

import { Router } from 'express'
let router = Router()

router.get('/', (req, res, next) => {
    res.send(`Rent-A-Car server V1 API`)
})

import clientes from './clientes/index.js'
router.use('/clientes', clientes)

import vehiculos from './vehiculos/index.js'
router.use('/vehiculos', vehiculos)

import alquileres from './alquileres/index.js'
router.use('/alquileres', alquileres)

export default router