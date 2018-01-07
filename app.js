var app = require('./config/server');

var homeRota = require('./app/routes/home')(app);
var formulario_inclusao_noticiaRota = require('./app/routes/admin/formulario_inclusao_noticia')(app);
var noticiaRota = require('./app/routes/noticias/noticia')(app);
var noticiasRota = require('./app/routes/noticias/noticias')(app);

app.listen(3000);

