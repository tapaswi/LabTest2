var app = angular.module('TravelDiary', []);

/****************************DISPLAY USER PROFILE DETAILS*****************************/
app.controller('UserProfileController', function($scope, $http) {
	displayUserInfo();
	//console.log("UserProfileController");
	function displayUserInfo(){
		$http.get('http://localhost:3000/loadUserInfo')
			.success(function(data){
				$scope.userInfo = data;
				console.log("Success: " + data);
			})
			.error(function(data) {
                console.log('Error: ' + data);
			});
	};
});


/****************************CAPITALIZE FIRST LETTER*****************************/
app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});

/****************************DISPLAY USER STORY ON USER PROFILE*****************************/
app.controller('UserStoryDisplayController', function($scope, $http) {
    $http.get("http://localhost:3000/loadUserStories").success(function (data) {
		$scope.stories = data;	
	});
    
    $scope.deleteStory = function(trip_id) {
	    $http
	        .post('http://localhost:3000/removeStory', {
	        	trip_id:trip_id    	
	        })
	        .success(function(data){
	        	$http.get("http://localhost:3000/loadUserStories").success(function (data) {
	        		$scope.stories = data;	
	        	});
	        	console.log('Sucess:-- '+ data);
	        })
	        .error(function(data){
	            console.log('Error: ' + data);
	        });
	}; 
	
	$scope.updateStory = function(trip_id,tripName,description) {
	    $http
	        .post('http://localhost:3000/updateStory', {
	        	trip_id:trip_id,
	        	tripName:tripName,
	        	description:description
	        })
	        .success(function(data){
	        	$http.get("http://localhost:3000/loadUserStories").success(function (data) {
	        		$scope.stories = data;	
	        	});
	        })
	        .error(function(data){
	            console.log('Error: ' + data);
	        });
	}; 
});

/****************************INSERT/DELETE COMMENT*****************************/
app.controller('CommentController', function($scope, $http) {
	$scope.addComment = function(trip_id,mycomment) {		
		$http
		   	.post('http://localhost:3000/insertCommentInfo', {		   		
		        	trip_id:trip_id,
					comment:mycomment
		     })
		     .success(function(data){
		    	 	$http.get("http://localhost:3000/displayComments").success(function (data) {
		    	 		for(i=0;i<data.length;i++)		    	 		
		    	 			$scope.comments = data;
		    		});
		     })
		     .error(function(data){
		            console.log('Error: ' + data);
		     });
	}; 
	
	   $scope.remove = function(id) {
		    $http
		        .post('http://localhost:3000/removeComment', {
		        	comment_id:id      	
		        })
		        .success(function(data){
		        	$http.get("http://localhost:3000/displayComments").success(function (data) {
		        		$scope.comments = data;
		        	});
		        })
		        .error(function(data){
		            console.log('Error: ' + data);
		        });
		}; 
});


/****************************DISPLAY COMMENTS*****************************/
app.controller('CommentDisplayController', function($scope, $http) {
    $http.get("http://localhost:3000/displayComments").success(function (data) {
    
		$scope.comments = data;
	});
});


/**********************************UPDATE COMMENT********************************************/
app.controller('CommentUpdateController', function($scope, $http) {
	   $scope.updateComment = function(trip_id,comment_id,comment) {
		    $http
		        .post('http://localhost:3000/updateComment', {
		        	trip_id:trip_id,
		        	comment_id:comment_id,
		        	comment:comment
		        })
		        .success(function(data){
		        	$http.get("http://localhost:3000/displayComments").success(function (data) {
		        		console.log('Success:******* ' + data.comment);
		        		$scope.comments = data;
		        	});
		        })
		        .error(function(data){
		            console.log('Error: ' + data);
		        });
		}; 
	});

/********************COUNT TOTAL POST OF USER*****************************/
app.controller('PostController', function($scope, $http) {
    $http.get("http://localhost:3000/countPost").success(function (data) {
		$scope.totalPost = data;
	});
});


/********************INSERT USER STORY*****************************/
app.controller('UserStoryController', function($scope, $http) {
	$scope.submit = function() {
		$http
			.post('http://localhost:3000/insertUserStory', {
		        	tripName:$scope.tripName,
					source:$scope.source,
					destination:$scope.destination,
					description:$scope.description
			})
			.success(function(data){
		        	console.log('Success: ' + data);
			})
			.error(function(data){
					console.log('Error: ' + data);
			});
	}; 
});


/****************************DISPLAY FOLLOWERS STORY ON USER WALL*****************************/
app.controller('FollowersStoryDisplayController', function($scope, $http) {
    //$http.get("http://localhost:3000/loadFollowersStories").success(function (data) {
    $http.get("http://localhost:3000/loadFollowerStories").success(function (data) {
    	console.log('nnnnnnnnnnnnnnn');
		$scope.stories = data;	
	});
});

/************************COUNT TOTAL FOLLOWERS OF USER*****************************/
app.controller('FollowersSelectController', function($scope, $http) {
    $http.get("http://localhost:3000/countFollowers").success(function (data) {
		$scope.totalFollowers = data;
	});
});

/********************DISPLAY FOLLOWERS AND SUGGESTIONS LIST*****************************/
app.controller('FollowerAndSuggestionController', function($scope, $http) {
    $http.get("http://localhost:3000/getFollowers").success(function (data) {
		$scope.Followers = data;
		console.log(data);
	});
    $http.get("http://localhost:3000/suggestFollower").success(function (data) {
		$scope.users = data;
	});
});


/**********************************INSERT/REMOVE FOLLOWERS********************************************/
app.controller('FollowersController', function($scope, $http) {
	   $scope.sendId = function(id) {
		    $http
		        .post('http://localhost:3000/insertFollowersInfo', {
		        	follower_id:id      	
		        })
		        .success(function(data){
		        	$http.get("http://localhost:3000/suggestFollower").success(function (data) {
		        		console.log('sssssssssssss');
		        		$scope.users = data;
		        	});
		        	$http.get("http://localhost:3000/getFollowers").success(function (data) {
		        		console.log('fffffffffffffffffff');
		        		$scope.Followers = data;
		        	});
		        })
		        .error(function(data){
		            console.log('Error: ' + data);
		        });
		}; 
		
		$scope.removeId = function(id) {
		    $http
		        .post('http://localhost:3000/removeFollowersInfo', {
		        	follower_id:id      	
		        })
		        .success(function(data){
		        	$http.get("http://localhost:3000/suggestFollower").success(function (data) {
		        		$scope.users = data;
		        	});
		        	$http.get("http://localhost:3000/getFollowers").success(function (data) {
		        		$scope.Followers = data;
		        	});
		        })
		        .error(function(data){
		            console.log('Error: ' + data);
		        });
		}; 
	});

/**********************************LIKE / DISLIKE********************************************/
app.controller('LikeController', function($scope, $http) {
	   $scope.sendId = function(id) {
		    $http
		        .post('http://localhost:3000/insertLikeInfo', {
		        	trip_id:id      	
		        })
		        .success(function(data){
		        	console.log('+++++++++++++++++++++++');
		        	$http.get("http://localhost:3000/countLikes").success(function (data) {
		        		$scope.likeInfo = data;
		        		console.log('----------------------');
		        	});
		        })
		        .error(function(data){
		            console.log('Error: ' + data);
		        });
		}; 
	});


/********************COUNT NUMBER OF LIKES*****************************/
app.controller('LikeCountController', function($scope, $http) {
    $http.get("http://localhost:3000/countLikes").success(function (data) {
		$scope.likeInfo = data;
	});
});


/****************************DISPLAY PHOTOS*****************************/
app.controller('DisplayPhotosController', function($scope, $http) {
    $http.get("http://localhost:3000/displayPhotos").success(function (data) {
		$scope.photos = data;
	});
});

/********************************************************************/
app.controller('CheckInController', function($scope, $http) {
	   $scope.checkMeIn = function(location) {
		   console.log('000000000000000000000000000000'+location +'00000000000000000000000');
		    $http
		        .post('http://localhost:3000/insertCheckInInfo', {
		        	location:location
		        })
		        .success(function(data){		       
		      		console.log('Success: ' + data);		        	
		        })
		        .error(function(data){
		            console.log('Error: ' + data);
		        });
		}; 
	});

/****************************************** LOGOUT ************************************************/
app.controller('LogoutController', function($scope, $http) {
	console.log("logout controller");
	$scope.logout = function() {
		$http
		   	.post('http://localhost:3000/userLogout', {
		        	/*trip_id:$scope.trip_id,
					comment:$scope.comment*/
		     })
		     .success(function(data){
		    	 	console.log('logged out ');
		        	//console.log('Success: ' + data);
		        	window.location = '/';
		     })
		     .error(function(data){
		            console.log('Error: ' + data);
		     });
	}; 
});