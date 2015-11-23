var app = angular.module('TravelDiary', []);
app.controller('SignUpController', function($scope, $http) {
   $scope.submit = function() {
	    $http
	        .post('http://localhost:3000/insertPersonalInfo', {
	        	first_name:$scope.first_name,
	        	last_name:$scope.last_name,
	        	username: $scope.username,
	        	email_id: $scope.email_id,
	        	password: $scope.password,
	        	gender: $scope.gender,
	        	dob:$scope.dob,
	        	contact_no:$scope.contact,
	        	profession:$scope.profession,
	        	city:$scope.city,
	        	state:$scope.state,
	        	country:$scope.country
	        })
	        .success(function(data){
	        	console.log('Success: ' + data);
	        	window.location = '/signIn';
	        })
	        .error(function(data){
	            console.log('Error: ' + data);
	        });
	}; 
});