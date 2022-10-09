// Importaciones

const mongoose = require('mongoose');

// esquema

let TareaSchema = new mongoose.Schema({
    idTarea: Number,
    nombreTarea: String,
    detalleTarea: String,

});


module.exports = mongoose.model("tarea", TareaSchema, "Tareas");