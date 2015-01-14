'use strict';

angular.module('smartApp')
  .config(['$routeProvider',  function($routeProvider) {
    $routeProvider
      .when('/Administracion/subtipo', {
        templateUrl: 'pages/Administracion/subtipo/listar.html',
        controller: 'subtipolistado'
      })
      .when('/Administracion/subtipo/editar/:id', {
        templateUrl: 'pages/Administracion/subtipo/editar.html',
        controller: 'subtipoeditar'
      })
  }

  ]);
