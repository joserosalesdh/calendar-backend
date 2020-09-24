const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { isDate } = require('../helpers/isDate');


router.use(validarJWT); //Al hacer esto le digo que cualquier peticion que se encuentre dejao de esto va a tener que tener su token 

router.get('/', getEventos);

router.post('/', [
    check('title', 'Titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de incio es obligatoria').custom(isDate),
    check('end', 'Fecha de cierre es obligatoria').not().isEmpty(),
    validarCampos
], crearEvento);

router.put('/:id', actualizarEvento);

router.delete('/:id', eliminarEvento);

module.exports = router;