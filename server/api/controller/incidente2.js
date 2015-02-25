var models  = require('../model');
var express = require('express');
var historial = require('./incidenteHistorial');
var adjunto = require('./adjunto');
var mailer= require('./mailer');
var moment = require('moment');
var uid = require("node-uuid");
exports.incidentesKU = function(req, res) {
    
  models.incidente2.findAll({where:{
      idusuarioKU:req.params.id
    
  },
      
  include :[{model:models.usuario,as:'ku'},{model:models.usuario,as:'consultor'},
  {model:models.tipoincidente, as:'tipoIncidente' },
  {model:models.subtipoincidente, as:'subtipoincidente' },
  {model:models.origenproblema, as:'origenproblema' },
  {model:models.estado, as:'estado' },
  {model:models.codigotermino, as:'codigotermino' }],
     order: '`idIncidente` DESC'
  }).success(function(proyecto) {
   
   return res.json(200, proyecto);
   
  });
}


exports.nuevoid = function(req, res) {

  return res.json(200,   uid.v4() );
  // Incidente.find(function (err, incidentes) {
  // if(err) { return handleError(res, err); }
  // return res.json(200, incidentes);
  //});
};

exports.incidentesConsultor = function(req, res) {
    
  models.incidente2.findAll({where:{
      idUsuarioConsultor:req.params.id
    
  },
      
  include :[{model:models.usuario,as:'ku'},{model:models.usuario,as:'consultor'},
  {model:models.tipoincidente, as:'tipoIncidente' },
  {model:models.subtipoincidente, as:'subtipoincidente' },
  {model:models.origenproblema, as:'origenproblema' },
  {model:models.estado, as:'estado' },
  {model:models.codigotermino, as:'codigotermino' }]
    
  }).success(function(proyecto) {
   
   return res.json(200, proyecto);
   
  });
}

exports.incidentesSinAsignar = function(req, res) {
    
  models.incidente2.findAll({where:{
      idUsuarioConsultor:-1
    
  },
      
  include :[{model:models.usuario,as:'ku'},{model:models.usuario,as:'consultor'},
  {model:models.tipoincidente, as:'tipoIncidente' },
  {model:models.subtipoincidente, as:'subtipoincidente' },
  {model:models.origenproblema, as:'origenproblema' },
  {model:models.estado, as:'estado' },
  {model:models.codigotermino, as:'codigotermino' }]
    
  }).success(function(proyecto) {
   
   return res.json(200, proyecto);
   
  });
}
exports.verIncidente = function(req, res) {
    
  models.incidente2.find({where:{
      idIncidente:req.params.id
    
  },
      
  include :[{model:models.usuario,as:'ku'},{model:models.usuario,as:'consultor'},
  {model:models.tipoincidente, as:'tipoIncidente' },
  {model:models.subtipoincidente, as:'subtipoincidente' },
  {model:models.origenproblema, as:'origenproblema' },
  {model:models.estado, as:'estado' },
  {model:models.codigotermino, as:'codigotermino' },
  {model:models.adjunto, as:'adjuntos' },
  {model:models.incidenteHistorial, as:'historial',include:[{model:models.codigotermino,as:'codigotermino' },{model:models.usuario,as:'usuario' },{model:models.estado,as:'estado' }]  }
  ]
    
  }).success(function(proyecto) {
   
   // busca Diferencia en SLA
   
   var now = moment();
    
   //proyecto.dataValues.tiempoTranscurrido = Math.round(now.diff(proyecto.fechaCreacion, 'hours', true));
    console.log(proyecto.fullName)
   return res.json(200, proyecto);
   
  });
}




exports.crear = function(req, res) {

  var inc = req.body;

  var idi = req.body["IdInterno"];
  var usuario = req.body["usuario"];

models.tipoincidente.find({where: {TipoIncidenteId:inc.idTipoIncidente}
  
}).success(function(y) {

  models.incidente2.create({

    fechaCreacion: new Date(),
    fechaActualizacion: new Date(),
    nombre: inc.nombre,
    descripcion:  inc.descripcion,
    idUsuarioKU: inc.usuario.usuarioId,
    idUsuarioConsultor: -1,
    idSubTipoIncidente: inc.idSubTipoIncidente,
    idTipoIncidente: inc.idTipoIncidente,
    sla: y.sla,
    idEstado: 10
    

  }).success(function(x) {



      var h ={}
   h.idIncidente = x.idIncidente;
    h.usuarioId=x.idUsuarioKU;
   h.idEstado=x.idEstado;
   h.fechaCreacion =  new Date();
  h.idAccion = 1;
  historial.insertarHistorial(h)

  var j = {}
  j.idIncidente = x.idIncidente;
  j.guid = idi;

adjunto.actualizarAdjunto(j)


   return res.json(200, x);

  });





})
  
};

exports.tomarIncidente = function(req, res) {

  
  var inc = req.body;
  var usuario =  inc.usuario;
 


 
  models.incidente2.find({ where: {idIncidente: inc.idIncidente} }).on('success', function(t) {
    if (t) { // if the record exists in the db
      t.updateAttributes({
        fechaActualizacion: new Date(),
       idUsuarioConsultor: usuario,
        idEstado: 20,
      }).success(function(x) {

   var h ={}
   h.idIncidente = inc.idIncidente,
    h.usuarioId=usuario;
   h.idEstado=20;
   h.fechaCreacion =  new Date();
  h.idAccion = 2;
  historial.insertarHistorial(h)

 return res.json(200, x);
      });
    }
  })


};


exports.guardarIncidente = function(req,res){


// Valida Dependiendo e estado 


  models.incidente2.find({ where: {idIncidente: req.body.idIncidente} }).on('success', function(t) {
    
    if (t) { // if the record exists in the db
    
    
    var idConsultor
    var fechaCierre
if (req.body.idEstado ==80)
 idConsultor =req.body.idConsultor;
else 
idConsultor  =t.idConsultor; 
 

if (req.body.idEstado ==99)
 fechaCierre =new Date();
else 
fechaCierre = 'NULL';
 
 
    
      t.updateAttributes({
        fechaActualizacion: new Date(),
      idOrigenProblema: req.body.idOrigenProblema,
      idTipoIncidente: req.body.idTipoIncidente,
      idSubTipoIncidente: req.body.idSubTipoIncidente,
      idCodigoTermino: req.body.idCodigoTermino,
      fechaCierre: fechaCierre,
      idUsuarioConsultor: idConsultor, 
        idEstado: req.body.idEstado,
      }).success(function(x) {

   var h ={}
   h.idIncidente = req.body.idIncidente,
    h.usuarioId=req.body.usuario.usuarioId;
    h.idCodigoTermino = req.body.idCodigoTermino; 
   h.idEstado=req.body.idEstado,
   h.fechaCreacion =  new Date();
   h.descripcion =  req.body.comentarioConsultor;
  h.idAccion =3;
  historial.insertarHistorial(h)

//verifica si se envio al key user 
//TODO: Agregar Envio de Correo-
if (req.body.idEstado ==30)
mailer.envioEmailIncidente(3,req.body)


 return res.json(200, x);
      });
    }
  })




}




exports.entregarWorkArround = function(req,res){


  models.incidente2.find({ where: {idIncidente: req.body.idIncidente} }).on('success', function(t) {
    if (t) { // if the record exists in the db
      t.updateAttributes({
        fechaActualizacion: new Date(),
      idOrigenProblema: req.body.idOrigenProblema,
      idTipoIncidente: req.body.idTipoIncidente,
      idSubTipoIncidente: req.body.idSubTipoIncidente,
      idCodigoTermino: req.body.idCodigoTermino,
      comentarioConsultor: req.body.comentarioConsultor,
        idEstado: 30,
      }).success(function(x) {

   var h ={}
   h.idIncidente = req.body.idIncidente,
    h.usuarioId=req.body.usuario.usuarioId;
    h.idCodigoTermino = req.body.idCodigoTermino; 
   h.idEstado=30;
   h.fechaCreacion =  new Date();
   h.comentarios =  req.body.comentarioConsultor;
  h.idAccion =4;
  historial.insertarHistorial(h)


 return res.json(200, x);
      });
    }
  })




}