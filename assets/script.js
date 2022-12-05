

// if button clicked {
//     countdown timer starts
// }

// if button clicked {
//     random question from question array is pulled
//  }
//   countdown timer ends {
//        get results
// }

var startBtn = document.querySelector("#startBtn");

var counter = 0

function startQuiz() {

    var quiz = document.getElementById("quiz").style.display="";
    // quiz.removeAttribute("display");
    let correctAnsResult = document.getElementById("correctAnswersResult");
    var results = document.getElementById("results");
    results.setAttribute("hidden", "hidden");

    iterate(0);

     counter = 30;
                setInterval(function() {
                  counter--;
                   if (counter >= 0) {
                      span = document.getElementById("timer");
                      span.innerHTML = counter;
                    }
                   if (counter === 0) {
                      alert("Time's up");
                      clearInterval(counter);
                    //   result = document.getElementsByClassName("panel");
                    document.getElementById("quiz").style.display="none";
                    //   quiz.setAttribute("hidden", "hidden");
                      
                      results.removeAttribute("hidden");
                      correctAnsResult.innerHTML = correctAnswers;
                    }
                  }, 1000);
  }

var questionsArr = [

    {
        id: 0,

        question: 'Which of the following keywords is used to define a variable in Javascript?',

        answers: [
            {text:'var', isCorrect: false},
            {text:'let', isCorrect: false},
            {text:'Both A and B', isCorrect: true},
            {text:'None of the above', isCorrect: false},
        ],
       
    },

    {
        id: 1,
        question: 'Which of the following methods is used to access HTML elements using Javascript?',

        answers: [
            {text: 'getElementbyId()', isCorrect: false},
            {text: 'getElementsByClassName()', isCorrect: false},
            {text: 'Both A and B', isCorrect: true},
            {text: 'None of the above', isCorrect: false},
        ],
        
    },

    {
        id: 2,
        question: 'Upon encountering empty statements, what does the Javascript Interpreter do?',

        answers: [
            {text: 'Throws an error', isCorrect: false},
            {text: 'Ignores the statements', isCorrect: true},
            {text: 'Gives a warning', isCorrect: false},
            {text: 'None of the above', isCorrect: false},
        ],
        

    },

    {
        id: 3,
        question: 'Which of the following methods can be used to display data in some form using Javascript?',

        answers: [
            {text: 'document.write()', isCorrect: true},
            {text: 'console.log()', isCorrect: false},
            {text: 'window.alert()', isCorrect: false},
            {text: 'All of the above', isCorrect: false},
        ],
    

    },

    {
        id: 4,
        question: 'How can a datatype be declared to be a constant type?',

        answers: [
            {text: 'const', isCorrect: true},
            {text: 'var', isCorrect: false},
            {text: 'let', isCorrect: false},
            {text: 'constant', isCorrect: false},
        ],
  

    },

    {
        id: 5,
        question: 'When the switch statement matches the expression with the given labels, how is the comparison done?',

        answers: [
            {text: 'Both the datatype and the result of the expression are compared', isCorrect: false},
            {text: 'Only the datatype of the expression is compared', isCorrect: true},
            {text: 'Only the value of the expression is compared', isCorrect: false},
            {text: 'None of the above', isCorrect: false},
        ],
  
    },

    {
        id: 6,
        question: 'What keyword is used to check whether a given property is valid or not?',

        answers: [
            {text: 'in', isCorrect: false},
            {text: 'is in', isCorrect: true},
            {text: 'exists', isCorrect: false},
            {text: 'lies', isCorrect: false},
        ],
      
    },

    {
        id: 7,
        question: 'What is the use of the <noscript> tag in Javascript?',

        answers: [
            {text: 'The contents are displayed by non-JS-based browsers', isCorrect: true},
            {text: 'Clears all the cookies and cache', isCorrect: false},
            {text: 'Both A and B', isCorrect: false},
            {text: 'None of the above', isCorrect: false},
        ],


    },

    {
        id: 8,
        question: "When an operator’s value is NULL, the type of returned by the unary operator is:",

        answers: [
            {text: 'Boolean', isCorrect: false},
            {text: 'Undefined', isCorrect: false},
            {text: 'Object', isCorrect: true},
            {text: 'Integer', isCorrect: false},
        ],
        

    },

    {
        id: 9,
        question: 'What does the Javascript “debugger” statement do?',

        answers: [
            {text: 'It will debug all the errors in the program at runtime', isCorrect: false},
            {text: 'It acts as a breakpoint in a program', isCorrect: true},
            {text: 'It will debug error in the current statement if any', isCorrect: false},
            {text: 'All of the above', isCorrect: false},
        ],
        
    },


        ]

       

// Set start
var start = true;

var selected = "";

var result = document.getElementsByClassName("result");

let correctAns = document.getElementById("correctAnswers");
let incorrectAns = document.getElementById("incorrectAnswers");
var correctAnswers = 0;
var incorrectAnswers = 0;


// Iterate
function iterate(id) {



// Getting the result display section

result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = questionsArr[id].question;

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



// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    // op2.style.backgroundColor = "lightskyblue";
    // op3.style.backgroundColor = "lightskyblue";
    // op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    // op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    // op3.style.backgroundColor = "lightskyblue";
    // op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    // op1.style.backgroundColor = "lightskyblue";
    // op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    // op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    // op1.style.backgroundColor = "lightskyblue";
    // op2.style.backgroundColor = "lightskyblue";
    // op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})


}

// Grabbing the evaluate button
const evaluate = document.getElementById("evaluate");



// Evaluate method
evaluate.addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "Correct";
        result[0].style.color = "green";
        correctAnswers++;
        correctAns.innerHTML = `${correctAnswers}`;
    } else {
        result[0].innerHTML = "Incorrect";
        result[0].style.color = "red";
        incorrectAnswers++;
        incorrectAns.innerHTML = incorrectAnswers;
        counter -= 2;
    }
})
// if (start) {
// iterate("0");
// }

// Next button and method
const next = document.getElementById('next');
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 10) {
    id++;
    iterate(id);
    console.log(id);
    op1.style.backgroundColor ="#0dcaf0";
    op2.style.backgroundColor ="#0dcaf0";
    op3.style.backgroundColor ="#0dcaf0";
    op4.style.backgroundColor ="#0dcaf0";
}

})

// var timerId= setInterval(()=>{
//     getTime()
//     },1000);
//     function getTime(){
//     var currentDate= new Date();
//     var currentTime= currentDate.toLocaleTimeString();
//     document.getElementById("displayTime").innerHTML = currentTime;
//     }
//     function stopTime(){
//     clearInterval(timerId);
//     }

        // function gameStart() {
        //     score = 0;
        
        //     $('#timer').show();
            
        //     resetTimer();
            
        //     $('#trivia').show();
            
        //     $('#submit').show();
            
        //     $('#trivia').empty();
        
        // }



        startBtn.addEventListener("click", startQuiz);



        // TIMER FUNCTION //

 

//         var clockRunning = false;
//         var time = 60;
    
//         $("#startClock").click( function(){
//             countvar er = 60;
//             setInterval(function() {
//               counter--;
//                if (counter >= 0) {
//                   span = document.getElementById("count");
//                   span.innerHTML = counter;
//                }
//                if (counter === 0) {
//                   alert("Time's up");
//                   clearInterval(counter);
//                 }
//               }, 1000);
//          });

// startBtnEl.on('click', function () {
// });