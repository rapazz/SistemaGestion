/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/menus', require('./api/route/menu'));
  app.use('/api/rol', require('./api/route/rol'));
  app.use('/api/usuario', require('./api/route/usuario'));
    app.use('/api/listas', require('./api/route/listas'));
      app.use('/api/codigotermino', require('./api/route/codigoTermino'));
    app.use('/api/origenProblema', require('./api/route/origenProblema'));
    app.use('/api/tipoIncidente', require('./api/route/tipoIncidente'));
   app.use('/api/subtipo', require('./api/route/subtipo'));
app.use('/api/proyecto', require('./api/route/proyecto'));

 
 
  app.use('/api/incidente', require('./api/route/incidente'));
  app.use('/api/incidente2', require('./api/route/incidente2'));
  app.use('/api/adjunto', require('./api/route/adjunto'));
  app.use('/api/proyectoAdjunto', require('./api/route/proyectoAdjunto'));
  
   
   
    //app.use('/api/proyecto', require('./api/route/proyecto'));

  app.use('/auth', require('./auth'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
