const mongoose = require('mongoose');

const PeliculaSchema = new mongoose.Schema({
    nombre:String,
    genero:String,
    duracion:Number,
    origen:String,
    productor:Boolean,
    actor_principal: String,
    sitios_de_grabacion: String,
    fondos_recaudados: number

})

module.exports = mongoose.model('user', PeliculaSchema);
