var mongoose = require('mongoose');// requerimos el modulo de mongoose
var Schema = mongoose.Schema;// referenciamos el  objecto mongoose

//creamos las propiedades  de nuestro schema
var CursoSchema = new Schema({
  descripcion : String
}, { versionKey: false});
//exportamos el modulo
module.exports = mongoose.model("Curso", CursoSchema);
