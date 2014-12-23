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


		$scope.GrabarDato = function() {
			console.log($scope.codigo)
			if($scope.codigo.CodigoTerminoId == null) {
				$http.post('/api/codigotermino/crear',$scope.codigo).
					success(function(data1) {
            console.log('ok')
            $http.get('/api/codigotermino/'+  data1).
              success(function(data) {
                $scope.id = data1;
                $scope.codigo = data;
              });
					})
			} else {


				$http.post('/api/codigotermino/actualizar',$scope.codigo).
					success(function(data1) {
            $http.get('/api/codigotermino/'+  data1).
              success(function(data) {
                $scope.id = data1;
                $scope.codigo = data;
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
        });

    }



	});
