'use strict';

var express = require('express');
var controller = require('../controller/subtipoincidente');
var config = require('../../config/environment');

var router = express.Router();

router.get('/', controller.index);
router.get('/activos', controller.activos);
router.get('/:id', controller.show);
router.post('/actualizar', controller.actualizar);
router.post('/crear', controller.crear);



module.exports = router;
