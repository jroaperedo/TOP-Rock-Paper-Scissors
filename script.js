
function getComputerChoice() {
    
    let x = Math.floor(Math.random() * 3); //random number generator multiplied by max number of options (3 = paper, rock, scissors)
    let y = "null"; //variable for the computer choice in string
    
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

function playGame(){

    let playerScore = 0;
    let computerScore = 0;
    let scoreboard = "Player Score: " + playerScore + " | Computer Score: " + computerScore;

    //Round 1
    let humanChoice1 = getHumanChoice();
    let computerChoice1 = getComputerChoice();
    
    let result1 = playRound(humanChoice1, computerChoice1);

    console.log(result1.message);
    console.log(result1.scoreboard);

    //Round 2
    let humanChoice2 = getHumanChoice();
    let computerChoice2 = getComputerChoice();
    
    let result2 = playRound(humanChoice2, computerChoice2);

    console.log(result1.message);
    console.log(result1.scoreboard);

    function playRound(humanChoice, computerChoice) {    
        let message = "null";
        let result = "null";

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

    //UPDATE result based on outcome and update score

        if (result === "draw") {
            message = "DRAW! " + humanChoice + " and " + computerChoice + " are even.";
        } else if (result === "win") {
            message = "You win! " + humanChoice + " beats " + computerChoice + ".";
            playerScore += 1;
        } else if (result === "lose") {
            message = "You lose! " + computerChoice + " beats " + humanChoice + ".";
            computerScore += 1;
        }

        return{message};
    }


}







