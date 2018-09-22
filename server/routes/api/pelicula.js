const PeliculaEs = require('../../models/Persona.js');
const mongoose = require('mongoose');
module.exports = (app) =>{
    app.post('/api/personadatos',(req,res,next) => {
			//ingresar datos
				const { body } = req
				const {
					nombre,
					genero,
					duracion,
					origen,
					productor,
					actor_principal,
					sitios_de_grabacion,
					fondos_recaudados,
				} = body
				const PeliculaDatos = new PeliculaEs();
				PelicualaDatos.nombre = nombre
				PeliculaDatos.genero = genero
				PeliculaDatos.duracion = duracion
				PeliculaDatos.origen = origen
				PeliculaDatos.productor = productor
				PeliculaDatos.actor_principal= actor_principal
				PeliculaDatos.sitios_de_grabacion= sitios_de_grabacion
				PeliculaDatos.fondos_recaudados= fondos_recaudados

				PeliculaDatos.save((err, datos) => {
					if (err) {
						console.log(err)
						return res.send({
							err
						})
					} else {
						return res.send({
							datos,
							mensaje:"Todo salió al 100 JAJA"
						})
					}
				})			
		})
		app.get('/api/showdatos', (req, res , next)=> {
			// Aqui se llaman oh buscan los datos
			PeliculaEs.find((err, datos) => {
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