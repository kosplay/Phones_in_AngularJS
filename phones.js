//angularJS app module

var app = angular.module('trainer', []);

//controller that use a *PhoneService to separate concerns
var GetDataController = function($scope, PhoneService){
	
	
	var onSuccess = function(response) {
		$scope.phones = response;
	};
	var onError = function(reason) {
		$scope.message = reason;
	};
	
	
	PhoneService.myCall().then(onSuccess, onError);
}

var PhoneDetailController = function($scope){
	
	
}

app.controller('DetailController', PhoneDetailController);
app.controller('PhoneController', GetDataController);