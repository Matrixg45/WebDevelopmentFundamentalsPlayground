//Javascript Review File

console.log("Happy!");
//Variables Strings & ints
var age = 16;
var myBirthYear = 1999;
var graduationYear = 2017;
numberOfBrothersAndSisters = 5;
var numberOfKids = 0;
var quote = "My fake plants died because I did not pretend to water them";


console.log(age);
//String concatenation
console.log("I am " + age + ".");
console.log("I was born in " + myBirthYear + ".");
console.log("I will graduate in " + graduationYear + ".");
console.log("I have " + numberOfBrothersAndSisters + " brothers and sisters " + ".");
console.log("I have " + numberOfKids + " children " + ".")
//Manipulating the DOM
document.getElementById("my-age").innerHTML = age;
document.getElementById("my-BirthYear").innerHTML = myBirthYear;
document.getElementById("my-GraduationYear").innerHTML = graduationYear;
document.getElementById("my-family").innerHTML = numberOfBrothersAndSisters;
document.getElementById("my-babes").innerHTML = numberOfKids;
function revealFunny(){
	document.getElementById("reveal-funny-line").innerHTML = quote;
}


var counter = 0;
while(counter < 10) {
counter++;
console.log("The score is " + counter);
}

//For Loop
for ( var i = 1; i < 20; i ++) {
	console.log(i);
}

for (var i = 0; i < 31; i +=5 ) {
	 console.log(i);
}

for (var i=0; i<101; i+=25) {
	if(i ===50) {
		console.log(i + " " + "Halfway There");

} else {
	console.log(i);
}
}

for (var i=0; i<11; i++) {
	if(i == 9) {
		console.log("nine");

} else if (i==10)  {
	console.log("ten" );
} else {
	console.log(i);
} 
}


//Arrays
var abc = "abcdefghijklmnopqrstuvwxyz";
var abcArray = ["a", "b", "c", "d", "e"];
var numberArray = [1, 2, 3, 4, 5];

console.log(abc.charAt(3));
console.log(abcArray[2]);

//another way to create an array
var typesOfSoda = new Array();
typesOfSoda[0] = "Sprite";
typesOfSoda[1] = "Coke";
console.log(typesOfSoda);

var worstSoda = new Array();
worstSoda[0] = "Diet zero";
console.log(typesOfSoda);




//For Loops
for ( var i = 0; i < 21; i +=2) {
	console.log(i);
}
	
for ( var i = 0; i < 51; i +=5) {
console.log(i); 
}
	if(i == 50) {
		console.log(i + "rich");

} else {
	console.log(i);
} 


var friends = ["Josh", "Austin", "NIgel"]
for(var i = 0;  i< friends.length;i ++) {
	if(friends[i].charAt(0)=="J"){
		console.log(friends[i]);
	}
}
//Objects= bags
var beachBag = {
		//Properties
	numBottles   :    3,
	colorofTowel :  "Green",
	isWet        :   false,
	zipUp        : function(){
		console.log("Zipper Sound");
	}

}
console.log(beachBag.isWet)
beachBag.zipUp();


//Make an object called Nerd
//Give five properties hasGlasses
var nerd = {
		//Properties
	hasGlasses      :    true,
	sizeOfBackpack  :  "Big",
	isSmart         :   true,
	numberOfBooks	: 6,
	howManyTimesAskedforMoney : 3,
	nickname: " Four Eyes",
	tooScaredtoSpeaktoAgirl        : function(){
		console.log("Looks Down" + "Heart Beats harder");
	}
}
console.log(nerd);
console.log(nerd.nickname);


var player = {
	//Properties
	life   : 1000,
	damage:   10,
	hasSword: true,
	hasSniperrifle: true,
	hasArmor: true,
	name:"Zilean",

	//Function
	attack	: function(target){
		console.log(this.name + "attacks" + target);
	},
	swatWithSword    :function(){
		var damage = 25 * this.damage;
		console.log(this.name +  " did" + damage + " damage to " + target);
	},
	healWithElixir    :function(){
		var heal = 45 * this.damage;
		console.log(this.name + "healed" + heal + target + "Elixir")
	}
}
	var animal = {
	//Properties
	life   : true,
	eat:  true,
	run: false,
	jumps: true,
	eyes: 2,
	cute: "yes",
	legs: 4,
	Breathe        : function(){
		console.log("Stuffy weazing" + "weird sounds in the back of your ear drum");
	}
}
animal.Breathe();

var snake = Object.create(animal);
console.log(snake.eyes);
snake.legs= 0;
console.log(snake.legs);
snake.Breathe = function(){
	console.log("SSSSSsssssss");
}
snake.Breathe();
var rabbit = Object.create(animal);
rabbit.ears = "Huge";
console.log(rabbit.ears);
var cow = Object.create(animal);
cow.jumps = false;
cow.runs = false;
var cow= {
	body:"Large",
	talk        : function(){
		console.log("mooo");
	}
	

}

cow.talk();

