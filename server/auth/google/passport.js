var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

exports.setup = function (User, config) {
// funcion anterior
 

passport.use(new GoogleStrategy({

      clientID:'831491199430-n94n4hak4dufamvu2ck9n5b5b7vmo97j.apps.googleusercontent.com', //config.google.clientID,
      clientSecret: 'qraRGD5-AYW3YY6miTUK7KOe',//config.google.clientSecret,
      callbackURL: config.google.callbackURL
      //access_type: 'offline'
    },

  function(accessToken, refreshToken, profile, done) {

User.find({
      where: {
    email: profile.emails[0].value

  }

  }).success(function(usuario) {
   // usuario.picture= profile.picture;
     return done(null,usuario.dataValues);

  });






    }
  ));

};