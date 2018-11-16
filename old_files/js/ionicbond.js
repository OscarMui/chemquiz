var positive=[
"ammonium","NH4","+",1,
"lithium","Li","+",1,
"beryllium","Be","2+",2,
"sodium","Na","+",1,
"magnesium","Mg","2+",2,
"aluminium","Al","3+",3,
"potassium","K","+",1,
"calcium","Ca","2+",2,
"iron (ii)","Fe","2+",2,
"iron (iii)","Fe","3+",3,
"copper (i)","Cu","+",1,
"copper (ii)","Cu","2+",2,
"mercury (i)","Hg","+",1,
"mercury (ii)","Hg","2+",2,
"cobalt (ii)","Co","2+",2,
"nickel (ii)","Ni","2+",2,
"manganese (ii)","Mn","2+",2,
"chromium (iii)","Cr","3+",3,
"zinc","Zn","2+",2,
"silver","Ag","+",1
]; //total 20,(1),[9 to 20 total 12]
var negative=[
"chromate","CrO4","2-",-2,
"dichromate","Cr2O7","2-",-2,
"carbonate","CO3","2-",-2,
"cyanide","CN","-",-1,
"hypochlorite","ClO","-",-1,
"chlorate","ClO3","-",-1,
"permanganate","MnO4","-",-1,
"sulphate","SO4","2-",-2,
"sulphite","SO3","2-",-2,
"silicate","SiO3","2-",-2,
"hydroxide","OH","-",-1,
"nitrate","NO3","-",-1,
"nitrite", "NO2", "-",-1,
"phosphate","PO4","3-",-3,
"nitride","N","3-",-3,
"oxide","O","2-",-2,
"fluoride","F","-",-1,
"phosphide","P","3-",-3,
"sulphide","S","2-",-2,
"chloride","Cl","-",-1,
"bromide","Br","-",-1
]; //total 21 (14)
var correct=0;
var total=0;

var randpos;
var randneg;

function find_compound(){
    var nopos=1;
    var noneg=1;
    while(nopos*positive[randpos+3]!=noneg*Math.abs(negative[randneg+3])){
        if(nopos*positive[randpos+3]<noneg*Math.abs(negative[randneg+3])){
            nopos++;
        }else{
            noneg++;
        }
    }
    if(nopos==1){
        nopos="";
    }
    if(noneg==1){
        noneg="";
    }
    var b1="";
    var b2="";
    var b3="";
    var b4="";
    if(randpos/4==0&&nopos>1){
        b1="(";
        b2=")";
    }
    if(randneg/4<14&&noneg>1){
        b3="(";
        b4=")";
    }
    var compound=b1+positive[randpos+1]+b2+nopos+b3+negative[randneg+1]+b4+noneg;
    return compound;
}
function startionicbondmain(){
    randpos= (Math.floor(Math.random()*20))*4;
    randneg= (Math.floor(Math.random()*21))*4;
    document.getElementById("question").innerHTML = positive[randpos+1]+"<sup>"+positive[randpos+2]+"</sup> and "+negative[randneg+1] +"<sup>"+negative[randneg+2]+"</sup>";


}

function startionicbondtransition(){
    randpos= 36+(Math.floor(Math.random()*11))*4;
    randneg= (Math.floor(Math.random()*21))*4;
    document.getElementById("question").innerHTML = find_compound();

}

function allionicbondmain(){
    var answer1=document.getElementById("answer1").value;
    var answer2=document.getElementById("answer2").value;
    answer1=answer1.toLowerCase();
    var correctans1=positive[randpos]+" "+negative[randneg];
    var correctans2=find_compound();

    if(answer1==correctans1 && answer2==correctans2){
        total++;
        correct++;
        document.getElementById("instant").innerHTML = "You are correct";
    }else if(answer1==correctans1 || answer2==correctans2){
        total++;
        correct+=0.5;
        document.getElementById("instant").innerHTML = "One of your answers are wrong, the correct answer of " + positive[randpos+1]+" "+positive[randpos+2]+" and "+negative[randneg+1] +" "+negative[randneg+2] + " is " + correctans1 + " with formula of " + correctans2+ "<br />" +
        "but you answered " +answer1 +" and " +answer2+ " instead";
    }else{
        total++;
        document.getElementById("instant").innerHTML = "You are wrong, the correct answer of " + positive[randpos+1]+" "+positive[randpos+2]+" and "+negative[randneg+1] +" "+negative[randneg+2] + " is " + correctans1 + " with formula of " + correctans2+ "<br />" +
        "but you answered " +answer1 +" and " +answer2+ " instead";
    }
    randpos= (Math.floor(Math.random()*20))*4;
    randneg= (Math.floor(Math.random()*21))*4;
    document.getElementById("question").innerHTML =positive[randpos+1]+"<sup>"+positive[randpos+2]+"</sup> and "+negative[randneg+1] +"<sup>"+negative[randneg+2]+"</sup>";
    document.getElementById("status").innerHTML = "Status: " + correct + " out of " + total + " correct";
    document.getElementById("answer1").value="";
    document.getElementById("answer2").value="";

}

function allionicbondtransition(){
    var answer=document.getElementById("answer").value;
    answer=answer.toLowerCase();
    var correctans=positive[randpos]+" "+negative[randneg];

    if(answer==correctans){
        total++;
        correct++;
        document.getElementById("instant").innerHTML = "You are correct";
    }else{
        total++;
        document.getElementById("instant").innerHTML = "You are wrong, the correct answer of "+ find_compound() + " is " + correctans+ "<br />" +
        "but you answered " +answer +" instead";
    }
    randpos= 36+(Math.floor(Math.random()*11))*4;
    randneg= (Math.floor(Math.random()*21))*4;
    document.getElementById("question").innerHTML = find_compound();
    document.getElementById("status").innerHTML = "Status: " + correct + " out of " + total + " correct";
    document.getElementById("answer").value="";

}

