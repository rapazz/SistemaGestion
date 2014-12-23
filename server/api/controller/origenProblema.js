'use strict';

var models  = require('../model');
var express = require('express');
var origenProblema = models.origenproblema;



exports.index = function(req, res) {
  origenProblema.findAll({

  }).success(function(tipos) {

   return res.json(200, tipos);

  });
}


exports.show = function(req, res) {

origenProblema.find({  where: {
    OrigenProblemaId: req.params.id,
  }

  }).success(function(codigo) {

return res.json(200, codigo);

  });



};

exports.actualizar = function(req, res) {

  var tipo = req.body;
  origenProblema.find({ where: {OrigenProblemaId: tipo.OrigenProblemaId} }).on('success', function(t) {
    if (t) { // if the record exists in the db
      t.updateAttributes({
        Nombre: tipo.Nombre,
        EsActivo: tipo.EsActivo
      }).success(function() {
        console.log('ok')
        return res.json(201, 1);
      });
    }
  })


};

exports.crear = function(req, res) {

  var tipo = req.body;
  origenProblema.create({
    Nombre: tipo.Nombre,
    EsActivo: tipo.EsActivo,
    FechaCreacion: new Date()
  }).success(function(x) {
        console.log(x.OrigenProblemaId)
        return res.json(x.OrigenProblemaId);
      });



};


function handleError(res, err) {
  return res.send(500, err);
}

