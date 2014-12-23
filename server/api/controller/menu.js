var models  = require('../model');
var express = require('express');


exports.index = function(req, res) {
  models.Menu.findAll({include: [ {model: models.rolMenus, as: models.rolMenus.tableName}],where:{"rolMenus.rolId":'10'}

  }).success(function(users) {


   return res.json(200, users);

  });
}
