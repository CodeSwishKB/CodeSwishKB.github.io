function gameBoard() {
	const rows = 3;
	const columns = 3;
	const board = [];

	playerOneName = "Player One"
	playerTwoName = "Player Two"

	const score = 0

	const players = [{
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


	for (let i = 0; i < rows; i++) {
		board[i] = [];
		for (let j = 0; j < columns; j++) {
			board[i][j] = 0
		}
	}

	const setVal = (row, col) => {
		board[row][col] = players[0].value
        console.log(players[0].name)
        console.log(board)
	}

	return {
		setVal
	}
}

const player1 = gameBoard()
