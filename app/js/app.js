var app = angular.module("ourApp", []);

app.controller("mainController", function ($scope, $http) {

	$scope.input = 'Marc';


	$scope.submit = function () { 

		$http.get("https://maps.googleapis.com/maps/api/geocode/json?address='" + $scope.address + "'").then(
			function (data) {
				$scope.data = data.data;
				console.log($scope.data);
			}, function (err) {
				$scope.data = err;
			}
		);
	
	}
});