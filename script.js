const validChoices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

function getRandomNumber(min, max) {
    // min included, max excluded
    return Math.floor(Math.random() * (max - min)) + min;
}

function getComputerChoice() {
    return validChoices[getRandomNumber(0, validChoices.length)];
}

function getRoundResult(playerSelection, computerSelection) {
    let playerSelectionWeight = validChoices.indexOf(playerSelection);
    let computerSelectionWeight = validChoices.indexOf(computerSelection);

    // Tie
    if (playerSelectionWeight === computerSelectionWeight) {
        return `Round #${roundNumber} is a tie!`;
    }

    // Player won
    else if (playerSelectionWeight === computerSelectionWeight + 1 || playerSelectionWeight === 0 && computerSelectionWeight === 2) {
        playerScore++;
        return `You won Round #${roundNumber}!`;
    } 

    // Player lost
    else {
        computerScore++;
        return `You lost Round #${roundNumber}!`;
    }
}


function playRound(event) {
    roundNumber++;
    let playerChoice = event.target.getAttribute("data-choice");
    let computerChoice = getComputerChoice();
    let roundResult = getRoundResult(playerChoice, computerChoice);

    // Update DOM
    const roundNumberHeading = document.querySelector(".round-number");
    roundNumberHeading.innerText = `Round #${roundNumber}`;

    const playerScoreHeading = document.querySelector(".player-score");
    playerScoreHeading.innerText = `Your score: ${playerScore}`;
    const computerScoreHeading = document.querySelector(".computer-score");
    computerScoreHeading.innerText = `Computer's score: ${computerScore}`;

    const playerChoiceHeading = document.querySelector(".player-choice");
    playerChoiceHeading.innerText = `You chose: ${playerChoice}`;
    const computerChoiceHeading = document.querySelector(".computer-choice");
    computerChoiceHeading.innerText = `Computer chose: ${computerChoice}`;

    const resultHeading = document.querySelector(".result");

    if (playerScore === 5) {
        resultHeading.innerText = "🎉 You won!";
    } else if (computerScore === 5) {
        resultHeading.innerText = "😔 You lost!";
    } else {
        resultHeading.innerText = roundResult;
    }
}


const choiceImages = document.querySelectorAll(".choice-img");

choiceImages.forEach((image) => {
    image.addEventListener("click", (event) => {
        if (playerScore < 5 && computerScore < 5) playRound(event);
    });
});

const resetButton = document.querySelector(".reset-button");

resetButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    roundNumber = 0;
    const roundNumberHeading = document.querySelector(".round-number");
    roundNumberHeading.innerText = `Round #${roundNumber}`;

    const playerScoreHeading = document.querySelector(".player-score");
    playerScoreHeading.innerText = `Your score: ${playerScore}`;
    const computerScoreHeading = document.querySelector(".computer-score");
    computerScoreHeading.innerText = `Computer's score: ${computerScore}`;

    const playerChoiceHeading = document.querySelector(".player-choice");
    playerChoiceHeading.innerText = "";
    const computerChoiceHeading = document.querySelector(".computer-choice");
    computerChoiceHeading.innerText = "";

    const resultHeading = document.querySelector(".result");
    resultHeading.innerText = "";
})