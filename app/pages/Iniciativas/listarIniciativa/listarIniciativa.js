'use strict';

angular.module('smartApp')
.config(['$routeProvider',  function($routeProvider) {
	$routeProvider
		.when('/iniciativa/misIniciativas/', {
					templateUrl: 'pages/Iniciativas/listarIniciativa/listarIniciativa.html',
			      controller: 'listarIniciativaControlller'
		})
}

]);

  