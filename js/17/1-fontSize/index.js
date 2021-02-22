const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const text = document.querySelector('.text');

function bigger() {
  let fontSize = Number.parseInt(text.style.fontSize.match(/\d+/g));
  const fontUnit = text.style.fontSize.match(/\D+/g);
  fontSize += 4;
  if (fontSize > 100) {
    fontSize = 100;
  }
  text.style.fontSize = `${fontSize}${fontUnit}`;
}

function smaller() {
  let fontSize = Number.parseInt(text.style.fontSize.match(/\d+/g));
  const fontUnit = text.style.fontSize.match(/\D+/g);
  fontSize -= 4;
  if (fontSize < 6) {
    fontSize = 6;
  }
  text.style.fontSize = `${fontSize}${fontUnit}`;
}

plus.addEventListener('click', bigger);
minus.addEventListener('click', smaller);
