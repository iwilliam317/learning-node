module.exports.getNoticia = function(application, req, res){

	var connection = application.config.dbConnection();
	var NoticiaDAO = new application.app.models.NoticiaDAO(connection);

	NoticiaDAO.getNoticia(function(error, result){
		res.render('noticias/noticia', {noticia : result})
	});
}

module.exports.getNoticias = function(application, req, res){

	var connection = application.config.dbConnection();
	var NoticiaDAO = new application.app.models.NoticiaDAO(connection);

	NoticiaDAO.getNoticias(function(error, result){
		res.render('noticias/noticias', {noticias : result})
	});
}

module.exports.get5UltimasNoticias = function(application, req, res){

	var connection = application.config.dbConnection();
	var NoticiaDAO = new application.app.models.NoticiaDAO(connection);

	NoticiaDAO.get5UltimasNoticias(function(error, result){
		console.log(result)
		res.render('home/index', {noticias : result})
	});
}