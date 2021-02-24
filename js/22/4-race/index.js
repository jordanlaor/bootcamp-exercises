const player1 = document.querySelector('#player1-race');
const player2 = document.querySelector('#player2-race');

function updateBoard(player) {
  const active = player.querySelector('.active');
  active.classList.remove('active');
  active.nextElementSibling.classList.add('active');
  if (active.nextElementSibling.classList.contains('finish')) {
    window.removeEventListener('keyup', checkKey);
    const title = document.querySelector('h1');
    title.textContent += `   -   ${player.getAttribute('data-player')} Won`;
    setTimeout(() => {
      if (confirm('restart?')) {
        window.location.reload();
      }
    }, 1);
  }
}

const checkKey = (e) => {
  e.key === '1' ? updateBoard(player1) : e.key === '2' ? updateBoard(player2) : null;
};

window.addEventListener('keyup', checkKey);
