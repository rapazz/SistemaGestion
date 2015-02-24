var models  = require('../model');
var express = require('express');
var tipoIncidente = models.tipoincidente;





exports.index = function(req, res) {
  tipoIncidente.findAll({

  }).success(function(tipos) {

   return res.json(200, tipos);

  });
}

exports.activos = function(req, res) {
  tipoIncidente.findAll({EsActivo:1

  }).success(function(tipos) {

    return res.json(200, tipos);

  });
}

exports.show = function(req, res) {

tipoIncidente.find({  where: {
    TipoIncidenteId: req.params.id,
  }

  }).success(function(codigo) {

return res.json(200, codigo);

  });



};

exports.actualizar = function(req, res) {

  var tipo = req.body;
  tipoIncidente.find({ where: {TipoIncidenteId: tipo.TipoIncidenteId} }).on('success', function(t) {
    if (t) { // if the record exists in the db
      t.updateAttributes({
        Nombre: tipo.Nombre,
         sla: tipo.sla,
        EsActivo: tipo.EsActivo
      }).success(function() {
       
        return res.json(201, 1);
      });
    }
  })


};

exports.crear = function(req, res) {

  var tipo = req.body;
  tipoIncidente.create({
    Nombre: tipo.Nombre,
    sla: tipo.sla,
    EsActivo: tipo.EsActivo,
    FechaCreacion: new Date()
  }).success(function(x) {
      
        return res.json(201, x.TipoIncidenteId);
      });



};


function handleError(res, err) {
  return res.send(500, err);
}
