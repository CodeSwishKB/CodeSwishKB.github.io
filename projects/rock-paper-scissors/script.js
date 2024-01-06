const choices = ['rock', "paper", 'scissors'] 
const btn = document.querySelector('button')
let pScore = 0;
let cScore = 0;

let btns = document.querySelector('.btns')

btns.addEventListener('click', playRound)

function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)]
}

function validateChoices(choice){
    if (choices.includes(choice)){
        return true
    } else {
        return false
    }
}

function playRound(round){
    const playerChoice = getPlayerChoice()
    const computerChoice = getComputerChoice()
    const winner = checkWinner(playerChoice, computerChoice)
    
    logRound(playerChoice, computerChoice, winner, round)
}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return 'Tie'
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')){
        pScore += 1
        return 'Player'
    } else {
        cScore += 1
        return 'Computer'
    }
}

function logRound(playerChose, computerChose, winner, round){
    console.log('---------------------------')
    console.log('Round:', round)
    console.log('Player chose:', playerChose)
    console.log('Computer chose:', computerChose)
    console.log('Player score:',pScore, '; Computer Score:',cScore)
    if (winner == "Tie"){
        console.log("Tie game")
    } else {
        console.log(winner, 'Wins the round')
    }
    console.log('---------------------------')

}

function logResults(){
    const playerScore = pScore;
    const computerScore = cScore;

    console.log('Results:')
    console.log('Player Score:', playerScore)
    console.log('Computer Score:', computerScore)

    logFinalResults(playerScore, computerScore)
}

function logFinalResults(playerScore, computerScore){
    if (playerScore === computerScore){
        console.log('Tie game')
    } else if (playerScore > computerScore){
        console.log('Player won the game!')
    } else {
        console.log('Ahww :(, Computer won the game')
    }
}


