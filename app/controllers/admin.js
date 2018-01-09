module.exports.formulario_inclusao_noticia = function(application, req, res){
	res.render('admin/formulario_inclusao_noticia', {validacao : '', noticia : ''});
}

module.exports.salvar_noticia = function(application, req, res){
	var noticia = req.body;
		//console.log(noticia)

	req.assert('titulo', 'Título é obrigatório').notEmpty();
	req.assert('resumo', 'Resumo é obrigatório').notEmpty();
	req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10,100);
	req.assert('autor', 'Autor é obrigatório').notEmpty();
	req.assert('data_noticia', 'Data da notícia é obrigatória').notEmpty();
	req.assert('noticia', 'Notícia é obrigatória').notEmpty();

	var erros = req.validationErrors();
	if (erros){
			//console.log(erros);
		res.render('admin/formulario_inclusao_noticia', {validacao : erros,  noticia : noticia});
	}

	else{
		var connection = app.config.dbConnection();
		var NoticiaDAO = new app.app.models.NoticiaDAO();
		NoticiaDAO.salvarNoticia(noticia, connection, function(error, result){

			res.redirect('/noticias')
		});
	}
}