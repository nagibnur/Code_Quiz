const start_button = document.querySelector('#start_btn');
const quiz_container = document.querySelector('#quiz_container');
const quiz_questions = document.querySelector('#quiz_ques');
const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector('#answer2');
const answer3 = document.querySelector('#answer3');
const answer4 = document.querySelector('#answer4');
const timeEl = document.querySelector('#time');
const submit_page = document.querySelector('#submit_page');



start_button.addEventListener('click',  function () {
    quiz_container.hidden = false;
    start_button.hidden = true;
    display_question(current_question);
    current_question ++;
    setTime();

});


function display_question (question_index) {
    quiz_questions.textContent = myQuestions[question_index].question
    answer1.textContent = myQuestions[question_index].a
    answer2.textContent = myQuestions[question_index].b
    answer3.textContent = myQuestions[question_index].c
    answer4.textContent = myQuestions[question_index].d
}


let secondsLeft = 30;
function setTime() {
    const timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft + '.' ;
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    
    },1000);
}




const myQuestions = [
    {
        question: "How high is Mount Everest?",
        a: "5,849 m",
        b: "6,849 m",
        c: "7,849 m",
        d: "8,849 m",
        correct: "d",
    },

    {
        question: "What is the largest continent in size?",
        a: "Asia",
        b: "Africa",
        c: "Europe",
        d: "North America",
        correct: "a",
    },

    {
        question: "What is the longest river in the world?",
        a: "Amazon River",
        b: "Nile",
        c: "Yellow River",
        d: "Congo River",
        correct: "b",
    },

    {
        question: "How many sides has a Hexagon?",
        a: "5",
        b: "6",
        c: "7",
        d: "8",
        correct: "b",
    },

    {
        question: "Who is the CEO of Amazon?",
        a: "Elon Musk",
        b: "Tim Cook",
        c: "Mark Zuckerberg",
        d: "Jeff Bezos",
        correct: "d",
    },


]