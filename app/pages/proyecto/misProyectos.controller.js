'use strict';
angular.module('kcc.controllers')
	.controller('listadoProyectosController', ['$scope', '$route','$http','Auth','ModalService', function($scope, $route,$http,Auth,ModalService) {


	 


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

  $scope.avanceProyecto = function(idProyecto) {
        ModalService.showModal({
            templateUrl: 'pages/proyecto/avanceProyecto.html',
             controller: "avanceProyectoController",
             inputs: {
        idProyecto: idProyecto
        
      }

          
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
            });
        });
    };


 $http.get('/api/proyecto/jefeProyecto/'+Auth.getCurrentUser().usuarioId).success(function(proyecto) {
      $scope.proyectos  = proyecto;
    
  console.log(proyecto);
    });
    
	}]);
