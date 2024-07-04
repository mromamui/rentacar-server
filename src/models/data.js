'use strict'

import data from './data.json' assert { type: 'json' }

// NOTA: Estas funciones únicamente deben exportar los datos del JSON
//  sin procesarlos, como si de una BBDD se tratase

export function getClientes() {
    return data.clientes
}

export function addClientes(cliente) {
    // TODO
}

export function getVehiculos() {
    return data.vehiculos
}

export function addVehiculos(vehiculo) {
    // TODO
}

export function getAlquileres() {
    return data.alquileres

}

export function addAlquileres(alquiler) {
    // TODO
}