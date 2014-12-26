var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

exports.setup = function (User, config) {
// funcion anterior
 

passport.use(new GoogleStrategy({

      clientID: config.google.GOOGLE_ID,
      clientSecret: config.google.GOOGLE_SECRET,
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