var models  = require('../model');
var express = require('express');


exports.crearVersion = function(req) {
  
  models.versiones.create({
      idProyecto:req.idProyecto,
      fechaCreacion: new Date(),
      idEtapaProyecto:req.idEtapaProyecto,
      idUsuario: req.idUsuario,
      documento:JSON.stringify(req)
      
}).success(function(versiones) {
   
   return versiones; 
   
  });
  
  
}

exports.get = function (req,res){
    
models.versiones.find({where:{idVersion:req.params.id}}).success(function(x){
    
     return res.json(200,JSON.parse(x.documento)); 
})


}
