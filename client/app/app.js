'use strict';

angular.module('harryAppLandingApp', [
  'harryAppLandingApp.constants',
  'harryAppLandingApp.util',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
