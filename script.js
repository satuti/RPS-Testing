//var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();

if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1,choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!"
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "Rock Wins"
        } else {
            return "Paper Wins"
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "Rock Wins"
        } else {
            return "Scissors Wins"
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "Paper Wins"
        } else {
            return "rock wins"
        }
    }
}

alert(compare(userChoice,computerChoice))

var $ = window.jQuery;

$(document).ready(function() {
    $('.selectors').click(function() {
        var answer = $(this);
        console.log(answer);
        console.log(answer.attr('id'))
    });
    if (userChoice === computerChoice) {
        console.log("It's a tie!");
    } if else (userChoice === "rock" && computerChoice === "paper") {
        console.log("The Computer wins!");
    } if else (userChoice === "rock" && computerChoice === "scissors") {
        console.log("You win!");
    } if else (userChoice === "paper" && computerChoice === "rock") {
        console.log("You win!");
    } if else (userChoice === "paper" && computerChoice === "scissors") {
        console.log("The Computer wins!");
    } if else (userChoice === "scissors" && computerChoice === "paper") {
        console.log("You win!");
    } if else (userChoice === "scissors" && computerChoice === "rock") {
        console.log("The Computer wins!");
    }
});