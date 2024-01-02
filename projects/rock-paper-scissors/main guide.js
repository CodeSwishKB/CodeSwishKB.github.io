// FUNC getComputerChoice:
// set array of choices - 'rock, paper, scissors'
// randomize the array of choices 
const choices = ["rock", "paper", 'scissors'];
const winners = []
const btn = document.querySelector('button')

function getComputerChoice(){
    let comChoice = choices[(Math.floor(Math.random() * (choices.length)))]
    return comChoice
}

function game(){
    for (let i = 1; i <= 5; i++){
        playRound(i)
    }
    logWins()
}

function playRound(round){
    const playerSelection = playerChoice()
    const computerSelection = getComputerChoice()
    const winner = checkWinner(playerSelection, computerSelection)
    winners.push(winner)
    logRound(playerSelection, computerSelection, winner, round)
}

function playerChoice(){
    let input = prompt('Type rock, paper or scissors', '')
    while(input == null){
        input = prompt('type rock, paper, or scissors')
    }
    input.toLowerCase()

    let check = validateInput(input)

    while(check == false){
       input = prompt('Correct spelling of rock, paper or scissors please! ')
       while(input == null){
        input = prompt('type rock, paper, or scissors')
       }
       input.toLowerCase()
       check = validateInput(input)
    }
    return input
}

function validateInput(choice){
    if(choices.includes(choice)){
        return true
    } else {
        return false
    }
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC){
        return 'Tie'
    } else if ((choiceP === 'scissors' && choiceC === 'paper') || (choiceP === 'paper' && choiceC === 'rock') || (choiceP === 'rock' && choiceC === 'paper')){
        return 'Player'
    } else {
        return 'Computer'
    }
}

function logWins(){
    let playerWins = winners.filter((item) => item == "Player").length
    let computerWins = winners.filter((item) => item == "Computer").length
    let ties = winners.filter((item) => item == "Tie").length

    console.log("Results:")
    console.log("Player Wins:", playerWins)
    console.log("Computer Wins:", computerWins)
    console.log("Ties:", ties)

    logResult(playerWins, computerWins)
}

function logRound(playerChoice, computerChoice, winner, round){
    console.log('Round:',round)
    console.log('Player Chose:',playerChoice)
    console.log('Computer Chose:',computerChoice)
    console.log(winner, 'Won the round')
    console.log('---------------------------------')
}

function logResult(playerWins, computerWins){
    if (playerWins === computerWins){
    console.log('Intense tie game')
    } else if (playerWins > computerWins){
        console.log('Player won the game')
    } else {
        console.log('Computer won the game')
    }
}

btn.addEventListener('click', game)