// create the controller and inject Angular's $scope
//var scotchApp = angular.module('scotchApp', ['ngRoute']);
scotchApp.controller('mainController', function($scope,$http) {
    // create a message to display in our view
    $scope.search = {};
    $scope.message = 'Everyone come and see how good I look!';
    $http.get("http://127.0.0.1:8020/game/game.json")
  		.success(function (response) {
  			$scope.games = response.records;
  	});
    $scope.queryGame = function(){
	 	alert("hi");
	}
});
 
scotchApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});
 
scotchApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
})