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
   res.header("Content-Type", "application/json; charset=utf-8");
   return res.json(200, roles);
   
  });
}


exports.listarEstadoProyecto = function(req, res) {
  models.estadoProyecto.findAll({where:{idEtapaProyecto:req.params.id}
    
  }).success(function(estadoProyecto) {
   res.header("Content-Type", "application/json; charset=utf-8");
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
   res.header("Content-Type", "application/json; charset=utf-8");
   return res.json(200, parametros);
   
  });
}


exports.tipoIncidente = function(req, res) {
  models.tipoincidente.findAll({

  }).success(function(tipos) {
res.header("Content-Type", "application/json; charset=utf-8");
   return res.json(200, tipos);

  });
}





exports.subTipoIncidente = function(req, res) {
  models.subtipoincidente.findAll({where:{TipoIncidenteId:req.params.id}

  }).success(function(tipos) {
res.header("Content-Type", "application/json; charset=utf-8");
   return res.json(200, tipos);

  });
}


exports.codigoTermino = function(req, res) {
  models.codigotermino.findAll({

  }).success(function(tipos) {
res.header("Content-Type", "application/json; charset=utf-8");
   return res.json(200, tipos);

  });
}

exports.origenProblema = function(req, res) {
  models.origenproblema.findAll({

  }).success(function(tipos) {
   res.header("Content-Type", "application/json; charset=utf-8");
   return res.json(200, tipos);

  });
}

exports.estados = function(req, res) {
   
  
  models.estadoPosibles.findAll({where:{idEstado:req.params.id},
  include:  {model:models.estado,attributes: ['EstadoId', 'Nombre'] }
 } ).success(function(tipos) {
return res.status(200).json(tipos);
   

  });
}


exports.listarConsultores = function(req, res) {
  models.usuario.findAll({where:["rolesMenu like ?", '%30%'],attributes: ['usuarioId', 'nombre']
 
 } ).success(function(usuario) {
res.header("Content-Type", "application/json; charset=utf-8");
   return res.json(200, usuario);

  });
}