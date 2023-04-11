function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let compChoice = options[Math.floor(Math.random() * options.length)];
    console.log(compChoice);
    return compChoice;

}
    
function playerSelection() {
   let playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
   console.log(playerChoice);
   return playerChoice;
   
}

function playRound(playerSelection, getComputerChoice) {
    if (playerSelection === getComputerChoice) {
        return "It's a tie!";
    } else if (playerSelection === "rock" && getComputerChoice === "scissors") {
        return "You win! Rock beats scissors!";
    } else if (playerSelection === "rock" && getComputerChoice === "paper") {
        return "You lose! Paper beats rock!";
    } else if (playerSelection === "paper" && getComputerChoice === "rock") {
        return "You win! Paper beats rock!";
    } else if (playerSelection === "paper" && getComputerChoice === "scissors") {
        return "You lose! Scissors beats paper!";
    } else if (playerSelection === "scissors" && getComputerChoice === "paper") {
        return "You win! Scissors beats paper!";
    } else if (playerSelection === "scissors" && getComputerChoice === "rock") {
        return "You lose! Rock beats scissors!";
    } else {
        return "Invalid player selection!";
    }
}



let computerChoice = getComputerChoice();
let playerChoice = playerSelection();
console.log(playRound(playerChoice, computerChoice));


function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let playerChoice = playerSelection();
        let roundResult = playRound(playerChoice, computerChoice);
        console.log(roundResult);

        if (roundResult.includes("win")) {
            playerScore++;
        } else if (roundResult.includes("lose")) {
            computerScore++;
        }

        console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (playerScore < computerScore) {
        console.log("Sorry, you lost the game.");
    } else {
        console.log("The game is a tie!");
    }
}

game();

