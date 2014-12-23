var models  = require('../model');
var express = require('express');
var _ = require('lodash');



// Get list of incidentes
exports.obtenerarchivo = function(req, res) {


 

  res.download('archivos/'+ req.params.id) ;

  
 
};


exports.subirtemporal = function(req, res,next) {


  var archivo = req.files["file"];
var adjunto = JSON.parse(req.body.adjunto);
  models.proyectoAdjunto.create({
      idProyecto: adjunto.idProyecto,
      descripcion:adjunto.descripcion,
    Nombre: archivo.originalname,
    guid: adjunto.idProyecto,
    fechaCreacion: new Date(),
    urlArchivo: archivo.path,
    idTipoAdjunto: adjunto.idTipoAdjunto
    

  }).success(function(x) {


models.proyectoAdjunto.findAll({where:{idProyecto:adjunto.idProyecto}
  ,
  include:[{model:models.parametros,as:'tipoAdjunto'}]
}).success(function(y){
     return res.json(200, y);
  
})


  


  });
 
};