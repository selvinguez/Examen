const CualquierModel = require('../../models/CualquierCosa.js');
module.exports = (app) => {
    app.post('/api/cualquier', (req, res) => {
        const {body} = req
        console.log("este es el body",body)
        const {nombre,tipo,valor,color} = body
        console.log("estos son las variables", nombre,tipo,valor,color)
        const CualquiercoObj = new CualquierModel()
        CualquiercoObj.nombre = nombre
        CualquiercoObj.tipo = tipo
        CualquiercoObj.valor = valor
        CualquiercoObj.color = color
        console.log("Este es el nuevo objeto", CualquiercoObj);
        
        CualquiercoObj.save((err, datos) => {
            if (err) {
                console.log(err);
                return res.send({
                    err
                })
            } else {
                return res.send({
                    datos
                })
            }
        })


        
    })
}
