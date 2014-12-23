var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var models  = require('../model');
var config = require('../../config/environment');


exports.EnvioEmail = function(tipoEmail,datos) {

models.emailTemplate.find ({where:{idTemplate:tipoEmail}}).success(function(x){
    



//generaro lista de usuarios 
// igualo campos a valores 

var transport = nodemailer.createTransport(smtpTransport({
        host: config.mailer.host,
        port: config.mailer.port,

          auth: {
          user: config.mailer.user,
          pass: config.mailer.pass
        }
      }));
var url = 'http://sistemagestion-rapazz.c9.io/#/proyecto'
   for ( var i=0;i<=datos.equipoProyecto.length-1;i++) {
        var cuerpoEmail = x.cuerpo 
       
       cuerpoEmail = cuerpoEmail.replace(new RegExp('{{nombreProyecto}}', 'g'),datos.nombre);
       cuerpoEmail = cuerpoEmail.replace(new RegExp('{{rolUsuario}}', 'g'), datos.equipoProyecto[i].cargo.nombre);
       cuerpoEmail = cuerpoEmail.replace(new RegExp('{{nombreUsuario}}', 'g'), datos.equipoProyecto[i].nombre);
       
       cuerpoEmail = cuerpoEmail.replace(new RegExp('{{linkAprobacion}}', 'g'), url +'/aprobacionEmail/' + datos.equipoProyecto[i].uid);
           cuerpoEmail = cuerpoEmail.replace(new RegExp('{{aprobar}}', 'g'), url +'/aprobacionEmail/a/' + datos.equipoProyecto[i].uid);
           cuerpoEmail = cuerpoEmail.replace(new RegExp('{{rechazar}}', 'g'), url +'/aprobacionEmail/r/' + datos.equipoProyecto[i].uid);
     
       
     //  cuerpoEmail = cuerpoEmail.replace(new RegExp('{{guid}}', 'g'), datos.equipoProyecto[i].guid);   
       
   
     var salida = {
        from:config.mailer.mailDefecto,
        to:  datos.equipoProyecto[i].email,
       // to:  'moises.bravo@rapazz.cl',
        subject: x.asunto  + ' ' +datos.idProyecto,
        html: cuerpoEmail
      }
      
      transport.sendMail(salida, function(error, response){  //callback
        if(error){
          console.log(error);
        }else{
          console.log("Message sent: " + response.message);
        }

     
      });
   
   //  smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
   
   
   }
    
    
    
})



};



exports.EnvioEmailIniciativa = function(tipoEmail,datos) {

models.emailTemplate.find ({where:{idTemplate:tipoEmail}}).success(function(x){
    



//generaro lista de usuarios 
// igualo campos a valores 

var transport = nodemailer.createTransport(smtpTransport({
        host: config.mailer.host,
        port: config.mailer.port,

          auth: {
          user: config.mailer.user,
          pass: config.mailer.pass
        }
      }));
var url = 'http://sistemagestion-rapazz.c9.io/#/'
  
        var cuerpoEmail = x.cuerpo 
       
       cuerpoEmail = cuerpoEmail.replace(new RegExp('{{nombreProyecto}}', 'g'),datos.nombre);
       cuerpoEmail = cuerpoEmail.replace(new RegExp('{{nombreEmpresa}}', 'g'),datos.empresa.nombre);
       
       cuerpoEmail = cuerpoEmail.replace(new RegExp('{{nombreUsuario}}', 'g'), datos.usuarioBp.nombre);
          cuerpoEmail = cuerpoEmail.replace(new RegExp('{{nombreSolicitante}}', 'g'), datos.usuario.nombre);
       cuerpoEmail = cuerpoEmail.replace(new RegExp('{{aprobar}}', 'g'), url +'/niciativa/editar/' + datos.idProyecto);
         
       
     //  cuerpoEmail = cuerpoEmail.replace(new RegExp('{{guid}}', 'g'), datos.equipoProyecto[i].guid);   
       
   
     var salida = {
        from: config.mailer.mailDefecto,
        to:  datos.usuarioBp.email,
       // to:  'moises.bravo@rapazz.cl',
        subject: x.asunto  + ' ' +datos.idProyecto,
        html: cuerpoEmail
      }
      
      transport.sendMail(salida, function(error, response){  //callback
        if(error){
          console.log(error);
        }else{
          console.log("Message sent: " + response.message);
        }

     
      });
   
   //  smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
   
   
   
    
    
    
})



};
