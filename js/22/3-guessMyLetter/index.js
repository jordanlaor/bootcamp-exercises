const letter = document.querySelector('.letter');
const feedback = document.querySelector('.feedback');
const guessedCards = document.querySelector('.guessed-cards');
const footer = document.querySelector('.footer');

letter.style.width = window.getComputedStyle(letter).height;
let randomLetter = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
randomLetter = randomLetter[Math.floor(Math.random() * randomLetter.length)];
const guessed = [];

function createLetterCard(char) {
  const innerHTML = `<div class='card'>${char}</div>`;
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = innerHTML;
  guessedCards.appendChild(card);
}

function letterGuessF(e) {
  if (/[a-z]/i.test(e.key)) {
    if (guessed.find((char) => e.key === char)) {
      feedback.textContent = `You already tried ${e.key}`;
      feedback.style.color = '#454a52';
    } else if (e.key === randomLetter) {
      feedback.textContent = `You got it!`;
      feedback.style.color = '#2e8b57';
      letter.textContent = e.key;
      window.removeEventListener('keypress', letterGuessF);
      const innerHTML = `<h4>Would you like to play again?</h4>
      <div class='button'><p>YES<p></div>`;
      footer.innerHTML = innerHTML;
      const btn = document.querySelector('.button');
      btn.style.height = window.getComputedStyle(btn).width;
      btn.addEventListener('click', () => window.location.reload());
    } else {
      guessed.push(e.key);
      feedback.textContent = `${e.key} is not the letter`;
      feedback.style.color = '#91253c';
      createLetterCard(e.key);
    }
  } else {
    feedback.textContent = `This is a non alphabetical letter`;
    feedback.style.color = '#454a52';
  }
}

window.addEventListener('keypress', letterGuessF);
