'use strict';

angular.module('smartApp')
.config(['$routeProvider',  function($routeProvider) {
	$routeProvider
		.when('/iniciativa/crearIniciativa', {
					templateUrl: 'pages/Iniciativas/crearIniciativa/crearIniciativa.html',
			      controller: 'crearIniciativaControlller'
		})
}

]);

  