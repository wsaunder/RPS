var dateObj = new Date();
var year = dateObj.getUTCFullYear();;
document.getElementById("year").innerHTML = year;

function chop()
{
    var a, b; 
    a = Math.round(Math.random() * 3);
    if (a == 1) {
        b = "Rock";
}   else if (a == 2) {
        b = "Paper";
}   else {
        b ="Scissors";
}
    document.getElementById("answer").innerHTML = b;
}

function fight(input){
    var a, b, input;
        a = Math.round(Math.random() * 3 + 0.49);
       
        if (a == input) {
            document.getElementById("outcome").innerHTML = "We Tied!";
        }
        else if (a == 1 && input == 2) {
            document.getElementById("outcome").innerHTML = "You WIN!";
        }
        else if (a == 3 && input == 1) {
            document.getElementById("outcome").innerHTML = "You WIN!";
        }
        else if (a == 2 && input == 3) {
            document.getElementById("outcome").innerHTML = "You WIN!";
        }
        else {
            document.getElementById("outcome").innerHTML = "I WIN!";
        }
        if (a == 1) {
                b = "Rock";
        }   else if (a == 2) {
                b = "Paper";
        }   else {
                b ="Scissors";
        }
            document.getElementById("answer1").innerHTML = "I choose " + b;
}
