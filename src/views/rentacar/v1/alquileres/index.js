'use strict'

import { Router } from 'express'
let router = Router()

// TODO

import disponibilidad from './disponibilidad/index.js'
router.use('/disponibilidad', disponibilidad)

export default router