function getComputerChoice () {
  let choices = ['rock', 'paper', 'scissors']

  let compChoice = Math.floor(Math.random() * choices.length)

  return choices[compChoice]
}

function getPlayerSelection () {
  let playerInput = prompt('Choose Rock, Paper, or Scissors')
  playerInput = playerInput.toLowerCase()
  if (
    playerInput !== 'rock' &&
    playerInput !== 'paper' &&
    playerInput !== 'scissors'
  )
    return 'invalid entry'
  else return playerInput.toLowerCase()
}

function playRound (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "it's a tie"
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return 'you win'
  } else return 'you lose'
}

function game () {
  let playerScore = 0
  let computerScore = 0

  for (let i = 0; i < 5; i++) {
    let playerSelection = getPlayerSelection()
    let computerSelection = getComputerChoice()
    let roundResult = playRound(playerSelection, computerSelection)

    console.log(`Round ${i + 1} - Player's choice: ${playerSelection}`)
    console.log(`Round ${i + 1} - Computer's choice: ${computerSelection}`)
    console.log(`Round ${i + 1} - ${roundResult}`)

    if (roundResult === 'you win') {
      playerScore++
    } else if (roundResult === 'you lose') {
      computerScore++
    }
  }

  // Display the final score
  console.log(
    `Final score: Player - ${playerScore}, Computer - ${computerScore}`
  )

  // Determine the winner
  if (playerScore > computerScore) {
    console.log('Congratulations! You are the winner.')
  } else if (computerScore > playerScore) {
    console.log('Sorry, the computer won this time.')
  } else {
    console.log("It's a tie!")
  }
}

game()
