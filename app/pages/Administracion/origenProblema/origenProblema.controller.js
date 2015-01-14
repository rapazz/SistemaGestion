'use strict';
angular.module('kcc.controllers')
	.controller('origenlistado', function($scope,$http,$location) {

		$http.get('/api/origenproblema').
			success(function(data) {
				$scope.data = data;
			});

    $scope.Agregar = function(){

      $location.path( "Administracion/origenProblema/editar/0");
    }

	})
		.controller('origeneditar', function($scope,$http, $routeParams) {
		$scope.esgrabado = false;
		$scope.CerrarGrabado = function() {
			console.log("cerro")
			$scope.esgrabado = false;

		}
    $scope.paginaValida = true;

    $scope.GrabarDato = function() {


      $scope.paginaValida = !$scope.formeditar.$error.required;

      if (!$scope.paginaValida) return;




      if ($scope.origen.EsActivo == 'true' || $scope.origen.EsActivo == 'false'){
        $scope.origen["EsActivo"] = 0;

        if ($scope.codigo.EsActivo){
          $scope.origen["EsActivo"] = 1;
        }

      }
			console.log($scope.origen)
			if($scope.origen.OrigenProblemaId == null) {
				$http.post('/api/origenproblema/crear',$scope.origen).
					success(function(data1) {
            $http.get('/api/origenproblema/'+  data1).
              success(function(data) {
                $scope.id = data1;
                $scope.codigo = data;
                $scope.origen.EsActivo = ( $scope.origen.EsActivo == 1)
              });
					})
			} else {



				$http.post('/api/origenproblema/actualizar',$scope.origen).
					success(function(data1) {
            $http.get('/api/origenproblema/'+  data1).
              success(function(data) {
                $scope.id = data1;
                $scope.origen = data;
                $scope.origen.EsActivo = ( $scope.origen.EsActivo == 1)
              });
					})

			}

			$scope.esgrabado = true;
			console.log($scope.esgrabado)

			//$scope.$apply();
		}

		$scope.origen = {};
    if ( $routeParams.id  == 0){
      $scope.origen.OrigenProblemaId = null;
      $scope.id = null;
      $scope.origen = null;
    }else {
      $http.get('/api/origenproblema/' + $routeParams.id).
        success(function (data) {
          $scope.id = $routeParams.id;


          $scope.origen = data;
        });
    }

	});

