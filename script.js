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
let playerScoreText;
let computerScoreText;

let rock = document.querySelector('#rock');
rock.addEventListener('click', () => playRound('rock', computerPlay()));

let scissors = document.querySelector('#scissors')
scissors.addEventListener('click', () => playRound('scissors', computerPlay()));

let paper = document.querySelector('#paper')
paper.addEventListener('click', () => playRound('paper', computerPlay()));

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

    playerScoreText = document.querySelector('#playerScore');
    playerScoreText.textContent = `Your Score is ${playerScore}`;

    computerScoreText = document.querySelector('#computerScore');
    computerScoreText.textContent = `Computer Score is ${computerScore}`;


    if (playerScore == 5) {
        const winner = document.createElement('p');
        winner.textContent = 'You are the Winner!';
        computerScoreText.appendChild(winner);
    } else if (computerScore == 5) {
        const winner = document.createElement('p');
        winner.textContent = 'Computer is the Winner!';
        computerScoreText.appendChild(winner);
    }
}