'use strict';

var express = require('express');
var controller = require('../controller/incidente');
var config = require('../../config/environment');

var router = express.Router();

var multer  = require('multer');


router.get('/listar', controller.listar);

router.post('/enviaremail/:id', controller.EnvioEmail);

router.post('/editar/:id', controller.show);

router.post('/nuevoid', controller.nuevoid);


router.post('/tomarincidenteusuario', controller.tomarincidenteusuario);

router.post('/actualizar', controller.actualizar);
router.post('/crear', controller.crear);

router.get('/listarmisku/:id', controller.listarmisku);

router.get('/listarsinasignar', controller.listarsinasignar);

router.get('/listarmisconsultor/:id', controller.listarmisconsultor);

router.get('/listarmisproveedor/:id', controller.listarmisproveedor);



module.exports = router;
