module.exports = function(app){
	

	app.get('/noticias', function(req, res){			
		var connection = app.config.dbConnection();
		var noticiaModel = new app.app.models.noticiaModel();
		noticiaModel.getNoticias(connection, function(error, result){

			res.render('noticias/noticias', {noticias : result})
		});	


	})


	app.get('/noticia', function(req, res){
		var connection = app.config.dbConnection();
		var noticiaModel = new app.app.models.noticiaModel();
		noticiaModel.getNoticia(connection, function(error, result){

			res.render('noticias/noticia', {noticia : result})
		});
	})	


			
}
