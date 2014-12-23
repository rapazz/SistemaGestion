'use strict';
angular.module('smartApp')
  .config(['$routeProvider',  function($routeProvider) {
    $routeProvider

      .when("/incidente/crear", {
        controller: "nuevoincidente",
        templateUrl: "pages/incidente/crear.html"
      })
      .when("/incidente/creado", {
        controller: "creadoincidente",
        templateUrl: "pages/incidente/creado.html"
      })
      .when("/incidente/mis", {
        controller: "misincidente",
        templateUrl: "pages/incidente/listar.html"
      })
      .when("/incidente/mensajecon/:id", {
        controller: "mensajecon",
        templateUrl: "pages/incidente/mensajecon.html"
      })
      .when("/incidente/mensajeku/:id", {
        controller: "mensajeku",
        templateUrl: "pages/incidente/mensajeku.html"
      })
      .when("/incidente/misku", {
        controller: "misincidenteku",
        templateUrl: "pages/incidente/listarku.html"
      })
      .when("/incidente/miscon", {
        controller: "misincidentecon",
        templateUrl: "pages/incidente/listarconsultor.html"
      })
      .when("/incidente/tomarincidente/:id", {
        controller: "tomarincidente",
        templateUrl: "pages/incidente/tomarincidente.html"
      })
      .when("/incidente/editarku/:id", {
        controller: "incidenteeditarku",
        templateUrl: "pages/incidente/editarku.html"
      })
      .when("/incidente/fichalectura/:id", {
        controller: "incidentelectura",
        templateUrl: "pages/incidente/fichalectura.html"
      })
      .when("/incidente/editarconsultor/:id", {
        controller: "incidenteeditarconsultor",
        templateUrl: "pages/incidente/editarconsultor.html"
      })
      .when("/incidente/editarproveedor/:id", {
        controller: "incidenteeditarproveedor",
        templateUrl: "pages/incidente/editarproveedor.html"
      })
      .when("/incidente/reportes", {
        controller: "reporte",
        templateUrl: "pages/incidente/reportegeneral.html"
      })


  }

  ]);

