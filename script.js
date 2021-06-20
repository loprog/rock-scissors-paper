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
    if (playerSelection.toLowerCase() == "rock") {
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
    } else if (playerSelection.toLowerCase() == "paper") {
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
    } else if (playerSelection.toLowerCase() == "scissors") {
        switch (computerSelection) {
            case "scissors":
                return "It's a tie!";
                break;
 
             case "paper":
                return "You Win! Scissors beats Paper!"
                break;
             
             case "rock":
                return "You Lose! Rock beats Scissors!"
                break;
        }
    }
}

function game() {

}