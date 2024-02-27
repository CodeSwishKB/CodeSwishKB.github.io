function game() {
	// const rows = 3;
	// const columns = 3;
	const board = [
		["", "", ""], // 0 1 2
		["", "", ""], // 3 4 5
		["", "", ""]  // 6 7 8 
	];

	const winCombos = [
		[0, 1, 2],
		[3, 4, 5],	
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	]
	
		// for (let i = 0; i < rows; i++) {
		// 	board[i] = [];
		// 	for (let j = 0; j < columns; j++) {
			// 		board[i][j] = "0"
			// 	}
			
			// }
			
			const score = 0

	const players = [{
			name: "Human",
			option: "X",
			score: score
		},
		{
			name: "Ai",
			option: "O",
			score: score
		}
	]

	// ESPECIALLY THIS PART 
	let activePlayer = players[0];

	const switchPlayerTurn = () => {
		if (activePlayer === players[0]) {
			activePlayer = players[1]
		} else {
			activePlayer = players[0]
		}
	}

	// const switchPlayerTurn = () => {
	// 	activePlayer = activePlayer === players[0] ? players[1] : players[0];
	//   };

	const getActivePlayer = () => activePlayer

	const dropValue = (row, col) => {
		if (activePlayer == players[0]) {
			board[row][col] = players[0].option
			console.log(players[0].name)
			console.log(board)
			switchPlayerTurn()
			// activePlayer = players[1]
		} else {
			board[row][col] = players[1].option
			console.log(players[1].name)
			console.log(board)
			switchPlayerTurn()
			// activePlayer = players[0]

		}
	}

	function emptyIndexies(board){
		return  board.filter(s => s != "O" && s != "X");
	  }

	console.log(board)

	return {
		dropValue
	}
	// const getBoard = () => board

}

const player = game()