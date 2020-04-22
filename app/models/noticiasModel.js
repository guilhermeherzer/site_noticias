module.exports = function(){
	this.getNoticias = function(connection, callback){
		connection.query('select * from noticias', callback);
	};

	this.getNoticia = function(connection, callback){
		connection.query('select * from noticias where id = 1', callback);
	};

	this.postNoticia = function(request, connection, callback){
		connection.query('insert into noticias set ?', request, callback);
	};

	return this;
}