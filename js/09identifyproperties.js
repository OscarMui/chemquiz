//Ch9 identify properties
//random order
//auto-quiz
//9 inputs
//total questions = 9, 4 per quiz

let question_0=[
    "sodium chloride","magnesium oxide","sodium","calcium","graphite","silicon dioxide","diamond","iodine","carbon dioxide"
];//len=9

let question_groups=[
    0,0,1,1,2,2,2,3,3
]//len=9

let answers_structure=[
    "giant ionic","giant ionic","giant metallic","giant metallic","giant covalent","giant covalent","giant covalent","simple molecular","simple molecular"
];//len=9

let answers_hardness=[
    "hard","hard","hard","hard","soft","hard","hard","soft","soft"
];//len=9

let answers_malleability=[
    "brittle","brittle","malleable and ductile","malleable and ductile","brittle","brittle","brittle","brittle","brittle"
];//len=9

let answers_mpbp=[
    "high","high","high","high","high","high","high","low","low"
];//len=9

let answers_elec_s=[
    "does not conduct electricity","does not conduct electricity","conducts electricity","conducts electricity","conducts electricity","does not conduct electricity","does not conduct electricity","does not conduct electricity","does not conduct electricity"
];//len=9

let answers_elec_aq=[
    "conducts electricity","conducts electricity","conducts electricity","conducts electricity","conducts electricity","does not conduct electricity","does not conduct electricity","does not conduct electricity","does not conduct electricity"
];//len=9

let answers_elec_l=[
    "conducts electricity","conducts electricity","conducts electricity","conducts electricity","conducts electricity","does not conduct electricity","does not conduct electricity","does not conduct electricity","does not conduct electricity"
];//len=9

let answers_solubility_aq=[
    "soluble","insoluble","insoluble","insoluble","insoluble","insoluble","insoluble","insoluble","soluble"
];//len=9

let answers_solubility_non_aq=[
    "insoluble","insoluble","insoluble","insoluble","insoluble","insoluble","insoluble","soluble","insoluble"
];//len=9

let question1 = " has a(n) ";
let question2 = " structure. It is ";
let question3 = " and ";
let question4 = ". It has a ";
let question5 = " melting point and boiling point. It ";
let question6 = " in solid state, ";
let question7 = " in aqueous state and ";
let question8 = " in liquid state. It is ";
let question9 = " in water and ";
let question10 = " in heptane (a non-aqueous solution). (at room condition)";

let total_questions = 4;
let available_questions = 9;
let current_progress = -1;
let correct_answers = 0;

let ischosengroup = new Array(4);

let html_quiz_ended;
let group_input; //html element

let html_question0;
let html_question1;
let html_question2;
let html_question3;
let html_question4;
let html_question5;
let html_question6;
let html_question7;
let html_question8;
let html_question9;
let html_question10;

let html_input_structure; //input
let html_input_hardness;
let html_input_malleability;
let html_input_mpbp;
let html_input_elec_s;
let html_input_elec_aq;
let html_input_elec_l;
let html_input_solubility_aq;
let html_input_solubility_non_aq;

let html_correct;
let html_iscorrect;
let html_score;
let html_your;
let html_to_note;

function next(){
    if(current_progress==-100){
        
    }else if(current_progress+1>=total_questions){
        check();
        html_quiz_ended.innerHTML="Quiz ended, click the top-left button to return to homepage.";
        group_input.style.display = "none";
        current_progress=-100;
    }else{
        check();
        question();
    }
}
function start(){
    html_quiz_ended = document.getElementById("html_quiz_ended");
    group_input = document.getElementById("group_input");

    html_question0 = document.getElementById("html_question0");
    html_question1 = document.getElementById("html_question1");
    html_question2 = document.getElementById("html_question2");
    html_question3 = document.getElementById("html_question3");
    html_question4 = document.getElementById("html_question4");
    html_question5 = document.getElementById("html_question5");
    html_question6 = document.getElementById("html_question6");
    html_question7 = document.getElementById("html_question7");
    html_question8 = document.getElementById("html_question8");
    html_question9 = document.getElementById("html_question9");
    html_question10 = document.getElementById("html_question10");

    html_input_structure = document.getElementById("html_input_structure"); //input
    html_input_hardness = document.getElementById("html_input_hardness");
    html_input_malleability = document.getElementById("html_input_malleability");
    html_input_mpbp = document.getElementById("html_input_mpbp");
    html_input_elec_s = document.getElementById("html_input_elec_s");
    html_input_elec_aq = document.getElementById("html_input_elec_aq");
    html_input_elec_l = document.getElementById("html_input_elec_l");
    html_input_solubility_aq = document.getElementById("html_input_solubility_aq");
    html_input_solubility_non_aq = document.getElementById("html_input_solubility_non_aq");

    html_correct = document.getElementById("html_correct");
    html_iscorrect = document.getElementById("html_iscorrect");
    
    html_score = document.getElementById("html_score");
    html_your = document.getElementById("html_your");
    html_table_question = document.getElementById("html_table_question");
    html_to_note = document.getElementById("html_to_note");

    html_score.innerHTML = "Score: " + correct_answers + " out of " + (current_progress+1) + " correct (" + total_questions + " questions in total)";
    document.addEventListener("keydown",keydown,false);

    for(let i = 0;i<4;i++){
        ischosengroup[i] = false;
    }

    question();
}
function check(){
    //process input structure: tolowercase
    let input_structure = html_input_structure.value;
    input_structure = input_structure.toLowerCase();

    let input_hardness = html_input_hardness.value;
    let input_malleability = html_input_malleability.value;
    let input_mpbp = html_input_mpbp.value;
    let input_elec_s = html_input_elec_s.value;
    let input_elec_aq = html_input_elec_aq.value;
    let input_elec_l = html_input_elec_l.value;
    let input_solubility_aq = html_input_solubility_aq.value;
    let input_solubility_non_aq = html_input_solubility_non_aq.value;

    let this_time_correct_answers = 0;
    let to_note = "";

    //check structure (weight=0.2)
    if(input_structure==answers_structure[question_number]){
        this_time_correct_answers+=2;
    }else{
        to_note+=("STRUCTURE") +(": ")+(answers_structure[question_number])+("<br />");
    }

    //check other drop down menus (weight=0.1*8)
    if(input_hardness==answers_hardness[question_number]){
        this_time_correct_answers+=1;
    }else{
        to_note+=(html_input_hardness.options[0].value)+(": ")+(answers_hardness[question_number])+("<br />");
    }
    if(input_malleability==answers_malleability[question_number]){
        this_time_correct_answers+=1;
    }else{
        to_note+=(html_input_malleability.options[0].value)+(": ")+(answers_malleability[question_number])+("<br />");
    }
    if(input_mpbp==answers_mpbp[question_number]){
        this_time_correct_answers+=1;
    }else{
        to_note+=(html_input_mpbp.options[0].value)+(": ")+(answers_mpbp[question_number])+("<br />");
    }
    if(input_elec_s==answers_elec_s[question_number]){
        this_time_correct_answers+=1;
    }else{
        to_note+=(html_input_elec_s.options[0].value)+(": ")+(answers_elec_s[question_number])+("<br />");
    }
    if(input_elec_aq==answers_elec_aq[question_number]){
        this_time_correct_answers+=1;
    }else{
        to_note+=(html_input_elec_aq.options[0].value)+(": ")+(answers_elec_aq[question_number])+("<br />");
    }
    if(input_elec_l==answers_elec_l[question_number]){
        this_time_correct_answers+=1;
    }else{
        to_note+=(html_input_elec_l.options[0].value)+(": ")+(answers_elec_l[question_number])+("<br />");
    }
    if(input_solubility_aq==answers_solubility_aq[question_number]){
        this_time_correct_answers+=1;
    }else{
        to_note+=(html_input_solubility_aq.options[0].value)+(": ")+(answers_solubility_aq[question_number])+("<br />");
    }
    if(input_solubility_non_aq==answers_solubility_non_aq[question_number]){
        this_time_correct_answers+=1;
    }else{
        to_note+=(html_input_solubility_non_aq.options[0].value)+(": ")+(answers_solubility_non_aq[question_number])+("<br />");
    }

    //check score and display output
    if(this_time_correct_answers==10){
        html_iscorrect.innerHTML = "You are correct!";
        html_iscorrect.style.color = '#0F0';
    }else if(this_time_correct_answers!=0){
        html_iscorrect.innerHTML = "Some of your answers are incorrect!";
        html_iscorrect.style.color = '#F99';
    }else{
        html_iscorrect.innerHTML = "You are wrong!";
        html_iscorrect.style.color = '#F99';
    }

    correct_answers+=this_time_correct_answers/10.0;
    html_score.innerHTML = "Score: " + parseFloat(correct_answers).toFixed(1) + " out of " + (current_progress+1) + " correct (" + total_questions + " questions in total)";
    html_correct.innerHTML = correct_answer_to_string(question_number);
    html_your.innerHTML = your_answer_to_string(question_number);
    if(this_time_correct_answers==10) html_to_note.innerHTML = "Well done!";
    else if(this_time_correct_answers>=5) html_to_note.innerHTML = to_note;
    else html_to_note.innerHTML = "Work harder!";
}

function question(){
    html_question1.innerHTML = question1;
    html_question2.innerHTML = question2;
    html_question3.innerHTML = question3;
    html_question4.innerHTML = question4;
    html_question5.innerHTML = question5;
    html_question6.innerHTML = question6;
    html_question7.innerHTML = question7;
    html_question8.innerHTML = question8;
    html_question9.innerHTML = question9;
    html_question10.innerHTML = question10;

    let x = 0;
    do{
        x=Math.floor(Math.random()*available_questions);
    }while(ischosengroup[question_groups[x]]);
    question_number = x;
    ischosengroup[question_groups[x]]=true;
    current_progress ++;

    html_question0.innerHTML = question_0[x];

    html_input_structure.value = "";
    html_input_hardness.selectedIndex = 0;
    html_input_malleability.selectedIndex = 0;
    html_input_mpbp.selectedIndex = 0;
    html_input_elec_s.selectedIndex = 0;
    html_input_elec_aq.selectedIndex = 0;
    html_input_elec_l.selectedIndex = 0;
    html_input_solubility_aq.selectedIndex = 0;
    html_input_solubility_non_aq.selectedIndex = 0;
}
function keydown(e){
    //virtual key code
    if(e.keyCode==13){
        //enter
        next();
    }
}
function your_answer_to_string(i){
    return question_0[i] + 
    question1 + 
    html_input_structure.value + 
    question2 + 
    html_input_hardness.value +
    question3 +
    html_input_malleability.value +
    question4 +
    html_input_mpbp.value +
    question5 +
    html_input_elec_s.value+
    question6 +
    html_input_elec_aq.value +
    question7 +
    html_input_elec_l.value +
    question8 +
    html_input_solubility_aq.value +
    question9 +
    html_input_solubility_non_aq.value +
    question10;

}
function correct_answer_to_string(i){
    return question_0[i] + 
    question1 + 
    answers_structure[i] + 
    question2 + 
    answers_hardness[i] +
    question3 +
    answers_malleability[i] +
    question4 +
    answers_mpbp[i] +
    question5 +
    answers_elec_s[i]+
    question6 +
    answers_elec_aq[i] +
    question7 +
    answers_elec_l[i] +
    question8 +
    answers_solubility_aq[i] +
    question9 +
    answers_solubility_non_aq[i] +
    question10;
}