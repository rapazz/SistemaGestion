'use strict';
angular.module('kcc.controllers')
	.controller('listarIniciativaControlller', ['$scope', '$route','$http', 'elasticFactory','Auth','ModalService', function($scope, $route,$http,elasticFactory,Auth,ModalService) {




    $scope.show = function(idProyecto) {
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



 $http.get('/api/proyecto/misIniciativas/'+Auth.getCurrentUser().usuarioId).success(function(proyecto) {
      $scope.proyectos  = proyecto;
  
    });




    
    
	}]);