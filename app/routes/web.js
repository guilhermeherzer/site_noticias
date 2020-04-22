module.exports = function(app){

	app.get('/', function(req, res){
		res.render('home/index');
	});

	app.get('/formulario', function(req, res){
		res.render('admin/form_add_noticia');
	});

	app.get('/noticias', function(req, res){
		var connection = app.config.dbConnection();

		var noticiasModel = app.app.models.noticiasModel;

		noticiasModel.getNoticias(connection, function(error, result){
			res.render('noticias/noticias', {noticias: result});
		});
	});

	app.get('/noticia', function(req, res){
		var connection = app.config.dbConnection();

		var noticiasModel = app.app.models.noticiasModel;

		noticiasModel.getNoticia(connection, function(error, result){
			res.render('noticias/noticia', {noticia: result});
		});
	});

	app.post('/noticia/salvar', function(req, res){
		var noticia = req.body;

		var connection = app.config.dbConnection();

		var noticiasModel = app.app.models.noticiasModel;

		noticiasModel.postNoticia(noticia, connection, function(error, result){
			res.redirect('/noticias');
		});
	});
};