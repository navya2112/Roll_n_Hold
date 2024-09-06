'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0=document.querySelector('#score--0');
const score1=document.getElementById('score--1');
const diceEl=document.querySelector('.dice');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');


const modal = document.getElementById('winner-modal');
const modalMessage = document.getElementById('modal-message');

const init = function() {
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  diceEl.classList.add('hidden');
  
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  
  player0.classList.add('player--active');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--active', 'player--winner');
};

modal.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.classList.add('hidden');
  }
});

const scores=[0,0];
let currentScore=0;
let activePlayer=0;
let playing =true;
diceEl.classList.add('hidden');

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    currentScore=0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}


btnRoll.addEventListener('click',function(){
    if(playing){
    const dice=Math.trunc(Math.random()*6)+1; 
    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`;

    if(dice!==1){
        currentScore+=dice;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    } else {
        switchPlayer();

    }
}
});

btnHold.addEventListener('click', function () {
    if (playing) {
      scores[activePlayer] += currentScore;
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];

      if (scores[activePlayer] >= 50) {
        playing = false;
        diceEl.classList.add('hidden');
        let finalwinner = activePlayer + 1;
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add('player--winner');
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove('player--active');

          modalMessage.textContent = `Hurray !!! Player ${activePlayer + 1} won.`;
          modal.classList.remove('hidden');
           
      } else {
        switchPlayer();
      }
    }
  });

btnNew.addEventListener('click', init);