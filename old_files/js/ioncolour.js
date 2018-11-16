var colour=[
"iron (II) ion","pale green",
"permanganate ion","purple",
"manganese(II) ion","very pale pink",
"iron (III) ion","yellow",
"Nickel(II) ion","green",
"chromate ion","yellow",
"copper (II) ion","blue",
"chromium (III) ion","green",
"dichromate ion","orange",
"cobalt (II) ion","pink"

];
var correct=0;
var total=0;

var rand;
function startioncolour(){
    rand= 0;
    document.getElementById("question").innerHTML = colour[rand];
}

function allioncolour(){
    var answer=document.getElementById("answer").value;
    answer=answer.toLowerCase();
    if(answer==colour[rand+1]){
        total++;
        correct++;
        document.getElementById("instant").innerHTML = "You are correct";
    }else{
        total++;
        document.getElementById("instant").innerHTML = "You are wrong, the colour of " + colour[rand] + " is " + colour[rand+1];
    }
    rand +=2;
    if(total==10){
        document.getElementById("question").innerHTML ="Quiz ended, click back button to head back to homepage";
        document.getElementById("status").innerHTML = "Status: " + correct + " out of " + total + " correct" + " (10 questions in total)";
        document.getElementById("answer").value="";
        document.getElementById("answer").style.visibility = "hidden";
        document.getElementById("next").style.visibility = "hidden";
    }else{
        document.getElementById("question").innerHTML =colour[rand];
        document.getElementById("status").innerHTML = "Status: " + correct + " out of " + total + " correct"+ " (10 questions in total)";
        document.getElementById("answer").value="";
    }
}
