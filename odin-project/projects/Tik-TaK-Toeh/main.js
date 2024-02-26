function gameBoard() {
	const rows = 3;
	const columns = 3;
	const board = [];

	for (let i = 0; i < rows; i++) {
		board[i] = [];
		for (let j = 0; j < columns; j++) {
			// board[i][j] = 0
		}
        board[0][0] = 1
	}
	console.log(board)

}

gameBoard()

function gameController() {
    playerOneName = "Player One"
    playerTwoName = "Player Two"

    const score = 0
    
    const players = [
        {
            name: playerOneName,
            value: "X",
            score: score

        },
        {
            name: playerTwoName,
            value: "O",
            score: score
        }
    ]

    const getVal = (p) => {
        if(p === "Player One"){
            return val = players[0].value
        } else if (p === "Player Two") {
            return val = players[1].value
        }
}

    return {getVal}
  
}

const player1 = gameController()

