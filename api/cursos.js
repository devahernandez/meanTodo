var express = require('express');
var router = express.Router();
var Curso = require("../models/curso");

router.route('/curso').get(function (req, res)
{
	Curso.find(function (erro, cursos)
	{
		if (erro)
		{
			res.send(erro);
		}

		res.json(cursos);
	});
});


router.route('/curso').post(function (req, res) {
	var curso = new Curso();
	curso.descripcion =  req.body.descripcion;


	curso.save(function (erro) {
		if (erro) {
			res.send(erro);
		}

		res.json(curso);
	});
});

module.exports = router;
