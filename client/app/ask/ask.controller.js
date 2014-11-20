'use strict';

angular.module('flynaldacomApp')
.controller('AskCtrl', function($scope, $http) {

$scope.hide_alert = function() {
	$scope.success = false;
	$scope.error = false;
};

$scope.success = false;
$scope.error = false;
$scope.send = function () {
	var htmlBody = '<div>Name: ' + $scope.user.name + '</div>' +
	             '<div>Email: ' + $scope.user.email + '</div>' +
	             '<div>Message: ' + $scope.user.body + '</div>' +
	             '<div>Date: ' + (new Date()).toString() + '</div>';

	$http.post("/postEmail/", {
		name: $scope.user.name,
		email: $scope.user.email,
		content: $scope.user.body
	})
	.success(function (data) {
		$scope.success = true;
		$scope.user = {};
	})
	.error(function (data) {
		$scope.error = true;
	});
}

});