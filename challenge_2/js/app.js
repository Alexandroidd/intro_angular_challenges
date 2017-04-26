console.log('challenge #2 -- app.js loaded!');
var app = angular.module("appTwo", []);

//var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);



function WelcomeController(){
  this.full_name = "Alexander Creighton"; 
  this.age = 28;
  this.city = "Dartmouth";
  this.state = "MA";
  this.shout = function(name){
	  var upperName = name.toUpperCase();
	  return upperName + "!";// change me
	};
}
app.controller("ClassController", function(){
	this.class_name = "WDI 3";
	this.enrolled_students = 15;
	this.start_date = "March 13th";
	this.end_date = "June 3rd";
	this.daysRemaining = function(){
		return "37 Days";
	};

});






// var app = angular.module("appTwo", []);
// app.controller("WelcomeController", WelcomeController);

// function WelcomeController(){
//   this.full_name = "YOUR NAME"
// }
