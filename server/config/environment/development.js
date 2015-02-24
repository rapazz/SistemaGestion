'use strict';

// Development specific configuration
// ==================================
module.exports = {
  google: {
    GOOGLE_ID: '831491199430-r42u6nmguim4pvad4t4o78t653pvv1eo.apps.googleusercontent.com',
    GOOGLE_SECRET: 'l9yeymvFoR97DGipcCLxGix2',
    DOMAIN: 'http://gestionkcc-rapazz.c9.io:80'
  },
   elasticsearch:{
    host:'54.187.191.158',
    index:'contactos',
    type:'kcc'
  },
  mysql: {
    dialect:'mysql',
    port: 3306,
    user: 'rapazz',
    password:'',
    database:'c9'
  
},
mailer: {
  host:'email-smtp.us-east-1.amazonaws.com',
  port:2588,
  user:'AKIAJGAHAGBMT56FERRA',
  pass:'AvWUG/8d5fopPAJSUbGUmytmGziTjuyCMLURN8aUi8dK',
  mailDefecto: 'ckuknow@gmail.com'
  
  
},
rutaAdjunto:{ 
  url:'archivos'
  
}
};
