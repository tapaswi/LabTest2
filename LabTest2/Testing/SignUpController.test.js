describe('SignUpController', function() {
	  beforeEach(module('TravelDiary'));

	  var $controller;

	  beforeEach(inject(function(_$controller_){
	    // The injector unwraps the underscores (_) from around the parameter names when matching
	    $controller = _$controller_;
	  }));

	  describe('$scope.first_name', function() {
		    it('email id with length > 5 char', function() {
		      var $scope = {};
		      var controller = $controller('SignInController', { $scope: $scope });
		     
		      expect($scope.first_name).toEqual('noname');
		    });

		   
		  });
		});