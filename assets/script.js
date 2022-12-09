var counter = 60;
var questionNumber = 0;
var start = true;
var selected = "";
var result = document.getElementsByClassName("result");
var correctAns = document.getElementById("correctAnswers");
var incorrectAns = document.getElementById("incorrectAnswers");
var correctAnswers = 0;
var incorrectAnswers = 0;

var questionsArr = [

    {
        id: 0,

        question: 'Which of the following keywords is used to define a variable in Javascript?',

        answers: [
            { text: 'var', isCorrect: false },
            { text: 'let', isCorrect: false },
            { text: 'Both A and B', isCorrect: true },
            { text: 'None of the above', isCorrect: false },
        ],

    },

    {
        id: 1,
        question: 'Which of the following methods is used to access HTML elements using Javascript?',

        answers: [
            { text: 'getElementbyId()', isCorrect: false },
            { text: 'getElementsByClassName()', isCorrect: false },
            { text: 'Both A and B', isCorrect: true },
            { text: 'None of the above', isCorrect: false },
        ],

    },

    {
        id: 2,
        question: 'Upon encountering empty statements, what does the Javascript Interpreter do?',

        answers: [
            { text: 'Throws an error', isCorrect: false },
            { text: 'Ignores the statements', isCorrect: true },
            { text: 'Gives a warning', isCorrect: false },
            { text: 'None of the above', isCorrect: false },
        ],


    },

    {
        id: 3,
        question: 'Which of the following methods can be used to display data in some form using Javascript?',

        answers: [
            { text: 'document.write()', isCorrect: true },
            { text: 'console.log()', isCorrect: false },
            { text: 'window.alert()', isCorrect: false },
            { text: 'All of the above', isCorrect: false },
        ],


    },

    {
        id: 4,
        question: 'How can a datatype be declared to be a constant type?',

        answers: [
            { text: 'const', isCorrect: true },
            { text: 'var', isCorrect: false },
            { text: 'let', isCorrect: false },
            { text: 'constant', isCorrect: false },
        ],


    },

    {
        id: 5,
        question: 'When the switch statement matches the expression with the given labels, how is the comparison done?',

        answers: [
            { text: 'Both the datatype and the result of the expression are compared', isCorrect: false },
            { text: 'Only the datatype of the expression is compared', isCorrect: true },
            { text: 'Only the value of the expression is compared', isCorrect: false },
            { text: 'None of the above', isCorrect: false },
        ],

    },

    {
        id: 6,
        question: 'What keyword is used to check whether a given property is valid or not?',

        answers: [
            { text: 'in', isCorrect: false },
            { text: 'is in', isCorrect: true },
            { text: 'exists', isCorrect: false },
            { text: 'lies', isCorrect: false },
        ],

    },

    {
        id: 7,
        question: 'What is the use of the <noscript> tag in Javascript?',

        answers: [
            { text: 'The contents are displayed by non-JS-based browsers', isCorrect: true },
            { text: 'Clears all the cookies and cache', isCorrect: false },
            { text: 'Both A and B', isCorrect: false },
            { text: 'None of the above', isCorrect: false },
        ],


    },

    {
        id: 8,
        question: "When an operator’s value is NULL, the type of returned by the unary operator is:",

        answers: [
            { text: 'Boolean', isCorrect: false },
            { text: 'Undefined', isCorrect: false },
            { text: 'Object', isCorrect: true },
            { text: 'Integer', isCorrect: false },
        ],


    },

    {
        id: 9,
        question: 'What does the Javascript “debugger” statement do?',

        answers: [
            { text: 'It will debug all the errors in the program at runtime', isCorrect: false },
            { text: 'It acts as a breakpoint in a program', isCorrect: true },
            { text: 'It will debug error in the current statement if any', isCorrect: false },
            { text: 'All of the above', isCorrect: false },
        ],

    },


]


function startQuiz() {

    document.getElementById("quiz").style.display = "";

    let correctAnsResult = document.getElementById("correctAnswersResult");
    var results = document.getElementById("results");
    results.setAttribute("hidden", "hidden");
    document.getElementById("startBtn").setAttribute("hidden", "hidden");

    iterate(0);

    setInterval(function () {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("timer");
            span.innerHTML = counter;
        }
        if (counter === 0) {
            alert("Time's up");
            clearInterval(counter);
            document.getElementById("quiz").style.display = "none";
            results.removeAttribute("hidden");
            correctAnsResult.innerHTML = correctAnswers;
        }
    }, 1000);

}

function selectedBtn(id) {
    var oneAnsArr = ["op1", "op2", "op3", "op4"];

    op = document.getElementById(id)
    op.style.backgroundColor = "lightgoldenrodyellow";
    selected = op.value;

    // Get the element from the array that returns correct so that only one answer can be selected

    const unselectedAns = oneAnsArr.filter((op) => {
        return op != id;
    });

    unselectedAns.map(op => {
        option = document.getElementById(op);
        option.style.backgroundColor = "#0dcaf0";
    });
}


// Iterate
function iterate(id) {

    // Getting the result display section
    result[0].innerText = "";

    // Getting the question
    const question = document.getElementById("question");
    var currentQuestion = questionsArr[id]

    // Setting the question text
    question.innerText = currentQuestion.question;

    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');

    // Providing option text
    op1.innerText = questionsArr[id].answers[0].text;
    op2.innerText = questionsArr[id].answers[1].text;
    op3.innerText = questionsArr[id].answers[2].text;
    op4.innerText = questionsArr[id].answers[3].text;

    // Providing the true or false value to the options
    op1.value = questionsArr[id].answers[0].isCorrect;
    op2.value = questionsArr[id].answers[1].isCorrect;
    op3.value = questionsArr[id].answers[2].isCorrect;
    op4.value = questionsArr[id].answers[3].isCorrect;
}

// Evaluate answers
function evaluateQuestion() {
    if (selected == "true") {
        result[0].innerHTML = "Correct";
        result[0].style.color = "green";
        correctAnswers++;
        correctAns.innerHTML = correctAnswers;
    } else {
        result[0].innerHTML = "Incorrect";
        result[0].style.color = "red";
        incorrectAnswers++;
        incorrectAns.innerHTML = incorrectAnswers;
        counter -= 2;
    }
}

// Evaluates selected answer and goes to the next question
function nextQuestion() {

    start = false;

    evaluateQuestion();

    if (questionNumber < 9) {

        questionNumber++;

        iterate(questionNumber);

        op1.style.backgroundColor = "#0dcaf0";
        op2.style.backgroundColor = "#0dcaf0";
        op3.style.backgroundColor = "#0dcaf0";
        op4.style.backgroundColor = "#0dcaf0";
    }
}