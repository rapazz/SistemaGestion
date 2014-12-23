'use strict';
angular.module('kcc.controllers')
	.controller('verHistorialControlller', ['$scope', '$route','$http','Auth', 'close','proyecto',function($scope, $route,$http,Auth,close,proyecto) {

$scope.proyecto = proyecto;

 $http.get('/api/proyecto/'+$scope.proyecto+'/historial').success(function(historial) {
      $scope.historial  = historial;
  
    });




 $scope.close = function(result) 
 {
     close(result, 500);
 };


    
    
	}]);