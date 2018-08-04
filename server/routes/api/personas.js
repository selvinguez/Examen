const PersonaEs = require('../../models/Persona.js');
const mongoose = require('mongoose');
module.exports = (app) =>{
    app.post('/api/personadatos',(req,res,next) => {
			//ingresar datos
				const { body } = req
				const {
					nombre,
					edad,
					mail,
					cel,
					sordo
				} = body
				const PersonaDatos = new PersonaEs();
				PersonaDatos.nombre = nombre
				PersonaDatos.edad = edad
				PersonaDatos.mail = mail
				PersonaDatos.cel = cel
				PersonaDatos.sordo = sordo

				PersonaDatos.save((err, datos) => {
					if (err) {
						console.log(err)
						return res.send({
							err
						})
					} else {
						return res.send({
							datos,
							mensaje:"ehh salio bien"
						})
					}
				})			
		})
		app.get('/api/showdatos', (req, res , next)=> {
			// Aqui se llaman oh buscan los datos
			PersonaEs.find((err, datos) => {
				if (err) {
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