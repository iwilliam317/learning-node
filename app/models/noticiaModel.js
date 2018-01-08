function Noticias(){
	
}

Noticias.prototype.getNoticias = function(connection, callback){
	connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC', callback);
}

Noticias.prototype.getNoticia = function(connection, callback){
	connection.query('SELECT * FROM noticias WHERE id_noticia = 19', callback);
}

Noticias.prototype.salvarNoticia = function(noticia, connection, callback){
	connection.query('INSERT INTO noticias set ? ', noticia, callback)
}	


module.exports = function(){
	return Noticias;
}