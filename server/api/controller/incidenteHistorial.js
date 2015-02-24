var models  = require('../model');
var express = require('express');


exports.insertarHistorial = function(req) {
  
  models.incidenteHistorial.create({
      idIncidente:req.idIncidente,
      fechaCreacion: new Date(),
      idEstado:req.idEstado,
      idCodigoTermino:req.idCodigoTermino,
     usuarioId : req.usuarioId,
      comentarios:req.descripcion
      
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