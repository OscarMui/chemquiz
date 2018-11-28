//Ch11 Reaction with water
//random order
//self quiz
//4 inputs (3 auto, 1 self)
//total questions = 13

let questions_1=[
    "potassium","sodium","calcium","magnesium","aluminium","zinc","iron","lead","copper","mercury","silver","platinum","gold"
];//len=13

let answers_0=[
    "reacts with both cold water and steam","reacts with both cold water and steam","reacts with both cold water and steam","reacts with steam","reacts with steam","reacts with steam","reacts with steam","does not react with water","does not react with water","does not react with water","does not react with water","does not react with water","does not react with water"
];//len=13
let answers_1=[
    "potassium hydroxide","sodium hydroxide","calcium hydroxide","magnesium oxide","aluminium oxide","zinc oxide","iron (ii,iii) oxide","N/A","N/A","N/A","N/A","N/A","N/A"
];//len=13

let answers_2=[
    "KOH","NaOH","Ca(OH)2","MgO","Al2O3","ZnO","Fe3O4","N/A","N/A","N/A","N/A","N/A","N/A"
];//len=13
let answers_3=[
    "Potassium dissolves in water, melts to form a silvery ball (1M) which moves rapidly on the water surface (1M), hissing sound (1M) and heat are produced (1M). Potassium burns with a lilac flame. (1M)","Sodium dissolves in water, melts to form a silvery ball (1M) which moves quickly on the water surface (1M), hissing sound (1M) and heat are produced (1M). It does not burn spontaneously, but a golden yellow flame is observed if it catches fire (1M).","Calcium sinks in water (1M), dissolves gradually (1M), colourless gas bubbles evolves (1M), milky solution is formed (1M), heat is produced (1M).","Magnesium burns with bright white light, a white powder remains","Aluminium reacts when the oxide layer is removed, a white power remains","Zinc glows when steam passes over, producing a yellow powder. The powder becomes white when it is left to cool.","Heat until it glows red before steam passes over, a black solid forms","N/A","N/A","N/A","N/A","N/A","N/A"
];//len=13
let answers_alt_1=[
    "no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","iron(ii,iii) oxide","N/A","N/A","N/A","N/A","N/A","N/A"
];//len=13

let answers_alt_2=[
    "no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt"
];//len=13

let total_questions = 13;
let question_number = 0;
let current_progress = -1;
let correct_answers = 0;
let ischecking = false;

let this_time_correct_answers = 0;
let this_time_isalt_answers = false;

let ischosen = new Array(total_questions);

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
let html_next;
let html_check;
let html_option_m1;
let html_option_m2;
let html_option_m3;
let html_option_m4;
let html_question_description;


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
    html_option_m1 = document.getElementById("html_option_m1");
    html_option_m2 = document.getElementById("html_option_m2");
    html_option_m3 = document.getElementById("html_option_m3");
    html_option_m4 = document.getElementById("html_option_m4");
    html_question_description = document.getElementById("html_question_description");

    html_score.innerHTML = "Score: " + correct_answers + " out of " + (current_progress+1) + " correct (" + total_questions + " questions in total)";
    document.addEventListener("keydown",keydown,false);
    html_check3.disabled=true;

    question();
}
function check(){
    if(current_progress==-100) return;

    //process input1: tolowercase, input2: none, input3: self-check
    let input0 = html_input0.value;
    let input1 = html_input1.value;
    input1 = input1.toLowerCase();
    let input2 = html_input2.value;

    if(input0==answers_0[question_number]){
        if(answers_0[question_number]=="does not react with water"){
            this_time_correct_answers+=10;
            group_minor_answers.style.display="none";
        }else{
            this_time_correct_answers+=1;
            if(answers_0[question_number]=="reacts with steam"){
                html_option_m1.style.display = "none";
                html_option_m2.style.display = "none";
                html_option_m3.style.display = "none";
                html_option_m4.style.display = "none";
            }else{
                html_option_m1.style.display = "initial";
                html_option_m2.style.display = "initial";
                html_option_m3.style.display = "initial";
                html_option_m4.style.display = "initial";
            }
        }
        html_input0.style.backgroundColor = "#0F0";
        html_iscorrect0.innerHTML = "You are correct.";
        html_correct0.innerHTML = "Correct answer: " + answers_0[question_number];
    }else{
        group_minor_answers.style.display="none";
        html_input0.style.backgroundColor = "#F99";
        html_iscorrect0.innerHTML = "You are wrong.";
        html_correct0.innerHTML = "Correct answer: " + answers_0[question_number];
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
    html_correct3.innerHTML = "Correct answer: " + answers_3[question_number];
    html_input3.readOnly = true;
    html_check3.disabled=false;

    html_next.style.display = "initial";
    html_check.style.display = "none";

    ischecking=true;

}
function update_score(){
    //check score
    this_time_correct_answers +=  html_check3.selectedIndex*1;
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
    do{
        x=Math.floor(Math.random()*total_questions);
    }while(ischosen[x]);
    question_number = x;
    ischosen[question_number]=true;
    current_progress ++;

    html_question.innerHTML = questions_1[question_number]+ " with water";

    html_input0.selectedIndex = 0;
    html_input1.value = "";
    html_input2.value = "";
    html_input3.value = "";
    html_input1.focus();
}
function majoronchange(){
    console.log("major");
    if(html_input0.selectedIndex==2){
        console.log("hide");
        group_minor_answers.style.display="none";
    }else{
        group_minor_answers.style.display="initial";
        if(html_input0.selectedIndex==1){
            html_question_description.innerHTML = "If the metal reacts with steam...";
        }else{
            html_question_description.innerHTML = "If the metal reacts with cold water...";
        }

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
