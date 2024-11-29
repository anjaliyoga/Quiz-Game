const questions=[
    {
        question:"Which is the Largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"Which is the Smallest continent in the world?",
        answers:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Artic",correct:false},
            {text:"Africa",correct:false},
        ] 
    },
    {
        question:"Which is the Smallest country in the world?",
        answers:[
            {text:"Vatican city",correct:true},
            {text:"Bhutan",correct:false},
            {text:"Nepal",correct:false},
            {text:"Sri Lanka",correct:false},
        ] 
    },
    {
        question:"Which is the Largest desert in the world?",
        answers:[
            {text:"Kalhari",correct:false},
            {text:"Gobi",correct:false},
            {text:"Sahara",correct:false},
            {text:"Antartica",correct:true},
        ] 
    }
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz() {
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    nextButton.style.display = "none";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;
    questionElement.innerHTML=`${questionNo}. ${currentQuestion.question}`
    // questions;

    currentQuestion.answers.forEach(answer=>{
     const button = document.createElement("button")
     button.innerHTML=answer.text;
     button.classList.add("btn");
     answerButtons.appendChild(button);
     if(answer.correct){
        button.dataset.correct=answer.correct;
     }
     button.addEventListener("click",selectAnswer);
    });
}
function resetState() {
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true; // Disable all buttons after an answer is selected
    });

    nextButton.style.display = "block";
}
function showNextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.style.display = "none";
    } else {
        alert("Quiz finished! Your score is: " + score);
        startQuiz(); // Restart the quiz
    }
}

nextButton.addEventListener("click", showNextQuestion);

startQuiz();