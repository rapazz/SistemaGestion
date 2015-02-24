
'use strict';
//.smart-form .state-error+em
function cargaform() {
}

function BuscaRol(x,rolbuscado) {
  var roles =eval(x);

  for (var i = 0; i < roles.length; i++) {
    if (roles[i] == rolbuscado){
           return true;
      }
      }
  return false;
  }


function EsKeyUser($scope){
  return BuscaRol(  $scope.getCurrentUser.rolesMenu,40);
}
function EsConsultor($scope){
  return BuscaRol(  $scope.getCurrentUser.rolesMenu,30);
}
function EsAdmin($scope){
  return BuscaRol(  $scope.getCurrentUser.rolesMenu,10);
}


angular.module('kcc.controllers'  )

  .controller('mensajeku', function($scope,Auth,$http,$upload,$location, $routeParams) {
 
 $scope.mensaje  = "Se ha generado el incidente  N°" + $routeParams.id + " "
  }
)
  .controller('mensajecon', function($scope,Auth,$http,$upload,$location, $routeParams) {})
  .controller('nuevoincidente', function($scope,Auth,$http,$upload,$location, $routeParams) {
    
    $scope.incidente={};
    $scope.listas ={};
    
    
      $http.get('/api/listas/incidente/tipoInicidente').success(function(listasistema) {
      $scope.listas.sistema  = listasistema;
    });
    
    $scope.cargaModulo= function(){
    
    $http.get('/api/listas/incidente/subTipoInicidente/' +$scope.incidente.idTipoIncidente).success(function(listadoModulos) {
      $scope.listas.modulo  = listadoModulos;
    });
    
}
    

    $scope.getCurrentUser = Auth.getCurrentUser();

   $scope.EliminarArchivo = function(x,y) {

      if(confirm("¿Está seguro que desea eliminar el archivo?")){

        $http.post(
          '/api/adjunto/eliminararchivo/'+ x,{usuario: $scope.getCurrentUser.email}).
          success(function(x) {
console.log(y);
            $http.post(
              '/api/adjunto/listartemporales',

              {IncidenteId: y}).
              success(function (x) {

                $scope.Adjuntos = x;
              });
          })

      }
    }

    $scope.EsKeyUser = function() {
      return EsKeyUser(this);
    }
    $scope.EsConsultor = function() {
      return EsConsultor(this);
    }
    $scope.EsAdmin = function() {
      return EsAdmin(this);
    }


    $scope.esgrabado = false;
    $scope.CerrarGrabado = function() {
     
      $scope.esgrabado = false;

    }
    $scope.IncidenteId = "";
    $scope.onFileSelect = function($files) {

      //$files: an array of files selected, each file has name, size, and type.
      for (var i = 0; i < $files.length; i++) {
        var $file = $files[i];
       
        $scope.upload = $upload.upload({
          url: '/api/adjunto/subirtemporal', //upload.php script, node.js route, or servlet url
          //method: 'POST' or 'PUT',
 //headers: {'header-key': 'header-value'},
          //withCredentials: true,
          method: "POST",
          data: {IncidenteId: $scope.IncidenteId},
          file: $file // or list of files ($files) for html5 only
          //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
          //	fileFormDataName: "myFile"
          // customize file formData name ('Content-Disposition'), server side file variable name.
          //fileFormDataName: myFile, //or a list of names for multiple files (html5). Default is 'file'
          // customize how data is added to formData. See #40#issuecomment-28612000 for sample code
          //formDataAppender: function(formData, key, val){}
        }).progress(function(evt) {
          console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
        }).success(function(data, status, headers, config) {
          // file is uploaded successfully
          console.log('archivosubido '+ data)
          console.log('id  '+ $scope.IncidenteId)

          $http.post(
            '/api/adjunto/listartemporales',

            {IncidenteId: $scope.IncidenteId}).
            success(function(x) {
              console.log('archivosubidos '+ x)
              $scope.Adjuntos = x;
            });
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
    $scope.nocargavalidacion = true;

    
    if ( $scope.nocargavalidacion){
      cargaform();
     
      $scope.nocargavalidacion = false;
    }

    $scope.paginaValida = true;
    $scope.GrabarIncidente = function() {

      $scope.paginaValida = !$scope.formCrearIncidente.$error.required;




if (!$scope.paginaValida) return;


      $scope.incidente["usuario"] = $scope.getCurrentUser.email;

      $scope.incidente["IdInterno"] = $scope.IncidenteId;
       $scope.incidente.usuario  = $scope.getCurrentUser

     $http.post('/api/incidente2/',$scope.incidente).
        success(function(data) {
      
         if ($scope.EsKeyUser())
          $location.path( "/incidente/mensajeku/"+ data.idIncidente );
         else
           $location.path( "/incidente/mensajecon/" + data.idIncidente);
        })

      $scope.esgrabado = true;



      //$scope.$apply();
    }

    $scope.incidente = {};

    $scope.incidente.TipoIncidenteId = "";
  
    $http.post('/api/incidente2/nuevoid').
      success(function(data) {
    
        $scope.IncidenteId = data;
        
      });

   


  })
  .controller('misincidenteku', function($scope,$http,Auth) {

    $scope.getCurrentUser = Auth.getCurrentUser();


    $scope.EsKeyUser = function() {
      return EsKeyUser(this);
    }
    $scope.EsConsultor = function() {
      return EsConsultor(this);
    }
    $scope.EsAdmin = function() {
      return EsAdmin(this);
    }

    if ($scope.EsKeyUser()){
      $http.get('/api/incidente2/listarKU/' + $scope.getCurrentUser.usuarioId).
        success(function(data) {
          $scope.data = data;
        });

    }


  })
  .controller('reporte', function($scope) {
    $scope.message = 'reporte';
  })

  .controller('misincidentecon', function($scope,$http,Auth) {
    $scope.getCurrentUser = Auth.getCurrentUser();


    $scope.EsKeyUser = function() {
      return EsKeyUser(this);
    }
    $scope.EsConsultor = function() {
      return EsConsultor(this);
    }
    $scope.EsAdmin = function() {
      return EsAdmin(this);
    }

    if ($scope.EsConsultor()){
      $http.get('/api/incidente2/listarConsultor/'+ $scope.getCurrentUser.usuarioId).
        success(function(data) {
          $scope.data = data;
        });

    }

    if ($scope.EsConsultor()){
      $http.get('/api/incidente2/listarSinAsignar').
        success(function(data2) {
          console.log(data2)
          $scope.data2 = data2;
        });

    }


  }).controller('misincidente', function($scope,$http,Auth) {

    $scope.getCurrentUser = Auth.getCurrentUser();


    $scope.EsKeyUser = function() {
      return EsKeyUser(this);
    }
    $scope.EsConsultor = function() {
      return EsConsultor(this);
    }
    $scope.EsAdmin = function() {
      return EsAdmin(this);
    }

    if ($scope.EsKeyUser()){
      $http.get('/api/incidente/listarmisku/' + $scope.getCurrentUser.email).
        success(function(data) {
          $scope.data = data;
        });

    }
    if ($scope.EsConsultor()){
      $http.get('/api/incidente/listarmisconsultor',$scope.getCurrentUser.email).
        success(function(data) {
          $scope.data = data;
        });

    }
    if ($scope.EsAdmin()){
      $http.get('/api/incidente/listarmisproveedor',$scope.getCurrentUser.email).
        success(function(data) {
          $scope.data = data;
        });

    }



  })
  .controller('reporte', function($scope) {
    $scope.message = 'reporte';
  })

  .controller('incidenteeditarku', function($scope,$http,$filter,$upload,Auth,$location, $routeParams) {

$scope.paginaValida=true;
    $scope.listas={}
  

 $http.get('/api/incidente2/'+ $routeParams.id).
  success(function(data) {
  
    $scope.incidente = data;
   
   
      
$http.get('/api/listas/incidente/estadosPermitidos/'+$scope.incidente.idEstado ).success(function(listasistema) {
      $scope.listas.estados  = listasistema;
    });
   
   
  })
  
  
  $scope.guardar =  function(){
  
   $scope.paginaValida = !$scope.form.$error.required;
  
  
  
  if (!$scope.paginaValida) return;
  
  
  
  

  $scope.incidente.usuario = Auth.getCurrentUser();



  
   $http.post('/api/incidente2/guardarIncidente',$scope.incidente).
        success(function(data) {
          
          $location.path( "incidente/mensajeku/"+ $scope.incidente.idIncidente );
        })
  


}
  
  
  
  

   

  })
    .controller('incidenteeditarconsultor', function($scope,$http,$filter,$upload,Auth,$location, $routeParams) {


 $scope.paginaValida = true;

    $scope.incidente = {};
$scope.listas ={}



  
    $http.get('/api/listas/incidente/tipoInicidente').success(function(listasistema) {
      $scope.listas.sistema  = listasistema;
    });

 $http.get('/api/listas/listarConsultores').success(function(listasistema) {
      $scope.listas.consultor  = listasistema;
    })
 
    $http.get('/api/listas/incidente/codigoTermino').success(function(listasistema) {
      $scope.listas.codigoTermino  = listasistema;
    });

$http.get('/api/listas/incidente/origenProblema').success(function(listasistema) {
      $scope.listas.origenProblema  = listasistema;
    });


$scope.cargaModulo= function(){
    
    $http.get('/api/listas/incidente/subTipoInicidente/' +$scope.incidente.idTipoIncidente).success(function(listadoModulos) {
      $scope.listas.modulo  = listadoModulos;
    });
    
}


$http.get('/api/incidente2/'+ $routeParams.id).
  success(function(data) {
  
    $scope.incidente = data;
    $scope.cargaModulo();
   

   
   
   
$http.get('/api/listas/incidente/estadosPermitidos/'+$scope.incidente.idEstado ).success(function(listasistema) {
      $scope.listas.estados  = listasistema;
    });
   
   
  })
  



$scope.guardar =  function(){
  
   $scope.paginaValida = !$scope.form.$error.required;
  
  
  
  if (!$scope.paginaValida) return;
  
  
  
  

  $scope.incidente.usuario = Auth.getCurrentUser();



  
   $http.post('/api/incidente2/guardarIncidente',$scope.incidente).
        success(function(data) {
          
          $location.path( "incidente/mensajecon/"+ $scope.incidente.idIncidente );
        })
  


}

$scope.entregarWorkArround =  function(){
  $scope.incidente.usuario = Auth.getCurrentUser();
  
   $http.post('/api/incidente2/entregarWorkArround',$scope.incidente).
        success(function(data) {
          
          $location.path( "incidente/mensajecon/"+ $scope.incidente.idIncidente );
        })
  
  

}









  })
  .controller('incidentelectura', function($scope,$http,$filter,Auth,$location, $routeParams) {

$http.get('/api/incidente2/'+ $routeParams.id).
  success(function(data) {
  
    $scope.incidente = data;
   
  })
  }

    ).controller('incidenteeditarproveedor', function($scope,$http,$filter,$upload,Auth,$location, $routeParams) {



        cargaform();

        $scope.esAdmin = EsAdmin(this.$scope);
        $scope.esKU = EsKeyUser(this.$scope);
        $scope.esConsultor = EsConsultor(this.$scope);
      })

  .controller('tomarincidente', function($scope,$http,$filter,$upload,Auth,$location, $routeParams) {

    $scope.incidente = {};

   $http.get('/api/incidente2/'+ $routeParams.id).
      success(function(data) {
        $scope.incidente = data;
      });


    $scope.tomarIncidente = function(x) {
      if (confirm("¿Está seguro que desea tomar el incidente?")){

        $scope.getCurrentUser = Auth.getCurrentUser();

        $scope.incidente.usuario= $scope.getCurrentUser.usuarioId;;

        $http.post('/api/incidente2/tomarIncidente',$scope.incidente).
          success(function(data) {

           // alert('El incidente fue asignado a ' + $scope.getCurrentUser.email)
            $location.path( "/incidente/editarconsultor/"+ $scope.incidente.idIncidente );

          });

      }

    }


  })

  .controller('incidenteeditar', function($scope,$http,$filter,$upload,Auth,$location, $routeParams) {



    cargaform();



    $scope.esgrabado = false;

    $http.post('/api/incidente/nuevoid').
      success(function(data) {
       
        $scope.IncidenteIdTemp = data;
      });

    $scope.CerrarGrabado = function(x) {
  
      $scope.esgrabado = false;
    }
    $scope.EliminarArchivo = function() {

      if(confirm("¿Está seguro que desea eliminar el archivo?")){

        $http.post(
          '/api/adjunto/eliminararchivo/'+ x).
          success(function(x) {

            $http.post(
              '/api/adjunto/listartemporales',

              {IncidenteId: $scope.IncidenteIdTemp}).
              success(function (x) {

                $scope.AdjuntosActual = x;
              });
          })

      }
    }
    $scope.IncidenteId = "";
    $scope.onFileSelect = function($files) {

      //$files: an array of files selected, each file has name, size, and type.
      for (var i = 0; i < $files.length; i++) {
        var $file = $files[i];
     
        $scope.upload = $upload.upload({
          url: '/api/adjunto/subirtemporal', //upload.php script, node.js route, or servlet url
          //method: 'POST' or 'PUT',
          //headers: {'header-key': 'header-value'},
          //withCredentials: true,
          method: "POST",
          data: {IncidenteId: $scope.IncidenteIdTemp},
          file: $file // or list of files ($files) for html5 only
          //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
          //	fileFormDataName: "myFile"
          // customize file formData name ('Content-Disposition'), server side file variable name.
          //fileFormDataName: myFile, //or a list of names for multiple files (html5). Default is 'file'
          // customize how data is added to formData. See #40#issuecomment-28612000 for sample code
          //formDataAppender: function(formData, key, val){}
        }).progress(function(evt) {
          console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
        }).success(function(data, status, headers, config) {
          // file is uploaded successfully
          console.log('archivosubido '+ data)
          console.log('id  '+ $scope.IncidenteId)

          $http.post(
            '/api/adjunto/listartemporales',

            {IncidenteId: $scope.IncidenteIdTemp}).
            success(function(x) {
              alert('El archivo fue subido con éxito')
              $scope.AdjuntosActual = x;
            });
        });
   
      }
  
    };

     function EnviarEmail() {




      $http.post('/api/incidente/enviaremail/' + $scope.incidente.incidente.IncidenteId).
        success(function(data) {
          console.log('Email Enviado')
        })
      $scope.esgrabado = true;
      //$scope.$apply();
    };

    var grabar = function() {

      var valido = !$("#formEditarIncidente").valid()

      if (valido){
        return;
      }

      $scope.incidente.incidente["IdInterno"] = $scope.IncidenteIdTemp;
   
      $http.post('/api/incidente/actualizar',$scope.incidente.incidente).
        success(function(data) {
          $location.path( "incidente/creado" );
        })
      $scope.esgrabado = true;
      //$scope.$apply();
    };


    var grabarCerrar = function() {

      var valido = !$("#formEditarIncidente").valid()
   
      if (valido){
        return;
      }

      $scope.incidente.incidente["IdInterno"] = $scope.IncidenteIdTemp;
     
      $http.post('/api/incidente/actualizar',$scope.incidente.incidente).
        success(function(data) {
          EnviarEmail();
          $location.path( "incidente/creado" );
        })
      $scope.esgrabado = true;
      //$scope.$apply();
    };
    $scope.esAdmin = EsAdmin(this.$scope);
    $scope.esKU = EsKeyUser(this.$scope);
    $scope.esConsultor = EsConsultor(this.$scope);

    $scope.GrabarIncidente = function(estado){



    //  if ($scope.incidente.incidente["Estado"]



      grabar();
    }

    $scope.CerrarIncidente = function(){
      var estado = 99;
      if (estado != null && estado != ""){
        $scope.incidente.incidente["Estado"] = estado
      }


      grabarCerrar();



    }



    $scope.incidente = {};




    $http.post('/api/incidente/editar/'+ $routeParams.id).
      success(function(data) {
        $scope.incidente = data;
      });







  })
