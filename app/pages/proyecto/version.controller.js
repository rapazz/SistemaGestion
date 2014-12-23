'use strict';
angular.module('kcc.controllers')
	.controller('verVersionControlller', ['$scope', '$route','$http','Auth', 'close','idVersion','$filter',function($scope, $route,$http,Auth,close,idVersion,$filter) {

$scope.id = idVersion;


$http.get('/api/listas/parametros/3').success(function(tipoProyecto) {
     $scope.tipoProyecto = tipoProyecto;
    });



 $http.get('/api/proyecto/version/'+$scope.id).success(function(version) {
      $scope.proyecto  = version;
         $scope.arrEquipo = version.equipoProyecto;
       $scope.proyecto.fechaEstimadaComienzo = $filter("date")(Date.now(), 'yyyy-MM-dd');
      $scope.arrAdjuntos= version.adjunto
      $scope.proyecto.tipoProyecto = JSON.parse($scope.proyecto.tipoProyecto)
     
 
    });



$scope.verSeccion = function(){
    
return $scope.proyecto.idEtapaProyecto
}
 $scope.close = function(result) 
 {
     close(result, 500);
 };


    
    
	}]);