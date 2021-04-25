alert("Welcome to my trivia game");

function quiz(){
    var score = 0; 
    var totalQuestions = 3;

    var q1 = prompt("How many French Opens has Nadal won?");
    if(q1 == 13){
        alert("Correct!");
        score = score + 1;
    } else {
        alert("Incorrect!")

    }
    var q2 = prompt("What is Covid19 also called?");
    
    if(q2 == "Coronavirus"){
        alert("Correct!");
        score++;
    } else {
        alert("Incorrect!")
    }

    var q3 = prompt("Who will win the Senior Cup next year?");

    if(q3 == "CBC"){
        alert("Correct!")
        score++;
    } else {
        alert("Incorrect!")
    }

    alert("you got " + score + " questions out of " + totalQuestions + " correct");
}