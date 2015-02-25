'use strict';

var _ = require('lodash');
var models  = require('../model');
var express = require('express');
var config = require('../../config/environment');
var Adjunto = models.adjunto;
var seq = models.sequelize;


// Get list of incidentes
exports.obtenerarchivo = function(req, res) {


  seq.query("SELECT * FROM adjunto  where  AdjuntoId = :id ",Adjunto,{raw:true},{id:req.params.id}).success(function(x) {
    var adj = x[0];

    var pa = config.rutaAdjunto.url +"/"+ adj.Guid.replace('"','');

     res.download(adj.UrlArchivo,adj.Nombre) ;

  });
  // Incidente.find(function (err, incidentes) {
  // if(err) { return handleError(res, err); }
  // return res.json(200, incidentes);
  //});
};

exports.eliminararchivo = function(req, res) {



  seq.query("update adjunto set EsActivo = 0,UsuarioEliminacion = :usuario,FechaEliminacion = now()  where AdjuntoId = :id ",null,null,
    {id:req.params.id,
    usuario: req.body["usuario"]
    }).success(function(x) {

      return res.send(200);


  });
  // Incidente.find(function (err, incidentes) {
  // if(err) { return handleError(res, err); }
  // return res.json(200, incidentes);
  //});
};

exports.actualizarAdjunto = function (req){
  
  Adjunto.update({IncidenteId:req.idIncidente},{where:{Guid:req.guid }}).then(function(affectedRows) {
  
  
  console.log(affectedRows);
  return res.send(200);
    
    
  })
  

}


exports.subirtemporal = function(req, res,next) {



  var idincidente = req.body["IncidenteId"];

  var archivo = req.files["file"];

  Adjunto.create({
    Nombre: archivo.originalname,
    Guid: idincidente,
    EsActivo: 1,
    FechaCreacion: new Date(),
    UrlArchivo: archivo.path,
    IncidenteId: 0,
    HistorialId: 0

  }).success(function(x) {


      return res.send(200);


  });
 // Incidente.find(function (err, incidentes) {
   // if(err) { return handleError(res, err); }
   // return res.json(200, incidentes);
  //});
};
exports.actualizaincidente = function(req, res) {

  seq.query("update adjunto set IncidenteId = :id where Guid = :guid ",null,{raw:false},{tipo:req.idincidente,guid:req.guid}).success(function(tipos) {
    return res.json(201, 0);
    //  console.log(myTableRows)
  });


}



exports.listartemporales = function(req, res,next) {




  var idincidente = req.body["IncidenteId"];

  seq.query("SELECT * FROM adjunto where guid = :tipo and EsActivo = 1 ",Adjunto,{raw:false},{tipo:idincidente}).success(function(adj) {
    return res.send( adj);
    //  console.log(myTableRows)
  });



};

exports.listar = function(req, res) {

  seq.query("SELECT * FROM codigotermino where CodigoTerminoId = :tipo ",CodigoTermino,{raw:false},{tipo:req.params.id}).success(function(tipos) {
       return res.send( tipos);
    //  console.log(myTableRows)
  });



};

function handleError(res, err) {
  return res.send(500, err);
}
