var models  = require('../model');
var express = require('express');
var historialProyecto = require('./historialProyecto');
var mailer= require('./mailer');
var versionProyecto = require('./version');
var uid = require("node-uuid");


exports.index = function(req, res) {
    
  models.proyecto.find({where:{idProyecto:req.params.id},
  include :[{model:models.empresa, as :'empresa'},{model:models.departamento,as:'departamento'},
  {model:models.usuario,as:'usuario'},{model:models.usuario,as:'jefeProyecto'},
  {model:models.usuario, as:'usuarioBp' },{model:models.etapaProyecto, as:'etapa' },
  {model:models.parametros, as:'complejidad' },
  {model:models.parametros, as:'saludProyecto' },
   {model:models.proyectoAdjunto, as:'adjunto',include:[{model:models.parametros,as:'tipoAdjunto' }]  },
   {model:models.entregableProyecto, as:'entregableProyecto',include:[{model:models.parametros,as:'tipoEntregable' }]  },
    {model:models.estadoProyecto, as:'estadoProyecto' },
    {model:models.equipoProyecto, as:'equipoProyecto', include:[{model:models.parametros,as:'cargo'}] },
     {model:models.versiones, as:'version',attributes:['idVersion','fechaCreacion','idProyecto'], include:[{model:models.etapaProyecto,as:'etapaProyecto'}] }]
    
  }).success(function(proyecto) {
   
   return res.json(200, proyecto);
   
  });
}



exports.VerProyectoAprobacion = function(req, res) {
    
   models.equipoProyecto.find({where:{uid:req.params.id,estadoAutorizacion:0}}).success(function(x){
    
   
  models.proyecto.find({where:{idProyecto:x.idProyecto},
  include :[{model:models.empresa, as :'empresa'},{model:models.departamento,as:'departamento'},
  {model:models.usuario,as:'usuario'},{model:models.usuario,as:'jefeProyecto'},
  {model:models.usuario, as:'usuarioBp' },{model:models.etapaProyecto, as:'etapa' },
  {model:models.parametros, as:'complejidad' },
   {model:models.proyectoAdjunto, as:'adjunto',include:[{model:models.parametros,as:'tipoAdjunto' }]  },
    {model:models.estadoProyecto, as:'estadoProyecto' },
    {model:models.equipoProyecto, as:'equipoProyecto', include:[{model:models.parametros,as:'cargo'}] },
    {model:models.entregableProyecto, as:'entregableProyecto',include:[{model:models.parametros,as:'tipoEntregable' }]  },
     {model:models.versiones, as:'version',attributes:['fechaCreacion','idProyecto'], include:[{model:models.etapaProyecto,as:'etapaProyecto'}] }]
    
  }).success(function(proyecto) {
   
   return res.json(200, proyecto);
   
  }); 
   
    
    
    
   })
    
    
    
  
}



exports.crearPreEvaluacion = function (req,res ){
    
    // primero buscar 
  
  

models.proyecto.find({where:{idProyecto:req.body.proyecto.idProyecto,idEstadoProyecto:1,idEtapaProyecto:1}
 ,include :[{model:models.empresa, as :'empresa'},{model:models.departamento,as:'departamento'},
  {model:models.usuario,as:'usuario'},{model:models.usuario,as:'jefeProyecto'},
  {model:models.usuario, as:'usuarioBp' },{model:models.etapaProyecto, as:'etapa' },
     {model:models.estadoProyecto, as:'estadoProyecto' }
      ]
}).success(function(proyecto){
    
  
   
    if  (req.body.proyecto.estadoProyecto.idEstadoProyecto ==2){
          proyecto.idEstadoProyecto =2
        proyecto.idUsuario = req.body.proyecto.idUsuario;
        versionProyecto.crearVersion(proyecto)
    proyecto.idEtapaProyecto = 2;
    proyecto.idEstadoProyecto =4
    
    }
    else 
    proyecto.idEstadoProyecto =2
    
    proyecto.idJefeProyecto = req.body.proyecto.jefeProyecto.usuario.usuarioId
    
    proyecto.save(['idEstadoProyecto','idEtapaProyecto','idJefeProyecto']).success(function(p){
        
      var historial ={}
   historial.idProyecto = proyecto.idProyecto;
    historial.usuarioId=req.body.proyecto.idUsuario;
   historial.idEtapaProyecto= 1;
   historial.idEstadoProyecto = req.body.proyecto.estadoProyecto.idEstadoProyecto;
   historial.descripcion  =req.body.proyecto.comentarios 
   historialProyecto.insertarHistorial(historial)
        
      
        
          return res.json(200, proyecto);
        //Crear Version 
        
    })
    
    

})
    
    
    
}


exports.aprobacionIniciativa = function(req, res) {
    
  models.proyecto.findAll({where:{
      idBp:req.params.id,
      idEtapaProyecto:1,
      idEstadoProyecto:1
  },
      
  include :[{model:models.empresa, as :'empresa'},{model:models.departamento,as:'departamento'},
  {model:models.usuario,as:'usuario'},{model:models.usuario,as:'jefeProyecto'},
  {model:models.usuario, as:'usuarioBp' },{model:models.etapaProyecto, as:'etapa' },
  {model:models.estadoProyecto, as:'estadoProyecto' }]
    
  }).success(function(proyecto) {
   
   return res.json(200, proyecto);
   
  });
}


exports.misIniciativas = function(req, res) {
    
  models.proyecto.findAll({where:{
      idSolicitante:req.params.id,
      idEtapaProyecto:1
  },
      
  include :[{model:models.empresa, as :'empresa'},{model:models.departamento,as:'departamento'},
  {model:models.usuario,as:'usuario'},{model:models.usuario,as:'jefeProyecto'},
  {model:models.usuario, as:'usuarioBp' },{model:models.etapaProyecto, as:'etapa' },
  {model:models.estadoProyecto, as:'estadoProyecto' }]
    
  }).success(function(proyecto) {
   
   return res.json(200, proyecto);
   
  });
}


exports.misProyectos = function(req, res) {
    
  models.proyecto.findAll({where:{
      idJefeProyecto:req.params.id
    
  },
      
  include :[{model:models.empresa, as :'empresa'},{model:models.departamento,as:'departamento'},
  {model:models.usuario,as:'usuario'},{model:models.usuario,as:'jefeProyecto'},
  {model:models.usuario, as:'usuarioBp' },{model:models.etapaProyecto, as:'etapa' },
  {model:models.estadoProyecto, as:'estadoProyecto' }]
    
  }).success(function(proyecto) {
   
   return res.json(200, proyecto);
   
  });
}

exports.misProyectosBp = function(req, res) {
    
  models.proyecto.findAll({where:{
      idBp:req.params.id
    
  },
      
  include :[{model:models.empresa, as :'empresa'},{model:models.departamento,as:'departamento'},
  {model:models.usuario,as:'usuario'},{model:models.usuario,as:'jefeProyecto'},
  {model:models.usuario, as:'usuarioBp' },{model:models.etapaProyecto, as:'etapa' },
  {model:models.estadoProyecto, as:'estadoProyecto' }]
    
  }).success(function(proyecto) {
   
   return res.json(200, proyecto);
   
  });
}



exports.crearIniciativa = function(req, res) {
  
   models.bpEmpresa.find({where:{idEmpresa:req.body.proyecto.departamento.idEmpresa,idDepartamento:req.body.proyecto.departamento.idDepartamento,} }).success(function(bp) {
  models.proyecto.create({
      nombre:req.body.proyecto.nombre,
      idSolicitante:req.body.proyecto.usuario.usuarioId,
      idEmpresa:req.body.proyecto.empresa.idEmpresa,
      idDepartamento:req.body.proyecto.departamento.idDepartamento,
      resumenEjecutivo :req.body.proyecto.resumenEjecutivo,
      idEtapaProyecto:1,
      idEstadoProyecto:1,
      idBp:bp.usuarioId,
      fechaCreacion: new Date()
      
  }).success(function(proyecto) {
   
   var historial ={}
   historial.idProyecto = proyecto.idProyecto;
   historial.idEmpresa = proyecto.idEmpresa;
   historial.idDepartamento= proyecto.idDepartamento;
   historial.usuarioId=req.body.proyecto.usuario.usuarioId;
   historial.idEstadoProyecto= 1;
   historial.idEtapaProyecto = 1;
   historial.descripcion  =''
   historialProyecto.insertarHistorial(historial)
   
   //Enviar Email 

models.proyecto.find({where:{idProyecto:proyecto.idProyecto},
  include :[{model:models.empresa, as :'empresa'},
  {model:models.usuario,as:'usuario'},
  {model:models.usuario, as:'usuarioBp' },{model:models.etapaProyecto, as:'etapa' },
    {model:models.estadoProyecto, as:'estadoProyecto' }
  ]
    
  }).success(function(p) {
    mailer.EnvioEmailIniciativa(2,p)
   
   
  }); 




   
   
   return res.json(200, proyecto);
   
  });
  
   });
  
}


exports.guardarProyecto= function (req,res){
    // buscar  Proyecto 
    
    models.proyecto.find({where:{idProyecto:req.body.proyecto.idProyecto}}).success(function(proyecto) {

proyecto.nombre=req.body.proyecto.nombre;
proyecto.resumenEjecutivo = req.body.proyecto.resumenEjecutivo;
proyecto.fechaEstimadaComienzo =req.body.proyecto.fechaEstimadaComienzo;
proyecto.duracionSemana = req.body.proyecto.duracionSemana;
 if (req.body.proyecto.complejidad!=undefined)
proyecto.idComplejidad = req.body.proyecto.complejidad.id;
proyecto.tipoProyecto = JSON.stringify(req.body.proyecto.tipoProyecto);
proyecto.costoOneOff = req.body.proyecto.costoOneOff;
proyecto.costoOnGoing =req.body.proyecto.costoOnGoing;
proyecto.beneficios =req.body.proyecto.beneficios;
proyecto.beneficioIntangible  =  req.body.proyecto.beneficioIntangible;


        proyecto.save().success(function(x){
            
            var historial ={}
   historial.idProyecto = x.idProyecto;
    historial.usuarioId=req.body.proyecto.usuarioLogin;
   historial.idEstadoProyecto= x.idEstadoProyecto;
   historial.idEtapaProyecto = x.idEtapaProyecto;
   historial.descripcion  ='Documento Guardado';
   historialProyecto.insertarHistorial(historial)
           agregarEntregable(req.body.proyecto);
            agregarEquipo(req.body.proyecto)
            
            

 return res.json(200, x); 
            
        })
        


})
    

}


exports.actualizarAvance= function (req,res){
    // buscar  Proyecto 
    
    models.proyecto.find({where:{idProyecto:req.body.proyecto.idProyecto}}).success(function(proyecto) {

proyecto.idSaludProyecto = req.body.proyecto.saludProyecto.id;
proyecto.comentarioAvance = req.body.proyecto.comentarioAvance;
proyecto.avance =req.body.proyecto.avance;


        proyecto.save().success(function(x){
            
            var historial ={}
   historial.idProyecto = x.idProyecto;
    historial.usuarioId=req.body.proyecto.usuarioLogin;
   historial.idEstadoProyecto= x.idEstadoProyecto;
   historial.idEtapaProyecto = x.idEtapaProyecto;
   historial.descripcion  ='Avance Actualizado';
   historialProyecto.insertarHistorial(historial)
           actualizarEntregable(req.body.proyecto);
            
            
            

 return res.json(200, x); 
            
        })
        


})
    

}


exports.enviarAprobacion= function (req,res){
    // buscar  Proyecto 
    
    models.proyecto.find({where:{idProyecto:req.body.proyecto.idProyecto}}).success(function(proyecto) {

proyecto.nombre=req.body.proyecto.nombre;
proyecto.resumenEjecutivo = req.body.proyecto.resumenEjecutivo;
proyecto.fechaEstimadaComienzo =req.body.proyecto.fechaEstimadaComienzo;
proyecto.duracionSemana = req.body.proyecto.duracionSemana;
 if (req.body.proyecto.complejidad!=undefined)
proyecto.idComplejidad = req.body.proyecto.complejidad.id;
proyecto.tipoProyecto = JSON.stringify(req.body.proyecto.tipoProyecto);
proyecto.costoOneOff = req.body.proyecto.costoOneOff;
proyecto.costoOnGoing =req.body.proyecto.costoOnGoing;
proyecto.beneficios =req.body.proyecto.beneficios;
proyecto.beneficioIntangible  =  req.body.proyecto.beneficioIntangible;


var estadoNuevo ={}


   switch(proyecto.idEtapaProyecto) {
    case 2:
         estadoNuevo.idEstadoProyecto = 5
         estadoNuevo.idEtapaProyecto = 2
         
        break;
    case 3:
         estadoNuevo.idEstadoProyecto = 9
         estadoNuevo.idEtapaProyecto = 3
        break;
    
}



proyecto.idEstadoProyecto  =  estadoNuevo.idEstadoProyecto;


        proyecto.save().success(function(x){
            
            var historial ={}
   historial.idProyecto = x.idProyecto;
    historial.usuarioId=req.body.proyecto.usuarioLogin;
   historial.idEstadoProyecto= x.idEstadoProyecto;
   historial.idEtapaProyecto = x.idEtapaProyecto;
   historial.descripcion  ='Documento Enviado Aprobacion';
   historialProyecto.insertarHistorial(historial)
   
   
   agregarEntregable(req.body.proyecto);
   if (estadoNuevo.idEstadoProyecto==9)
   agregarEntregable(req.body.proyecto);
            agregarEquipo(req.body.proyecto, mailer.EnvioEmail)
            //mailer.EnvioEmail(1,req.body.proyecto)
            

 return res.json(200, x); 
            
        })
        


})

}



exports.enviarAprobacionEvaluacion= function (req,res){
    // buscar  Proyecto 
    
    models.proyecto.find({where:{idProyecto:req.body.proyecto.idProyecto}}).success(function(proyecto) {

proyecto.nombre=req.body.proyecto.nombre;
proyecto.resumenEjecutivo = req.body.proyecto.resumenEjecutivo;
proyecto.fechaEstimadaComienzo =req.body.proyecto.fechaEstimadaComienzo;
proyecto.duracionSemana = req.body.proyecto.duracionSemana;
 if (req.body.proyecto.complejidad!=undefined)
proyecto.idComplejidad = req.body.proyecto.complejidad.id;
proyecto.tipoProyecto = JSON.stringify(req.body.proyecto.tipoProyecto);
proyecto.costoOneOff = req.body.proyecto.costoOneOff;
proyecto.costoOnGoing =req.body.proyecto.costoOnGoing;
proyecto.beneficios =req.body.proyecto.beneficios;
proyecto.beneficioIntangible  =  req.body.proyecto.beneficioIntangible;
proyecto.idEstadoProyecto  =  9;


        proyecto.save().success(function(x){
            
            var historial ={}
   historial.idProyecto = x.idProyecto;
    historial.usuarioId=req.body.proyecto.usuarioLogin;
   historial.idEstadoProyecto= x.idEstadoProyecto;
   historial.idEtapaProyecto = x.idEtapaProyecto;
   historial.descripcion  ='Documento Enviado Aprobacion';
   historialProyecto.insertarHistorial(historial)
     
               agregarEntregable(req.body.proyecto);
               agregarEquipo(req.body.proyecto, mailer.EnvioEmail)
            
            //mailer.EnvioEmail(1,req.body.proyecto)
            

 return res.json(200, x); 
            
        })
        


})

}




exports.aprobarProyecto= function (req,res){
 
  models.equipoProyecto.find({where:{uid:req.body.aprobador.id,estadoAutorizacion:0}}).success(function(equipo){
   
   equipo.estadoAutorizacion=req.body.aprobador.estado;
   
  equipo.fechaAutorizacion= new Date();
   
     equipo.save(['estadoAutorizacion','fechaAutorizacion']).success(function(x){
    
    
     var historial ={}
   historial.idProyecto = x.idProyecto;
    
   historial.idEstadoProyecto= x.idEstadoProyecto;
   historial.idEtapaProyecto = x.idEtapaProyecto;
   historial.descripcion  ='El usuario ' + equipo.nombre;
   historialProyecto.insertarHistorial(historial)
   

var estadoNuevo ={}


   switch(x.idEtapaProyecto) {
    case 2:
         estadoNuevo.idEstadoProyecto = 8
         estadoNuevo.idEtapaProyecto = 3
         
        break;
    case 3:
         estadoNuevo.idEstadoProyecto = 11
         estadoNuevo.idEtapaProyecto = 4
        break;
    
}




   cambiarEstadoProyecto(x,estadoNuevo)
   
  
    
    return res.json(200, x); 
     })
     
  })

 
}


function cambiarEstadoProyecto(req,estado){
 
models.equipoProyecto.findAll({where:{idProyecto:req.idProyecto,estadoAutorizacion:0,
idEtapaProyecto:req.idEtapaProyecto
}}).success(function(e){
 
if (e.length ==0)
 {
  models.proyecto.find({where:{idProyecto:req.idProyecto},
   include :[{model:models.empresa, as :'empresa'},{model:models.departamento,as:'departamento'},
  {model:models.usuario,as:'usuario'},{model:models.usuario,as:'jefeProyecto'},
  {model:models.usuario, as:'usuarioBp' },{model:models.etapaProyecto, as:'etapa' },
  {model:models.parametros, as:'complejidad' },
   {model:models.proyectoAdjunto, as:'adjunto',include:[{model:models.parametros,as:'tipoAdjunto' }]  },
    {model:models.estadoProyecto, as:'estadoProyecto' },
    {model:models.equipoProyecto, as:'equipoProyecto', include:[{model:models.parametros,as:'cargo'}] },
     ]
  
  }).success(function (x){
  
   
   
    versionProyecto.crearVersion(x)
    x.idEtapaProyecto = estado.idEtapaProyecto;
   x.idEstadoProyecto = estado.idEstadoProyecto;
   var fechaEstimada = new Date( x.fechaEstimadaComienzo);
fechaEstimada.setDate(fechaEstimada.getDate() + parseInt(x.duracionSemana)*7)

   
   x.fechaEstimadaCierre = fechaEstimada
   
   
    x.save(['idEstadoProyecto','idEtapaProyecto','fechaEstimadaCierre']).success(function(p){
    
    
     
    });
   
  })
 }
 
   }) 
 
 
}

function agregarEquipo(req,callback){

var equipoProyecto=[]

for (var i=0;i<=req.equipoProyecto.length-1;i++){
var aprobador = {}
aprobador.idProyecto = req.idProyecto
aprobador.email = req.equipoProyecto[i].email
aprobador.nombre =req.equipoProyecto[i].nombre 
aprobador.idRol = req.equipoProyecto[i].cargo.id;
aprobador.idEtapaProyecto =req.idEtapaProyecto;
aprobador.estadoAutorizacion=0;
aprobador.uid =  uid.v4();
equipoProyecto.push(aprobador);
}



models.equipoProyecto.destroy({where:{idProyecto:req.idProyecto} }).success(function(equipo) {

models.equipoProyecto.bulkCreate(equipoProyecto).success(function(x){
    
 
   models.equipoProyecto.findAll({where:{idProyecto:req.idProyecto},include:[{model:models.parametros,as:'cargo'}]}).success(function(p){
  req.equipoProyecto = p 
  
  if (callback !==undefined)
  callback(1,req)
   
   })
 
 
})

  
});

}





function actualizarEntregable(req){
var arr = JSON.parse(req.arrAntregables)
console.log(arr);
for (var i=0;i<=req.arrAntregables.length-1;i++)
models.entregableProyecto.find({where:{idEntregable:req.arrAntregables[i]}}).success(function(x){
 
 
 x.estado =1;
 x.fechaActualizacion = new Date();
 
 x.save()
 
 
})



}




function agregarEntregable(req){

var entregableProyecto=[]

for (var i=0;i<=req.entregableProyecto.length-1;i++){
 
var fechaEstimada = new Date( req.fechaEstimadaComienzo);
fechaEstimada.setDate(fechaEstimada.getDate() + parseInt(req.entregableProyecto[i].semanaEntrega)*7)
 
var entregable = {}
entregable.idProyecto = req.idProyecto
entregable.idTipoEntregable =  req.entregableProyecto[i].tipoEntregable.id;
entregable.semanaEntrega =req.entregableProyecto[i].semanaEntrega
entregable.fechaEstimada = fechaEstimada;
entregableProyecto.push(entregable);
}



models.entregableProyecto.destroy({where:{idProyecto:req.idProyecto} }).success(function(entregable) {

models.entregableProyecto.bulkCreate(entregableProyecto).success(function(x){
    
 

 
 
})

  
});

}
