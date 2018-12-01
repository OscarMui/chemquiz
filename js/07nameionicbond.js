//Ch7 name to formula
//random order
//auto-quiz
//1 input
//UNLIMITED QUESTIONS

let cation_formula=[
    "NH4 +","Li +","Be 2+","Na +","Mg 2+","Al 3+","K +","Ca 2+","Fe 2+","Fe 3+","Cu +","Cu 2+","Hg +","Hg 2+","Co 2+","Ni 2+","Mn 2+","Cr 3+","Zn 2+","Ag +"
];//len=20
let cation_name=[
    "ammonium","lithium","beryllium","sodium","magnesium","aluminium","potassium","calcium","iron (ii)","iron (iii)","copper (i)","copper (ii)","mercury (i)","mercury (ii)","cobalt (ii)","nickel (ii)","manganese (ii)","chromium (iii)","zinc","silver"
];//len=20
let cation_needbracket=[
    true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false
];//len=20

let anion_formula=[
    "CrO4 2-","Cr2O7 2-","CO3 2-","CN -","ClO -","ClO3 -","MnO4 -","SO4 2-","SO3 2-","SiO3 2-","OH -","NO3 -","NO2 -","PO4 3-","N 3-","O 2-","F -","P 3-","S 2-","Cl -","Br -"
];//len=21
let anion_name=[
    "chromate","dichromate","carbonate","cyanide","hypochlorite","chlorate","permanganate","sulphate","sulphite","silicate","hydroxide","nitrate","nitrite","phosphate","nitride","oxide","fluoride","phosphide","sulphide","chloride","bromide"
];//len=21
let anion_needbracket=[
    true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false
];//len = 21

let alt_cation_name=[
    "no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","iron(ii)","iron(iii)","copper(i)","copper(ii)","mercury(i)","mercury(ii)","cobalt(ii)","nickel(ii)","manganese(ii)","chromium(iii)","no_alt","no_alt"
];//len = 20
let alt_anion_name=[
    "no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","sulfate","sulfite","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","sulfide","no_alt","no_alt"
];//len = 21

let total_cation = 20;
let total_anion = 21;
let cation_number = 0;
let anion_number = 0;
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
    check();
    question();
}
function start(){
    html_question = document.getElementById("html_question");
    html_correct = document.getElementById("html_correct");
    html_input1 = document.getElementById("html_input1");
    html_iscorrect = document.getElementById("html_iscorrect");
    html_score = document.getElementById("html_score");
    html_your = document.getElementById("html_your");
    html_table_question = document.getElementById("html_table_question");
    
    html_score.innerHTML = "Score: " + correct_answers + " out of " + (current_progress+1) + " correct";
    document.addEventListener("keydown",keydown,false);   

    question();
}
function check(){
    //process input1: tolowercase
    //process input2: none
    let input1 = html_input1.value;
    input1 = input1.toLowerCase();

    let answer1 =cation_name[cation_number] + " " + anion_name[anion_number];
    let answer1_alt1 = alt_cation_name[cation_number]+ " " +anion_name[anion_number];
    let answer1_alt2 = cation_name[cation_number] + " " + alt_anion_name[anion_number];
    let answer1_alt3 = alt_cation_name[cation_number]+ " " +alt_anion_name[anion_number];
    
    //check input1
    if(input1==answer1){
        correct_answers++;
        html_iscorrect.innerHTML = "You are correct!";
        html_iscorrect.style.color = '#0F0';
    }else if(input1==answer1_alt1&&!answer1_alt1.includes("no_alt")){
        correct_answers++;
        html_iscorrect.innerHTML = "You are correct! (Alternative answer accepted)";
        html_iscorrect.style.color = '#0F0';
    }else if(input1==answer1_alt2&&!answer1_alt2.includes("no_alt")){
        correct_answers++;
        html_iscorrect.innerHTML = "You are correct! (Alternative answer accepted)";
        html_iscorrect.style.color = '#0F0';
    }else if(input1==answer1_alt3&&!answer1_alt3.includes("no_alt")){
        correct_answers++;
        html_iscorrect.innerHTML = "You are correct! (Alternative answer accepted)";
        html_iscorrect.style.color = '#0F0';
    }else{
        html_iscorrect.innerHTML = "You are wrong!";
        html_iscorrect.style.color = '#F99';
    }

    html_score.innerHTML = "Score: " +  correct_answers + " out of " + (current_progress+1) + " correct";

    let formula1 = iongetformula(cation_formula[cation_number]);
    let charge1 = iongetcharge(cation_formula[cation_number]);
    let formula2 = iongetformula(anion_formula[anion_number]);
    let charge2 = iongetcharge(anion_formula[anion_number]);

    html_table_question.innerHTML = iongetbondstring(formula1,charge1,cation_needbracket[cation_number],formula2,charge2,anion_needbracket[anion_number]);

    html_correct.innerHTML = answer1;
    html_your.innerHTML = html_input1.value;
}

function question(){
    cation_number=Math.floor(Math.random()*total_cation);
    anion_number=Math.floor(Math.random()*total_anion);
    current_progress ++;

    let formula1 = iongetformula(cation_formula[cation_number]);
    let charge1 = iongetcharge(cation_formula[cation_number]);
    let formula2 = iongetformula(anion_formula[anion_number]);
    let charge2 = iongetcharge(anion_formula[anion_number]);

    html_question.innerHTML = iongetbondstring(formula1,charge1,cation_needbracket[cation_number],formula2,charge2,anion_needbracket[anion_number]);

    html_input1.value = "";

    html_input1.focus();
}
function keydown(e){
    if(e.keyCode==13){
        next();
    }else if(e.keyCode==38){
        //up arrow
        if(document.activeElement==html_input2) html_input1.focus();
    }else if(e.keyCode==40){
        //down arrow
        if(document.activeElement==html_input1) html_input2.focus();
    }
}

//ionic bond specials
function iongetformula(full_formula){
    let i = 0;
    let formula = "";
    while(full_formula.charAt(i)!=' '){
        formula += full_formula.charAt(i);
        i++;
    }
    return formula;
}
function iongetcharge(full_formula){
    let i = 0;
    let charge = "";
    while(full_formula.charAt(i)!=' '){
        i++;
    }

    while(true){
        i++;
        if(full_formula.charAt(i)=='+'){
            if(charge=="") return +1;
            else return parseInt(charge);
        }else if(full_formula.charAt(i)=='-'){
            if(charge=="") return -1;
            else return parseInt(charge)*-1;
        }else{
            charge+=full_formula.charAt(i);
        }
    }
}

function iongetbondint(receiver/*array [0]=first compound [1]=second compound*/ , charge1, charge2){
    let totalcharge1 = Math.abs(charge1);
    let totalcharge2 = Math.abs(charge2);
    let i_charge1 = 1;
    let i_charge2 = 1;

    while(totalcharge1!=totalcharge2){
        if(totalcharge1>totalcharge2){
            totalcharge2+=Math.abs(charge2);
            i_charge2++;
        }else{
            totalcharge1+=Math.abs(charge1);
            i_charge1++;
        }
    }
    receiver[0] = i_charge1;
    receiver[1] = i_charge2;

}

function iongetbondstring(formula1,charge1,needbracket1,formula2,charge2,needbracket2){
    let receiver = new Array(2);
    let bondstring="";
    iongetbondint(receiver,charge1,charge2);
    if(receiver[0]!=1&&needbracket1){
        bondstring+="(";
    }
    bondstring+=formula1;
    if(receiver[0]!=1&&needbracket1){
        bondstring+=")";
    }
    if(receiver[0]!=1){
        bondstring+=receiver[0];
    }

    if(receiver[1]!=1&&needbracket2){
        bondstring+="(";
    }
    bondstring+=formula2;
    if(receiver[1]!=1&&needbracket2){
        bondstring+=")";
    }
    if(receiver[1]!=1){
        bondstring+=receiver[1];
    }
    return bondstring;
}