const state = {
  best: { name: '', mistakes: -1 },
  currentlyFlipped: [],
};
const gameWrapper = document.querySelector('.game-wrapper');
const alternateWrapper = document.querySelector('.alternate-wrapper');
const cardsWrapper = document.querySelector('.cards-wrapper');
const alternateDivs = document.querySelectorAll('.alternate');
const cardsNum = document.querySelector('#cardsNum');
const mistakes = document.querySelector('.wrong');

function randomCard(cards) {
  const card = document.createElement('div');
  card.className = 'card';
  const cardBack = document.createElement('div');
  cardBack.className = 'card-back';
  card.appendChild(cardBack);
  const cardFront = document.createElement('div');
  cardFront.className = 'card-front';
  card.appendChild(cardFront);
  const [num] = cards.splice(Math.floor(Math.random() * cards.length), 1);
  cardFront.style.backgroundImage = `url('./images/${num}.png')`;
  card.dataset.type = num;
  cardsWrapper.appendChild(card);
}

function win() {
  gameWrapper.classList.add('none');
  alternateWrapper.classList.remove('none');
  alternateDivs.forEach((div) => div.classList.add('none'));
  const winPage = document.querySelector('.win');
  winPage.classList.remove('none');
  if (state.best.mistakes >= state.mistakes || state.best.mistakes === -1) {
    state.best.mistakes = state.mistakes;
    setTimeout(() => {
      state.best.name = prompt('Highscore! What is your name?', 'anonymous');
    }, 3000);
    const newBtn = winPage.querySelector('.new-game');
    newBtn.addEventListener('click', starterPage);
  }
}

function goodPair() {
  Array.from(state.currentlyFlipped[0].children).forEach((side) => side.classList.add('found'));
  Array.from(state.currentlyFlipped[1].children).forEach((side) => side.classList.add('found'));
  if (document.querySelectorAll('.found').length / 2 === parseInt(cardsNum.value)) {
    win();
  }
}

function endCardClicked() {
  Array.from(state.currentlyFlipped[0].children).forEach((side) => side.classList.remove('clicked'));
  Array.from(state.currentlyFlipped[1].children).forEach((side) => side.classList.remove('clicked'));
  state.currentlyFlipped.pop();
  state.currentlyFlipped.pop();
  cardsWrapper.addEventListener('click', cardClicked);
}

async function checkPair() {
  cardsWrapper.removeEventListener('click', cardClicked);
  if (state.currentlyFlipped[0].dataset.type === state.currentlyFlipped[1].dataset.type) {
    goodPair();
    endCardClicked();
  } else {
    state.mistakes += 1;
    mistakes.textContent = state.mistakes;
    await new Promise(() => setTimeout(endCardClicked, 1100));
  }
}

function cardClicked(e) {
  if (e.target.classList.contains('card-back') && !e.target.classList.contains('found')) {
    const back = e.target;
    const front = back.nextElementSibling;
    const card = back.parentElement;
    back.classList.add('clicked');
    front.classList.add('clicked');
    state.currentlyFlipped.push(card);
    if (state.currentlyFlipped.length === 2) {
      checkPair();
    }
  }
}

function createBoard() {
  gameWrapper.classList.remove('none');
  alternateWrapper.classList.add('none');
  cardsWrapper.innerHTML = '';
  const cols = 4;
  const rows = parseInt(cardsNum.value) / cols;
  cardsWrapper.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  cardsWrapper.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  const cards = [];
  for (let i = 0; i < (cols * rows) / 2; i += 1) {
    cards.push(i, i);
  }
  while (cards.length) {
    randomCard(cards);
  }
  cardsWrapper.addEventListener('click', cardClicked);
  const newBtn = gameWrapper.querySelector('.new-game');
  newBtn.addEventListener('click', starterPage);
}

function starterPage() {
  state.mistakes = 0;
  mistakes.textContent = state.mistakes;
  gameWrapper.classList.add('none');
  alternateWrapper.classList.remove('none');
  alternateDivs.forEach((div) => div.classList.add('none'));
  document.querySelector('.start').classList.remove('none');
  const startBtn = document.querySelector('.start-game');
  startBtn.addEventListener('click', createBoard);
  document.querySelector('.cardsNumValue').textContent = cardsNum.value;
  cardsNum.addEventListener('input', () => (document.querySelector('.cardsNumValue').textContent = cardsNum.value));
}

window.addEventListener('load', starterPage);
