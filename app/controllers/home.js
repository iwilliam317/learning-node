module.exports.index = function(application, req, res){

	var connection = application.config.dbConnection();
	var NoticiaDAO = new application.app.models.NoticiaDAO(connection);

	NoticiaDAO.get5UltimasNoticias(function(error, result){
		res.render('home/index', {noticias : result})
	});

	

}