// piker
const gameZone = document.querySelector('.gaming-zone');
const startGame = document.querySelector('.sratr-game');
const pikerXO = document.querySelectorAll('.pik-xo div');
const X = document.querySelector('.piker-x');
const O = document.querySelector('.piker-o');
const gamingBoard = document.querySelectorAll('.box');
let currentPlayer = null;
let bot;
let xWin = 0;
let oWin = 0;
const winComb = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
[0, 3, 6], [1, 4, 7], [2, 5, 8],
[0, 4, 8], [2, 4, 6]
];



// X or O

pikerXO.forEach(element => {
  element.addEventListener('click', function () {
    if (element.firstElementChild === X) {
      document.querySelector('.header-input').value = "X"
    } else if (element.firstElementChild === O) {

      document.querySelector('.header-input').value = 'O';
    }
  });
});


// marck user choise

let lastClicked = null;

pikerXO.forEach(element => {
  element.addEventListener('click', function () {
    if (lastClicked !== null) {
      lastClicked.style.background = '';
    }
    this.style.background = '#A8BFC9';
    lastClicked = this;
  });
});



// display two player board
function twoPlayers() {
  startGame.style.display = 'none'
  gameZone.style.display = 'block'
}


// cooshe corrent player 
let boarClicked = null
pikerXO.forEach(element => {
  element.addEventListener('click', function () {
    currentPlayer = element.firstElementChild;
  });
});



// solo player
function soloPlayer() {
  startGame.style.display = 'none';
  gameZone.style.display = 'block';

}


// playing logick
gamingBoard.forEach(element => {
  element.addEventListener('click', function () {
    if (currentPlayer) {
      const img = document.createElement('img');
      img.src = currentPlayer.src;
      element.appendChild(img);
    } else if (boarClicked === X) {
      boarClicked = O;
      const img = document.createElement('img');
      img.src = currentPlayer.src;
      element.appendChild(img);
    } else {
      boarClicked = X;
      const img = document.createElement('img');
      img.src = currentPlayer.src;
      element.appendChild(img);
    }

    currentPlayer = currentPlayer === X ? O : X;
    checkForWinner();
    soloPlayer()
  });
});





// chaking winner

function checkForWinner() {
  let winCountX = 0;
  let winCountO = 0;
  const playerX = document.createElement('img');
  playerX.src = './starter-code/assets/icon-x.svg';
  const playerO = document.createElement('img');
  playerO.src = './starter-code/assets/icon-o.svg';

  for (let i = 0; i < winComb.length; i++) {
    const combo = winComb[i];
    const a = combo[0];
    const b = combo[1];
    const c = combo[2];
    const elA = gamingBoard[a];
    const elB = gamingBoard[b];
    const elC = gamingBoard[c];

    if (elA.children.length > 0 && elA.children[0].src.includes('icon-x.svg') &&
      elB.children.length > 0 && elB.children[0].src.includes('icon-x.svg') &&
      elC.children.length > 0 && elC.children[0].src.includes('icon-x.svg')) {
      xwin()
      xWin += 1
      counterX()
      return true;
    }
    else if (elA.children.length > 0 && elA.children[0].src.includes('icon-o.svg') &&
      elB.children.length > 0 && elB.children[0].src.includes('icon-o.svg') &&
      elC.children.length > 0 && elC.children[0].src.includes('icon-o.svg')) {
      owin()
      counterO()
      oWin += 1
      return true;
    }

    // counter

    function counterX() {
      document.querySelector('.x-win-number').value = xWin;
    }

    function counterO() {
      document.querySelector('.y-win-number').value = oWin;
    }

  }
  return false;


}


// next round
function nextRoun() {
  document.querySelector('.x-winner').style.display = 'none'
  document.querySelector('.o-winner').style.display = 'none'
  document.querySelector('.ties').style.display = 'none'

  clearAll()
}


// function quit

function quit() {
  document.querySelector('.x-winner').style.display = 'none'
  document.querySelector('.o-winner').style.display = 'none'
  document.querySelector('.ties').style.display = 'none'


}

function clearAll() {
  gamingBoard.forEach((box) => {
    box.innerHTML = '';
  });
}



// display x winner

function xwin() {
  document.querySelector('.x-winner').style.display = 'block'
}

// display O winner

function owin() {
  document.querySelector('.o-winner').style.display = 'block'
}


// dispay Tie

function tied() {
  document.querySelector('.ties').style.display = 'block'
}


// reload game
function retry() {
  location.reload();
  document.querySelector('.x-win-number').value =' '
  document.querySelector('.y-win-number').value =' '
  document.querySelector('.ties-number').value =' '
}










