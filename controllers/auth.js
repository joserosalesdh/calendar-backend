const { response } = require('express');



const crearUsuario = (req, res = response) => {
    res.json({
        ok: true,
        msg: ' registro'
    })
}

const loginUsuario = (req, res = response) => {
    res.json({
        ok: true,
        mg: 'login'
    })
}

const revalidarToken = (req, res = response) => {
    res.json({
        ok: true,
        mg: 'renew'
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}