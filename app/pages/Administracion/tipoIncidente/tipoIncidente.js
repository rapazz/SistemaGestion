'use strict';

angular.module('smartApp')
.config(['$routeProvider',  function($routeProvider) {
	$routeProvider
		.when('/Administracion/tipoIncidente', {
					templateUrl: 'pages/Administracion/tipoIncidente/listar.html',
			      controller: 'tipolistado'
		})
			.when('/Administracion/tipoIncidente/editar/:id', {
					templateUrl: 'pages/Administracion/tipoIncidente/editar.html',
			      controller: 'tipoeditar'
		})
}

]);

  