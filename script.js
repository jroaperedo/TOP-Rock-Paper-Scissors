let humanScore = 0;
let computerScore = 0;
let computerChoice = "null";
let humanChoice = "null";
let result = "null"; 
let scoreboard = "Player Score: " + playerScore + " | Computer Score: " + computerScore;
let playerScore = 0;
let computerScore = 0;
let message = "null";

function getComputerChoice() {
    
    let x = Math.floor(Math.random() * 3); 
    let y = "null";
    
    if (x === 0) {
        y = "scissors";
    }
        else if (x ===1) {
            y = "rock";
        }
        else if (x===2) {
            y = "paper";
        }

    return y;
}

function getHumanChoice() {
    let userChoice = "null"
    let userInput = prompt("Pick Rock, Paper, or Scissors");
    userChoice = userInput.toLowerCase();
    return userChoice;
}

function playRound(humanChoice, computerChoice) {    

//algorithm for determining outomce

    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            result = "draw";
        } else if (computerChoice === "paper") {
            result = "lose";
        } else if (computerChoice === "scissors") {
            result = "win";
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "paper") {
            result = "draw";
        } else if (computerChoice === "rock") {
            result = "win";
        } else if (computerChoice === "scissors") {
            result = "lose";
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            result = "win";
        } else if (computerChoice === "rock") {
            result = "lose";
        } else if (computerChoice === "scissors") {
            result = "draw";
        }
    }

//display result based on outcome and update score

    if (result === "draw") {
        message = "DRAW! " + humanChoice + " and " + computerChoice + " are even.";
    } else if (result === "win") {
        message = "You win! " + humanChoice + " beats " + computerChoice + ".";
        playerScore += 1;
    } else if (result === "lose") {
        message = "You lose! " + computerChoice + " beats " + humanChoice + ".";
        computerScore += 1;
    }

    return {message};
}








