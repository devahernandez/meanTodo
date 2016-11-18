var mongoose = require('mongoose');// requerimos el modulo de mongoose
var Schema = mongoose.Schema;// referenciamos el  objecto mongoose

//creamos las propiedades  de nuestro schema
var CursoSchema = new Schema({
	title: String,
	description: String,
	completed: Boolean,
	created: Date
}, { versionKey: false});
//exportamos el modulo
module.exports = mongoose.model("curso", CursoSchema);
