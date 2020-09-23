const { Schema, model } = require('mongoose');

const EventoSchema = Schema({

    title: {
        type: String,
        require: true
    },
    notes: {
        type: String,
    },
    start: {
        type: Date,
        require: true
    },
    end: {
        type: Date,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId, //esto le va a decir a mongoose que va a se runa referencia y esta la especificamos con el ref
        ref: 'Usuario'
    }

});

module.exports = model('Evento', EventoSchema);