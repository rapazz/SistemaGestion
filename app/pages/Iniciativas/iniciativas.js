'use strict';

angular.module('smartApp')
.config(['$routeProvider',  function($routeProvider) {
	$routeProvider
		.when('/iniciativa/', {
					templateUrl: 'pages/Iniciativas/iniciativas.html',
			      controller: 'iniciativaController'
		})
		.when('/iniciativa/editar/:id', {
					templateUrl: 'pages/Iniciativas/editarIniciativa.html',
			       controller: 'editarIniciativaController'
		})
}

]);

  