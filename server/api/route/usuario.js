'use strict';

var express = require('express');
var controller = require('../controller/usuario');
var config = require('../../config/environment');
//var auth = require('../../auth/auth.service');

var router = express.Router();

router.post('/', controller.create);
router.post('/update', controller.update);
router.get('/:id',controller.get);
router.get('/menu/:id',controller.getMenu);

module.exports = router;
