//business logic: PhoneService
(function(){

	var module = angular.module("trainer");
	
	module.factory('PhoneService', ['$http', function($http){
		
		var getPhoneService = function(){
			var url = 'phones/phones.json';
			return $http.get(url).then(function(response){
				return response.data;
			});
		};
		
		return {
			myCall : getPhoneService
			
		};
		
	}]);

}());