var mongoose = require('mongoose');// requerimos el modulo de mongoose
var Schema = mongoose.Schema; // referenciamos el  objecto mongoose

//creamos las propiedades  de nuestro schema
var TaskSchema = new Schema({
	title: String,
	description: String,
	completed: Boolean,
	created: Date
});

//exportamos el modulo 
module.exports = mongoose.model('task', TaskSchema);
