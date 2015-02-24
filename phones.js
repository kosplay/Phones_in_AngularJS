//angularJS app module

var phoneCtl = angular.module('trainer', []);

//controller that use a *PhoneService to separate concerns
phoneCtl.controller('PhoneController', ['$scope','PhoneService',function($scope, PhoneService){
	
	
	var onSuccess = function(response) {
		$scope.phones = response;
	};
	var onError = function(reason) {
		$scope.message = reason;
	};
	
	
	PhoneService.myCall().then(onSuccess, onError);
}]);

phoneCtl.controller('DetailController', ['$scope', 'DetailService','$routeParams', function($scope, DetailService, $routeParams){
	
	DetailService.getDetails($routeParams.phoneId).then(function(response){
		
		$scope.thisPhone = response;
		console.log($scope.thisPhone);
	});
	
}]);

var phonecatApp = angular.module('phonecatApp',['ngRoute','trainer']);
phonecatApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/phones', {
		templateUrl: 'partials/phone-list.html',
		controller: 'PhoneController'
	}).
	when('/phones/:phoneId', {
		templateUrl: 'partials/phone-detail.html',
		controller: 'DetailController'
	}).
	otherwise({
		redirectTo: '/phones'
	});
}]);

$(document).ready(function(){
	$("#detailPhone").hide();
	
});