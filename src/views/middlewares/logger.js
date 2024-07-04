    'use strict'

import jwt from 'jsonwebtoken';

const secretKey = 'yourSecretKey'; // Clave secreta para firmar el JWT

export default function loggerMiddleware(req, res, next) {
    // Middleware para extraer la cabecera UsuarioCode-Masters
    const usuarioCode = req.headers['usuariocode-masters'];

    if (usuarioCode) {
        console.debug(UsuarioCode-Masters: ${usuarioCode});
        req.logged = true;

        // Generar JWT
        const token = jwt.sign({ usuarioCode }, secretKey, { expiresIn: '1h' });
        res.setHeader('Authorization', Bearer ${token});
    } else {
        req.logged = false;
    }

    console.debug(${req.method} ${req.originalUrl});
    next();
}
