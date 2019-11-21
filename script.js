let activePlayer, playerX, playerO, gamePlaying, id, possibleWins, playBoard

init()

function playGame() {
    if (gamePlaying) {
        id = parseInt(this.id);
        if (activePlayer === 0) {
            this.classList.add('add-x');
            this.removeEventListener('click', playGame);
            getPlayerX(id);
        } else if (activePlayer === 1) {
            this.classList.add('add-o');
            this.removeEventListener('click', playGame);
            getPlayerO(id)
        }
    }
}

function getPlayerX(id) {
    activePlayer = 1;

    playBoard[id] = playerX;
    totalMoves.push(playBoard[id])
    getWinner()
}

function getPlayerO(id) {
    activePlayer = 0;

    playBoard[id] = playerO;
    totalMoves.push(playBoard[id])
    getWinner()
}

function getWinner() {
    if (totalMoves.length >= 5) {
        if (playBoard[possibleWins[0][0]] === 'X' && playBoard[possibleWins[0][1]] === 'X' && playBoard[possibleWins[0][2]] === 'X' ||
            playBoard[possibleWins[1][0]] === 'X' && playBoard[possibleWins[1][1]] === 'X' && playBoard[possibleWins[1][2]] === 'X' ||
            playBoard[possibleWins[2][0]] === 'X' && playBoard[possibleWins[2][1]] === 'X' && playBoard[possibleWins[2][2]] === 'X' ||
            playBoard[possibleWins[3][0]] === 'X' && playBoard[possibleWins[3][1]] === 'X' && playBoard[possibleWins[3][2]] === 'X' ||
            playBoard[possibleWins[4][0]] === 'X' && playBoard[possibleWins[4][1]] === 'X' && playBoard[possibleWins[4][2]] === 'X' ||
            playBoard[possibleWins[5][0]] === 'X' && playBoard[possibleWins[5][1]] === 'X' && playBoard[possibleWins[5][2]] === 'X' ||
            playBoard[possibleWins[6][0]] === 'X' && playBoard[possibleWins[6][1]] === 'X' && playBoard[possibleWins[6][2]] === 'X' ||
            playBoard[possibleWins[7][0]] === 'X' && playBoard[possibleWins[7][1]] === 'X' && playBoard[possibleWins[7][2]] === 'X') {
            displayScoreCount('X');
            gamePlaying = false;
        } else if (playBoard[possibleWins[0][0]] === 'X' && playBoard[possibleWins[0][1]] === 'X' && playBoard[possibleWins[0][2]] === 'X' ||
            playBoard[possibleWins[1][0]] === 'O' && playBoard[possibleWins[1][1]] === 'O' && playBoard[possibleWins[1][2]] === 'O' ||
            playBoard[possibleWins[2][0]] === 'O' && playBoard[possibleWins[2][1]] === 'O' && playBoard[possibleWins[2][2]] === 'O' ||
            playBoard[possibleWins[3][0]] === 'O' && playBoard[possibleWins[3][1]] === 'O' && playBoard[possibleWins[3][2]] === 'O' ||
            playBoard[possibleWins[4][0]] === 'O' && playBoard[possibleWins[4][1]] === 'O' && playBoard[possibleWins[4][2]] === 'O' ||
            playBoard[possibleWins[5][0]] === 'O' && playBoard[possibleWins[5][1]] === 'O' && playBoard[possibleWins[5][2]] === 'O' ||
            playBoard[possibleWins[6][0]] === 'O' && playBoard[possibleWins[6][1]] === 'O' && playBoard[possibleWins[6][2]] === 'O' ||
            playBoard[possibleWins[7][0]] === 'O' && playBoard[possibleWins[7][1]] === 'O' && playBoard[possibleWins[7][2]] === 'O') {
            displayScoreCount('O');
            gamePlaying = false;
        } else if (totalMoves.length === 9) {
            document.querySelector('.winner').textContent = `We have a tie!`;
            gamePlaying = false;
        }
    }
}

function displayScoreCount(winner) {
    document.querySelector('.winner').textContent = `Player ${winner} won the game!`;
}

document.querySelector('#reset').addEventListener('click', init)

function init() {
    document.querySelector('.winner').innerHTML = "";

    const squares = document.querySelectorAll('.square');
    squares.forEach((element) => element.addEventListener('click', playGame));

    playBoard = Array.from(Array(9).keys());
    gamePlaying = true;
    activePlayer = 0;
    playerX = 'X';
    playerO = 'O';
    totalMoves = [];

    possibleWins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    squares.forEach((element) => element.classList.remove('add-o'))
    squares.forEach((element) => element.classList.remove('add-x'))
}