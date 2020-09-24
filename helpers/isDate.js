const moment = require('moment');


const isDate = (value, { req, location, path }) => {

    if (!value) { // verifico si el vale existe
        return false; // si no existe retorno false esto le va a decir a express validator que si esta funcion da false ese campo no es correcto
    }

    const fecha = moment(value);
    if (fecha.isValid()) {
        return true;
    } else {
        return false;
    }

}

module.exports = {
    isDate
}