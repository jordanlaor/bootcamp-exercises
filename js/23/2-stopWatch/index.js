const startBtn = document.querySelector('#start-btn');
const stopBtn = document.querySelector('#stop-btn');

if (window.getComputedStyle(startBtn).width > window.getComputedStyle(stopBtn).width) {
  stopBtn.style.width = window.getComputedStyle(startBtn).width;
} else {
  startBtn.style.width = window.getComputedStyle(stopBtn).width;
}

const mili = { element: document.querySelector('.mili'), counter: 0 };
const secs = { element: document.querySelector('.secs'), counter: 0 };
const mins = { element: document.querySelector('.mins'), counter: 0 };

function timeCount(unit, countTo) {
  if (unit.counter === countTo) {
    unit.counter = 0;
  } else {
    unit.counter += 1;
  }
  unit.element.textContent = `${unit.counter}`.padStart(2, '0');
}

let miliInterval;
let secsInterval;
let minsInterval;

startBtn.firstElementChild.addEventListener('input', (e) => {
  miliInterval = setInterval(() => timeCount(mili, 99), 10);
  secsInterval = setInterval(() => timeCount(secs, 59), 1000);
  minsInterval = setInterval(() => timeCount(mins, 59), 60000);
});

stopBtn.firstElementChild.addEventListener('input', () => {
  if (miliInterval && secsInterval && minsInterval) {
    clearInterval(miliInterval);
    clearInterval(secsInterval);
    clearInterval(minsInterval);
  }
});
