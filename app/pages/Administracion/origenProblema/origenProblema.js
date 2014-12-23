'use strict';

angular.module('smartApp')
.config(['$routeProvider',  function($routeProvider) {
	$routeProvider
		.when('/Administracion/origenProblema', {
					templateUrl: 'pages/Administracion/origenProblema/listar.html',
			      controller: 'origenlistado'
		})
			.when('/Administracion/origenProblema/editar/:id', {
					templateUrl: 'pages/Administracion/origenProblema/editar.html',
			      controller: 'origeneditar'
		})
}

]);

  