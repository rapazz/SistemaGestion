'use strict';
angular.module('kcc.controllers')

  .controller('tipolistado', function($scope,$location,$http) {


		$http.get('/api/tipoIncidente').
			success(function(data) {
				$scope.data = data;
			});

    $scope.Agregar = function(){

      $location.path( "Administracion/tipoIncidente/editar/0");
    }

		$scope.message = 'subtipolistado';

	})
	.controller('tipoeditar', function($scope,$http, $routeParams) {

		$scope.esgrabado = false;
		$scope.CerrarGrabado = function() {
			console.log("cerro")
			$scope.esgrabado = false;

		}
		$scope.GrabarDato = function() {
			console.log($scope.tipoincidente)
			if($scope.tipoincidente.TipoIncidenteId == null) {
				$http.post('/api/tipoincidente/crear',$scope.tipoincidente).
					success(function(data) {
						console.log(data)
					})
			} else {


				$http.post('/api/tipoincidente/actualizar',$scope.tipoincidente).
					success(function(data) {
						console.log(data)
					})

			}

			$scope.esgrabado = true;
			console.log($scope.esgrabado)

			//$scope.$apply();
		}

		$scope.tipoincidente = {};

    if ( $routeParams.id  == 0){
      $scope.id = null;
      $scope.tipoincidente = null;
    }else{
      $http.get('/api/tipoincidente/'+  $routeParams.id).
        success(function(data) {
          $scope.id = $routeParams.id;


          $scope.tipoincidente = data;
        });

    }



	});











