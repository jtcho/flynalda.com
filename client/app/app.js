'use strict';

angular.module('flynaldacomApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainCtrl'
    })
    .state('ask', {
      url: '/ask',
      templateUrl: 'app/ask/ask.html',
      controller: 'AskCtrl'
    })
    ;

    $urlRouterProvider
      .when('/ask', '/ask')
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });