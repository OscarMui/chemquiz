//Ch5 elements challenge
//fixed order
//auto-quiz
//2 inputs
//total questions = 105

let answers_1=[
    "hydrogen","helium","lithium","beryllium","boron","carbon","nitrogen","oxygen","fluorine","neon","sodium","magnesium","aluminium","silicon","phosphorus","sulphur","chlorine","argon","potassium","calcium","scandium","titanium","vanadium","chromium","manganese","iron","cobalt","nickel","copper","zinc","gallium","germanium","arsenic","selenium","bromine","krypton","rubidium","strontium","yttrium","zirconium","niobium","molybdenum","technetium","ruthenium","rhodium","palladium","silver","cadmium","indium","tin","antimony","tellurium","iodine","xenon","caesium","barium","lanthanum","cerium","praseodymium","neodymium","promethium","samarium","europium","gadolinium","terbium","dysprosium","holmium","erbium","thulium","ytterbium","lutetium","hafnium","tantalum","tungsten","rhenium","osmium","iridium","platinum","gold","mercury","thallium","lead","bismuth","polonium","astatine","radon","francium","radium","actinium","thorium","protactinium","uranium","neptunium","plutonium","americium","curium","berkelium","californium","einsteinium","fermium","mendelevium","nobelium","lawrencium","rutherfordium","dubnium"
];//len=105

let answers_2=[
    "H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db"
];//len=105

let answers_alt_1=[
    "no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","Sulfur","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt"
];//len=105

let answers_alt_2=[
    "no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt"
];//len=105

let total_questions = 105;
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
        this_time_correct_answers+=1;
    }else if(input1==answers_alt_1[current_progress]&&answers_alt_1[current_progress]!="no_alt"){
        this_time_correct_answers+=1;
        this_time_isalt_answers=true;
    }

    //check input2
    if(input2==answers_2[current_progress]){
        this_time_correct_answers+=1;
    }else if(input2==answers_alt_2[current_progress]&&answers_alt_2[current_progress]!="no_alt"){
        this_time_correct_answers+=1;
        this_time_isalt_answers=true;
    }

    //check score and display output
    if(this_time_correct_answers==2){
        html_iscorrect.innerHTML = "You are correct!";
        html_iscorrect.style.color = '#0F0';
    }else if(this_time_correct_answers!=0){
        html_iscorrect.innerHTML = "Some of your answers are incorrect!";
        html_iscorrect.style.color = '#F99';
    }else{
        html_iscorrect.innerHTML = "You are wrong!";
        html_iscorrect.style.color = '#F99';
    }

    correct_answers+=this_time_correct_answers/2.0;
    html_score.innerHTML = "Score: " +  parseFloat(correct_answers).toFixed(1) + " out of " + (current_progress+1) + " correct (" + total_questions + " questions in total)";
    html_table_question.innerHTML = (current_progress+1);
    html_correct.innerHTML = answers_1[current_progress]+", "+answers_2[current_progress];
    html_your.innerHTML = html_input1.value + ", " + html_input2.value;
}
function question(){
    current_progress ++;

    html_question.innerHTML = "Atomic Number: " + (current_progress+1);
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
        if(document.activeElement==html_input2) html_input1.focus();
    }else if(e.keyCode==40){
        //down arrow
        if(document.activeElement==html_input1) html_input2.focus();
    }
}