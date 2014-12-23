'use strict';
angular.module('kcc.controllers')
	.controller('completarIniciativaControlller', ['$scope', '$route', '$animate','$http', 'elasticFactory','Auth','$routeParams', function($scope, $route, $animate,$http,elasticFactory,Auth,$routeParams) {

$scope.proyecto = {};





 $http.get('/api/proyecto/'+$routeParams.id).success(function(proyecto) {
      $scope.proyecto  = proyecto;
      
  
    });




    
    
	}]);