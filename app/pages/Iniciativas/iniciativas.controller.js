'use strict';
angular.module('kcc.controllers')
	.controller('iniciativaController', ['$scope', '$route','$http','Auth','ModalService', function($scope, $route,$http,Auth,ModalService) {

	 


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
    
	}])
	.controller('editarIniciativaController', ['$scope', '$route','$http','Auth','$routeParams','$location',function($scope, $route,$http,Auth,$routeParams,$location) {
	 $scope.paginaValida=true 
  $scope.listas={};

   


   
   
   
   $scope.actualizar = function () {
   $scope.proyecto.idUsuario = Auth.getCurrentUser().usuarioId;
   
 
   
   
     $http.post('api/proyecto/iniciativa', {proyecto:$scope.proyecto}).
  success(function(data, status, headers, config) {
  	
$location.path('/iniciativa/');
  
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    alert('TODO MAL')
  });
     
   
   }
   


    
   



 $http.get('/api/proyecto/'+$routeParams.id ).success(function(proyecto) {
      $scope.proyecto  = proyecto;
      
         $http.get('/api/listas/estadoProyecto/'+proyecto.etapa.idEtapaProyecto).success(function(estadoProyecto) {
         
          $scope.listas.estadoProyecto  = estadoProyecto;
          $scope.proyecto.estadoProyecto  = proyecto.estadoProyecto;
         });
         
         
            
     $http.get('/api/listas/jefeProyecto/'+Auth.getCurrentUser().usuarioId).success(function(jefeProyecto) {
   
      $scope.listas.jefeProyecto  = jefeProyecto;
       $scope.proyecto.jefeProyecto = proyecto.jefeProyecto
      
      
     
      
    });
      
      });
    
    
   
    
	}]);