var app = angular.module("ourApp", []);

app.controller("mainController", function ($scope, $http) {

	$scope.input = 'Marc';
	$scope.showResults = true;

	$scope.submit = function () { 

		$http.get("https://maps.googleapis.com/maps/api/geocode/json?address='" + $scope.address + "'").then(
			function (data) {
				var array = data.data;
				$scope.data = array[1];
				console.log($scope.data);
				$scope.showResults = false;
			}, function (err) {
				$scope.data = err;
			}
		);
	
	}
});