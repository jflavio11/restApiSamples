const express = require('express');
const logger = require('morgan');

const assessments = require('./routes/assessments');

const bodyParser = require('body-parser');

const app = express();
// app.set('secretKey', 'ClaveSecreta'); // Clave Secreta para nuestro JWT


app.use(logger('dev'));
app.use(bodyParser.json());
app.get('/', function(req, res){
    res.json({"tutorial" : "Construyendo una API REST con NodeJS"});
});

// Rutas publicas
app.use('/assessments', assessments);

app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});

// Manejando errores HTTP 404 para solicitudes de contenido inexistente
app.use(function(req, res, next) {
 let err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// Manejo de errores, respuestas con codigo HTTP 500, HTTP 404
app.use(function(err, req, res, next) {
 console.log(err);
 
  if(err.status === 404)
   res.status(404).json({message: "Not found"});
  else 
    res.status(500).json({message: "Error interno en el servidor!!"});
});
app.listen(8080, function(){
    console.log('El servidor ha sido inicializado: http://localhost:8080');
});