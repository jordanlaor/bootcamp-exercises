const seconds = { element: document.querySelector('.second'), deg: 0 };
const minutes = { element: document.querySelector('.minute'), deg: 0 };
const hours = { element: document.querySelector('.hour'), deg: 0 };

function rotate(dial) {
  dial.deg += 6;
  dial.element.style.transform = `rotate(${dial.deg}deg)`;
}

setInterval(() => rotate(seconds), 1000);
setInterval(() => rotate(minutes), 60000);
setInterval(() => rotate(hours), 60000 * 60);
