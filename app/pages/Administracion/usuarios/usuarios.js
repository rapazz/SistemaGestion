'use strict';

angular.module('smartApp')
.config(['$routeProvider',  function($routeProvider) {
	$routeProvider
		.when('/Administracion/usuarios', {
					templateUrl: 'pages/Administracion/usuarios/usuarios.html',
			      controller: 'usuariosController'
		})
}

]);

  