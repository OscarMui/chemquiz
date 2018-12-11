//Ch9 Metal reactivity series
//fixed order
//auto-quiz
//2 inputs
//total questions = 13

let reactivity_series=[
    "K","Na","Ca","Mg","Al","Zn","Fe","Pb","Cu","Hg","Ag","Pt","Au"
];//len=13

let cation=[
    "K +","Na +","Ca 2+","Mg 2+","Al 3+","Zn 2+","Fe 2+","Pb 2+","Cu 2+","Hg 2+","Ag +","Pt 2+","Au +"
];//len=13

let anion=[
    "NO3 -","SO4 2-"
]; //len=2

let available_cation = 13;
let available_anion = 2;
let current_progress = -1;
let correct_answers = 0;

let html_question;
let html_correct;
let html_input1;
let html_iscorrect;
let html_score;
let html_your;
let html_table_question;

let chosen_cation;
let chosen_metal;
let chosen_anion;

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
    //process input none

    //calculate the correct answer1
    let correct1;
    if(chosen_cation>chosen_metal){ //chosen_cation less reactive than chosen_metal
        correct1 = 0;
    }else{
        correct1 = 1;
    }
    //check input1
    if(html_input1.selectedIndex==correct1){
        correct_answers++;
        html_iscorrect.innerHTML = "You are correct!";
        html_iscorrect.style.color = '#0F0';
    }else{
        html_iscorrect.innerHTML = "You are wrong!";
        html_iscorrect.style.color = '#F99';
    }

    html_score.innerHTML = "Score: " + correct_answers + " out of " + (current_progress+1) + " correct";
    html_table_question.innerHTML = "Put " + reactivity_series[chosen_metal] + " (s) into " + iongetbondstring(iongetformula(cation[chosen_cation]),iongetcharge(cation[chosen_cation]),false,iongetformula(anion[chosen_anion]),iongetcharge(anion[chosen_anion]),true) + " (aq)";
    html_correct.innerHTML = html_input1.options[correct1].value;
    html_your.innerHTML = html_input1.value;
    html_input1.selectedIndex = 0;
}
function question(){
    current_progress ++;
    chosen_anion = Math.floor(Math.random()*available_anion);
    chosen_cation = Math.floor(Math.random()*available_cation);
    chosen_metal = Math.floor(Math.random()*available_cation);
    html_question.innerHTML = "Put " + reactivity_series[chosen_metal] + " (s) into " + iongetbondstring(iongetformula(cation[chosen_cation]),iongetcharge(cation[chosen_cation]),false,iongetformula(anion[chosen_anion]),iongetcharge(anion[chosen_anion]),true) + " (aq)";
}
function keydown(e){
    //virtual key code
    if(e.keyCode==13){
        //enter
        next();
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