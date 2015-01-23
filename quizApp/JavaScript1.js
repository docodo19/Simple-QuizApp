// List of questions and answeres
var quiz = [{
    question: "How many planets are in our solar system?",
    options: [7, 8, 9, 10],
    answer: 8,
    typeOfQuestion: "Multiple Choice",
    a: -1
}, {
    question: "1 inch = X cm. What is X?",
    options: ["2.54", "1/8", "10", "12"],
    answer: "2.54",
    typeOfQuestion: "Multiple Choice",
    a: -1
}, {
    question: "What's the last name of the president of United States?",
    options: ["Clinton", "Bush", "Do", "Obama"],
    answer: "Obama",
    typeOfQuestion: "Multiple Choice",
    a: -1
}, {
    question: "What is the color of Luke Skywalker's lightsaber?",
    options: ["Red", "Orange", "Yellow", "Green"],
    answer: "Green",
    typeOfQuestion: "Multiple Choice",
    a: -1
}, {
    question: "In what year was the Federal Reserve established?",
    options: ["1834", "1892", "1913", "1945"],
    answer: "1913",
    typeOfQuestion: "Multiple Choice",
    a: -1
}, {
    question: "The answer is AWESOME",
    options: ["Not awesome", "Kinda awesome", "awesome", "AWESOME"],
    answer: "AWESOME",
    typeOfQuestion: "Simple",
    a: -1
}];





// Global variables for DIV
var questionDiv = document.getElementById("questionDiv");
var progressDiv = document.getElementById("progressDiv");
var optionsDiv = document.getElementById("optionsDiv");
var scoreDiv = document.getElementById("scoreDiv");
// Global variable for other stuff
var questionCounter = 0;
var currentScore = 0;



// Display current QA in array on console.log
var displayQA = function () {
    for (var i = quiz.length; i > 0; i--) {
        for (var j = quiz[i - 1].options.length; j > 0; j--) {
            console.log(quiz[i - 1].options[j - 1]);
        }
        console.log(quiz[i - 1].question);
    }
}

// Randomize quiz[] question and options
var randomizeQA = function () {

    for (var i = quiz.length; i > 0; i--) {
        for (var j = quiz[i - 1].options.length; j > 0; j--) {
            var n1 = Math.floor(Math.random() * quiz[i - 1].options.length);
            var h1 = quiz[i - 1].options[j - 1];
            quiz[i - 1].options[j - 1] = quiz[i - 1].options[n1];
            quiz[i - 1].options[n1] = h1;
        }

        var n2 = Math.floor(Math.random() * quiz.length);
        var h2 = quiz[i - 1];
        quiz[i - 1] = quiz[n2];
        quiz[n2] = h2;
    }
}



// This function shows the Questions
var showQuestions = function () {
 
    questionDiv.innerHTML = quiz[questionCounter].question;
    // cQ = currentQuestion
    var cQ = quiz[questionCounter].question;

    progressDiv.innerHTML = "<progress value='" + (questionCounter + 1) +
        "' max='" + quiz.length + "'>";
    var h = "";

    // debug
    //alert(quiz[questionCounter].options.length);

    for (var i = 0; i < quiz[questionCounter].options.length; i++) {
        //h = text placeholder
        h += "<input type='radio' name='quiz" + questionCounter +
            "' id='userPick" + i +
            "' value='" + quiz[questionCounter].options[i] + "'>" +
            " <label for='userPick" + i + "'>" + quiz[questionCounter].options[i] + "</label><br>";

    }
    optionsDiv.innerHTML = h;
    scoreDiv.innerHTML = "Current Score: " + currentScore + "/" + questionCounter;
}

// This function checks if the answer is correct
var checkAnswer = function () {
    var userAnswer;
    var h = "quiz" + questionCounter;
    var radioPick = document.getElementsByName(h);
    for (var i = 0; i < radioPick.length; i++) {
        if (radioPick[i].checked) {
            userAnswer = radioPick[i].value;
            alert("You picked: " + radioPick[i].value);
            if (userAnswer == quiz[questionCounter].answer) {
                questionCounter++
                currentScore++;
                alert(radioPick[i].value + " is CORRECT!!!")
            } else {
                alert("Wrong!");
                questionCounter++
                break;
            }
        }
    }
    showQuestions();

}


randomizeQA()
showQuestions();

//displayQA is for debugging purpose
displayQA()


