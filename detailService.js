var module = angular.module('trainer');

module.factory('DetailService', ['$http', function($http){
	var getPhoneSpec = function(phoneId){
		var url = 'phones/' + phoneId + '.json';
		return $http.get(url).then(function(response){
			return response.data;
		});
	};
	
	return {
		getDetails : getPhoneSpec
	}
}]);