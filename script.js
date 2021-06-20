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

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
       switch (computerSelection) {
           case "rock":
               return "It's a tie!";
               break;

            case "paper":
                return "You Win! Rock beats Paper!"
                break;
            
            case "scissors":
                return "You Lose! Scissors beats Rock!"
                break;
       }
    } else if (playerSelection.toLowerCase() === "paper") {
        switch (computerSelection) {
            case "paper":
                return "It's a tie!";
                break;
 
             case "rock":
                return "You Win! Paper beats Rock!"
                break;
             
             case "scissors":
                return "You Lose! Scissors beats Paper!"
                break;
        }
    } else if (playerSelection.toLowerCase() === "scissors") {
        switch (computerSelection) {
            case "scissors":
                return "It's a tie!";
                break;
 
            case "paper":
                return "You Win! Scissors beats Paper!";
                break;
             
            case "rock":
                return "You Lose! Rock beats Scissors!";
                break;
        }
    }
}

let playerScore = 0;
let computerScore = 0;

function game() {
    while (playerScore != 5 && computerScore != 5) { 
        let player = prompt('Rock, Paper or Scissors?', '');
        let computer = computerPlay();
        let result = playRound(player, computer);
        console.log(result);

        switch (true) {
            case (result.includes("Win")):
                ++playerScore;
                console.log("Your Score is " + playerScore);
                console.log("The Computer's Score is " + computerScore);
                break;

            case (result.includes("Lose")):
                ++computerScore;
                console.log("Your Score is " + playerScore);
                console.log("The Computer's Score is " + computerScore);
                break;

            case (result.includes("tie")):
                console.log("Your Score is " + playerScore);
                console.log("The Computer's Score is " + computerScore);
                break;
        } 
    } 

    return "Game Over!"
}