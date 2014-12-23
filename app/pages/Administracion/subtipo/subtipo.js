'use strict';

angular.module('smartApp')
  .config(['$routeProvider',  function($routeProvider) {
    $routeProvider

		.when("/Administracion/subtipo/listado", {
			controller: "subtipolistado",
				templateUrl: 'pages/Administracion/subtipo/listar.html',
		})
		.when("/Administracion/subtipo/editar/:id", {
			controller: "subtipoeditar",
			templateUrl: 'pages/Administracion/subtipo/editar.html'
		})


}]);

