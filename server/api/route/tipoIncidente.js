'use strict';

var express = require('express');
var controller = require('../controller/tipoIncidente');
var config = require('../../config/environment');
//var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
router.get('/activos', controller.activos);

router.get('/:id', controller.show);
router.post('/actualizar', controller.actualizar);
router.post('/crear', controller.crear);
/*
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);*/

module.exports = router;
