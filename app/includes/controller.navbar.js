angular.module('kcc.controllers')
	.controller('navbarController', ['$scope', '$route', '$animate','$http', 'Auth', function($scope, $route, $animate,$http,Auth) {


   // $scope.isLoggedIn = Auth.isLoggedIn;
   // console.log(Auth.isLoggedIn)
    $scope.getCurrentUser = Auth.getCurrentUser();

	$http.get('/api/usuario/menu/'+ $scope.getCurrentUser.email).success(function(menus) {
		
      $scope.menu = menus;
       });



	}]);