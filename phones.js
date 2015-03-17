//angularJS app module, use ng-Route and ng-view to navigate between pages
var phonecatApp = angular.module('phonecatApp',['ngRoute','trainer', 'ui.bootstrap']);
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

phonecatApp.controller('NavController', ['$scope', function($scope){
	$scope.navCollapsed = true;
}]);

//a module to specify behaviour of controllers. Separate from phonecatApp.
var phoneCtl = angular.module('trainer', []);

//category page controller that use a *PhoneService to separate concerns
phoneCtl.controller('PhoneController', ['$scope','PhoneService',function($scope, PhoneService){
	
	
	var onSuccess = function(response) {
		$scope.phones = response;
	};
	var onError = function(reason) {
		$scope.message = reason;
	};
	
	
	PhoneService.myCall().then(onSuccess, onError);
}]);

//detail page controller which uses a *DetailService to separate concerns
phoneCtl.controller('DetailController', ['$scope', 'DetailService','$routeParams', function($scope, DetailService, $routeParams){
	
	DetailService.getDetails($routeParams.phoneId).then(function(response){
		
		$scope.thisPhone = response;
		console.log($scope.thisPhone);
	});
	
}]);

