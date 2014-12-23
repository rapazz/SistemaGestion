'use strict';

var express = require('express');
var controller = require('../controller/rol');
var config = require('../../config/environment');
//var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);

module.exports = router;
