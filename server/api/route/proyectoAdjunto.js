'use strict';

var express = require('express');
var controller = require('../controller/proyectoAdjunto');
var config = require('../../config/environment');
var router = express.Router();
var multer  = require('multer');


router.post('/crearAnexo',[ multer({ dest: config.rutaAdjunto.url}), controller.subirtemporal]);
router.get('/archivos/:id',controller.obtenerarchivo)
//router.get('/listar', controller.listar);


module.exports = router;
