var smartApp = angular.module('smartApp', [
  	'ngRoute',
  	//'ngAnimate', // this is buggy, jarviswidget will not work with ngAnimate :(
  	'ui.bootstrap',
  	'plunker',
  	 'ngCookies',
  	'app.main',
  	'app.navigation',
  	'app.localize',
  	'app.activity',
  	'app.smartui',
  	'kcc.directivas',
  	'services.config',
  	'elasticsearch',
  	'kcc.controllers',
  	'angularFileUpload',
  	'angularModalService',
  	'checklist-model'
  
  
  
]);


 smartApp.config(['$routeProvider', '$provide','$httpProvider', function($routeProvider, $provide,$httpProvider) {
  
    $routeProvider
      .otherwise('/');

    
    $httpProvider.interceptors.push('authInterceptor');
  }])
 .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
              // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
         //TODO se deshabilita mientras se realizan pruebas.
       //  config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/pages/account/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })
    .run(function ($rootScope, $location, Auth) {
     
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeSuccess', function (event, next) {
        
      Auth.isLoggedInAsync(function(loggedIn) {
          
        if ( !loggedIn) {
          if ($location.$$path.indexOf("/proyecto/aprobacionEmail/") ==-1)
          $location.path('/');
        }
      });
    });
  });

/*
smartApp.run(['$rootScope', 'settings', function($rootScope, settings) {
	settings.currentLang = settings.languages[1]; // en
}])
*/