var models  = require('../model');
var express = require('express');


exports.index = function(req, res) {
  models.empresa.findAll({
    
  }).success(function(roles) {
   
   return res.json(200, roles);
   
  });
}


//listas Departamentos por Empresa
exports.listarDepartamento = function(req, res) {
  models.departamento.findAll({where:{idEmpresa:req.params.id}
    
  }).success(function(roles) {
   
   return res.json(200, roles);
   
  });
}


exports.listarEstadoProyecto = function(req, res) {
  models.estadoProyecto.findAll({where:{idEtapaProyecto:req.params.id}
    
  }).success(function(estadoProyecto) {
   
   return res.json(200, estadoProyecto);
   
  });
}


exports.listarJefeProyecto = function(req, res) {
  models.jefeProyecto.findAll({attributes:["usuario.usuarioId","usuario.nombre"],where:{idBp:req.params.id},
   include :[{model:models.usuario, as :'usuario'}]
    
  }).success(function(jefeProyecto) {
   
   return res.json(200, jefeProyecto);
   
  });
}



exports.listarParametros = function(req, res) {
  models.parametros.findAll({where:{tipoParametro:req.params.id}
    
  }).success(function(parametros) {
   
   return res.json(200, parametros);
   
  });
}

