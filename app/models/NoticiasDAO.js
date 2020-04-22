function NoticiasDAO(connection){
	this._connection = connection;

};

NoticiasDAO.prototype.getNoticias = function(callback){
	this._connection.query('select * from noticias', callback);
};

NoticiasDAO.prototype.getNoticia = function(callback){
	this._connection.query('select * from noticias where id = 1', callback);
};

NoticiasDAO.prototype.postNoticia = function(request, callback){
	this._connection.query('insert into noticias set ?', request, callback);
};

module.exports = function(){
	return NoticiasDAO;
}