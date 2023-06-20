function getComputerChoice () {
  let choices = ['rock', 'paper', 'scissors']
  let compChoice = Math.floor(Math.random() * choices.length)
  return choices[compChoice]
}

function getPlayerSelection () {
  let rockbtn = document.getElementById('rockbtn')
  let paperbtn = document.getElementById('paperbtn')
  let scissorsbtn = document.getElementById('scissorsbtn')

  rockbtn.addEventListener('click', function () {
    const playerSelection = 'rock'
    const computerSelection = getComputerChoice()
  })
}

paperbtn.addEventListener('click', function () {
  const playerSelection = 'paper'
  const computerSelection = getComputerChoice()

  console.log(playerSelection)
  console.log(computerSelection)
  console.log(playRound(playerSelection, computerSelection))
})

scissorsbtn.addEventListener('click', function () {
  const playerSelection = 'scissors'
  const computerSelection = getComputerChoice()

  console.log(playerSelection)
  console.log(computerSelection)
  console.log(playRound(playerSelection, computerSelection))
})

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

const computerSelection = getComputerChoice()
const playerSelection = getPlayerSelection()

// function game () {
//   let playerScore = 0
//   let computerScore = 0

//   for (let i = 0; i < 5; i++) {
//     let playerSelection = getPlayerSelection()
//     let computerSelection = getComputerChoice()
//     let roundResult = playRound(playerSelection, computerSelection)

//     console.log(`Round ${i + 1} - Player's choice: ${playerSelection}`)
//     console.log(`Round ${i + 1} - Computer's choice: ${computerSelection}`)
//     console.log(`Round ${i + 1} - ${roundResult}`)

//     if (roundResult === 'you win') {
//       playerScore++
//     } else if (roundResult === 'you lose') {
//       computerScore++
//     }
//   }

//   console.log(
//     `Final score: Player - ${playerScore}, Computer - ${computerScore}`
//   )

//   if (playerScore > computerScore) {
//     console.log('Congratulations! You are the winner.')
//   } else if (computerScore > playerScore) {
//     console.log('Sorry, the computer won this time.')
//   } else {
//     console.log("It's a tie!")
//   }
// }

// game()
