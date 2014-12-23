'use strict';

angular.module('smartApp')
.config(['$routeProvider',  function($routeProvider) {
	$routeProvider
		.when('/main', {
			templateUrl: 'pages/main/main.html'
			
		})
}]);

  