module.exports = function(app){

	app.get('/', function(req, res){
		res.render('home/index');
	});

	app.get('/formulario', function(req, res){
		res.render('admin/form_add_noticia');
	});

	app.get('/noticias', function(req, res){
		var connection = app.config.dbConnection();
		connection.query('select * from noticias', function(error, result){
			res.render('noticias/noticias', {noticias: result});
		});
	});
};