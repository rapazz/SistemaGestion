'use strict';

var express = require('express');
var controller = require('../controller/codigoTermino');
var config = require('../../config/environment');
//var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/actualizar', controller.actualizar);
router.post('/crear', controller.crear);
/*
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);*/

module.exports = router;