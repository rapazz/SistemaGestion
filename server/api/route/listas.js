'use strict';

var express = require('express');
var controller = require('../controller/listas');
var config = require('../../config/environment');
//var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/empresa', controller.index);
router.get('/departamento/:id', controller.listarDepartamento);
router.get('/estadoProyecto/:id', controller.listarEstadoProyecto);
router.get('/jefeProyecto/:id', controller.listarJefeProyecto);
router.get('/parametros/:id', controller.listarParametros);

module.exports = router;
