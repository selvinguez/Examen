const mongoose = require('mongoose');

const PersonaSchema = new mongoose.Schema({
    nombre:String,
    edad:Number,
    mail:String,
    cel:Number,
    sordo:Boolean
})

module.exports = mongoose.model('user', PersonaSchema);
