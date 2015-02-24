'use strict';
angular.module('kcc.controllers')
	.controller('mainController', ['$scope', '$route', '$animate','$http', 'elasticFactory','Auth','$location',function($scope, $route, $animate,$http,elasticFactory,Auth,$location) {

$scope.data ={}
$scope.data.complejidad={}
$scope.data.tipo = {}
$scope.data.empresa ={}
// Proyectos por Complejidad

 $scope.data.complejidad.labels = ["Simple", "Mediano", "complejo"];
  
  $scope.data.complejidad.data = [4, 2, 5];


 $scope.data.tipo.labels = ["Estrategico", "Operacional", "Innovacion"];
  $scope.data.tipo.data = [2, 4, 5];

 $scope.data.empresa.labels = ["KCC", "KRCC","KHSA","KCCA"];
  $scope.data.empresa.data = [5, 3,2,1];

    
	}]);