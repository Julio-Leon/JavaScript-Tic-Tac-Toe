/*----- constants -----*/

/*----- app's state (variables) -----*/
let stateBoard
let stateTurn = 'X'
let win

/*----- cahed element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'))
const messages = document.querySelector('h2')

/*----- event listeners -----*/
document.querySelector('#board').addEventListener('click', handleTurn)

/*----- functions -----*/

function init() {
    board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ]

    render()
}

function render() {
    board.forEach((mark, index) => {
        squares[index].textContent = mark
    })
    messages.textContent = `It's ${stateTurn}'s turn!`
}

function handleTurn(e) {
    board[squares.findIndex(square => square === e.target)] = stateTurn
    stateTurn = stateTurn === 'X' ? 'O' : 'X'

    win = board[0] && board[0] === board[1] && board[0] === board[2] ? board[0] : null

    console.log(board)
}

init()