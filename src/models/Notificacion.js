const mongoose = require("mongoose");
const { format } = require("../utils/utilities");

const NotificacionSchema = mongoose.Schema({
    alumno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Alumno",
    },
    fecha:{
        type: String,
        default: format(new Date)
    },
    leida: {
        type: Boolean,
        default: false
    },
    evento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Evento",
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("Notificacion", NotificacionSchema);
