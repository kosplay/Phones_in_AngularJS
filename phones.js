//angularJS app module

var app = angular.module('trainer', []);

//controller that use a *PhoneService to separate concerns
app.controller('PhoneController', ['$scope','PhoneService',function($scope, PhoneService){
	
	
	var onSuccess = function(response) {
		$scope.phones = response;
	};
	var onError = function(reason) {
		$scope.message = reason;
	};
	
	
	PhoneService.myCall().then(onSuccess, onError);
}]);

app.controller('DetailController', ['$scope', function($scope){
	
	
}]);

$(document).ready(function(){
	$("#detailPhone").hide();
	
});