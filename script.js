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