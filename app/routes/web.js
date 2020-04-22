const { check, validationResult } = require('express-validator');

module.exports = function(app){

	app.get('/', function(req, res){
		res.render('home/index');
	});

	app.get('/formulario', function(req, res){
		res.render('admin/form_add_noticia');
	});

	app.get('/noticias', function(req, res){
		var connection = app.config.dbConnection();

		var noticiasModel = new app.app.models.NoticiasDAO(connection);

		noticiasModel.getNoticias(function(error, result){
			res.render('noticias/noticias', {noticias: result});
		});
	});

	app.get('/noticia', function(req, res){
		var connection = app.config.dbConnection();

		var noticiasModel = new app.app.models.NoticiasDAO(connection);

		noticiasModel.getNoticia(function(error, result){
			res.render('noticias/noticia', {noticia: result});
		});
	});

	app.post('/noticia/salvar', [
			check('titulo', 'Título obrigatório').notEmpty(),
			check('resumo', 'Resumo obrigatório').notEmpty(),
			check('resumo', 'Resumo deve conter entre 10 e 100 caracteres').isLength({min: 10, max: 100}),
			check('autor', 'Autor obrigatório').notEmpty(),
			check('noticia', 'Noticia obrigatório').notEmpty()
		], function(req, res){
		var noticia = req.body;


		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			console.log(errors.array());
    		return res.status(422).json({ errors: errors.array() });
  		}

		var connection = app.config.dbConnection();
		var noticiasModel = new app.app.models.NoticiasDAO(connection);

		noticiasModel.postNoticia(noticia, function(error, result){
			res.redirect('/noticias');
		});
	});
};