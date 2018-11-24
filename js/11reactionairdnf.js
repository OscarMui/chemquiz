//Ch11 Reaction with air
//fixed order
//auto-quiz
//3 inputs (2 auto, 1 self)
//total questions = 13

let questions_1=[
    "potassium","sodium","calcium","magnesium","aluminium","zinc","iron","lead","copper","mercury","silver","platinum","gold"
];//len=13

let answers_0=[
    "reacts","reacts","reacts","reacts","reacts","reacts","reacts","reacts","reacts","reacts","does not react","does not react","does not react"
];//len=13
let answers_1=[
    "potassium oxide","sodium oxide","calcium oxide","magnesium oxide","aluminium oxide","zinc oxide","iron (ii,iii) oxide","lead (ii) oxide","copper (ii) oxide","mercury (ii) oxide","N/A","N/A","N/A"
];//len=13

let answers_2=[
    "K2O","Na2O","CaO","MgO","Al2O3","ZnO","Fe3O4","PbO","CuO","HgO","N/A","N/A","N/A"
];//len=13
let answers_3=[
    "burns vigorously with a lilac flame, a white smoke forms, a yellow powder forms","burns vigorously with a golden yellow flame, a white smoke forms, a white powder forms","burns quite vigorously with a brick-red flame, a white powder forms","burns with a very bright white light, a white powder forms","burns with white sparks, a white powder forms","a powder (yellow when hot, white when cold) forms ","iron powder burns with sparks, a black solid forms","a powder (orange when hot, yellow when cold) forms on the surface","a black powder forms on the surface","a red powder forms on the surface","N/A","N/A","N/A"
];//len=13
let answers_alt_1=[
    "no_alt","no_alt","no_alt","no_alt","no_alt","no_alt","iron(ii,iii) oxide","lead(ii) oxide","copper(ii) oxide","mercury(ii) oxide","no_alt","no_alt","no_alt"
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
    //chemical_equations("Ca(s)","H2O(l)","A","Ca(OH)2","H2(g)","A");
    chemical_equations("N2(g)","H2(g)","A","NH3(g)","A","A");
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
        if(answers_0[question_number]=="does not react"){
            this_time_correct_answers+=10;
            group_minor_answers.style.display="none";
        }else{
            this_time_correct_answers+=1;
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
    do{
        x=Math.floor(Math.random()*total_questions);
    }while(ischosen[x]);
    question_number = x;
    ischosen[question_number]=true;
    current_progress ++;

    html_question.innerHTML = questions_1[question_number]+ " with air";

    html_input0.selectedIndex = 0;
    html_input1.value = "";
    html_input2.value = "";
    html_input3.value = "";
    html_input1.focus();
}
function majoronchange(){
    console.log("major");
    if(html_input0.selectedIndex==1){
        console.log("hide");
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
class compoundInformation{
    constructor(formula,coefficient){
        this.coefficient = coefficient;//type: int

        this.elements = new Array(10); //type: string
        //number of atoms for each element
        this.numberOfAtoms = new Array(10); //type: int
        //number of elements in the formula
        this.elements_i = -1;
        let isElementInBrackets = new Array(10); //local variable type:bool
        let isBracketValid = false; //check if it is just state symbols
        let isInBracket = false;
        for(let i=0;i<10;i++){
            this.elements[i]="";
            this.numberOfAtoms[i]=1;
            isElementInBrackets[i] = false;
        }


        for(let i=0;i<formula.length;i++){
            if(i==0&&formula.charAt(0)=='A'&&formula.length==1){
                this.elements_i++;
                return;
            }else if(formula.charCodeAt(i)>=65&&formula.charCodeAt(i)<=90){//CAPITAL LETTERS
                this.elements_i++;
                this.elements[this.elements_i] += formula.charAt(i);
                if(isInBracket&&isBracketValid){
                    isElementInBrackets[this.elements_i]=true;
                }
            }else if(formula.charCodeAt(i)>=97&&formula.charCodeAt(i)<=122){//SMALL LETTERS
                if((isInBracket&&isBracketValid)||!(isInBracket))
                    this.elements[this.elements_i] += formula.charAt(i);
            }else if(formula.charCodeAt(i)>=49&&formula.charCodeAt(i)<=57){//NUMBERS
                this.numberOfAtoms[this.elements_i] = formula.charAt(i);
            }else if(formula.charAt(i)=='('){
                isInBracket=true;
                if(formula.charCodeAt(i+1)>=65&&formula.charCodeAt(i+1)<=90){
                    isBracketValid=true;
                }else{
                    isBracketValid=false;
                }
            }else if(formula.charAt(i)==')'){
                for(let j=0;j<10;j++){
                    if(isElementInBrackets[j]){
                        if(formula.charCodeAt(i+1)>=49&&formula.charCodeAt(i+1)<=57&&formula.charCodeAt(i+2)>=48&&formula.charCodeAt(i+2)<=57){
                            this.numberOfAtoms[j]*=formula.charAt(i+1)*10+formula.charAt(i+2)*1;
                        }else if(formula.charCodeAt(i+1)>=49&&formula.charCodeAt(i+1)<=57){
                            this.numberOfAtoms[j]*=formula.charAt(i+1)*1;
                        }
                    }
                    isElementInBrackets[i] = false;
                }
                isInBracket=false;
            }
        }
        this.elements_i++;
    }
    getRealNumberOfAtoms(index_atom){
        return this.coefficient*this.numberOfAtoms[index_atom];
    }

}
function combine_state_symbol(formula,state){
    return formula + "(" + state + ")";
}
function equation_2_1_balancer(){

}
function elements_finder(target,information){
    for(let i=0;i<information.elements_i;i++){
        if(information.elements[i]==target){
            return i;
        }
    }
    return -1; //return -1 if not found
}
function chemical_equations(reactantString1,reactantString2,reactantString3,productString1,productString2,productString3){
    let reactantProduct = new Array(6);

    reactantProduct[0] = new compoundInformation(reactantString1,1);
    reactantProduct[1] = new compoundInformation(reactantString2,1);
    reactantProduct[2] = new compoundInformation(reactantString3,1);
    reactantProduct[3] = new compoundInformation(productString1,1);
    reactantProduct[4] = new compoundInformation(productString2,1);
    reactantProduct[5] = new compoundInformation(productString3,1);

    console.log("INPUT: reactant 1: " + reactantProduct[0].elements_i); //Ca(s)
    console.log("INPUT: reactant 1: " + reactantProduct[0].elements[0]); //Ca(s)
    console.log("INPUT: reactant 2: " + reactantProduct[1].elements_i); //H2O(l)
    console.log("INPUT: reactant 3: " + reactantProduct[2].elements_i); //A
    console.log("INPUT: product 1: " + reactantProduct[3].elements_i); //Ca(OH)2(s)
    console.log("INPUT: product 2: " + reactantProduct[4].elements_i); //H2(g)
    console.log("INPUT: product 3: " + reactantProduct[5].elements_i); //A

    let i=0;
    let balanced_elements=0;
    let total_elements = reactantProduct[0].elements_i+
        reactantProduct[1].elements_i+
        reactantProduct[2].elements_i+
        reactantProduct[3].elements_i+
        reactantProduct[4].elements_i+
        reactantProduct[5].elements_i
        +6;

    while(balanced_elements!=total_elements){
        for(let j=0;j<3;j++){
            for(let k=0;k<reactantProduct[j].elements_i;k++){
                console.log("TEMP2: j"+j);
                console.log("TEMP2: k"+k);
                let target = reactantProduct[j].elements[k];
                let reactantsInvolved_i = 0;
                let productsInvolved_i = 0;
                let reactantsInvolved = new Array(3);
                let productsInvolved = new Array(3);
                for(let l=0;l<6;l++){
                    let results =  elements_finder(target,reactantProduct[l]);
                    if(results!=-1){
                        if(l<3){
                            reactantsInvolved[reactantsInvolved_i] = [l,results];
                            reactantsInvolved_i++;
                        }else{
                            productsInvolved[productsInvolved_i] = [l,results];
                            productsInvolved_i++;
                        }
                    }
                }
                console.log("TEMP: reactantsInvolved_i " + reactantsInvolved_i);
                console.log("TEMP: productsInvolved_i " + productsInvolved_i);
                if(reactantsInvolved_i*productsInvolved_i==0){
                    console.log("ERROR: chemical_equations: Zero atoms");
                    return "ERROR: chemical_equations: Zero atoms";
                }else if(reactantsInvolved_i==1&&productsInvolved_i==1){
                    let r1 = reactantProduct[reactantsInvolved[0][0]].getRealNumberOfAtoms(reactantsInvolved[0][1]);
                    let p1 = reactantProduct[productsInvolved[0][0]].getRealNumberOfAtoms(productsInvolved[0][1]);
                    if(r1==p1){
                        //balanced
                        balanced_elements+=2;
                    }else{
                        while(r1!=p1){
                            if(r1<p1){
                                r1 += r1;
                            }else{
                                p1 += p1;
                            }
                        }
                        reactantProduct[reactantsInvolved[0][0]].coefficient *= r1/reactantProduct[reactantsInvolved[0][0]].getRealNumberOfAtoms(reactantsInvolved[0][1]);
                        reactantProduct[productsInvolved[0][0]].coefficient *= r1/reactantProduct[productsInvolved[0][0]].getRealNumberOfAtoms(productsInvolved[0][1]);
                        console.log("PROCESS 1_1: Reactant " + reactantProduct[reactantsInvolved[0][0]].coefficient);
                        console.log("PROCESS 1_1: Product " + reactantProduct[productsInvolved[0][0]].coefficient);
                        balanced_elements=0;
                        i=0;
                        j=-1;
                        k=0;
                        break;
                    }
                }
            }
        }
        if(i>=100){
            console.log("ERROR: chemical_equations: Too complicated to solve");
            return "ERROR: chemical_equations: Too complicated to solve";
        }
        i++;
    }
    /*let reactants = [reactant1,reactant2,reactant3];
    let products = [product1,product2,product3];
    let elements = new Array(100);
    let number_of_atoms_reactant = new Array(100);
    let number_of_atoms_product = new Array(100);
    let coefficient_reactant = new Array(3);
    let coefficient_product = new Array(4);
    for(let i=0;i<3;i++){
        coefficient_reactant[i]=1;
        coefficient_product[i]=1;
    }
    //EG Ca(s)+2H2O(l)->Ca(OH)2(s)+H2(g)

    console.log("INPUT: reactant 1: " + reactant1);  //Ca(s)
    console.log("INPUT: reactant 2: " + reactant2); //H2O(l)
    console.log("INPUT: reactant 3: " + reactant3); //A
    console.log("INPUT: product 1: " + product1); //Ca(OH)2(s)
    console.log("INPUT: product 2: " + product2); //H2(g)
    console.log("INPUT: product 3: " + product3); //A

    for(let h=0;h<3;h++){
        if(reactants[h]!="A"){
            for(let i=0;i<reactants[h].length;i++){
                if(reactants[h].charCodeAt(i)>=65&&reactants[h].charCodeAt(i)<=90){
                    let elementSeen=false;
                    let elementProposed=reactants[h][0];
                    while(reactants[h].charCodeAt(i)>=97&&reactants[h].charCodeAt(i)<=122){
                        elementProposed+=reactants[h][i];
                    }
                    for(let j=0;j<elements.length;j++){
                        if(elements[j]===elementProposed){
                            break;
                        }else if(j==elements.length-1){
                            elements[elements.length]=elementProposed;
                        }
                    }
                }
            }
        }
    }
    for(let h=0;h<3;h++){
        if(products[h]!="A"){
            for(let i=0;i<products[h].length;i++){
                if(products[h].charCodeAt(i)>=65&&products[h].charCodeAt(i)<=90){
                    let elementSeen=false;
                    let elementProposed=products[h][0];
                    while(products[h].charCodeAt(i)>=97&&products[h].charCodeAt(i)<=122){
                        elementProposed+=products[h][i];
                    }
                    for(let j=0;j<elements.length;j++){
                        if(elements[j]===elementProposed){
                            break;
                        }else if(j==elements.length-1){
                            elements[elements.length]=elementProposed;
                        }
                    }
                }
            }
        }
    }
    for(let i=0;i<elements.length;i++){
        console.log("ELEMENT DETECTED: "+elements[i]);
    }*/

}
