'use strict'

import config from 'config'
import api from './views/index.js'

console.log(`Bienvenido al servidor de Rent-A-Car`)
console.log(`   Examen UAX 4 de junio de 2024`)

await api(config.server)
