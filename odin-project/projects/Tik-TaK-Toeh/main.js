let startBtn = document.querySelector('[data-start-btn]')
let restartBtn = document.querySelector('[data-restart-btn]')

const GameBoard = (() => {
	const gameBoard = ["", "", "", "", "", "", "", "", ""]

	const render = () => {
		let template = "";
		let gameboard = document.querySelector('.gameboard')
		gameBoard.forEach((box, i) => {
			template += `<div class="squares" id="${i}">${box}</div>`
		})
		gameboard.innerHTML = template
		const squares = document.querySelectorAll(".squares");
		squares.forEach(square => {
			square.addEventListener("click", GameControl.handleClick)
		})
	}

	const getGameBoard = () => gameBoard

	const update = (idx, val) => {
		gameBoard[idx] = val
	}

	return {
		render,
		getGameBoard,
		update,
	}
})()

const createPlayer = (name, marker) => {
	return {
		name,
		marker
	}
}

const GameControl = (() => {
	let gameOver;
	let players = []
	let currentPlayer = 0;
	const switchTurns = () => {
		if (currentPlayer === 0) {
			currentPlayer = 1
		} else {
			currentPlayer = 0
		}
	}

	const start = () => {
		players = [
			createPlayer(document.querySelector('[data-enter-name1]').value, "X"),
			createPlayer(document.querySelector('[data-enter-name2]').value, "0")
		]

		currentPlayer = 0;
		gameOver = false
		GameBoard.render()
		const squares = document.querySelectorAll(".squares");
		squares.forEach(square => {
			square.addEventListener("click", GameControl.handleClick)
		})

	}


	const restart = () => {
		for (let i = 0; i < 9; i++) {
			GameBoard.update(i, "")
		}
		GameBoard.getGameBoard()
		GameBoard.render()
	}

	const handleClick = (e) => {
		let index = parseInt(e.target.id)
		if (GameBoard.getGameBoard()[index] !== "") return

		GameBoard.getGameBoard();
		GameBoard.update(index, players[currentPlayer].marker)
		GameBoard.render()

		if (checkWin(GameBoard.getGameBoard(), players[currentPlayer].marker)) {
			gameOver = true
			console.log(`${players[currentPlayer].name} won!`)

		} else if (checkTie(GameBoard.getGameBoard(), players[currentPlayer].marker)) {
			gameOver = true
			console.log(`It's a tie!`)

		}

		switchTurns()

	}

	// for not 2d array
	const dropValue = (idx) => {
		if (GameBoard.getGameBoard()[idx] !== "") return

		getActivePlayerName()
		GameBoard.update(idx, getActivePlayer().marker)
		GameBoard.getGameBoard();
		GameBoard.consoleGameBoard();

		if (checkWin(GameBoard.getGameBoard(), getActivePlayer().marker)) {
			gameOver = true
			console.log(`${getActivePlayer().name} won!`)

		} else if (checkTie(GameBoard.getGameBoard(), getActivePlayer().marker)) {
			gameOver = true
			console.log(`It's a tie!`)

		}
		switchTurns()
	}

	return {
		dropValue,
		restart,
		start,
		handleClick
	}
})()

startBtn.addEventListener("click", () => {
	GameControl.start()
})

restartBtn.addEventListener("click", () => {
	GameControl.restart()
})

function checkTie(board) {
	return board.every(cell => cell != "")
}

function checkWin(board) {
	const winCombo = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	]

	for (let i = 0; i < winCombo.length; i++) {
		const [a, b, c] = winCombo[i]
		if (board[a] && board[a] === board[b] && board[a] === board[c]) {
			return true
		}
	}
	return false
}