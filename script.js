
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

//Link buttons to humanChoice
const rock=document.querySelector("#rock");
const paper=document.querySelector("#paper");
const scissors=document.querySelector("#scissors");

rock.addEventListener("click",()=>{
    let humanChoice = "rock";
    console.log(humanChoice);
});

paper.addEventListener("click",()=>{
    let humanChoice = "paper";
    console.log(humanChoice);
});

scissors.addEventListener("click",()=>{
    let humanChoice = "scissors";
    console.log(humanChoice);
});


//function getHumanChoice() {
//    let userChoice = "null"
//    let userInput = prompt("Pick Rock, Paper, or Scissors");
//    userChoice = userInput.toLowerCase();
//    return userChoice;
//}

function playGame(){

    let playerScore = 0;
    let computerScore = 0;
    let draw = 0;
    let scoreboard = "";
    
    //for (let round = 1; round<6;round++){
    //let humanChoice1 = getHumanChoice();
    //let computerChoice1 = getComputerChoice(); 
    //let result = playRound(humanChoice1, computerChoice1);
    //scoreboard = "Round " + round + ": " + playerScore + " Player | " + computerScore + " Computer | " + draw + " draws";
    //console.log(result, scoreboard);
    //}

    //user makes a selection
    //selection gets stored in humanChoice
    //fetch computerChoice
    //compare choices, determine a winner
    //update scoreboard
    //once either hits 5 wins, announce a winner and reset the score


    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice(); 
    let result = playRound(humanChoice, computerChoice);
    scoreboard = "Round " + round + ": " + playerScore + " Player | " + computerScore + " Computer | " + draw + " draws";
    console.log(result, scoreboard);

    console.log("Game Over!")
   
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
            message = "Computer picked " + computerChoice + ". DRAW! " + humanChoice + " and " + computerChoice + " are even.";
            draw +=1;
        } else if (result === "win") {
            message = "Computer picked " + computerChoice + ". You win! " + humanChoice + " beats " + computerChoice + ".";
            playerScore += 1;
        } else if (result === "lose") {
            message = "Computer picked " + computerChoice + ". You lose! " + computerChoice + " beats " + humanChoice + ".";
            computerScore += 1;
        }
        
        console.log(message);

    }


}







