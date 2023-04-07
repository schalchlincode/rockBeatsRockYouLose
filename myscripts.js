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

function playRound(playerChoice, compChoice){
    if (playerChoice === "rock" && compChoice ==="scissors"){
       return "You win! Rock beats scissors!";
   }
}

getComputerChoice();
playerSelection();

