'use strict';

angular.module('smartApp')
.config(['$routeProvider',  function($routeProvider) {
	$routeProvider
		.when('/iniciativa/completarIniciativa/:id', {
					templateUrl: 'pages/Iniciativas/completarIniciativa/completarIniciativa.html',
			      controller: 'completarIniciativaControlller'
		})
}

]);

  