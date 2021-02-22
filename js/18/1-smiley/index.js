const btn = document.querySelector('.submit');
function smiley() {
  const smileyAmount = document.querySelector('#smileyAmount');
  let smileyValue = smileyAmount.value;
  if (/\D+/g.test(smileyValue)) {
    alert('This is not a valid input!!!');
  } else {
    const div = document.querySelector('.smileyContainer') || document.createElement('div');
    div.classList.add('smileyContainer');
    smileyValue = Number.parseInt(smileyValue);
    const smileyChar = '&#128523;';
    const code = `<div>${smileyChar.repeat(smileyValue)}</div>`;
    div.innerHTML = code;
    document.body.append(div);
  }
}

btn.addEventListener('click', smiley);
