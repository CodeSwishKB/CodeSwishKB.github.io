const choices = ['rock', "paper", 'scissors'] 
const btn = document.querySelector('button')
let pScore = 0;
let cScore = 0;

let btns = document.querySelector('.btns')
let elDisplay = document.querySelector('.display')

btns.addEventListener('click', getPlayerChoice)

function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)]
}

function getPlayerChoice(e){
    let val = e.target.value
    e.preventDefault()
    playRound(val)
    elDisplay.classList.add('display-result')
}

function playRound(val, round){
    const playerChoice = val
    const computerChoice = getComputerChoice()
    const winner = checkWinner(playerChoice, computerChoice)
    
    displayRound(playerChoice, computerChoice, winner, round)
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

function displayRound(playerChose, computerChose, winner, round){
    let paraRound = document.createElement('p')
    let paraPlayer = document.createElement('p')
    let paraCom = document.createElement('p')
    let paraDisplay = document.createElement('p')
    let paraWinner = document.createElement('p')
    

    paraRound.textContent = `Round: ${round}`
    paraPlayer.textContent = `Player Chose: ${playerChose}`
    paraCom.textContent = `Computer Chose: ${computerChose}`
    paraDisplay.textContent = `Player Score: ${pScore} vs Computer Score: ${cScore}`
    paraWinner.textContent = `Player Score: ${pScore} vs Computer Score: ${cScore}`
    if (winner == "Tie"){
        paraWinner.textContent = `Tie`
    } else {
        paraWinner.textContent = `${winner} wins the round ${round}`
    }

    elDisplay.appendChild(paraRound)
    elDisplay.appendChild(paraPlayer)
    elDisplay.appendChild(paraCom)
    elDisplay.appendChild(paraDisplay)
    elDisplay.appendChild(paraWinner)

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
    } else if (playerScore == 5){
       return ('Player won the game!')
    } else {
        console.log('Ahww :(, Computer won the game')
    }
}


