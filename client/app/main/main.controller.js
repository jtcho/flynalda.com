'use strict';

angular.module('flynaldacomApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.members = [
    	'Sam',
    	'JT',
    	'Steven',
    	'Justin',
    	'Julia'
    ];

  });
