'use strict';

var express = require('express');
var router = express.Router();

var Task = require('../models/curso');


/** [GET] /tasks */
router.route('/curso').get(function (req, res) {
	Task.find(function (erro, tasks) {
		if (erro) {
			res.send(erro);
		}

		res.json(tasks);
	})
});


/** [GET] /tasks/<id> */
router.route('/curso/:id').get(function (req, res) {
	Task.findById(req.params.id, function (erro, task) {
		if (erro) {
			res.send(erro);
		}

		res.json(task);
	});
});

/** [POST] /tasks */
router.route('/curso/').post(function (req, res) {
	var task = new Task();
	task.title = req.body.title;
	task.description = req.body.description;
	task.completed = req.body.completed;
	task.created = new Date;

	task.save(function (erro) {
		if (erro) {
			res.send(erro);
		}

		res.json({ id: task._id });
	});
});

/** [PUT] /tasks/<id> */
router.route('/curso/:id').put(function (req, res) {
	Task.findById(req.params.id, function (erro, task) {
		if (erro) {
			res.send(erro);
		}

		task.title = req.body.title;
		task.description = req.body.description;
		task.completed = req.body.completed;
		task.created = new Date;

		task.save(function (erro) {
			if (erro) {
				res.send(erro);
			}

			res.json({ message: 'Tarefa atualizada!' });
		})
	});
});

/** [DELETE] /tasks/<id> */
router.route('/curso/:id').delete(function (req, res) {
	Task.remove({ _id: req.params.id }, function (erro) {
		if (erro) {
			res.send(erro);
		}

		res.json({ message: 'Tarefa deletada' });
	});
});

module.exports = router;
