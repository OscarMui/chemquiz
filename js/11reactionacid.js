//Ch11 Reaction with acid
//random order
//self test
//4 inputs (3 auto, 1 self) (1 major, 3 minor
//total questions = 4
//available questions = 26

let questions_1=[
    "Potassium + dilute hydrochloric acid","Sodium + dilute hydrochloric acid","Calcium + dilute hydrochloric acid","Magnesium + dilute hydrochloric acid","Aluminium + dilute hydrochloric acid","Zinc + dilute hydrochloric acid","Iron + dilute hydrochloric acid","Lead + dilute hydrochloric acid","Copper + dilute hydrochloric acid","Mercury + dilute hydrochloric acid","Silver + dilute hydrochloric acid","Platinum + dilute hydrochloric acid","Gold + dilute hydrochloric acid","Potassium + dilute sulphuric acid","Sodium + dilute sulphuric acid","Calcium + dilute sulphuric acid","Magnesium + dilute sulphuric acid","Aluminium + dilute sulphuric acid","Zinc + dilute sulphuric acid","Iron + dilute sulphuric acid","Lead + dilute sulphuric acid","Copper + dilute sulphuric acid","Mercury + dilute sulphuric acid","Silver + dilute sulphuric acid","Platinum + dilute sulphuric acid","Gold + dilute sulphuric acid"
];//len=26

let question_groups=[
    4,4,0,0,0,0,3,2,1,1,1,1,1,4,4,2,0,0,0,3,2,1,1,1,1,1
];
//0 = common
//1 = none
//2 = insoluble
//3 = iron (1/3 chance)
//4 = explosive

let answers_0_i=[
    "salt + hydrogen gas","no reaction","salt + hydrogen gas","salt + hydrogen gas","explosive reaction"
];//len = 5 according to question groups
let answers_1=[
    "N/A","N/A","calcium chloride","magnesium chloride","aluminium chloride","zinc chloride","iron (ii) chloride","lead (ii) chloride","N/A","N/A","N/A","N/A","N/A","N/A","N/A","calcium sulphate","magnesium sulphate","aluminium sulphate","zinc sulphate","iron (ii) sulphate","lead (ii) sulphate","N/A","N/A","N/A","N/A","N/A"
];//len=26

let answers_2=[
    "N/A","N/A","CaCl2","MgCl2","AlCl3","ZnCl2","FeCl2","PbCl2","N/A","N/A","N/A","N/A","N/A","N/A","N/A","CaSO4","MgSO4","Al2(SO4)3","ZnSO4","FeSO4","PbSO4","N/A","N/A","N/A","N/A","N/A"
];//len=26

let answer_3_common = "Metal dissolves to form a colorless solution with colorless gas evolves.";
let answer_3_insoluble = "The salt is insoluble in water. Colorless gas bubbles evolves at first. But the salt surrounds the metal to stop the metal from further reaction."
let answer_3_iron = "Metal dissolves to form a PALE GREEN solution with colorless gas bubbles evolves.";

let answers_alt_1=[
    "no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","calcium sulfate","magnesium sulfate","aluminium sulfate","zinc sulfate","iron (ii) sulfate","lead (ii) sulphate","no_alt","no_alt","no_alt","no_alt","no_alt"
];//len=26

let answers_alt_2=[
    "no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt"
];//len=26

let total_questions = 4;
let available_questions = 26;
let question_number = 0;
let current_progress = -1;
let correct_answers = 0;
let ischecking = false;

let this_time_correct_answers = 0;
let this_time_isalt_answers = false;

let chosenquestions = new Array(4);

let html_question;
let html_correct0;
let html_correct1;
let html_correct2;
let html_correct3;
let html_input0;
let html_input1;
let html_input2;
let html_input3;
let html_iscorrect;
let html_iscorrect0;
let html_iscorrect1;
let html_iscorrect2;
let html_check3;
let html_score;
let html_your;
let html_table_question;
let html_next;
let html_check;


function next(){
    if(current_progress==-100){

    }else if(current_progress+1>=total_questions){
        update_score();
        html_question.innerHTML="Quiz ended, click the top-left button to return to homepage.";
        html_input1.value = "";
        html_input2.value = "";
        current_progress=-100;
    }else{
        update_score();
        question();
    }
}
function start(){
    group_minor_answers = document.getElementById("group_minor_answers");

    html_question = document.getElementById("html_question");
    html_correct0 = document.getElementById("html_correct0");
    html_correct1 = document.getElementById("html_correct1");
    html_correct2 = document.getElementById("html_correct2");
    html_correct3 = document.getElementById("html_correct3");
    html_input0 = document.getElementById("html_input0");
    html_input1 = document.getElementById("html_input1");
    html_input2 = document.getElementById("html_input2");
    html_input3 = document.getElementById("html_input3");
    html_iscorrect = document.getElementById("html_iscorrect");
    html_iscorrect0 = document.getElementById("html_iscorrect0");
    html_iscorrect1 = document.getElementById("html_iscorrect1");
    html_iscorrect2 = document.getElementById("html_iscorrect2");
    html_check3 = document.getElementById("html_check3");
    html_score = document.getElementById("html_score");
    html_next = document.getElementById("html_next");
    html_check = document.getElementById("html_check");

    html_score.innerHTML = "Score: " + correct_answers + " out of " + (current_progress+1) + " correct (" + total_questions + " questions in total)";
    document.addEventListener("keydown",keydown,false);
    html_check3.disabled=true;

    for(let i = 0;i<total_questions;i++){
        chosenquestions[i] = -1;
    }

    question();
}
function check(){
    if(current_progress==-100) return;

    //process input1: tolowercase, input2: none, input3: self-check
    let input0 = html_input0.value;
    let input1 = html_input1.value;
    input1 = input1.toLowerCase();
    let input2 = html_input2.value;

    let answer0 = answers_0_i[question_groups[question_number]];
    let answer3;
    if(question_groups[question_number]==3){
        answer3 = answer_3_iron;
    }else if(question_groups[question_number]==2){
        answer3 = answer_3_insoluble;
    }else{
        answer3 = answer_3_common;
    }

    if(input0==answer0){
        if(answer0=="no reaction"||answer0=="explosive reaction"){
            this_time_correct_answers+=10;
            group_minor_answers.style.display="none";
        }else{
            this_time_correct_answers+=1;
        }
        html_input0.style.backgroundColor = "#0F0";
        html_iscorrect0.innerHTML = "You are correct.";
        html_correct0.innerHTML = "Correct answer: " + answer0;
    }else{
        group_minor_answers.style.display="none";
        html_input0.style.backgroundColor = "#F99";
        html_iscorrect0.innerHTML = "You are wrong.";
        html_correct0.innerHTML = "Correct answer: " + answer0;
        input1 = "N/A";
        input2 = "N/A";
    }

    html_input0.disabled=true;

    //check input1
    if(input1==answers_1[question_number]&&answers_1[question_number]!="N/A"){
        this_time_correct_answers+=2;
        html_input1.style.backgroundColor = "#0F0";
        html_iscorrect1.innerHTML = "You are correct.";
        html_correct1.innerHTML = "Correct answer: " + answers_1[question_number];
    }else if(input1==answers_alt_1[question_number]&&answers_alt_1[question_number]!="no_alt"){
        this_time_correct_answers+=2;
        this_time_isalt_answers=true;
        html_input1.style.backgroundColor = "#0F0";
        html_iscorrect1.innerHTML = "You are correct. (Alternative answer accepted)";
        html_correct1.innerHTML = "Correct answer: " + answers_1[question_number];
    }else{
        html_input1.style.backgroundColor = "#F99";
        html_iscorrect1.innerHTML = "You are wrong.";
        html_correct1.innerHTML = "Correct answer: " + answers_1[question_number];
    }
    html_input1.readOnly = true;

    //check input2
    if(input2==answers_2[question_number]&&answers_2[question_number]!="N/A"){
        this_time_correct_answers+=2;
        html_input2.style.backgroundColor = "#0F0";
        html_iscorrect2.innerHTML = "You are correct.";
        html_correct2.innerHTML = "Correct answer: " + answers_2[question_number];
    }else if(input2==answers_alt_2[question_number]&&answers_alt_2[question_number]!="no_alt"){
        this_time_correct_answers+=2;
        this_time_isalt_answers=true;
        html_input2.style.backgroundColor = "#0F0";
        html_iscorrect2.innerHTML = "You are correct. (Alternative answer accepted)";
        html_correct2.innerHTML = "Correct answer: " + answers_2[question_number];
    }else{
        html_input2.style.backgroundColor = "#F99";
        html_iscorrect2.innerHTML = "You are wrong.";
        html_correct2.innerHTML = "Correct answer: " + answers_2[question_number];
    }
    html_input2.readOnly = true;

    //self-check input 3
    html_input3.style.backgroundColor = "#FF6";
    html_correct3.innerHTML = "Correct answer: " + answer3;
    html_input3.readOnly = true;
    html_check3.disabled=false;

    html_next.style.display = "initial";
    html_check.style.display = "none";

    ischecking=true;

}
function update_score(){
    //check score
    this_time_correct_answers +=  html_check3.selectedIndex*5;
    if(this_time_correct_answers==10){
        html_iscorrect.style.color = '#0F0';
    }else{
        html_iscorrect.style.color = '#F99';
    }

    html_iscorrect.innerHTML = "+" + this_time_correct_answers/10.0 + " score from previous question.";
    correct_answers+=this_time_correct_answers/10.0;
    this_time_correct_answers=0;

    html_score.innerHTML = "Score: " + parseFloat(correct_answers).toFixed(1) + " out of " + (current_progress+1) + " correct (" + total_questions + " questions in total)";

    html_iscorrect0.innerHTML = "";
    html_iscorrect1.innerHTML = "";
    html_iscorrect2.innerHTML = "";
    html_correct0.innerHTML = "";
    html_correct1.innerHTML = "";
    html_correct2.innerHTML = "";
    html_correct3.innerHTML = "";
    html_input0.selectedIndex = 0;
    html_input1.innerHTML = "";
    html_input2.innerHTML = "";
    html_input3.innerHTML = "";
    html_input0.style.backgroundColor = "#FFF";
    html_input1.style.backgroundColor = "#FFF";
    html_input2.style.backgroundColor = "#FFF";
    html_input3.style.backgroundColor = "#FFF";
    html_input0.disabled=false;
    html_input1.readOnly = false;
    html_input2.readOnly = false;
    html_input3.readOnly = false;
    html_check3.selectedIndex = 0;
    html_check3.disabled=true;

    group_minor_answers.style.display="initial";
    html_next.style.display = "none";
    html_check.style.display = "initial";

    ischecking = false;
}
function question(){
    let x = 0;
    console.log(chosenquestions);
    while(true){
        x=Math.floor(Math.random()*available_questions);
        if((question_groups[x]==1||question_groups[x]==4)&&(!(chosenquestions.includes(1)||chosenquestions.includes(4)))){
            break;
        }else if((question_groups[x]==2)&&(!(chosenquestions.includes(2)))){
            break;
        }else if((question_groups[x]==3)&&(!(chosenquestions.includes(3)))){
            break;
        }else if(question_groups[x]==0){
            let count = 0;
            for(let i=0;i<current_progress;i++){
                if(chosenquestions[i]==0) count++;
            }
            if(count<2) break;
        }
    }
    question_number = x;
    
    current_progress ++;
    chosenquestions[current_progress]=question_groups[x];

    html_question.innerHTML = questions_1[question_number];

    html_input0.selectedIndex = 0;
    html_input1.value = "";
    html_input2.value = "";
    html_input3.value = "";
    html_input1.focus();
}
function majoronchange(){
    if(html_input0.selectedIndex==1||html_input0.selectedIndex==2){
        group_minor_answers.style.display="none";

    }else{
        group_minor_answers.style.display="initial";
    }
}
function keydown(e){
    //virtual key code
    if(e.keyCode==38){
        //up arrow
        if(document.activeElement===html_input2){
            html_input1.focus();
        }else if(document.activeElement===html_input3){
            html_input2.focus();
        }
    }else if(e.keyCode==40){
        //down arrow
        if(document.activeElement===html_input1){
            html_input2.focus();
        }else if(document.activeElement===html_input2){
            html_input3.focus();
        }
    }
}
