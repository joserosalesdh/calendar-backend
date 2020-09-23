const { response } = require('express');


const getEventos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'obtener eventos'
    })
};

const crearEvento = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'crear eventos'
    })
};

const actualizarEvento = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'actualizar evento'
    })
};

const eliminarEvento = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'eliminar evento'
    })
};


module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}