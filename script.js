const validChoices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

function getRandomNumber(min, max) {
    // min included, max excluded
    return Math.floor(Math.random() * (max - min)) + min;
}

function getPlayerChoice() {
    let choice = "";
    while (!validChoices.includes(choice)) {
        let playerInput = prompt("Rock, Paper, Scissors, Shoot!");
        choice = playerInput ? playerInput.toLowerCase() : "";
    }
    return choice;
}

function getComputerChoice() {
    return validChoices[getRandomNumber(0, validChoices.length)];
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionWeight = validChoices.indexOf(playerSelection);
    let computerSelectionWeight = validChoices.indexOf(computerSelection);

    // Tie
    if (playerSelectionWeight === computerSelectionWeight) {
        return "It's a tie!";
    }

    // Player won
    else if (playerSelectionWeight === computerSelectionWeight + 1 || playerSelectionWeight === 0 && computerSelectionWeight === 2) {
        playerScore++;
        return "You won!";
    } 

    // Player lost
    else {
        computerScore++;
        return "You lost!"
    }
}

function game() {
    let playerSelection;
    let computerSelection;
    let roundResult;

    while (playerScore < 5 && computerScore < 5) {
        roundNumber++;
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        roundResult = playRound(playerSelection, computerSelection);

        console.log(`Round #${roundNumber}: ${playerSelection} vs ${computerSelection}`);
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer's score: ${computerScore}`);
        console.log(roundResult);
    }

    if (playerScore === 5) {
        return "You won!";
    } else {
        return "You lost!";
    }
}

console.log("Final Result: " + game());