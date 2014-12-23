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
		$scope.GrabarDato = function() {
			console.log($scope.origen)
			if($scope.origen.OrigenProblemaId == null) {
				$http.post('/api/origenproblema/crear',$scope.origen).
					success(function(data1) {
            $http.get('/api/origenproblema/'+  data1).
              success(function(data) {
                $scope.id = data1;
                $scope.codigo = data;
              });
					})
			} else {



				$http.post('/api/origenproblema/actualizar',$scope.origen).
					success(function(data1) {
            $http.get('/api/origenproblema/'+  data1).
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

