var models  = require('../model');
var express = require('express');


exports.index = function(req, res) {
  models.rol.findAll({
    
  }).success(function(roles) {
   
   return res.json(200, roles);
   
  });
}