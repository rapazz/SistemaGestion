'use strict';

var express = require('express');
var controller = require('../controller/incidente2');
var config = require('../../config/environment');
var router = express.Router();
var multer  = require('multer');


router.get('/listarKU/:id', controller.incidentesKU);
router.get('/listarSinAsignar', controller.incidentesSinAsignar);
router.get('/listarConsultor/:id', controller.incidentesConsultor);
router.get('/:id', controller.verIncidente);
router.post('/', controller.crear);
router.post('/tomarIncidente', controller.tomarIncidente);
router.post('/guardarIncidente', controller.guardarIncidente);
router.post('/entregarWorkArround', controller.entregarWorkArround);
router.post('/nuevoid', controller.nuevoid);

module.exports = router;
