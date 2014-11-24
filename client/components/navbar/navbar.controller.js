'use strict';

angular.module('flynaldacomApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
      {
        'title': 'Home',
        'link': '/'
      },
      {
        'title': 'Activities',
        'link': '/activities'
      },
      {
        'title': 'Tips',
        'link': '/tips'
      },
      {
        'title': 'Ask Nalda',
        'link': '/ask'
      },
      // {
      //   'title': 'Gallery',
      //   'link': '#'
      // }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });