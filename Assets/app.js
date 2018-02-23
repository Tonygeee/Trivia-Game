$( document ).ready(function() {
	var game = {
		questions: [
		{
	   		question: 'What year did 9/11 happen?',
	   		possibles: ['2001', '1999', '2000', '2002'],
	   		id: 'question-one',
	   		answer: 1
		}, {
			question: 'What car did Elon Musk send to deep space?',
			possibles: ['Ferrari', 'BMW', 'Lotus', 'Tesla'],
			id: 'question-two',
			answer: 0
		}, {
			question: 'How many oceans are on planet earth?',
			possibles: ['3', '7', '4', '5'],
			id: 'question-three',
			answer: 4
		}, {
			question: 'What year did Osama Bin Laden die?',
			possibles: ['2010', '2012', '2011', '2009'],
			id: 'question-four',
			answer: 1
		}, {
			question: 'What is the Capital of California?',
			possibles: ['Sacramento', 'Stockton', 'Modesto', 'Los Angeles'],
			id: 'question-five',
			answer: 0
		}, {
			question: 'What major event happend in 1941?',
			possibles: ['D-Day', 'Pearl Harbor', 'Hiroshima bombing', 'The fall of the Nazis'],
			id: 'question-six',
			answer: 1
		}
		]}



    var number = 30;
    $('#timer').on('click', run);
    function decrement(){
        number--;
        $('#timer').html('<h2>' + number + " seconds"+'</h2>');
        if (number === 0){
        stop();
        $('#message').html('time up!');
        checkAnswers();
        }
    }
    function run(){
        counter = setInterval(decrement, 1000);
    }
    
    function stop(){
        clearInterval(counter);
    }
    run();
function formTemplate(data) {
	var qString = "<form id='questionOne'>"+ data.question +"<br>";
	var possibles = data.possibles;
	for (var i = 0; i < possibles.length; i++) {
		var possible = possibles[i];
		qString = qString + "<input type='radio' name='"+data.id+"' value="+ i +">"+possible;

	}
	return qString + "</form>";
}
window.formTemplate = formTemplate;
function buildQuestions(){
	var questionHTML = ''
	for (var i = 0; i<game.questions.length; i++) {
		questionHTML = questionHTML + formTemplate(game.questions[i]);
	}
	$('#questions-container').append(questionHTML);

}

function isCorrect(question){
	var answers = $('[name='+question.id+']');
	var correct = answers.eq(question.answer);
	var isChecked = correct.is(':checked');
	return isChecked;
}
buildQuestions();
function resultsTemplate(question){
	var htmlBlock = '<div>'
	htmlBlock = htmlBlock + question.question + ': ' + isChecked;
	return htmlBlock + "</div>";
}

function checkAnswers (){
	var resultsHTML = '';
	var guessedAnswers = [];
	var correct = 0;
	var incorrect = 0;
	var unAnswered =0

	for (var i = 0; i<game.questions.length; i++) {
		if (isCorrect(game.questions[i])) {
			correct++;
		} else {
			if (checkAnswered(game.questions[i])) {
				incorrect++;
			} else {
				unAnswered++;
			}
		}

	}

	$('.results').html('correct: '+correct+ "<br>" +'incorrect: '+incorrect+ "<br>" +'unanswered: '+unAnswered);
}

function checkAnswered(question){
	var anyAnswered = false;
	var answers = $('[name='+question.id+']');

	for (var i = 0; i < answers.length; i++) {
		if (answers[i].checked) {
			anyAnswered = true;
		}
	}
	return anyAnswered;

}
	$('#doneButton').on('click', function() {
	checkAnswers();
	stop();
	$("#messageDiv").html("Game Over!");
	})
});


