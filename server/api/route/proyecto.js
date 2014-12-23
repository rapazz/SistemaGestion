'use strict';

var express = require('express');
var controller = require('../controller/proyecto');
var historial = require('../controller/historialProyecto');
var version = require('../controller/version');
var config = require('../../config/environment');
//var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/:id', controller.index);
router.get('/misIniciativas/:id', controller.misIniciativas);
router.post('/', controller.crearIniciativa);
router.post('/guardar', controller.guardarProyecto);
router.post('/avance', controller.actualizarAvance);
router.post('/enviarAprobacion', controller.enviarAprobacion);
router.get('/:id/historial', historial.index);
router.get('/verDocumentoAprobador/:id', controller.VerProyectoAprobacion);
router.post('/aprobarProyecto', controller.aprobarProyecto);
router.get('/version/:id',version.get);
router.get('/jefeProyecto/:id',controller.misProyectos);
router.get('/bp/:id',controller.misProyectosBp);
router.get('/bpProyectos/:id', controller.aprobacionIniciativa);
router.post('/iniciativa', controller.crearPreEvaluacion);
router.post('/enviarAprobacionEvaluacion', controller.enviarAprobacionEvaluacion);

module.exports = router;
