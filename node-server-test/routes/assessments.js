// Cargamos el modulo express
const express = require('express');
const router = express.Router();

// Cargamos el controlador del usuario
const accesstoken = require('../app/api/controllers/access-token');
// Especificamos nuestras rutas teniendo en cuenta los metodos creados en nuestro controlador, y especificando que seran rutas que usaran el metodo POST
router.post('/generatetoken', accesstoken.generateAccessToken);

module.exports = router;