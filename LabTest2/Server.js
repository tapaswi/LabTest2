var express  	=  require("express");
var mysql   	=  require("mysql");
var app      	=  express();
var bodyParser 	=  require('body-parser');
var CryptoJS	=  require('node-cryptojs-aes').CryptoJS;
var session 	=  require('express-session');
var Array       =  require('node-array');
var sessions; //SESSION VARIABLE

//**********************************************CONFIGURE MYSQL*********************************************************
var connection = mysql.createConnection({
    host      :  "localhost",
    user      :  "root",
    password  :  "",
    database  :  "traveldiary"
});

//**********************************************CONNECT TO MYSQL DB******************************************************
connection.connect(function(error){
	  if(error)
		  console.log("Problem with MySQL "+error);
	  else
		  console.log("Connected To Database");
});

//****************************************CONFIGURE EXPRESS SERVER********************************************************
app.use(express.static(__dirname + '/angular'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//CREATE SESSION
app.use(session({secret: 'pmtmp'}));

//***************************************DEFINE ROUTE TO APPLICATION******************************************************
app.get('/',function(req,res){
	  res.sendfile('index.html');
});

/************************************** HTML FILES ***************************************/
app.get('/signIn',function(req,res){
	  res.sendfile('View/signIn.html');
});
app.get('/signUp',function(req,res){
	  res.sendfile('View/signUp.html');
});
app.get('/UserProfile',function(req,res){
	  res.sendfile('View/UserProfile.html');
});
app.get('/userWall',function(req,res){
	  res.sendfile('View/userWall.html');
});
app.get('/follower',function(req,res){
	  res.sendfile('View/follower.html');
});
app.get('/suggestion',function(req,res){
	  res.sendfile('View/suggestion.html');
});
app.get('/displayStory',function(req,res){
	  res.sendfile('View/displayStory.html');
});


/************************************** CONTROLLERS **************************************/
app.get('/Controllers/SignUpController.js',function(req,res){
	  res.sendfile('Controllers/SignUpController.js');
});
app.get('/Controllers/SignInController.js',function(req,res){
	  res.sendfile('Controllers/SignInController.js');
});
app.get('/Controllers/UserProfileController.js',function(req,res){
	  res.sendfile('Controllers/UserProfileController.js');
});
app.get('/Controllers/UserStoryController.js',function(req,res){
	  res.sendfile('Controllers/UserStoryController.js');
});
app.get('/Controllers/FollowersSelectController.js',function(req,res){
	  res.sendfile('Controllers/FollowersSelectController.js');
});
app.get('/Controllers/UserStoryDisplayController.js',function(req,res){
	  res.sendfile('Controllers/UserStoryDisplayController.js');
});
app.get('/Controllers/MainController.js',function(req,res){
	  res.sendfile('Controllers/MainController.js');
});
app.get('/Controllers/PostController.js',function(req,res){
	  res.sendfile('Controllers/PostController.js');
});
app.get('/Controllers/LogoutController.js',function(req,res){
	  res.sendfile('Controllers/LogoutController.js');
});

app.get('/map.js',function(req,res){
	  res.sendfile('View/map.js');
});

/************************************** IMAGES *******************************************/
app.get('/images/TravellerFull.png',function(req,res){
	  res.sendfile('images/TravellerFull.png');
});
app.get('/images/male.jpg',function(req,res){
	  res.sendfile('images/male.png');
});
app.get('/images/female.jpg',function(req,res){
	  res.sendfile('images/female.png');
});
app.get('/images/img/direction.png',function(req,res){
	  res.sendfile('images/img/direction.png');
});
app.get('/images/img/office.jpg',function(req,res){
	  res.sendfile('images/img/office.jpg');
});
app.get('/images/img/icon-web.png',function(req,res){
	  res.sendfile('images/img/icon-web.png');
});
app.get('/images/img/icon-heart.png',function(req,res){
	  res.sendfile('images/img/icon-heart.png');
});
app.get('/images/img/icon-print.png',function(req,res){
	  res.sendfile('images/img/icon-print.png');
});
app.get('/images/img/paris.jpg',function(req,res){
	  res.sendfile('images/img/paris.jpg');
});
app.get('/images/img/sydney.jpg',function(req,res){
	  res.sendfile('images/img/sydney.jpg');
});
app.get('/images/img/blank.gif',function(req,res){
	  res.sendfile('images/img/blank.gif');
});
app.get('/images/img/loading.gif',function(req,res){
	  res.sendfile('images/img/loading.gif');
});
app.get('/images/img/nav.gif',function(req,res){
	  res.sendfile('images/img/nav.gif');
});
app.get('/images/img/washington.jpg',function(req,res){
	  res.sendfile('images/img/washington.jpg');
});
app.get('/images/img/london.jpg',function(req,res){
	  res.sendfile('images/img/london.jpg');
});
app.get('/images/img/statue_of_liberty.jpg',function(req,res){
	  res.sendfile('images/img/statue_of_liberty.jpg');
});
app.get('/images/img/pizza_tower.jpg',function(req,res){
	  res.sendfile('images/img/pizza_tower.jpg');
});
app.get('/images/img/makeMyTrip.jpg',function(req,res){
	  res.sendfile('images/img/makeMyTrip.jpg');
});
app.get('/assets/img/callout.jpg',function(req,res){
	  res.sendfile('assets/img/callout.jpg');
});
app.get('/assets/img/bg.jpg',function(req,res){
	  res.sendfile('assets/img/bg.jpg');
});
app.get('/assets/img/sky.jpg',function(req,res){
	  res.sendfile('assets/img/sky.jpg');
});
app.get('/assets/img/paris.jpg',function(req,res){
	  res.sendfile('assets/img/paris.jpg');
});
app.get('/images/img/1.jpg',function(req,res){
	  res.sendfile('images/img/1.jpg');
});
app.get('/images/img/2.jpg',function(req,res){
	  res.sendfile('images/img/2.jpg');
});
app.get('/images/img3.jpg',function(req,res){
	  res.sendfile('images/img/3.jpg');
});
app.get('/images/img/thumb-1.jpg',function(req,res){
	  res.sendfile('images/img/thumb-1.jpg');
});
app.get('/images/img/thumb-2.jpg',function(req,res){
	  res.sendfile('images/img/thumb-2.jpg');
});
app.get('/images/img/thumb-3.jpg',function(req,res){
	  res.sendfile('images/img/thumb-3.jpg');
});


/************************************** CSS AND JS **************************************/
app.get('/assets/css/bootstrap.css',function(req,res){
	  res.sendfile('assets/css/bootstrap.css');
});
app.get('/assets/css/bootstrap.min.css',function(req,res){
	  res.sendfile('assets/css/bootstrap.min.css');
});
app.get('/assets/css/font-awesome.min.css',function(req,res){
	  res.sendfile('assets/css/font-awesome.min.css');
});
app.get('/assets/css/formValidation.css',function(req,res){
	  res.sendfile('assets/css/formValidation.css');
});
app.get('/assets/css/signinFormValidation.css',function(req,res){
	  res.sendfile('assets/css/signinFormValidation.css');
});
app.get('/assets/css/style.css',function(req,res){
	  res.sendfile('assets/css/style.css');
});
app.get('/assets/css/styles.css',function(req,res){
	  res.sendfile('assets/css/styles.css');
});
app.get('/assets/css/commentList.css',function(req,res){
	  res.sendfile('assets/css/commentList.css');
});
app.get('/assets/plugins/angular.js',function(req,res){
	  res.sendfile('assets/plugins/angular.js');
});
app.get('/assets/plugins/bootstrap.js',function(req,res){
	  res.sendfile('assets/plugins/bootstrap.js');
});
app.get('/assets/plugins/jquery-1.10.2.js',function(req,res){
	  res.sendfile('assets/plugins/jquery-1.10.2.js');
});
app.get('/assets/js/jquery.parallax-1.1.3.js',function(req,res){
	  res.sendfile('assets/js/jquery.parallax-1.1.3.js');
});
app.get('/assets/js/bootstrap.js',function(req,res){
	  res.sendfile('assets/js/bootstrap.js');
});
app.get('/assets/js/jquery-1.10.2.js',function(req,res){
	  res.sendfile('assets/js/jquery-1.10.2.js');
});
app.get('/assets/font-awesome/css/font-awesome.min.css',function(req,res){
	  res.sendfile('assets/font-awesome/css/font-awesome.min.css');
});
app.get('/assets/css/zoom.css',function(req,res){
	  res.sendfile('assets/css/zoom.css');
});
app.get('/assets/css/zoom.css',function(req,res){
	  res.sendfile('assets/css/zoom.css');
});


/**************************************************************************************************************************
 ****************************************************HANDLING SESSIONS*****************************************************
**************************************************************************************************************************/
/*
app.get('/',function(req,res){
	res.sendFile('signIn.html', { root: "View" });
	  sessions = req.session;
	  if(sessions.email){
		  res.redirect('/profile.html');
	  }
	  else {
		  res.render('index.html');
	  }
});

*/

/**************************************************************************************************************************
 **********************************INSERT INFORMATION TO PERSONAL_INFO AND LOGIN_INFO TABLE********************************
**************************************************************************************************************************/
app.post('/insertPersonalInfo',function(req,res){
	res.header("Access-Control-Allow-Origin", "http://localhost");
	res.header("Access-Control-Allow-Methods", "GET, POST");
	
    var profile_image,
    first_name=req.body.first_name,
    last_name=req.body.last_name,
    email_id=req.body.email_id,		
    gender=req.body.gender,
    dob=req.body.dob,
    contact_no=req.body.contact,
    profession=req.body.profession,
    city=req.body.city,
    state=req.body.state,
    country=req.body.country,
    doj,
    user_id;
    var password = CryptoJS.AES.encrypt(req.body.password,"pass").toString();	
    
    //ASSIGN DEFAULT PROFILE PICTURE
    if(gender == "Female")
    	profile_image = "/images/female.jpg"
    else 
    	profile_image = "/images/male.jpg"
    		
    //COMPUTE DATE OF JOIN
    var dateNow = new Date();
	var dd = dateNow.getDate();
	var monthSingleDigit = dateNow.getMonth() + 1,
    mm = monthSingleDigit < 10 ? '0' + monthSingleDigit : monthSingleDigit;
	var yy = dateNow.getFullYear().toString();
	doj = yy + "-" + mm + "-" + dd;
	    
    var data = {
        "error":1,
        "item":""
    };
    
    console.log(req.body);
    //QUERY TO INSERT INTO PERSONAL_INFO AND LOGIN_INFO TABLE
    connection.query("INSERT INTO `personal_info`(`profile_image`,`first_name`,`last_name`,`dob`,`gender`,`profession`,`contact_no`,`city`,`state`,`country`,`doj`) VALUES ('" + profile_image + "','" + first_name + "','" + last_name + "','" + dob + "','" + gender + "','" + profession + "','" + contact_no + "','" + city + "','" + state + "','" + country + "','" + doj + "')",function(err,result){   
    	if(!!err)
    		data["item"] = "Error Adding data";
        else{
            data["error"] = 0;
            data["item"] = "Record Added Successfully";
            user_id = result.insertId;
            
            connection.query("INSERT INTO `login_info`(`user_id`,`email_id`,`password`) VALUES ('" + user_id + "','"  + email_id + "','" + password + "')",function(err, result){   
            	if(!!err)
            		data["item"] = "Error Adding data";
                else{
                    data["error"] = 0;
                    data["item"] = "Record Added Successfully";
                }
        	});
            
            //SESSION
            sessions = req.session;
            sessions.email = email_id;
            sessions.user_id = user_id;
            //console.log("session: " + sessions.email);
            //console.log("user ID: "+ sessions.user_id);
            
			res.redirect("/UserProfile")
        }
		res.end('record inserted...');	
	});    
});

 
/*************************************************************************************************************************
 ****************************************TO AUTHENTICATE USER LOGIN*******************************************************
**************************************************************************************************************************/
app.post('/validateLogin',function(req,res){
	req.header("Access-Control-Allow-Origin", "http://localhost");
	req.header("Access-Control-Allow-Methods", "GET, POST");
	connection.query("SELECT * from login_info",function(err,rows){  		
		for(var i=0; i<rows.length; i++){
			if(rows[i].email_id===req.body.email_id){
				var password = CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(rows[i].password,"pass"));
				if(password===req.body.password){
					console.log("Login Successful!!");

		            //SESSION
		            sessions = req.session;
		            sessions.email = req.body.email_id;
		            sessions.user_id = rows[i].user_id;
		            console.log("session: " + sessions.email);
		            console.log("user ID: "+ sessions.user_id);

					res.redirect("/UserProfile")
					
					break;
		        }
				else
					console.log("Invalid Password");
		    }
		    else{
		    	console.log("Invalid Email.");
		    }
		}
	});

});


/*************************************************************************************************************************
 ****************************************TO DISPLAY USER PROFIE*******************************************************
**************************************************************************************************************************/
app.get('/loadUserInfo',function(req,res){
	connection.query("SELECT * from personal_info where user_id='" + sessions.user_id + "'",function(err,rows){
		//console.log(rows);
		if(err){
			console.log("ERROR in database: "+err);
		}
		else{
			res.end(JSON.stringify(rows));
			console.log("Connected to the Database!");
		}
	});
});


/*************************************************************************************************************************
 ****************************************TO DISPLAY USER STORY IN PROFILE*******************************************************
**************************************************************************************************************************/
app.get('/loadUserStories',function(req,res){
	connection.query("SELECT * from user_stories where user_id='" + sessions.user_id + "'",function(err,rows){
		if(err){
			console.log("ERROR in database: "+err);
		}
		else{
			res.end(JSON.stringify(rows));
		}
	});
});



/*************************************************************************************************************************
 ****************************************TO DISPLAY FOLLOWERS STORY ON WALL*******************************************************
**************************************************************************************************************************/
app.get('/loadFollowerStories',function(req,res){
	connection.query("SELECT * from user_stories where user_id in (SELECT follower_id from follower where user_id='" + sessions.user_id + "')",function(err,rows){
		if(err){
			console.log("ERROR in database: "+err);
		}
		else{
			res.end(JSON.stringify(rows));
		}
	});
});


/**************************************************************************************************************************
 **********************************SELECT TOTAL FOLLOWERS FROM FOLLOWER TABLE********************************
**************************************************************************************************************************/
app.get('/countFollowers',function(req,res){
//	connection.query("SELECT COUNT(*) from follower where user_id='" + sessions.user_id + "'",function(err,rows){
	connection.query("SELECT COUNT(*) as Count from follower where follower_id='" + sessions.user_id + "'",function(err,rows){
		//console.log("followers count = " + rows[0].Count);
		if(err){
			console.log("ERROR in database: "+err);
		}
		else{
			res.end(JSON.stringify(rows[0].Count));
			//console.log("Connected to the Database!");
		}
	});
});


/**************************************************************************************************************************
 **********************************SELECT TOTAL Posts FROM User_Stories TABLE********************************
**************************************************************************************************************************/
app.get('/countPost',function(req,res){
	//connection.query("SELECT COUNT(*) from follower where user_id='" + sessions.user_id + "'",function(err,rows)
	connection.query("SELECT COUNT(*) as Count from user_stories where user_id='" + sessions.user_id + "'",function(err,rows){
		//console.log("posts count = " + rows[0].Count);
		if(err){
			console.log("ERROR in database: "+err);
		}
		else{
			res.end(JSON.stringify(rows[0].Count));
			console.log("Connected to the Database!");
		}
	});
});


/**************************************************************************************************************************
 **********************************INSERT INFORMATION TO USER_STORIES TABLE********************************
**************************************************************************************************************************/
app.post('/insertUserStory',function(req,res){
	res.header("Access-Control-Allow-Origin", "http://localhost");
	res.header("Access-Control-Allow-Methods", "GET, POST");
	
	var	tripName = req.body.tripName,
	source = req.body.source,
	destination = req.body.destination,
	description = req.body.description,
	user_id = sessions.user_id;       //GET USER ID FROM SESSION VARIABLE
    console.log('body:---- '+req.body);
    var data = {
        "error":1,
        "item":""
    };
    
    //QUERY TO INoSERT INTO USER_STORIES TABLE
    connection.query("INSERT INTO `user_stories`(`user_id`,`tripName`,`destination`,`source`,`description`) VALUES ('" + user_id + "','" + tripName + "','" + destination + "','" + source + "','" + description +"')",function(err,result){   
    	if(!!err)
    		data["item"] = "Error Adding data";
        else{
            data["error"] = 0;
            data["item"] = "Record Added Successfully";
        }
		res.end('record inserted...');	
	});    
});



/**************************************************************************************************************************
 **********************************INSERT CHECK LOCATION TO CHECK_INS TABLE********************************
**************************************************************************************************************************/
app.post('/insertCheckInInfo',function(req,res){
	res.header("Access-Control-Allow-Origin", "http://localhost");
	res.header("Access-Control-Allow-Methods", "GET, POST");
	
	var	location = req.body.location,
	user_id = sessions.user_id;  

	console.log('111111111111111111111111111111111111111111111 '+location+'1111111111111111111111111');
    console.log('body:---- '+req.body);
    var data = {
        "error":1,
        "item":""
    };
    
    connection.query("INSERT INTO `check_ins`(`user_id`,`check_in`) VALUES ('" + user_id + "','" + location +"')",function(err,result){   
    	if(!!err)
    		data["item"] = "Error Adding data";
        else{
            data["error"] = 0;
            data["item"] = "Record Added Successfully";
        }
		res.end('record inserted...');	
	});    
});


/**************************************************************************************************************************
 **********************************INSERT INTO FOLLOWERS TABLE********************************
**************************************************************************************************************************/
app.post('/insertFollowersInfo',function(req,res){
	res.header("Access-Control-Allow-Origin", "http://localhost");
	res.header("Access-Control-Allow-Methods", "GET, POST");
	console.log("**************");
	console.log(req.body);
	
    var user_id=sessions.user_id,   // RETRIEVE FROM SESSION ID
    follower_id=req.body.follower_id;
	
    var data = {
        "error":1,
        "item":""
    };
    
    connection.query("INSERT INTO `follower`(`user_id`,`follower_id`) VALUES ('" + user_id + "','" + follower_id + "')",function(err,result){   
    	if(!!err)
    		data["item"] = "Error Adding data";
        else{
            data["error"] = 0;
            data["item"] = "Record Added Successfully";
        }
		res.end('record inserted...'+req.body.follower_id);	
	});    
});



/**************************************************************************************************************************
 **********************************DELETE RECORD FROM FOLLOWER TABLE********************************
**************************************************************************************************************************/
app.post('/removeFollowersInfo',function(req,res){
	res.header("Access-Control-Allow-Origin", "http://localhost");
	res.header("Access-Control-Allow-Methods", "GET, POST");
	console.log("**************");
	console.log(req.body);
	
    var user_id=sessions.user_id,   // RETRIEVE FROM SESSION ID
    follower_id=req.body.follower_id;
	
    var data = {
        "error":1,
        "item":""
    };
    //DELETE FROM `follower` WHERE `follower_id`= 31 and `user_id`= 30 
    connection.query("DELETE FROM `follower` WHERE `follower_id`="+follower_id+ " and `user_id`="+user_id,function(err,result){   
    	if(!!err)
    		data["item"] = "Error Adding data";
        else{
            data["error"] = 0;
            data["item"] = "Record Added Successfully";
        }
		res.end('record deleted...');	
	});    
});




/**************************************************************************************************************************
 **********************************REMOVE COMMENT FROM COMMENT TABLE********************************
**************************************************************************************************************************/
app.post('/removeComment',function(req,res){
	res.header("Access-Control-Allow-Origin", "http://localhost");
	res.header("Access-Control-Allow-Methods", "GET, POST");
	
    var user_id=sessions.user_id,   
    comment_id=req.body.comment_id;
	
    var data = {
        "error":1,
        "item":""
    };
    connection.query("DELETE FROM `comment_info` WHERE `comment_id`="+comment_id,function(err,result){   
    	if(!!err)
    		data["item"] = "Error Adding data";
        else{
            data["error"] = 0;
            data["item"] = "Record Added Successfully";
        }
		res.end('record deleted...');	
	});    
});


/**************************************************************************************************************************
 **********************************REMOVE STORY FROM USER STORY TABLE********************************
**************************************************************************************************************************/
app.post('/removeStory',function(req,res){
	res.header("Access-Control-Allow-Origin", "http://localhost");
	res.header("Access-Control-Allow-Methods", "GET, POST");
	
    var user_id=sessions.user_id,   
    trip_id=req.body.trip_id;
	
    var data = {
        "error":1,
        "item":""
    };
    connection.query("DELETE FROM `user_stories` WHERE `trip_id`="+trip_id,function(err,result){   
    	if(!!err)
    		data["item"] = "Error Adding data";
        else{
            data["error"] = 0;
            data["item"] = "Record Added Successfully";
        }
		res.end('record deleted...');	
	});    
});


/**************************************************************************************************************************
 **********************************UPDATE INFO TO COMMENT TABLE********************************
**************************************************************************************************************************/
app.post('/updateComment',function(req,res){
	res.header("Access-Control-Allow-Origin", "http://localhost");
	res.header("Access-Control-Allow-Methods", "GET, POST");
	
    var user_id=sessions.user_id, 
    trip_id=req.body.trip_id;
    comment_id=req.body.comment_id;
    comment=req.body.comment;
	
    var data = {
        "error":1,
        "item":""
    };
    
    connection.query("UPDATE `comment_info` SET `comment`= '"+comment+"' WHERE `user_id`="+user_id+" and `trip_id`="+trip_id+" and `comment_id` ="+ comment_id,function(err,result){   
    	if(!!err)
    		data["item"] = "Error Adding data";
        else{
            data["error"] = 0;
            data["item"] = "Record Added Successfully";
        }
		res.end('record updated...');	
	});    
});



/**************************************************************************************************************************
 **********************************UPDATE INFO TO STORY TABLE********************************
**************************************************************************************************************************/
app.post('/updateStory',function(req,res){
	res.header("Access-Control-Allow-Origin", "http://localhost");
	res.header("Access-Control-Allow-Methods", "GET, POST");
	
    var user_id=sessions.user_id, 
    trip_id=req.body.trip_id,
    tripName=req.body.tripName,
    description=req.body.description;
	
    var data = {
        "error":1,
        "item":""
    };
    
    connection.query("UPDATE `user_stories` SET `tripName`= '"+tripName+"',`description`= '"+description+"' WHERE `trip_id`="+trip_id,function(err,result){   
    	if(!!err)
    		data["item"] = "Error Adding data";
        else{
            data["error"] = 0;
            data["item"] = "Record Added Successfully";
        }
		res.end('record updated...');	
	});    
});

/**************************************************************************************************************************
 **********************************INSERT INTO COMMENT_INFO TABLE********************************
**************************************************************************************************************************/
app.post('/insertCommentInfo',function(req,res){
	res.header("Access-Control-Allow-Origin", "http://localhost");
	res.header("Access-Control-Allow-Methods", "GET, POST");
	
    var trip_id = req.body.trip_id,   
    comment = req.body.comment,
	user_id = sessions.user_id;   
    //COMPUTE DATE OF Comment
    var dateNow = new Date();
	var dd = dateNow.getDate();
	var monthSingleDigit = dateNow.getMonth() + 1,
    mm = monthSingleDigit < 10 ? '0' + monthSingleDigit : monthSingleDigit;
	var yy = dateNow.getFullYear().toString();
	date = yy + "-" + mm + "-" + dd;
	
    var data = {
        "error":1,
        "item":""
    };
    
    
    connection.query("INSERT INTO `comment_info`(`trip_id`,`comment`,`user_id`,`date`) VALUES ('" + trip_id + "','" + comment + "','" + user_id + "', '" + date + "')",function(err,result){   
    	if(!!err)
    		data["item"] = "Error Adding data";
        else{
            data["error"] = 0;
            data["item"] = "Record Added Successfully";	
        }
		res.end('commented...');	
	});    
});



/**************************************************************************************************************************
 **********************************INSERT/DELETE INTO LIKE_INFO TABLE********************************
**************************************************************************************************************************/
app.post('/insertLikeInfo',function(req,res){
	res.header("Access-Control-Allow-Origin", "http://localhost");
	res.header("Access-Control-Allow-Methods", "GET, POST");
	
	 var user_id=sessions.user_id,   // RETRIEVE FROM SESSION ID
	 trip_id=req.body.trip_id;
	 
    var data = {
        "error":1,
        "item":""
    };
    
    
    connection.query("SELECT * from like_info where trip_id="+trip_id+" and user_id="+user_id,function(err,rows){  		
    	if(rows.length==0){
    		connection.query("INSERT INTO `like_info`(`trip_id`,`user_id`) VALUES ('" + trip_id + "','" + user_id + "')",function(err,result){   
    	    	if(!!err)
    	    		data["item"] = "Error Adding data";
    	        else{
    	            data["error"] = 0;
    	            data["item"] = "Record Added Successfully";
    	        }
    			res.end('liked...');	
    		});  
    	}
    	else{
    		connection.query("DELETE FROM `like_info` WHERE `trip_id`="+trip_id+ " and `user_id`="+user_id,function(err,result){   
    	    	if(!!err)
    	    		data["item"] = "Error Adding data";
    	        else{
    	            data["error"] = 0;
    	            data["item"] = "Record Added Successfully";
    	        }
    			res.end('unliked...');	
    		});   
    	}
    	
    });
    
      
});



/**************************************************************************************************************************
 **********************************SELECT TOTAL LIKES FROM LIKE INFO********************************
**************************************************************************************************************************/
app.get('/countLikes',function(req,res){
	connection.query("SELECT COUNT(*) as totalLikes,trip_id from like_info group by trip_id",function(err,rows){
		console.log('counts:------>> '+ rows);
		if(err){
			console.log("ERROR in database: "+err);
		}
		else{
			res.end(JSON.stringify(rows));
			console.log("Connected to the Database!");
		}
	});
});


/**************************************************************************************************************************
 **************************************SELECT FOLLOWERS_INFO****************************
**************************************************************************************************************************/
app.get('/getFollowers',function(req,res){
	var arr = [];
	connection.query("SELECT * from personal_info where user_id in (SELECT follower_id from follower where user_id='" + sessions.user_id + "')",function(err,rows){
		if(err){
			console.log("ERROR in database: "+err);
		}
		else{
			res.end(JSON.stringify(rows));
			console.log("Connected to the Database!");
		}
	});
});


/**************************************************************************************************************************
 **********************************DISPLAY COMMENTS********************************
**************************************************************************************************************************/
app.get('/displayComments',function(req,res){
	var arr = [];
	connection.query("SELECT * from comment_info",function(err,rows){
		if(err){
			console.log("ERROR in database: "+err);
		}
		else{
			res.end(JSON.stringify(rows));
		}
	});
});


/**************************************************************************************************************************
 **********************************GET PHOTOS********************************
**************************************************************************************************************************/
app.get('/displayPhotos',function(req,res){
	var arr = [];
	connection.query("SELECT * from trip_photos",function(err,rows){
		if(err){
			console.log("ERROR in database: "+err);
		}
		else{
			console.log('photos..........'+rows[0].trip_id+'...'+rows[0].photo);
			res.end(JSON.stringify(rows));
		}
	});
});

/**************************************************************************************************************************
 **********************************GET FOLLOWERS SUGGESTIONS********************************
**************************************************************************************************************************/
app.get('/suggestFollower',function(req,res){
	//connection.query("SELECT COUNT(*) from follower where user_id='" + sessions.user_id + "'",function(err,rows)
	connection.query("SELECT * from personal_info where user_id not in (SELECT follower_id from follower where user_id='" + sessions.user_id + "') AND user_id != '" + sessions.user_id + "'",function(err,rows){
		//console.log("posts count = " + rows[0].Count);
		if(err){
			console.log("ERROR in database: "+err);
		}
		else{
			res.end(JSON.stringify(rows));
			console.log("Connected to the Database!");
		}
	});
});




/**************************************************************************************************************************
 **********************************LOGOUT********************************
**************************************************************************************************************************/
app.post('/userLogout',function(req,res){
	res.header("Access-Control-Allow-Origin", "http://localhost");
	res.header("Access-Control-Allow-Methods", "GET, POST");
	
	var	user_id = sessions.user_id;
    var data = {
        "error":1,
        "item":""
    };
    
    req.session.destroy(function(err){
    	if(err){
    		console.log(err);
    	}
    	else{
    		console.log(sessions.user_id);
    	}
    });
});



//*********************************************START EXPRESS WEB SERVER****************************************************
app.listen(3000,function(){
	  console.log("It's Started on PORT 3000");
});
