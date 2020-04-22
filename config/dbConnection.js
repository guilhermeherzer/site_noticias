var mysql = require('mysql');

var connMySQL = function(){
	console.log('Conexão com o bd foi show')
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'noticias'
	});
};

module.exports = function(){
	return connMySQL;
};
