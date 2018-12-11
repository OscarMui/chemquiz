//Ch19 Simple Chemical Cells with Salt Bridge
//random order
//auto-quiz
//9 inputs
//infinite questions

let ecs=[
    "Mg","Al","Zn","Fe","Cu","Ag","Au"
];//len=7

let electrolyte=[
    "sulphate","nitrate","chloride"
];//len=3

let cation_formula=[
    "Mg 2+","Al 3+","Zn 2+","Fe 2+","Cu 2+","Ag +","Au +"    
];//len=7

let anion_formula=[
    "SO4 2-","NO3 -","Cl -"
];//len=3

let anion_need_brackets=[
    true,true,false
];

let question0 = "Left electrode";
let question1 = " is the ";
let question2 = " electrode, or in other words, ";
let question3 = " . Right electrode is the ";
let question4 = " electrode, or in other words, ";
let question5 = " . Electrons flow from ";
let question6 = " through the external circuit. The voltmeter gives a ";
let question7 = " reading. Salt bridge can complete the circuit and balance the charges. Mainly, on the ";
let question8 = "left electrode";//question8 = LEFT + LEFT SOL
let question9 = " side, ";
let question10 = " ion moves from the left electrode to the salt bridge while ";
let question11 = " ion moves from the salt bridge to the left electrode. On the ";
let question12 = "right electrode";//question12 = RIGHT + RIGHT SOL
let question13 = " side, ";
let question14 = " ion moves from the right electrode to the salt bridge while ";
let question15 = " ion moves from the salt bridge to the right electrode.";

let available_cation = 7;
let available_anion = 3;
let current_progress = -1;
let correct_answers = 0;

let chosen_cation = new Array(3);
let chosen_anion = new Array(3);
let ischosen_cation = new Array(3);
let ischosen_anion = new Array(3);

let group_input; //html element

let html_question_a;
let html_question_b;
let html_question_c;
let html_question_d;
let html_question_e;

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
let html_question11;
let html_question12;
let html_question13;
let html_question14;
let html_question15;

//input
let html_input_left_name;
let html_input_left_redox_name;
let html_input_right_name;
let html_input_right_redox_name;
let html_input_electron_flow;
let html_input_voltmeter;
let html_input_left_to_salt_bridge;
let html_input_left_to_electrode;
let html_input_right_to_salt_bridge;
let html_input_right_to_electrode;

let html_correct;
let html_iscorrect;
let html_score;
let html_your;
let html_to_note;

function next(){
    check();
    question();
}

function start(){
    group_input = document.getElementById("group_input");

    html_question_a = document.getElementById("html_question_a");
    html_question_b = document.getElementById("html_question_b");
    html_question_c = document.getElementById("html_question_c");
    html_question_d = document.getElementById("html_question_d");
    html_question_e = document.getElementById("html_question_e");

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
    html_question11 = document.getElementById("html_question11");
    html_question12 = document.getElementById("html_question12");
    html_question13 = document.getElementById("html_question13");
    html_question14 = document.getElementById("html_question14");
    html_question15 = document.getElementById("html_question15");

    html_input_left_name = document.getElementById("html_input_left_name"); //input
    html_input_left_redox_name = document.getElementById("html_input_left_redox_name");
    html_input_right_name = document.getElementById("html_input_right_name");
    html_input_right_redox_name = document.getElementById("html_input_right_redox_name");
    html_input_electron_flow = document.getElementById("html_input_electron_flow");
    html_input_voltmeter = document.getElementById("html_input_voltmeter");
    html_input_left_to_salt_bridge = document.getElementById("html_input_left_to_salt_bridge");
    html_input_left_to_electrode = document.getElementById("html_input_left_to_electrode");
    html_input_right_to_salt_bridge = document.getElementById("html_input_right_to_salt_bridge");
    html_input_right_to_electrode = document.getElementById("html_input_right_to_electrode");

    html_correct = document.getElementById("html_correct");
    html_iscorrect = document.getElementById("html_iscorrect");
    
    html_score = document.getElementById("html_score");
    html_your = document.getElementById("html_your");
    html_table_question = document.getElementById("html_table_question");
    html_to_note = document.getElementById("html_to_note");

    html_score.innerHTML = "Score: " + correct_answers + " out of " + (current_progress+1) + " correct";
    document.addEventListener("keydown",keydown,false);

    question();
}
function check(){
    let this_time_correct_answers = 0;
    let question_string = 
    html_question_a.innerHTML+"<br />"+
    html_question_b.innerHTML+"<br />"+
    html_question_c.innerHTML+"<br />"+
    html_question_d.innerHTML+"<br />"+
    html_question_e.innerHTML;
    let correct_answer_string = "";
    let your_answer_string="";
    let correct_left_i;
    let correct_left_redox_i;
    let correct_right_i;
    let correct_right_redox_i;
    let correct_voltmeter_i;
    let correct_electron_flow_i;
    let correct_left_to_salt_bridge_i;
    let correct_left_to_electrode_i;
    let correct_right_to_salt_bridge_i;
    let correct_right_to_electrode_i;

    if(chosen_cation[0]<chosen_cation[2]){//the higher the index, the lower it is in the ecs
        //left more reactive than right
        correct_left_i=2;
        correct_left_redox_i=2;
        correct_right_i=1;
        correct_right_redox_i=1;
        correct_electron_flow_i=1;
        correct_voltmeter_i=2;
        correct_left_to_salt_bridge_i=1;
        correct_left_to_electrode_i=2;
        correct_right_to_salt_bridge_i=2;
        correct_right_to_electrode_i=1;
    }else{
        correct_left_i=1;
        correct_left_redox_i=1;
        correct_right_i=2;
        correct_right_redox_i=2;
        correct_electron_flow_i=2;
        correct_voltmeter_i=1;
        correct_left_to_salt_bridge_i=2;
        correct_left_to_electrode_i=1;
        correct_right_to_salt_bridge_i=1;
        correct_right_to_electrode_i=2;
    }
    //(weight=0.1*4)
    if(html_input_left_name.selectedIndex==correct_left_i){
        this_time_correct_answers+=1;
    }else{
        correct_answer_string+=(html_input_left_name.options[0].value)+(": ")+(html_input_left_name.options[correct_left_i].value)+("<br />");
        your_answer_string+=(html_input_left_name.options[0].value)+(": ")+(html_input_left_name.value)+("<br />");
    }
    if(html_input_left_redox_name.selectedIndex==correct_left_redox_i){
        this_time_correct_answers+=1;
    }else{
        correct_answer_string+=(html_input_left_redox_name.options[0].value)+(": ")+(html_input_left_redox_name.options[correct_left_redox_i].value)+("<br />");
        your_answer_string+=(html_input_left_redox_name.options[0].value)+(": ")+(html_input_left_redox_name.value)+("<br />");
    }
    if(html_input_right_name.selectedIndex==correct_right_i){
        this_time_correct_answers+=1;
    }else{
        correct_answer_string+=(html_input_right_name.options[0].value)+(": ")+(html_input_right_name.options[correct_right_i].value)+("<br />");
        your_answer_string+=(html_input_right_name.options[0].value)+(": ")+(html_input_right_name.value)+("<br />");
    }
    if(html_input_right_redox_name.selectedIndex==correct_right_redox_i){
        this_time_correct_answers+=1;
    }else{
        correct_answer_string+=(html_input_right_redox_name.options[0].value)+(": ")+(html_input_right_redox_name.options[correct_right_redox_i].value)+("<br />");
        your_answer_string+=(html_input_right_redox_name.options[0].value)+(": ")+(html_input_right_redox_name.value)+("<br />");
    }
    //(weight=0.1*2)
    if(html_input_electron_flow.selectedIndex==correct_electron_flow_i){
        this_time_correct_answers+=1;
    }else{
        correct_answer_string+=(html_input_electron_flow.options[0].value)+(": ")+(html_input_electron_flow.options[correct_electron_flow_i].value)+("<br />");
        your_answer_string+=(html_input_electron_flow.options[0].value)+(": ")+(html_input_electron_flow.value)+("<br />");
    }
    if(html_input_voltmeter.selectedIndex==correct_voltmeter_i){
        this_time_correct_answers+=1;
    }else{
        correct_answer_string+=(html_input_voltmeter.options[0].value)+(": ")+(html_input_voltmeter.options[correct_voltmeter_i].value)+("<br />");
        your_answer_string+=(html_input_voltmeter.options[0].value)+(": ")+(html_input_voltmeter.value)+("<br />");
    }
    //(weight=0.1*4)
    if(html_input_left_to_salt_bridge.selectedIndex==correct_left_to_salt_bridge_i){
        this_time_correct_answers+=1;
    }else{
        correct_answer_string+=(html_input_left_to_salt_bridge.options[0].value)+(": ")+(html_input_left_to_salt_bridge.options[correct_left_to_salt_bridge_i].value)+("<br />");
        your_answer_string+=(html_input_left_to_salt_bridge.options[0].value)+(": ")+(html_input_left_to_salt_bridge.value)+("<br />");
    }
    if(html_input_left_to_electrode.selectedIndex==correct_left_to_electrode_i){
        this_time_correct_answers+=1;
    }else{
        correct_answer_string+=(html_input_left_to_electrode.options[0].value)+(": ")+(html_input_left_to_electrode.options[correct_left_to_electrode_i].value)+("<br />");
        your_answer_string+=(html_input_left_to_electrode.options[0].value)+(": ")+(html_input_left_to_electrode.value)+("<br />");
    }
    if(html_input_right_to_salt_bridge.selectedIndex==correct_right_to_salt_bridge_i){
        this_time_correct_answers+=1;
    }else{
        correct_answer_string+=(html_input_right_to_salt_bridge.options[0].value)+(": ")+(html_input_right_to_salt_bridge.options[correct_right_to_salt_bridge_i].value)+("<br />");
        your_answer_string+=(html_input_right_to_salt_bridge.options[0].value)+(": ")+(html_input_right_to_salt_bridge.value)+("<br />");
    }
    if(html_input_right_to_electrode.selectedIndex==correct_right_to_electrode_i){
        this_time_correct_answers+=1;
    }else{
        correct_answer_string+=(html_input_right_to_electrode.options[0].value)+(": ")+(html_input_right_to_electrode.options[correct_right_to_electrode_i].value)+("<br />");
        your_answer_string+=(html_input_right_to_electrode.options[0].value)+(": ")+(html_input_right_to_electrode.value)+("<br />");
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
    html_score.innerHTML = "Score: " + parseFloat(correct_answers).toFixed(1) + " out of " + (current_progress+1) + " correct";
    html_to_note.innerHTML = question_string;
    if(correct_answer_string!="") html_correct.innerHTML = correct_answer_string;
    else html_correct.innerHTML = "Well done!";
    html_your.innerHTML = your_answer_string;
}

function question(){
    html_question0.innerHTML = question0;
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
    html_question11.innerHTML = question11;
    html_question12.innerHTML = question12;
    html_question13.innerHTML = question13;
    html_question14.innerHTML = question14;
    html_question15.innerHTML = question15;

    for(let i=0;i<3;i++){
        ischosen_cation[i]=false;
        ischosen_anion[i]=false;
    }
    for(let i=0;i<3;i++){
        let x = 0;
        do{
            x=Math.floor(Math.random()*available_cation);
        }while(ischosen_cation[x]);
        chosen_cation[i] = x;
        ischosen_cation[x]=true;

        do{
            x=Math.floor(Math.random()*available_anion);
        }while(ischosen_anion[x]||(cation_formula[chosen_cation[i]]=="Ag +"&&anion_formula[x]=="Cl -"));
        chosen_anion[i] = x;
        ischosen_anion[x]=true;
    }

    html_question_a.innerHTML = "LEFT METAL: " + ecs[chosen_cation[0]]
    + " (s)";
    html_question_b.innerHTML = "RIGHT METAL: " + ecs[chosen_cation[2]]
    + " (s)";
    html_question_c.innerHTML = "C: " + iongetbondstring(iongetformula(cation_formula[chosen_cation[0]]),iongetcharge(cation_formula[chosen_cation[0]]),false,iongetformula(anion_formula[chosen_anion[0]]),iongetcharge(anion_formula[chosen_anion[0]]),anion_need_brackets[chosen_anion[0]])
    + " (aq)";
    html_question_d.innerHTML = "D: " + iongetbondstring(iongetformula(cation_formula[chosen_cation[1]]),iongetcharge(cation_formula[chosen_cation[1]]),false,iongetformula(anion_formula[chosen_anion[1]]),iongetcharge(anion_formula[chosen_anion[1]]),anion_need_brackets[chosen_anion[1]])
    + " (aq)";
    html_question_e.innerHTML = "E: " + iongetbondstring(iongetformula(cation_formula[chosen_cation[2]]),iongetcharge(cation_formula[chosen_cation[2]]),false,iongetformula(anion_formula[chosen_anion[2]]),iongetcharge(anion_formula[chosen_anion[2]]),anion_need_brackets[chosen_anion[2]])
    + " (aq)";

    html_input_left_to_salt_bridge.options[1].innerHTML = cation_formula[chosen_cation[0]];
    html_input_left_to_salt_bridge.options[2].innerHTML = anion_formula[chosen_anion[0]];

    html_input_left_to_electrode.options[1].innerHTML = cation_formula[chosen_cation[1]];
    html_input_left_to_electrode.options[2].innerHTML = anion_formula[chosen_anion[1]];

    html_input_right_to_salt_bridge.options[1].innerHTML = cation_formula[chosen_cation[2]];
    html_input_right_to_salt_bridge.options[2].innerHTML = anion_formula[chosen_anion[2]];

    html_input_right_to_electrode.options[1].innerHTML = cation_formula[chosen_cation[1]];
    html_input_right_to_electrode.options[2].innerHTML = anion_formula[chosen_anion[1]];

    current_progress ++;

    html_input_left_name.selectedIndex = 0;
    html_input_left_redox_name.selectedIndex = 0;
    html_input_right_name.selectedIndex = 0;
    html_input_right_redox_name.selectedIndex = 0;
    html_input_electron_flow.selectedIndex = 0;
    html_input_voltmeter.selectedIndex = 0;
    html_input_left_to_salt_bridge.selectedIndex = 0;
    html_input_left_to_electrode.selectedIndex = 0;
    html_input_right_to_salt_bridge.selectedIndex = 0;
    html_input_right_to_electrode.selectedIndex = 0;
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