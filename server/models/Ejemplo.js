const mongoose = require('mongoose');
//cambiar personaSchema por el nombre de nuestra tabla
const PersonaSchema = new mongoose.Schema({
    nombre:String,
    edad:Number,
    mail:String,
    cel:Number,
    sordo:Boolean
})
// cambiar el user por el nombre de su tabla pero en minusculas por ejemplo ahi dice user porque eran usuarios
// si cambiaron el nombre 
module.exports = mongoose.model('user', PersonaSchema);
