$(document).ready(function(){

var count = 60;
var correct = 0;
var wrong = 0;

var alerts = {
	correct: "Nice job!",
	wrong: "Whoops",
	timeOut: "Out of time!",
	endGame: "Lets see your score",
}
console.log(alerts);

//create questions as an object
var questions = [{ 
	question1: "What year did 9/11 happen?",
	options: ["1998", "2001", "1776", "2000"],
	answer: "2001",
},{
	question2: "What car did Elon Musk send into deep space in 2018?",
	options: ["Nissan Altima", "Ferrari", "Tesla", "Ford T-1"],
	answer: "Tesla",
},{
	question3: "How many oceans are on this earth?",
	options: ["3", "7", "4", "5"],
	answer: "4",
},{
	question4: "What was Steve Jobs first product?",
	options: ["Macintosh", "Apple 1", "Macbook", "Apple Book"],
	answer: "Apple 1",
},{
	question5: "What year was Osama Bin Laden killed?",
	options: ["2012", "2011", "2013", "2010"],
	answer: "2011",
},{
	question6: 'Who is known for the famous quote "If you want to find the secrets of the Universe, think in terms of energy, frequency and vibration"',
	options: ["Steve Jobs", "Elon Musk", "Isacc Newton", "Nikola Tesla"],
	answer: "Nikola Tesla",
}];

console.log(questions);

//create function to load all questions once start button is clicked
$("#start-button").click(function(){
	$(this).hide();
	newGame();
};

//create a function to start the game over once complete
$("#finish-button").click(function(){
	$(this).hide();
	newGame();
};

