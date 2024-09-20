    //user makes a selection
    //selection gets stored in humanChoice? or, run playround function as a callback
    
    //playRound();
    //fetch computerChoice
    //compare choices, determine a winner
    //update scoreboard
        //scoreboard should have a playerScore and computerScore
    //if either score is 5, end game. Output the winner. 
    //reset scoreboard.
    //else, prompt user to make another choice.


//Link buttons to humanChoice
const rock=document.querySelector("#rock");
const paper=document.querySelector("#paper");
const scissors=document.querySelector("#scissors");

let humanScore = 0;
let computerScore = 0;

//Scoreboard
const list = document.querySelector("ul");
const playerDisplay = document.querySelector("#playerScore");
const computerDisplay = document.querySelector("#computerScore");
const message = document.querySelector("#message");

list.style.listStyle = "none";


rock.addEventListener("click",()=>{
    let humanChoice = "rock";
    playRound(humanChoice);
});

paper.addEventListener("click",()=>{
    let humanChoice = "paper";
    playRound(humanChoice);
});

scissors.addEventListener("click",()=>{
    let humanChoice = "scissors";
    playRound(humanChoice);
});

//computer choice function
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

//let's play a round
function playRound(humanChoice) {
    let result = "";
    let computerChoice = getComputerChoice();

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
    
    if(result === "win"){humanScore++;}
    else if(result === "lose"){computerScore++;}

    playerDisplay.textContent = "Player Score: " + humanScore;
    computerDisplay.textContent = "Computer Score: " + computerScore;
    message.textContent = "Computer picked " + computerChoice + ". You " + result +".";
    
    console.log(humanChoice, computerChoice);
    console.log(result);
    console.log(humanScore,computerScore);

    if(humanScore===5){message.textContent = "Game Over, You Win!";
        humanScore=0;
        computerScore=0;
    }
        else if(computerScore===5){message.textContent = "Game Over, You Lose!";
            humanScore=0;
            computerScore=0;
            
        }
}












