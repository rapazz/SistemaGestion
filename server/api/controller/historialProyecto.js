var models  = require('../model');
var express = require('express');


exports.insertarHistorial = function(req) {
  
  models.historialProyecto.create({
      idProyecto:req.idProyecto,
      fechaCreacion: new Date(),
      idEstadoProyecto:req.idEstadoProyecto,
      idEtapaProyecto:req.idEtapaProyecto,
      idUsuario: req.usuarioId,
      descripcion:req.descripcion
      
}).success(function(historial) {
   
   return historial; 
   
  });
  
  
}



exports.index = function(req, res) {
    
  models.historialProyecto.findAll({where:{
      idProyecto:req.params.id
      
  },
      
  include :[
  {model:models.usuario,as:'usuario'},{model:models.etapaProyecto, as:'etapa' },
  {model:models.estadoProyecto, as:'estadoProyecto' }]
    
  }).success(function(proyecto) {
   
   return res.json(200, proyecto);
   
  });
}