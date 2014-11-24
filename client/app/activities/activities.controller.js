'use strict';

angular.module('flynaldacomApp')
	.controller('ActivitiesCtrl', function($scope, $http) {
		$scope.activities = {};
		$scope.keys = [];
		$scope.images = [];

		$http.get('/api/activities').success(function(activities) {
			$scope.activities = activities;
			var keys = Object.keys($scope.activities);
			for (var i = 0; i < keys.length; i++)
				$scope.keys.push({
					name: $scope.activities[keys[i]].name,
					key: keys[i]
				});
			$scope.changeActive('jungletour');
		});

		$scope.changeActive = function(nextActive) {
			$scope.active = $scope.activities[nextActive];
			$scope.images = [];
			for (var i = 1; i <= $scope.active.images; i++)
				$scope.images.push('/assets/images/activities/'+nextActive+'/'+i+'.jpg');
		};

	});