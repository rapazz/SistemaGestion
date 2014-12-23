'use strict';
angular.module('kcc.controllers')
	.controller('editarProyectoController', ['$scope', '$route','$http','Auth','ModalService','$routeParams','elasticFactory','$upload','$filter', '$location',function($scope, $route,$http,Auth,ModalService,$routeParams,elasticFactory,$upload,$filter,$location) {


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
$scope.arrEntregable=[];


//Listados 

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

    
    $http.get('/api/listas/parametros/1').success(function(listadoComplejidad) {
      $scope.listas.complejidad  = listadoComplejidad;
    });
    $http.get('/api/listas/parametros/2').success(function(listadoRol) {
     $scope.listas.rolEquipo  = listadoRol;
    });
$http.get('/api/listas/parametros/3').success(function(tipoProyecto) {
     $scope.tipoProyecto = tipoProyecto;
    });
    
$http.get('/api/listas/parametros/4').success(function(tipoAnexo) {
     $scope.listas.tipoAnexos = tipoAnexo;
    });

 $http.get('/api/listas/parametros/5').success(function(listadoEntregable) {
      $scope.listas.tipoEntregable  = listadoEntregable;
    });

$scope.agregarEquipo = function (){
var jsonEquipo = {}

if ($scope.idEmail == undefined || $scope.rolEquipo == undefined)
$scope.equipoValido=false;
else
{

jsonEquipo.email =$scope.idEmail[0]
jsonEquipo.nombre = $scope.nombreEquipo[0];
jsonEquipo.cargo={};
jsonEquipo.cargo = $scope.rolEquipo
$scope.arrEquipo.push(jsonEquipo)
$scope.nombreEquipo="";
$scope.idEmail = undefined;
$scope.rolEquipo =undefined;
$scope.equipoValido =true;

}	
	
}

$scope.agregarEntregable = function (){
var jsonEntregable = {}

if ($scope.semanaEntrega == undefined || $scope.tipoEntregable == undefined)
$scope.entregableValido=false;
else
{


jsonEntregable.tipoEntregable =$scope.tipoEntregable;
jsonEntregable.semanaEntrega = $scope.semanaEntrega;




var fechaEstimada = new Date( $scope.proyecto.fechaEstimadaComienzo);
fechaEstimada.setDate(fechaEstimada.getDate() + parseInt($scope.semanaEntrega)*7)

jsonEntregable.fechaEstimada =fechaEstimada
$scope.arrEntregable.push(jsonEntregable)
$scope.semanaEntrega="";
$scope.tipoEntregable =undefined;
$scope.entregableValido =true;

}	
	
}

$scope.quitarEntregable =function (tipoEntregable){
    for (var i=0; i<= $scope.arrEntregable.length -1;i++)
        if  ($scope.arrEntregable[i].tipoEntregable.id==tipoEntregable)
        $scope.arrEntregable.splice(i,1)
    
    
}



$scope.quitarEquipo =function (email){
    for (var i=0; i<= $scope.arrEquipo.length -1;i++)
        if  ($scope.arrEquipo[i].email==email)
        $scope.arrEquipo.splice(i,1)
    
    
}


 $scope.onFileSelect = function($files) {
var proyectoAdjunto ={}
proyectoAdjunto.idProyecto = $scope.proyecto.idProyecto
proyectoAdjunto.descripcion = $scope.adjuntoNombre
proyectoAdjunto.idTipoAdjunto = $scope.tipoAdjunto.id
      //$files: an array of files selected, each file has name, size, and type.
      for (var i = 0; i < $files.length; i++) {
        var $file = $files[i];
        console.log($file)
        $scope.upload = $upload.upload({
          url: '/api/proyectoAdjunto/crearAnexo', //upload.php script, node.js route, or servlet url
          //method: 'POST' or 'PUT',
          //headers: {'header-key': 'header-value'},
          //withCredentials: true,
          method: "POST",
          data: {adjunto:proyectoAdjunto},
          file: $file // or list of files ($files) for html5 only
          //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
          //	fileFormDataName: "myFile"
          // customize file formData name ('Content-Disposition'), server side file variable name.
          //fileFormDataName: myFile, //or a list of names for multiple files (html5). Default is 'file'
          // customize how data is added to formData. See #40#issuecomment-28612000 for sample code
          //formDataAppender: function(formData, key, val){}
        }).progress(function(evt) {
            $scope.porcentajeAvance=parseInt(100.0 * evt.loaded / evt.total);
            
         
        }).success(function(data, status, headers, config) {
          // file is uploaded successfully
          
    
         $scope.arrAdjuntos = data 
          
          $scope.porcentajeAvance=0;
        

         
        });
        //.error(...)
        //.then(success, error, progress);
        // access or attach event listeners to the underlying XMLHttpRequest.
        //.xhr(function(xhr){xhr.upload.addEventListener(...)})
      }
   /*   alternative way of uploading, send the file binary with the file's content-type.
      Could be used to upload files to CouchDB, imgur, etc... html5 FileReader is needed.
        It could also be used to monitor the progress of a normal http post/put request with large data*/

      // $scope.upload = $upload.http({...})  see 88#issuecomment-31366487 for sample code.
    };
   

	
$scope.validar = function (){
      
var mostrarError = false 

// Campos Obligatorios
      if ($scope.formulario.nombreDelProyecto.$error.required)
        mostrarError   = true 
    if ($scope.formulario.resumenEjecutivo.$error.required)
        mostrarError   = true 
     if ($scope.formulario.fechaComienzo.$error.required  ) 
        mostrarError   = true      
if ($scope.formulario.duracionSemana.$error.required || $scope.formulario.duracionSemana.$error.number ) 
        mostrarError   = true     
   
 if ($scope.formulario.tipoProyecto.$error.required  ) 
        mostrarError   = true
if ($scope.formulario.complejidad.$error.required  ) 
        mostrarError   = true
if ($scope.formulario.costosOneOff.$error.required || $scope.formulario.costosOneOff.$error.number ) 
        mostrarError   = true     
if ($scope.formulario.costosOnGoing.$error.required || $scope.formulario.costosOnGoing.$error.number ) 
        mostrarError   = true     

if ($scope.formulario.beneficios.$error.required || $scope.formulario.beneficios.$error.number ) 
        mostrarError   = true     
        
if ($scope.arrAdjuntos.length ==0)
mostrarError = true

if ($scope.arrEquipo.length ==0 )
mostrarError = true 

if ($scope.arrEntregable.length ==0 && $scope.proyecto.idEtapaProyecto>2 )
mostrarError = true 


     $scope.paginaValida=!mostrarError; 
    
};      





 $http.get('/api/proyecto/'+$routeParams.id).success(function(proyecto) {
      $scope.proyecto  = proyecto;
    
     $scope.arrEquipo = proyecto.equipoProyecto;
     
      $scope.proyecto.fechaEstimadaComienzo = $filter("date")(Date.now(), 'yyyy-MM-dd');
      $scope.arrAdjuntos= proyecto.adjunto
      $scope.arrEntregable= proyecto.entregableProyecto
      $scope.proyecto.tipoProyecto = JSON.parse($scope.proyecto.tipoProyecto)
      
  
    });

  
  
$scope.guardarProyecto = function(){
    
     $scope.proyecto.equipoProyecto = $scope.arrEquipo;
     $scope.proyecto.entregableProyecto = $scope.arrEntregable;
     $scope.proyecto.descripcionHistorial ="Modificacion del Documento"
     $scope.proyecto.usuarioLogin = Auth.getCurrentUser().usuarioId
  
  
 
 $http.post('api/proyecto/guardar', {proyecto:$scope.proyecto}).
  success(function(data, status, headers, config) {
  	
$scope.guardadoCorrectamente =true;
  
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
   
  });
   
   
}
  
 
 $scope.enviarProyecto = function(){
    
    $scope.validar();
    if ($scope.paginaValida)
    {
     $scope.proyecto.equipoProyecto = $scope.arrEquipo;
     $scope.proyecto.entregableProyecto = $scope.arrEntregable;
     $scope.proyecto.descripcionHistorial ="Enviar a Aprobar el Documento"
     $scope.proyecto.usuarioLogin = Auth.getCurrentUser().usuarioId
  
  
 
 $http.post('api/proyecto/enviarAprobacion', {proyecto:$scope.proyecto}).
  success(function(data, status, headers, config) {
  	
  $location.path('/proyecto/listar');
  
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
   
  });
   
    } 
   
}
  
 
 
    
	}]);


