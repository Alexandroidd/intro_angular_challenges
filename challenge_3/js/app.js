console.log('challenge #3 -- app.js loaded!');

var app = angular.module("appThree", []);


app.controller("infoController", infoController);

function infoController(){
  this.name = "Jon Doe"; // default name
  this.height = 5.6; // default height in feet
}

app.controller("LoanController", LoanController);

function LoanController(){
	this.monthArray = [0,1,2,3,4,5,6,7,8,9,10,11,12];
	this.amount = 12000;
	this.apr = 10;
	// this.accrued_interest = ((this.apr)/100)
	// this.total_balance = (this.accrued_interest * month) + this.amount;
	this.month = function(n){
		this.month = this.monthArray[n];
	};
}



 // * this.amount;