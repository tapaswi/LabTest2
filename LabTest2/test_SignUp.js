var express  	=  require("express");
var mysql   	=  require("mysql");
var app      	=  express();
var bodyParser 	=  require('body-parser');
var CryptoJS		=  require('node-cryptojs-aes').CryptoJS;

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

app.listen(3000,function(){
	  console.log("It's Started on PORT 3000");
});


var chai = require('chai');
var expect = require('chai').expect;



describe('Testing for SignIn',function(){
	
//test case for "verify that all the specified fields are present on the registration page"***********	
	it('All the specified fields are present',function(){
		
				
		app.post('/insertPersonalInfo',function(req,res){
		res.header("Access-Control-Allow-Origin", "http://localhost");
		res.header("Access-Control-Allow-Methods", "GET, POST");
		
	    var profile_image,
	    first_name=req.body.first_name,
	    last_name=req.body.last_name,
	    profession=req.body.profession,		//login
	    email_id=req.body.email_id,		//login
	    gender=req.body.gender,
	    dob=req.body.dob,
	    contact_no=req.body.contact_no,
	    city=req.body.city,
	    state=req.body.state,
	    country=req.body.country,
	    doj,
	    user_id;
	    expect(first_name).to.not.equal(null);
	    expect(last_name).to.not.equal(null);
	    expect(profession).to.not.equal(null);
	    expect(email_id).to.not.equal(null);
	    expect(gender).to.not.equal(null);
	    expect(dob).to.not.equal(null);
	    expect(contact_no).to.not.equal(null);
	    expect(city).to.not.equal(null);
	    expect(state).to.not.equal(null);
	    expect(country).to.not.equal(null);
	    expect(doj).to.not.equal(null);
	    expect(user_id).to.not.equal(null);

	    var password = CryptoJS.AES.encrypt(req.body.password,"pass").toString();	//login
	    
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
	    
	    //QUERY TO INSERT INTO PERSONAL_INFO AND LOGIN_INFO TABLE
	    connection.query("INSERT INTO `personal_info`(`profile_image`,`first_name`,`last_name`,`dob`,`gender`,`profession`,`contact_no`,`city`,`state`,`country`,`doj`) VALUES ('" + profile_image + "','" + first_name + "','" + last_name + "','" + dob + "','" + gender + "','" + profession + "','" + contact_no + "','" + city + "','" + state + "','" + country + "','" + doj + "')",function(err,result){   
	    	if(!!err)
	    		data["item"] = "Error Adding data";
	        else{
	            data["error"] = 0;
	            data["item"] = "Record Added Successfully";
	            user_id = result.insertId;
	            console.log("user ID: "+user_id);
	            
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
	            console.log("session: " + sessions.email);
	            
				res.redirect("/UserProfile")
	        }
			res.end('record inserted...');	
		});    
	});
	
	});	
	
	
	
	
	
//test case for "no space between firstName and lastName"***********	
	/*it('All the specified fields are present',function(){
		
				
		app.post('/insertPersonalInfo',function(req,res){
		res.header("Access-Control-Allow-Origin", "http://localhost");
		res.header("Access-Control-Allow-Methods", "GET, POST");
		
	    var profile_image,
	    first_name=req.body.first_name,
	    last_name=req.body.last_name,
	    profession=req.body.profession,		//login
	    email_id=req.body.email_id,		//login
	    gender=req.body.gender,
	    dob=req.body.dob,
	    contact_no=req.body.contact_no,
	    city=req.body.city,
	    state=req.body.state,
	    country=req.body.country,
	    doj,
	    user_id;
	   
	    var regPattern = new RegExp(/\s/g);
	    var result = first_name.match(regPattern);
	    expect(first_name).to.not.equal(result);
	   // console.log('result');
	    
	    var password = CryptoJS.AES.encrypt(req.body.password,"pass").toString();	//login
	    
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
	    
	    //QUERY TO INSERT INTO PERSONAL_INFO AND LOGIN_INFO TABLE
	    connection.query("INSERT INTO `personal_info`(`profile_image`,`first_name`,`last_name`,`dob`,`gender`,`profession`,`contact_no`,`city`,`state`,`country`,`doj`) VALUES ('" + profile_image + "','" + first_name + "','" + last_name + "','" + dob + "','" + gender + "','" + profession + "','" + contact_no + "','" + city + "','" + state + "','" + country + "','" + doj + "')",function(err,result){   
	    	if(!!err)
	    		data["item"] = "Error Adding data";
	        else{
	            data["error"] = 0;
	            data["item"] = "Record Added Successfully";
	            user_id = result.insertId;
	            console.log("user ID: "+user_id);
	            
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
	            console.log("session: " + sessions.email);
	            
				res.redirect("/UserProfile")
	        }
			res.end('record inserted...');	
		});    
	});
	
	});	*/

	
	
// Test Case For "contact number should be 10 digits"***********	
	it('contact number should be 10 digit',function(){
		
		
		app.post('/insertPersonalInfo',function(req,res){
		res.header("Access-Control-Allow-Origin", "http://localhost");
		res.header("Access-Control-Allow-Methods", "GET, POST");
		
	    var profile_image,
	    first_name=req.body.first_name,
	    last_name=req.body.last_name,
	    profession=req.body.profession,		//login
	    email_id=req.body.email_id,		//login
	    gender=req.body.gender,
	    dob=req.body.dob,
	    contact_no=req.body.contact_no,
	    city=req.body.city,
	    state=req.body.state,
	    country=req.body.country,
	    doj,
	    user_id;
	  
	    
	    
	    var password = CryptoJS.AES.encrypt(req.body.password,"pass").toString();	//login
	  
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
	    
	    //QUERY TO INSERT INTO PERSONAL_INFO AND LOGIN_INFO TABLE
	    connection.query("INSERT INTO `personal_info`(`profile_image`,`first_name`,`last_name`,`dob`,`gender`,`profession`,`contact_no`,`city`,`state`,`country`,`doj`) VALUES ('" + profile_image + "','" + first_name + "','" + last_name + "','" + dob + "','" + gender + "','" + profession + "','" + contact_no + "','" + city + "','" + state + "','" + country + "','" + doj + "')",function(err,result){   
	    	if(!!err)
	    		data["item"] = "Error Adding data";
	        else{
	            data["error"] = 0;
	            data["item"] = "Record Added Successfully";
	            user_id = result.insertId;
	            console.log("user ID: "+user_id);
	            
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
	            console.log("session: " + sessions.email);
	            
				res.redirect("/UserProfile")
	        }
			res.end('record inserted...');	
		});    
	});
	
	});	

	
});