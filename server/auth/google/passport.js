var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var elasticsearch = require('elasticsearch');
var model = require('../../api/model');
exports.setup = function (User, config) {
// funcion anterior
 

passport.use(new GoogleStrategy({

      clientID: config.google.GOOGLE_ID,
      clientSecret: config.google.GOOGLE_SECRET,
      callbackURL: config.google.callbackURL
      //access_type: 'offline'
    },

  function(accessToken, refreshToken, profile, done) {

model.usuario.find({
      where: {
    email: profile.emails[0].value

  }

  }).success(function(usuario) {
      if (usuario==null)
     {
     
     
var client = new elasticsearch.Client(
    { host: config.elasticsearch.host }
    );
    
    client.get({
  index: 'contactos',
  type: 'kcc',
id:  profile.emails[0].value
}, function (error, response) {

if (response.found)
          User.create({
            foto :profile._json.picture,
           nombre: response._source.nombre,
          email:  profile.emails[0].value,
          idEmpresa:response._source.rutEmpresa,
          fechaCreacion:new Date(),
          fechaActualizacion: new Date(),
          fechaUltLogin:   new Date(),
          rolesMenu:  JSON.stringify(['20']),
          estado:1
        
          }).success(function(usr) {
        
          return done(null,usr.dataValues);
        
          });
else
 return done(true,null);
        
    




});
         
     
     }
     else 
     {
        
        usuario.updateAttributes({
       foto:profile._json.picture
      }).success(function(x) {
         
     usuario.foto =profile.picture
          
      })
     }
     
   // usuario.picture= profile.picture;
     return done(null,usuario.dataValues);

  });





    }
  ));

};