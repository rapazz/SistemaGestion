'use strict';

angular.module('smartApp')
.config(['$routeProvider',  function($routeProvider) {
	$routeProvider
		.when('/proyecto/ver/:id', {
					templateUrl: 'pages/proyecto/verProyecto.html',
					 controller: 'verProyectoController'
			     
		})
		.when('/proyecto/listar', {
					templateUrl: 'pages/proyecto/misProyectos.html',
					 controller: 'listadoProyectosController'
			     
		})
			.when('/proyecto/editar/:id', {
					templateUrl: 'pages/proyecto/editarFichaProyecto.html',
					 controller: 'editarProyectoController'
			     
		})
		
			.when('/proyecto/aprobacionEmail/:id', {
					templateUrl: 'pages/proyecto/aprobacionEmail.html',
					 controller: 'aprobacionEmailController'
			     
		})
			.when('/proyecto/bpProyectos', {
					templateUrl: 'pages/proyecto/bpProyectos.html',
					 controller: 'listadoProyectosBpController'
			     
		})

	
	
}

]);
