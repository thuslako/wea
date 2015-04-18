angular.module('WeApp')
	.controller('mainCTRL',function($scope,$http){

	$scope.getWea = function (){
			$http.get('http://api.openweathermap.org/data/2.5/weather?q='+$scope.city)
				.success(function(data, status, headers, config) {
					$scope.wea = data;
					if($scope.wea.main.temp)
						$scope.temp = $scope.wea.main.temp - 273.15;
					else if($scope.temp == -273.15)
						$scope.temp = 0; 
					console.log('get emm!');
	 	    	})
				.error(function(data, status, headers, config) {
	  				console.log('these nuts!');	
				});
	}
});