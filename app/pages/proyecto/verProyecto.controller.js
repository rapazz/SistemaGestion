'use strict';
angular.module('kcc.controllers')
	.controller('verProyectoController', ['$scope', '$route','$http','Auth','ModalService','$routeParams','elasticFactory','$upload','$filter', function($scope, $route,$http,Auth,ModalService,$routeParams,elasticFactory,$upload,$filter) {


// Variables In iniciales 
$scope.tipoProyecto= []
$scope.tipoAnexos=[];
$scope.tipoProyecto=[{id:1,nombre:'Operacional'},{id:2,nombre:'Estrategico'},{id:3,nombre:'Innovación'}]
$scope.listas ={};
$scope.paginaValida=true 
$scope.arrEquipo=[]
$scope.arrayTipo = [];
$scope.equipoValido = true;
$scope.porcentajeAvance=0;
$scope.arrAdjuntos = [];
$scope.guardadoCorrectamente = false;


$http.get('/api/listas/parametros/3').success(function(tipoProyecto) {
     $scope.tipoProyecto = tipoProyecto;
    });


$http.get('/api/proyecto/'+$routeParams.id).success(function(proyecto) {
      $scope.proyecto  = proyecto;
    
     $scope.arrEquipo = proyecto.equipoProyecto;
     
      $scope.proyecto.fechaEstimadaComienzo = $filter("date")(Date.now(), 'yyyy-MM-dd');
      $scope.arrAdjuntos= proyecto.adjunto
      $scope.arrEntregable= proyecto.entregableProyecto
      $scope.proyecto.tipoProyecto = JSON.parse($scope.proyecto.tipoProyecto)
     
  
    });

    $scope.verHistorial = function() {
        ModalService.showModal({
            templateUrl: 'pages/Iniciativas/verHistorial/verHistorial.html',
             controller: "verHistorialControlller",
             inputs: {
        proyecto: $scope.proyecto.idProyecto
        
      }

          
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
            });
        });
    };



 $scope.verVersion = function(id) {
     console.log(id);
        ModalService.showModal({
            templateUrl: 'pages/proyecto/version.html',
             controller: "verVersionControlller",
             inputs: {
        idVersion: id
        
      }

          
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
            });
        });
    };



$scope.estadoAprobacion = function (valor){



switch(valor) {
    case 0:
        return  'Pendiente';
        break;
    case 1:
       return  'Aprobado';
        break;
    case 2:
       return  'Rechazado';
        break;
}

}

	}]);