//Ch9 Metal reactivity series
//fixed order
//auto-quiz
//2 inputs
//total questions = 12

let answers_1=[
    "potassium","calcium","sodium","magnesium","aluminium","zinc","iron","lead","hydrogen","copper","silver","gold"
];//len=13

let answers_2=[
    "K","Ca","Na","Mg","Al","Zn","Fe","Pb","H","Cu","Ag","Au"
];//len=13

let answers_alt_1=[
    "no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt"
];//len=13

let answers_alt_2=[
    "no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt"
];//len=13

let total_questions = 12;
let current_progress = -1;
let correct_answers = 0;

let html_question;
let html_correct;
let html_input1;
let html_input2;
let html_iscorrect;
let html_score;
let html_your;
let html_table_question;

function next(){
    if(current_progress==-100){
        
    }else if(current_progress+1>=total_questions){
        check();
        html_question.innerHTML="Quiz ended, click the top-left button to return to homepage.";
        html_input1.value = "";
        html_input2.value = "";
        current_progress=-100;
    }else{
        check();
        question();
    }
}
function start(){
    html_question = document.getElementById("html_question");
    html_correct = document.getElementById("html_correct");
    html_input1 = document.getElementById("html_input1");
    html_input2 = document.getElementById("html_input2");
    html_iscorrect = document.getElementById("html_iscorrect");
    html_score = document.getElementById("html_score");
    html_your = document.getElementById("html_your");
    html_table_question = document.getElementById("html_table_question");
    
    html_score.innerHTML = "Score: " + correct_answers + " out of " + (current_progress+1) + " correct (" + total_questions + " questions in total)";
    document.addEventListener("keydown",keydown,false);

    question();
}
function check(){
    //process input1: tolowercase, input2: none
    let input1 = html_input1.value;
    input1 = input1.toLowerCase();
    let input2 = html_input2.value;
    let this_time_correct_answers = 0;
    let this_time_isalt_answers = false;

    //check input1
    if(input1==answers_1[current_progress]){
        this_time_correct_answers+=0.5;
    }else if(input1==answers_alt_1[current_progress]&&answers_alt_1[current_progress]!="no_alt"){
        this_time_correct_answers+=0.5;
        this_time_isalt_answers=true;
    }

    //check input2
    if(input2==answers_2[current_progress]){
        this_time_correct_answers+=0.5;
    }else if(input2==answers_alt_2[current_progress]&&answers_alt_2[current_progress]!="no_alt"){
        this_time_correct_answers+=0.5;
        this_time_isalt_answers=true;
    }

    //check score and display output
    if(this_time_correct_answers==1){
        html_iscorrect.innerHTML = "You are correct!";
        html_iscorrect.style.color = '#0F0';
    }else if(this_time_correct_answers==0.5){
        html_iscorrect.innerHTML = "Some of your answers are incorrect!";
        html_iscorrect.style.color = '#F99';
    }else{
        html_iscorrect.innerHTML = "You are wrong!";
        html_iscorrect.style.color = '#F99';
    }

    correct_answers+=this_time_correct_answers;
    html_score.innerHTML = "Score: " + correct_answers + " out of " + (current_progress+1) + " correct (" + total_questions + " questions in total)";
    if(current_progress==0) html_table_question.innerHTML = "Electrochemical Series (with hydrogen) (Starting from the strongest metal reducing agent)";
    else html_table_question.innerHTML =  "Below " + answers_1[current_progress-1];
    html_correct.innerHTML = answers_1[current_progress]+", "+answers_2[current_progress];
    html_your.innerHTML = html_input1.value + ", " + html_input2.value;
}
function question(){
    current_progress ++;
    if(current_progress==0) html_question.innerHTML = "Electrochemical Series (with hydrogen) (Starting from the strongest metal reducing agent)";
    else html_question.innerHTML = "Below " + answers_1[current_progress-1];
    html_input1.value = "";
    html_input2.value = "";
    html_input1.focus();
}
function keydown(e){
    //virtual key code
    if(e.keyCode==13){
        //enter
        next();
    }else if(e.keyCode==38){
        //up arrow
        html_input1.focus();
    }else if(e.keyCode==40){
        //down arrow
        html_input2.focus();
    }
}