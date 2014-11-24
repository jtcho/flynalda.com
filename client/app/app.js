'use strict';

angular.module('flynaldacomApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'angular-carousel'
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
    .state('tips', {
      url: '/tips',
      templateUrl: 'app/tips/tips.html',
      controller: function() {}
    })
    .state('activities', {
      url: '/activities',
      templateUrl: 'app/activities/activities.html',
      controller: 'ActivitiesCtrl'
    })
    ;

    $urlRouterProvider
      .when('/ask', '/ask')
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });