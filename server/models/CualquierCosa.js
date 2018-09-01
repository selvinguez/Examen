const mongoose =  require('mongoose');

const CualquierCosaShema = new mongoose.Schema ({
    nombre:String,
    tipo:String,
    valor:Number,
    color:String
})

module.exports = mongoose.model('cualquier_cosa',CualquierCosaShema);