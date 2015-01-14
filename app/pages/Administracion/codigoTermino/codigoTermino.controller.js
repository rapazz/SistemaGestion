'use strict';
angular.module('kcc.controllers')
	.controller('codigoterminolistar', function($scope,$http,$location) {


		$http.get('/api/codigotermino').
			success(function(data) {
				$scope.data = data;
			});

    $scope.Agregar = function(){

      $location.path( "Administracion/codigoTermino/editar/0");
    }
		$scope.message = 'codigoterminolistar';

	})
	.controller('codigoterminoeditar', function($scope,$http, $routeParams) {

		$scope.esgrabado = false;
		$scope.CerrarGrabado = function() {
			console.log("cerro")
			$scope.esgrabado = false;
		}


    $scope.paginaValida = true;
		$scope.GrabarDato = function() {


      $scope.paginaValida = !$scope.formeditar.$error.required;

      if (!$scope.paginaValida) return;



      console.log('gd0')
      console.log($scope.codigo)
      console.log('fgd0')
      console.log($scope.codigo.EsActivo )
      if ($scope.codigo.EsActivo == 'true' || $scope.codigo.EsActivo == 'false'){
        $scope.codigo["EsActivo"] = 0;

        if ($scope.codigo.EsActivo){
          $scope.codigo["EsActivo"] = 1;
        }

      }
      console.log('gd')
      console.log($scope.codigo)
      console.log('fgd')
			if($scope.codigo.CodigoTerminoId == null) {
				$http.post('/api/codigotermino/crear',$scope.codigo).
					success(function(data1) {

            $http.get('/api/codigotermino/'+  data1).
              success(function(data) {
                $scope.id = data1;
                $scope.codigo = data;
              });
					})
			} else {

        console.log('okA')
				$http.post('/api/codigotermino/actualizar',$scope.codigo).
					success(function(data1) {
            console.log('okAD')
            $http.get('/api/codigotermino/'+  data1).
              success(function(data) {
                console.log('okADC')

                console.log(data)
                $scope.id = data1;
                $scope.codigo = data;
                console.log()
              });
					})

			}

			$scope.esgrabado = true;
			console.log($scope.esgrabado)

			//$scope.$apply();
		}

		$scope.codigo = {};

    if ( $routeParams.id  == 0){
      $scope.codigo.CodigoTerminoId = null;
      $scope.id = null;
      $scope.codigo = null;
    }else{
      $http.get('/api/codigotermino/'+  $routeParams.id).
        success(function(data) {
          $scope.id = $routeParams.id;
          $scope.codigo = data;
          console.log(data)
        });

    }



	});
