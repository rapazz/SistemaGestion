'use strict';
angular.module('kcc.controllers')
	.controller('crearIniciativaControlller', ['$scope', '$route', '$animate','$http', 'elasticFactory','Auth','$location',function($scope, $route, $animate,$http,elasticFactory,Auth,$location) {

$scope.proyecto = {};
$scope.proyecto.usuario={};
$scope.proyecto.usuario.nombre = Auth.getCurrentUser().nombre 
$scope.proyecto.usuario.usuarioId=Auth.getCurrentUser().usuarioId; 



$scope.listas =[];
 $http.get('/api/listas/empresa').success(function(listadoEmpresa) {
      $scope.listas.empresa  = listadoEmpresa;
    });




$scope.cargaDepartamento= function(){
    
    $http.get('/api/listas/departamento/'+$scope.proyecto.empresa.idEmpresa).success(function(listadoDepartamento) {
      $scope.listas.departamento  = listadoDepartamento;
    });
    
}

	 $scope.paginaValida=true 
          
    $scope.validar = function (){
      
         
var mostrarError = false 
      if ($scope.formualario.nombreDelProyecto.$error.required)
mostrarError   = true 
if ($scope.empresa =='')
mostrarError   = true
if ($scope.departamento =='')
mostrarError   = true
     
    if (mostrarError== true)  
    $scope.paginaValida=false; 
    else 
    $scope.paginaValida=true;

grabar();
    };      
	    
	    
	    
function grabar(){
    
    if ($scope.paginaValida)
    {
     
     $http.post('/api/proyecto/', {proyecto:$scope.proyecto}).
  success(function(data, status, headers, config) {
  	

  $location.path('/iniciativa/completarIniciativa/'+data.idProyecto);
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    alert(status)
  });
        
    }
    }
    
    
	}]);