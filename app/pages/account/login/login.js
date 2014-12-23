'use strict';


angular.module('smartApp')
.config(['$routeProvider',  function($routeProvider) {
	$routeProvider
		.when('/', {
						templateUrl: 'pages/account/login/login.html',
			      controller: 'LoginCtrl',
		})
}]);

  