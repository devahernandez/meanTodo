// Depedências
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Banco de Dados
mongoose.connect('mongodb://admin:root@ds153667.mlab.com:53667/mean-database');

// Inicializa o Express
var app = express();

// Define o template que vamos usar
app.set('view engine', 'ejs');

// Configura
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// Rotas da API
app.use('/api', require('./api/tasks'));
app.use('/api', require('./api/cursos'));




// Rotas do aplicativo
app.get('/', function (req, res) {
	res.render('app');
});

// Inicializa o servidor
var server = app.listen(3333, function () {
	console.log("myKeep rodando na porta 3333");
});
