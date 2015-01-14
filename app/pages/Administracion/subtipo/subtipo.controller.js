

'use strict';
angular.module('kcc.controllers')

	.controller('subtipoeditar', function($scope,$http,$location, $routeParams) {

		$scope.esgrabado = false;
		$scope.CerrarGrabado = function() {
			console.log("cerro")
			$scope.esgrabado = false;

		}
    $scope.paginaValida = false;


		$scope.GrabarDato = function() {


      $scope.paginaValida = !$scope.formeditar.$error.required;

      if (!$scope.paginaValida) return;



      console.log($scope.subtipoincidente)
			if($scope.subtipoincidente.SubTipoIncidenteId == null) {
				$http.post('/api/subtipo/crear',$scope.subtipoincidente).
					success(function(data1) {
            $http.get('/api/subtipo/'+  data1).
              success(function(data) {
                $scope.id = data1;
                $scope.subtipoincidente = data;
              });
					})
			} else {


				$http.post('/api/subtipo/actualizar',$scope.subtipoincidente).
					success(function(data1) {
            $http.get('/api/subtipo/'+  data1).
              success(function(data) {
                $scope.id = data1;
                $scope.subtipoincidente = data;
                $scope.subtipoincidente.EsActivo = ( $scope.subtipoincidente.EsActivo == 1)
              });
					})

			}

			$scope.esgrabado = true;
			console.log($scope.esgrabado)

			//$scope.$apply();
		}

		$scope.subtipoincidente = {};


    if ( $routeParams.id  == 0){
      $scope.subtipoincidente.SubTipoIncidenteId = null;
      $scope.id = null;
      $scope.origen = null;
    }else {
      $http.get('/api/subtipo/' + $routeParams.id).
        success(function (data) {
          $scope.id = $routeParams.id;
          $scope.subtipoincidente = data;
        });
    }

	})

	.controller('subtipolistado', function($scope,$location,$http) {

    console.log('aqui')

		$http.get('/api/subtipo').
			success(function(data) {
				$scope.data = data;
			});

    $scope.Agregar = function(){

      $location.path( "Administracion/subtipo/editar/0");
    }


	})

