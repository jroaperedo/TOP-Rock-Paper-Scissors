let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice,computerChoice) {
    result = "null";
    if(humanChoice == "rock"){
        if (computerChoice == "rock") {
            result = "draw";
        }
        else if (computerChoice == "paper"){
            result = "lose";
        }
        else if (computerChoice == "scissors"){
            result = "win";
        }
    else if(humanChoice == "paper"){
        if (computerChoice == "paper"){
            result = "draw";
        }
        else if(computerChoice == "rock"){
            result = "win";
        }
        else if(computerChoice == "scissors"){
            result = "lose";
        }
        }   
    else if (humanChoice == "scissors"){
        if (computerChoice == "paper"){
            result = "win";
        }
        else if(computerChoice == "rock"){
            result = "lose";
        }
        else if(computerChoice == "scissors"){
            result = "draw";
        }
    }
    if (result == "win"){
        alert(You )
    }
    }
}