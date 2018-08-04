const Testo = require('../../models/Prueba.js');
const mongoose = require('mongoose');

module.exports = (app) => {
    app.post('/api/prueba',(req, res , next) => {
        const { body } = req 
        const { edad, nombre } = body 

        const PruebaDa = new Testo();

        PruebaDa.edad = edad
        PruebaDa.nombre = nombre
        PruebaDa.save((err, prueba) => {
            if (err) {
                console.log(err);
                return res.send({
                    mensaje:'error',
                    type: err
                })
            } else {
                console.log(prueba);
                return res.send({
                    mensaje:'salio bien',
                    PruebaDa
                })
            }
				})
		})
		app.get('/api/personas',(req, res, next) => {
			Testo.find((err,persoma) => {
                if (err) {
                    return res.send({
                        error:err
                    })
                } else {
                    return res.send({
                        persoma
                    })
                }
                
            })
		})
}