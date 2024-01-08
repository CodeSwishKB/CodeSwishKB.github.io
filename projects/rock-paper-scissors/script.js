const choices = ['Rock', "Paper", 'Scissors'] 
let pScore = 0;
let cScore = 0;

let buttons = document.querySelectorAll('button')
let elDisplay = document.querySelector('.display')
let elPscore = document.querySelector('.pscore')
let elcscore = document.querySelector('.cscore')
let scoreBoard = document.querySelector('.scoreboard')

let pChose = document.querySelector('.pchose')
let cChose = document.querySelector('.cchose')
let win = document.querySelector('.win')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let playerSelection = button.value
        let computerSelection = getComputerChoice()
        
        if (pScore === 5 || cScore == 5){
            displayFinalResults(pScore, cScore) 
            return false
        }

        displayRound(playerSelection, computerSelection, playRound(playerSelection, computerSelection))
    })

})

function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return 'It\'s a Tie'
    } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Scissors' && computerSelection === 'Paper')){
        pScore++
        return 'Player'
    } else {
        cScore++
        return 'Computer'
    }

}

function displayRound(playerChose, computerChose, winner){
    pChose.textContent = `${playerChose}`
    cChose.textContent = `${computerChose}`
    elPscore.textContent = `${pScore}`
    elcscore.textContent = `${cScore}`

    if (winner == "It\'s a Tie"){
        win.textContent = `It\'s a Tie!`
    } else {
        win.textContent = `${winner} wins the round!`
    }
}

function displayFinalResults(playerScore, computerScore){
    let tableData = document.querySelector('#final-winner')

    if (playerScore === computerScore){
        console.log('Tie game')
    } else if (playerScore === 5){
        tableData.textContent = `Player won!`
        tableData.style.color = "green"
    } else {
        tableData.innerText = `Computer won!`
        tableData.style.color = "red"
    }

}


