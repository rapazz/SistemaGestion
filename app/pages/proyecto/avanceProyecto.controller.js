'use strict';
angular.module('kcc.controllers')
	.controller('avanceProyectoController', ['$scope', '$route','$http','Auth','ModalService','$routeParams','$upload','$filter', '$location','idProyecto',function($scope, $route,$http,Auth,ModalService,$routeParams,$upload,$filter,$location,idProyecto) {


// Variables In iniciales 
$scope.tipoProyecto= []

$scope.listas ={};
$scope.paginaValida=true 
$scope.arrEquipo=[]
$scope.arrayTipo = [];
$scope.equipoValido = true;
$scope.porcentajeAvance=0;
$scope.arrAdjuntos = [];
$scope.guardadoCorrectamente = false;
$scope.arrEntregable=[];
$scope.arrCheck = [];


//Listados 

$http.get('/api/listas/parametros/4').success(function(tipoAnexo) {
     $scope.listas.tipoAnexos = tipoAnexo;
    });

    
    $http.get('/api/listas/parametros/6').success(function(saludProyecto) {
      $scope.listas.saludProyecto  = saludProyecto;
    });
  


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
   

	


 $http.get('/api/proyecto/'+idProyecto).success(function(proyecto) {
      $scope.proyecto  = proyecto;
    
     $scope.arrAdjuntos= proyecto.adjunto
      $scope.proyecto.fechaEstimadaComienzo = $filter("date")(Date.now(), 'yyyy-MM-dd');
      $scope.arrEntregable= proyecto.entregableProyecto
      
    });

  
  
$scope.actualizarAvance = function(){
    
     $scope.proyecto.arrAntregables = $scope.arrCheck;
      $scope.proyecto.descripcionHistorial ="actualizacion Avance"
     $scope.proyecto.usuarioLogin = Auth.getCurrentUser().usuarioId
  
  
 
 $http.post('api/proyecto/avance', {proyecto:$scope.proyecto}).
  success(function(data, status, headers, config) {
  	
close('', 500);
  
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
   
  });
   
   
}
  
  
 
  
 

 
 
    
	}]);


