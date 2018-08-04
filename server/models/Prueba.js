const mongoose = require('mongoose');

const PruebaShema = new mongoose.Schema({
    edad:Number,
    nombre:String
});

module.exports = mongoose.model('Prueba', PruebaShema);
