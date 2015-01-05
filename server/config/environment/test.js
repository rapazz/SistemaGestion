'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/workspace-test'
  },
   google: {
    GOOGLE_ID: '831491199430-0rssqbesfc4eo8s466p1m8bvnfoi8nl8.apps.googleusercontent.com',
    GOOGLE_SECRET: 'jeUMYhqVtWMePF8yFNzvqeZw',
    DOMAIN: 'http://gp.kcl.cl:9000'
  },
  mysql: {
    dialect:'mysql',
    port: 3306,
    user: 'root',
    password:'',
    database:'gestion'
  
},
mailer: {
  host:'172.20.1.125',
  port:25,
  user:'',
  pass:'',
  mailDefecto: 'informatica@kcl.cl'
  
  
},
rutaAdjunto:{ 
  url:'archivos'
  
}
}
