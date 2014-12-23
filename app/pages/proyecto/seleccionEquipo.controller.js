'use strict';
angular.module('kcc.controllers')
	.controller('seleccionEquipoController', ['$scope', '$route','$http','Auth','ModalService', function($scope, $route,$http,Auth,ModalService) {

$scope.listas={};
$scope.listas.rolEquipo =[{id:1,nombre:'Gerente'},{id:2,nombre:'Consultor'},{id:3,nombre:'XXXX'}]


	  $scope.close = function(result) 
 {
     close(result, 500);
 };

 $scope.agregar = function(result) 
 {
     agregar(result, 500);
 };


    
	}]);
