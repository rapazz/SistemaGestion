'use strict';

angular.module('smartApp')
.config(['$routeProvider',  function($routeProvider) {
	$routeProvider
		.when('/Administracion/codigoTermino', {
					templateUrl: 'pages/Administracion/codigoTermino/listar.html',
			      controller: 'codigoterminolistar'
		})
			.when('/Administracion/codigoTermino/editar/:id', {
					templateUrl: 'pages/Administracion/codigoTermino/editar.html',
			      controller: 'codigoterminoeditar'
		})
}

]);

  