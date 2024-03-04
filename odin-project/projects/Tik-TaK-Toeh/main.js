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
			createPlayer(document.querySelector('[data-enter-name1]').value, `<div class="x-symbol symbol"><img src="assets/icons/x-mark.svg" alt=""></div>`),
			createPlayer(document.querySelector('[data-enter-name2]').value, `<div class="o-symbol symbol"><img src="assets/icons/o.svg" alt=""></div>`)
		]
		currentPlayer = 0;
		gameOver = false
		GameBoard.render()
		const squares = document.querySelectorAll(".squares");
		squares.forEach(square => {
			square.addEventListener("click", GameControl.handleClick)
		})
		
	}

	const handleClick = (e) => {
		let index = parseInt(e.target.id)

		if (GameBoard.getGameBoard()[index] !== "") return
		
		if(gameOver) {
			return
		}
		
		GameBoard.getGameBoard();
		GameBoard.update(index, players[currentPlayer].marker)
		GameBoard.render()
		
		if (checkWin(GameBoard.getGameBoard(), players[currentPlayer].marker)) {
			gameOver = true
			displayController.displayMessage(`${players[currentPlayer].name} won!`)
			
		} else if (checkTie(GameBoard.getGameBoard(), players[currentPlayer].marker)) {
			gameOver = true
			displayController.displayMessage(`It's a tie!`)
			
		}
		switchTurns()
		
	}
	
	const restart = () => {
		for (let i = 0; i < 9; i++) {
			GameBoard.update(i, "")
		}
		GameBoard.getGameBoard()
		GameBoard.render()
		gameOver = false
	}
	
	return {
		restart,
		start,
		handleClick
	}
})()

const displayController = (() => {
	const displayMessage = (msg) => {
		document.querySelector('.displayMsg').innerHTML = msg 
	}

	return {
		displayMessage
	}
})()


startBtn.addEventListener("click", () => {
	GameControl.start()
	document.querySelector('.gameboard').classList.add('gameboard-bg')
})

restartBtn.addEventListener("click", () => {
	GameControl.restart()
	displayController.displayMessage('')
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

// animation
startBtn.addEventListener("click", () => {
	let gameboard = document.querySelector('.gameboard')
	gameboard.classList.add('gameboard-animate')
})
