var models  = require('../model');
var express = require('express');
var CodigoTermino = models.codigotermino;





exports.index = function(req, res) {
  CodigoTermino.findAll({

  }).success(function(tipos) {

   return res.json(200, tipos);

  });
}


exports.show = function(req, res) {

CodigoTermino.find({  where: {
    CodigoTerminoId: req.params.id,
  }

  }).success(function(codigo) {

return res.json(codigo);

  });



};

exports.actualizar = function(req, res) {

  var tipo = req.body;
  CodigoTermino.find({ where: {CodigoTerminoId: tipo.CodigoTerminoId} }).on('success', function(t) {
    if (t) { // if the record exists in the db
      t.updateAttributes({
        Nombre: tipo.Nombre,
         derivar: tipo.derivar,
        EsActivo: tipo.EsActivo
      }).success(function() {
      
        return res.json(tipo.CodigoTerminoId);
      });
    }
  })


};

exports.crear = function(req, res) {

  var tipo = req.body;
  CodigoTermino.create({
    Nombre: tipo.Nombre,
    derivar:tipo.derivar,
    EsActivo: tipo.EsActivo,
    FechaCreacion: new Date()
  }).success(function(x) {
      
        return res.json(x.CodigoTerminoId);
      });



};


function handleError(res, err) {
  return res.send(500, err);
}
