function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    
    if (num == 0) {
        return "rock";
    } else if (num == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
let outcome;
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
       switch (computerSelection) {
            case "rock":
                outcome = "It's a tie!";
                break;

            case "paper":
                outcome = "You Win! Rock beats Paper!"
                break;
            
            case "scissors":
                outcome = "You Lose! Scissors beats Rock!"
                break;
       }
    } else if (playerSelection.toLowerCase() === "paper") {
        switch (computerSelection) {
            case "paper":
                outcome = "It's a tie!";
                break;
 
             case "rock":
                outcome = "You Win! Paper beats Rock!";
                break;
             
             case "scissors":
                outcome = "You Lose! Scissors beats Paper!";
                break;
        }
    } else if (playerSelection.toLowerCase() === "scissors") {
        switch (computerSelection) {
            case "scissors":
                outcome = "It's a tie";
                break;
 
            case "paper":
                outcome = "You Win! Scissors beats Paper!";
                break;
             
            case "rock":
                outcome = "You Lose! Rock beats Scissors!";
                break;
        }
    }

    if (outcome.includes('Win')) {
        ++playerScore;
    } else if (outcome.includes('Lose')) {
        ++computerScore;
    }

    console.log(outcome);
    console.log(`Your score is ${playerScore}`);
    console.log(`The computer score is ${computerScore}`);
}

let rock = document.querySelector('#rock');
rock.addEventListener('click', () => playRound('rock', computerPlay()));

let scissors = document.querySelector('#scissors')
scissors.addEventListener('click', () => playRound('scissors', computerPlay()));

let paper = document.querySelector('#paper')
paper.addEventListener('click', () => playRound('paper', computerPlay()));