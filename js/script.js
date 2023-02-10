/*----- constants -----*/
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

/*----- app's state (variables) -----*/
let stateBoard
let stateTurn = 'X'
let win

/*----- cahed element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'))
const messages = document.querySelector('h2')

/*----- event listeners -----*/
document.querySelector('#board').addEventListener('click', handleTurn)
document.querySelector('#reset-button').addEventListener('click', init)

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
    messages.textContent = win === 'T' ? "That's a tie!" : win ? `${win} wins the game!` : `It's ${stateTurn}'s turn!`
}

function handleTurn(e) {
    board[squares.findIndex(square => square === e.target)] = stateTurn
    stateTurn = stateTurn === 'X' ? 'O' : 'X'

    win = getWinner()

    render()
    console.log(board)
}

function getWinner() {
    let winner = null
    winningCombinations.forEach((combination, index) => {
        if (board[combination[0]] && board[combination[0]] === board[combination[1]] && board[combination[0]] === board[combination[2]]) {
            winner = board[combination[0]]
        }
    })
    return winner ? winner : board.includes('') ? null : 'T'
}

init()