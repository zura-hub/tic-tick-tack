// piker
const gameZone = document.querySelector('.gaming-zone');
const startGame = document.querySelector('.sratr-game');
const pikerXO = document.querySelectorAll('.pik-xo div');
const X = document.querySelector('.piker-x');
const O = document.querySelector('.piker-o');
const gamingBoard = document.querySelectorAll('.box');
let twoPlayer;


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


function xwin() {
  document.querySelector('.x-winner').style.display = 'block';
}

function twoPlayers() {
  startGame.style.display = 'none'
  gameZone.style.display = 'block'
}


let boarClicked = null;

gamingBoard.forEach(element => {
  element.addEventListener('click', function () {
    if (boarClicked === null) {
      boarClicked = X;
      const img = document.createElement('img');
      img.src = X.src;
      element.appendChild(img);
    } else if (boarClicked === X) {
      boarClicked = O;
      const img = document.createElement('img');
      img.src = O.src;
      element.appendChild(img);
    } else {
      boarClicked = X;
      const img = document.createElement('img');
      img.src = X.src;
      element.appendChild(img);
    }
  });
});


// twoPlayer.addEventListener('click' , () =>{
//   for(let i = 0; i < gamingBoard.length; i++){
//     if (gamingBoard[i][0] !== ' ')
//   }
// })






function xwin() {
  document.querySelector('.x-winner').style.display = 'block'
}


function owin() {
  document.querySelector('.o-winner').style.display = 'block'
}

function tied() {
  document.querySelector('.ties').style.display = 'block'
}

function retry(){
  location.reload();
}





