var app = angular.module('TravelDiary', []);
app.controller('SignInController', function($scope, $http) {
   $scope.submit = function() {
	    $http
	        .post('http://localhost:3000/validateLogin', {
	        	email_id: $scope.email_id,
	        	password: $scope.password
	        	})
	        .success(function(data){
	        	console.log('Success: ' + data);
	        	window.location = '/UserProfile';
	        })
	        .error(function(data){
	            console.log('Error: ' + data);
	        });
	}; 
});