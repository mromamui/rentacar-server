'use strict'

import data from './data.json' assert { type: 'json' }

// NOTA: Estas funciones únicamente deben exportar los datos del JSON
//  sin procesarlos, como si de una BBDD se tratase

export function getAlumnos() {
    return data.alumnos
}

export function addAlumno(alumno) {
    // TODO
}

export function getProfesores() {
    return data.profesores
}

export function addProfesor(profesor) {
    // TODO
}

export function getAsignaturas() {
    return data.asignaturas
}

export function addAsignatura(asignatura) {
    // TODO
}