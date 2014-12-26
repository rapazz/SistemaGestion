angular.module('kcc.controllers')
	.controller('navbarController', ['$scope', '$route', '$animate','$http', 'Auth', function($scope, $route, $animate,$http,Auth) {


 
    $scope.getCurrentUser = Auth.getCurrentUser();

if ($scope.getCurrentUser.email!==undefined)
	$http.get('/api/usuario/menu/'+ $scope.getCurrentUser.email).success(function(menus) {
		
      $scope.menu = menus;
       });



	}]);