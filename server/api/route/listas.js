'use strict';

var express = require('express');
var controller = require('../controller/listas');
var config = require('../../config/environment');
//var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/empresa', controller.index);
router.get('/incidente/tipoInicidente', controller.tipoIncidente);
router.get('/incidente/origenProblema', controller.origenProblema);
router.get('/incidente/codigoTermino', controller.codigoTermino);
router.get('/incidente/subTipoInicidente/:id', controller.subTipoIncidente);
router.get('/departamento/:id', controller.listarDepartamento);
router.get('/estadoProyecto/:id', controller.listarEstadoProyecto);
router.get('/jefeProyecto/:id', controller.listarJefeProyecto);
router.get('/parametros/:id', controller.listarParametros);
router.get('/incidente/estadosPermitidos/:id', controller.estados);
router.get('/listarConsultores', controller.listarConsultores);
module.exports = router;
