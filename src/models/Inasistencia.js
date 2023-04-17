const mongoose = require('mongoose');
const { format } = require('../utils/utilities');

const InasistenciaSchema = mongoose.Schema({
    alumno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Alumno'
    },
    curso:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Curso'
    },
    fecha: {
        type: String,
        default: format(new Date)
    },
    valor: {
        type: Number,
        required: true,
    },
    estado: {
        type: String,
        default: "Injustificada"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
})

module.exports = mongoose.model('Inasistencia', InasistenciaSchema);