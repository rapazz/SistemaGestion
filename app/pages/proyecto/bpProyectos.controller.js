'use strict';
angular.module('kcc.controllers')
	.controller('listadoProyectosBpController', ['$scope', '$route','$http','Auth','ModalService', function($scope, $route,$http,Auth,ModalService) {


	 


    $scope.verHistorial = function(idProyecto) {
        ModalService.showModal({
            templateUrl: 'pages/Iniciativas/verHistorial/verHistorial.html',
             controller: "verHistorialControlller",
             inputs: {
        proyecto: idProyecto
        
      }

          
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
            });
        });
    };




 $http.get('/api/proyecto/bpProyectos/'+Auth.getCurrentUser().usuarioId).success(function(proyecto) {
      $scope.proyectos  = proyecto;
    

    });
    
	}]);
