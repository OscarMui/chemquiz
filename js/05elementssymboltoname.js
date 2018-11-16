let questions_1=[
    "Ar","Ag","Au","B","Be","Br","C","Ca","Cr","Co","Cu","Cl","F","Fe","H","He","Hg","I","K","Li","Mg","Mn","N","Na","Ne","O","P","Pb","Pt","S","Si","Sn","Zn"
];//len=33

let answers_1=[
    "argon","silver","gold","boron","beryllium","bromine","carbon","calcium","chromium","cobalt","copper","chlorine","fluorine","iron","hydrogen","helium","mercury","iodine","potassium","lithium","magnesium","manganese","nitrogen","sodium","neon","oxygen","phosphorus","lead","platinum","sulphur","silicon","tin","zinc"
];//len=33

let answers_alt_1=[
    "no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","sulfur","no_alt","no_alt","no_alt"
];//len=33

let total_questions = 33;
let question_number = 0;
let current_progress = -1;
let correct_answers = 0;

let ischosen = new Array(total_questions);

let html_question;
let html_correct;
let html_input1;
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
    html_iscorrect = document.getElementById("html_iscorrect");
    html_score = document.getElementById("html_score");
    html_your = document.getElementById("html_your");
    html_table_question = document.getElementById("html_table_question");
    
    for(let i = 0;i<total_questions;i++){
        ischosen[i] = false;
    }
    html_score.innerHTML = "Score: " + correct_answers + " out of " + (current_progress+1) + " correct (" + total_questions + " questions in total)";
    document.addEventListener("keydown",keydown,false);   

    question();
}
function check(){
    //process input1: to lower case
    let input1 = html_input1.value;
    input1 = input1.toLowerCase();

    if(input1==answers_1[question_number]){
        correct_answers++;
        html_iscorrect.innerHTML = "You are correct!";
        html_iscorrect.style.color = '#0F0';
    }else if(input1==answers_alt_1[question_number]&&answers_alt_1[question_number]!="no_alt"){
        correct_answers++;
        html_iscorrect.innerHTML = "You are correct! (alternative answer accepted)";
        html_iscorrect.style.color = '#0F0';
    }else{
        html_iscorrect.innerHTML = "You are wrong!";
        html_iscorrect.style.color = '#F99';
    }
    html_score.innerHTML = "Score: " + correct_answers + " out of " + (current_progress+1) + " correct (" + total_questions + " questions in total)";
    html_table_question.innerHTML = questions_1[question_number];
    html_correct.innerHTML = answers_1[question_number];
    html_your.innerHTML = html_input1.value;
}
function question(){
    let x = 0;
    do{
        x=Math.floor(Math.random()*total_questions);
    }while(ischosen[x]);
    question_number = x;
    ischosen[question_number]=true;
    current_progress ++;

    html_question.innerHTML = questions_1[question_number];
    html_input1.value = "";
    html_input1.focus();
}
function keydown(e){
    if(e.keyCode==13){
        next();
    }
}