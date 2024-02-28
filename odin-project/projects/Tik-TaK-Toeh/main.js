const gameboard = document.querySelector('.gameboard');
const startBtn = document.querySelector("[data-start-btn]")
const restartBtn = document.querySelector("[data-restart-btn]")

const Gameboard = (() => {
	
	const gameBoard = [ "", "", "", "", "", "", "", "", ""];
	
	const render = () => {
		let template = ""
		gameBoard.forEach((square, index) => {
			template += `<div data-square class="square" id="square-${index}">${square}</div>`
		})
		gameboard.innerHTML = template
		
	}
	return {render}	
})()

function createPlayer (name, marker){
	return {name, marker}
}

const Game = (() => {
	let players = [];
	let currentPlayer;
	let gameOver
	
	const start = () => {
		let nameInput = document.querySelector("[data-enter-name]").value
		players = [
			createPlayer(nameInput, "X"),
		]
		currentPlayer = 0;
		gameOver = false;
		Gameboard.render()
		nameInput.value = ""
		const squares = document.querySelectorAll('[data-square]');
		squares.forEach((square) => {
			square.addEventListener('click', handleClick) 
		}) 
	}

	const handleClick = (e) => {
		const index = parseInt(e.target.id.split("-")[1])
		console.log(index)
	}

	return {start, handleClick}
})()

startBtn.addEventListener('click', () => {
	Game.start()
})

// const winCombos = [
// 	[0, 1, 2],
// 	[3, 4, 5],
// 	[6, 7, 8],
// 	[0, 3, 6],
// 	[1, 4, 7],
// 	[2, 5, 8],
// 	[0, 4, 8],
// 	[2, 4, 6]
// ]

// const score = 0

// const players = [{
// 		name: "Human",
// 		option: "X",
// 		score: score
// 	},
// 	{
// 		name: "Ai",
// 		option: "O",
// 		score: score
// 	}
// ]

// // ESPECIALLY THIS PART 
// let activePlayer = players[0];

// const switchPlayerTurn = () => {
// 	if (activePlayer === players[0]) {
// 		activePlayer = players[1]
// 	} else {
// 		activePlayer = players[0]
// 	}
// }

// const getActivePlayer = () => activePlayer

// const dropValue = (row, col) => {
// 	if (activePlayer == players[0]) {
// 		board[row][col] = players[0].option
// 		console.log(players[0].name)
// 		console.log(board)
// 		switchPlayerTurn()
// 		// activePlayer = players[1]
// 	} else {
// 		board[row][col] = players[1].option
// 		console.log(players[1].name)
// 		console.log(board)
// 		switchPlayerTurn()
// 		// activePlayer = players[0]

// 	}
// }

// function emptyIndexies(board) {
// 	return board.filter(s => s != "O" && s != "X");
// }

// console.log(board)

// return {
// 	dropValue
// }
// // const getBoard = () => board