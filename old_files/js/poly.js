var poly=[
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
"hydrogensulphite","HSO3","-",-1,
"hydrogensulphate", "HSO4", "-", -1,
"hydrogencarbonate", "HCO3", "-",-1,
"nitrate","NO3","-",-1,
"nitrite", "NO2", "-",-1,
"phosphate","PO4","3-",-3,
"ammonium","NH4","+",1

];
var correct=0;
var total=0;

var rand;
function startpolyformula(){
    rand= (Math.floor(Math.random()*18))*4;
    document.getElementById("question").innerHTML = poly[rand];
}
function startpolyname(){
    rand= (Math.floor(Math.random()*18))*4;
    document.getElementById("question").innerHTML = poly[rand+1]+ "<sup>" +poly[rand+2]+"</sup>";
}
function startpolytour(){
    rand= 0;
    document.getElementById("question").innerHTML =  poly[rand];
}
function allpolyformula(){
    var answer1=document.getElementById("answer1").value;
    var answer2=document.getElementById("answer2").value;
    if(answer1==poly[rand+1] && answer2==poly[rand+2]){
        total++;
        correct++;
        document.getElementById("instant").innerHTML = "You are correct";
    }else{
        total++;
        document.getElementById("instant").innerHTML = "You are wrong, the correct answer of " + poly[rand] + " is " + poly[rand+1] + " with charge " + poly[rand+2];
    }
    rand = (Math.floor(Math.random()*18))*4;
    document.getElementById("question").innerHTML = poly[rand];
    document.getElementById("status").innerHTML = "Status: " + correct + " out of " + total + " correct";
    document.getElementById("answer1").value="";
    document.getElementById("answer2").value="";

}

function allpolyname(){
    var answer=document.getElementById("answer").value;
    answer=answer.toLowerCase();
    if(answer==poly[rand]){
        total++;
        correct++;
        document.getElementById("instant").innerHTML = "You are correct";
    }else{
        total++;
        document.getElementById("instant").innerHTML = "You are wrong, the correct answer of " + poly[rand+1] + " with charge " + poly[rand+2] + " is " + poly[rand];
    }
    rand = (Math.floor(Math.random()*18))*4;
    document.getElementById("question").innerHTML = poly[rand+1]+ "<sup>" +poly[rand+2]+"</sup>";
    document.getElementById("status").innerHTML = "Status: " + correct + " out of " + total + " correct";
    document.getElementById("answer").value="";

}
function allpolytour(){
    if(total<17){
        var answer1=document.getElementById("answer1").value;
        var answer2=document.getElementById("answer2").value;
        if(answer1==poly[rand+1] && answer2==poly[rand+2]){
            total++;
            correct++;
            document.getElementById("instant").innerHTML = "You are correct";
        }else{
            total++;
            document.getElementById("instant").innerHTML = "You are wrong, the correct answer of " + poly[rand] + " is " + poly[rand+1] + " with charge " + poly[rand+2];
        }
        rand+=4;
        document.getElementById("question").innerHTML = poly[rand];
        document.getElementById("status").innerHTML = "Status: " + correct + " out of " + total + " correct (36 questions in total)";
        document.getElementById("answer1").value="";
        document.getElementById("answer2").value="";
    }else if(total==17){
        var answer1=document.getElementById("answer1").value;
        var answer2=document.getElementById("answer2").value;
        if(answer1==poly[rand+1] && answer2==poly[rand+2]){
            total++;
            correct++;
            document.getElementById("instant").innerHTML = "You are correct";
        }else{
            total++;
            document.getElementById("instant").innerHTML = "You are wrong, the correct answer of " + poly[rand] + " is " + poly[rand+1] + " with charge " + poly[rand+2];
        }
        rand=0;
        document.getElementById("question").innerHTML = poly[rand+1]+ "<sup>" +poly[rand+2]+"</sup>";
        document.getElementById("status").innerHTML = "Status: " + correct + " out of " + total + " correct (36 questions in total)";
        document.getElementById("answer1").value="";
        document.getElementById("answer2").value="";
        document.getElementById("answer2").style.visibility = "hidden";
    }else if(total<35){
        var answer=document.getElementById("answer1").value;
        answer=answer.toLowerCase();
        if(answer==poly[rand]){
            total++;
            correct++;
            document.getElementById("instant").innerHTML = "You are correct";
        }else{
            total++;
            document.getElementById("instant").innerHTML = "You are wrong, the correct answer of " + poly[rand+1] + " with charge " + poly[rand+2] + " is " + poly[rand];
        }
        rand +=4;
        document.getElementById("question").innerHTML = poly[rand+1]+ "<sup>" +poly[rand+2]+"</sup>";
        document.getElementById("status").innerHTML = "Status: " + correct + " out of " + total + " correct (36 questions in total)";
        document.getElementById("answer1").value="";

    }else{
        var answer=document.getElementById("answer1").value;
        answer=answer.toLowerCase();
        if(answer==poly[rand]){
            total++;
            correct++;
            document.getElementById("instant").innerHTML = "You are correct";
        }else{
            total++;
            document.getElementById("instant").innerHTML = "You are wrong, the correct answer of " + poly[rand+1] + " with charge " + poly[rand+2] + " is " + poly[rand];
        }
        document.getElementById("question").innerHTML ="Quiz ended, click back button to head back to homepage";
        document.getElementById("status").innerHTML = "Status: " + correct + " out of " + total + " correct (36 questions in total)";
        document.getElementById("answer1").value="";
        document.getElementById("answer1").style.visibility = "hidden";
        document.getElementById("next").style.visibility = "hidden";
    }


}
