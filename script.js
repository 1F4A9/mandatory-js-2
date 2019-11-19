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

function getWinner() { // lägg till en break till så loopen inte kör genom alla possibleWins
    // kör endast genom om totalMoves length är > 3
    for (let i = 0; i < possibleWins.length; i++) {
        if (playBoard[possibleWins[i][0]] === 'X' && playBoard[possibleWins[i][1]] === 'X' && playBoard[possibleWins[i][2]] === 'X') {
            displayScoreCount('X');
            gamePlaying = false;
            break;
        } else if (playBoard[possibleWins[i][0]] === 'O' && playBoard[possibleWins[i][1]] === 'O' && playBoard[possibleWins[i][2]] === 'O') {
            displayScoreCount('O');
            gamePlaying = false;
            break;
        } else if (totalMoves.length === 9) {
            displayScoreCount('Tie')
            gamePlaying = false;
            break;
        }
    }
}

function displayScoreCount(winner) {
    console.log('beepboop: ' + winner)

    // document.querySelector('.x-score').textContent = winner;
    // document.querySelector('.o-score').textContent = winner;
    // document.querySelector('.tie-score').textContent = winner;
}

document.querySelector('#reset').addEventListener('click', init)

function init() {
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