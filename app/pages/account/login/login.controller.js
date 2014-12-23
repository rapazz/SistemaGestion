'use strict';

angular.module('kcc.controllers')
  .controller('LoginCtrl', function ($scope, Auth, $location, $window) {
   
  Auth.isLoggedInAsync(function(loggedIn) {
          
        if ( loggedIn) {
          $location.path('/main');
        }
      })
   

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
