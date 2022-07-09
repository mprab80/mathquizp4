p1name=localStorage.getItem("Player 1 Name");
p2name=localStorage.getItem("Player 2 Name");
p1score=0;
p2score=0;
document.getElementById("p1name").innerHTML=p1name+":";
document.getElementById("p2name").innerHTML=p2name+":";
document.getElementById("p1score").innerHTML=p1score;
document.getElementById("p2score").innerHTML=p2score;
document.getElementById("playerquestion").innerHTML="Question Turn: "+p1name;
document.getElementById("playeranswer").innerHTML="Answer Turn: "+p2name;

function send(){
    number1=document.getElementById("number1").value; 
    number2=document.getElementById("number2").value;
    question="<h3 id='question'>Question: "+number1+' x '+number2+"</h3>";
    answer="<br> Answer: <input type='text' id='answer'>"; 
     button="<br> <br> <button class='btn btn-info' onclick='check()'>Check Your Answer</button>";
    row=question+answer+button;
    document.getElementById("apple").innerHTML=row;
}
playerquestion="p1name"
playeranswer="p2name"
function check(){
    answer=document.getElementById("answer").value;
    canswer=number1*number2;
    console.log(answer);
    if (canswer == answer){
        if (playeranswer="p1name"){
            p1score=p1score+1;
            document.getElementById("p1score").innerHTML=p1score;
            console.log(p1score);
        }
        else{
            p2score=p2score+1;
            document.getElementById("p2score").innerHTML=p2score;
            console.log(p2score);
        }
    }
    if (playerquestion == "p1name"){
        playerquestion="p2name";
        document.getElementById("playerquestion").innerHTML="Question Turn: "+p2name;
        playeranswer="p1name";
        document.getElementById("playeranswer").innerHTML="Answer Turn: "+p1name;
    }
    else{
        playerquestion="p1name";
        document.getElementById("playerquestion").innerHTML="Question Turn: "+p1name;
        playeranswer="p2name";
        document.getElementById("playeranswer").innerHTML="Answer Turn: "+p2name;
    }
}