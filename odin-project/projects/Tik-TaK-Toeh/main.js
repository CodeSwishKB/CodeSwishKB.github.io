const GameBoard = (() => {
    // const gameBoard = ["", "", "", "", "", "", "", "", ""]
    const gameBoard = [["", "", ""], ["", "", ""], ["", "", ""]]
    
    // const render = () => {
    //     let template = "";
    //     let gameboard = document.querySelector('.gameboard')
    //     for(let i = 0; i < gameBoard.length; i++){
    //         for(let j = 0; j < gameBoard[i].length; j++){
    //             template += `<div class="squares">${j}</div>`
    //         }
    //         gameboard.innerHTML = template
    //     }
    // }

    //for console.log only
    const consoleGameBoard = () => {

    }

    const getGameBoard = () => console.log(gameBoard)
    
    const update = (row, col, playerMaker) => {
        gameBoard[row][col] = playerMaker
    }
    
    return {getGameBoard, update}
})()

const GameControl = (() => {
    const players = [
        {
            name: "Player1",
            marker: "X"
        },
        {
            name: "Player2",
            marker: "0"
        }
    ]

    const activePlayer = players[0];

    const getActivePlayerName = () => console.log(activePlayer)

    const switchTurns = () => {
        if (activePlayer === players[0]){
            activePlayer = players[1]
        } else {
            activePlayer = players[0]
        }
    }

    const dropValue = (row, col) => {
        if(activePlayer){
            GameBoard.update(row, col, players[activePlayer].marker)
        }
        GameBoard.getGameBoard()
    }
    
    return {dropValue, getActivePlayerName}
})

GameControl.getActivePlayerName()
const player1 = GameControl()
GameBoard.getGameBoard()