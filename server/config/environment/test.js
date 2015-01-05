'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/workspace-test'
  },
  mysql: {
    dialect:'mysql',
    port: 3306,
    user: 'root',
    password:'',
    database:'gestion'
  
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
}
