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
	
	//testcase for "user is able to login successfully"************
	it('Login Successful',function(){
		app.post('/validateLogin',function(req,res){
		req.header("Access-Control-Allow-Origin", "http://localhost");
		req.header("Access-Control-Allow-Methods", "GET, POST");
		connection.query("SELECT * from login_info",function(err,rows){  		
			for(var i=0; i<rows.length; i++){
				if(rows[i].email_id===req.body.email_id){
					var password = CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(rows[i].password,"pass"));
					if(password===req.body.password){
						expect(req.body.emai_id).to.equal(emai_id)
						expect(req.body.password).to.equal(password)
						//expect("panda.com").to.equal("pppppanda.com")
						//expect("panda").to.equal("pppppanda")
						console.log("Login Successful!!");
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
	});
	
  //testcase for "if unregistered user is not able to login to the site"************
	it(' Unregistered users are not able to login to the site',function(){
		
		
		app.post('/validateLogin',function(req,res){
		req.header("Access-Control-Allow-Origin", "http://localhost");
		req.header("Access-Control-Allow-Methods", "GET, POST");
		connection.query("SELECT * from login_info",function(err,rows){  
				for(var i=0; i<rows.length; i++){
				if(rows[i].email_id===req.body.email_id){
					expect(req.body.email_id).to.not.equal(rows[i].email_id)
					var password = CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(rows[i].password,"pass"));
					if(password===req.body.password){
					    console.log("Login Successful!!");
						expect(req.body.password).to.equal(password)
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
	});	
//testcase for "valid username but empty password"*****
	it('valid username and empty password',function(){
		app.post('/validateLogin',function(req,res){
		req.header("Access-Control-Allow-Origin", "http://localhost");
		req.header("Access-Control-Allow-Methods", "GET, POST");
		connection.query("SELECT * from login_info",function(err,rows){  		
			for(var i=0; i<rows.length; i++){
				if(rows[i].email_id===req.body.email_id){
					var password = CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(rows[i].password,"pass"));
					if(password===req.body.password){
						expect(req.body.emai_id).to.equal(emai_id)
						expect(null).to.equal(req.body.emai_id)
						console.log("Login Successful!!");
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
	});
	
	//testcase for "empty username but valid password"*****
	it('valid username and empty password',function(){
		app.post('/validateLogin',function(req,res){
		req.header("Access-Control-Allow-Origin", "http://localhost");
		req.header("Access-Control-Allow-Methods", "GET, POST");
		connection.query("SELECT * from login_info",function(err,rows){  		
			for(var i=0; i<rows.length; i++){
				if(rows[i].email_id===req.body.email_id){
					var password = CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(rows[i].password,"pass"));
					if(password===req.body.password){
						expect(null).to.equal(req.body.email_id);
						expect(req.body.password).to.equal(password);
						console.log("Login Successful!!");
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
	});
	
//test case for "empty Username and empty Password" **********
	
	it('valid username and empty password',function(){
		app.post('/validateLogin',function(req,res){
		req.header("Access-Control-Allow-Origin", "http://localhost");
		req.header("Access-Control-Allow-Methods", "GET, POST");
		connection.query("SELECT * from login_info",function(err,rows){  		
			for(var i=0; i<rows.length; i++){
				if(rows[i].email_id===req.body.email_id){
					var password = CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(rows[i].password,"pass"));
					if(password===req.body.password){
						expect(null).to.equal(req.body.email_id);
						expect(null).to.equal(req.body.password);
						console.log("Login Successful!!");
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
	});

//test case for "handling case senstivity"*************
	it('case sensitivity',function(){
		var changeCase = require('change-case');
		app.post('/validateLogin',function(req,res){
		req.header("Access-Control-Allow-Origin", "http://localhost");
		req.header("Access-Control-Allow-Methods", "GET, POST");
		connection.query("SELECT * from login_info",function(err,rows){  		
			for(var i=0; i<rows.length; i++){
				if(rows[i].email_id===req.body.email_id){
					var password = CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(rows[i].password,"pass"));
					if(password===req.body.password){
						expect(req.body.emai_id).to.equal(changeCase.isUpperCase(emai_id));
						expect(req.body.emai_id).to.equal(changeCase.isLowerCase(emai_id));
						expect(req.body.password).to.equal(changeCase.isUpperCase(password));
						expect(req.body.password).to.equal(changeCase.isLowerCase(password));
						
						console.log("Login Successful!!");
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
	});

	

	
});