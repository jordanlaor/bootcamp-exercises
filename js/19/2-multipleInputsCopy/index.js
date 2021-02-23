const code = document.querySelector('[data-code]').textContent;
const digits = document.querySelectorAll('.digit');
const verifyBtn = document.querySelector('button');

function verify() {
  const verifyMessage = document.querySelector('.verifyMessage');
  for (let i = 0; i < digits.length; i += 1) {
    if (digits[i].value !== code[i]) {
      verifyMessage.textContent = `Your input doesn't match the vertification code`;
      verifyMessage.style.color = '#a8032f';
      digits.forEach((digit) => (digit.value = ''));
      digits[0].focus();
      return;
    }
  }
  verifyMessage.textContent = `You're good!`;
  verifyMessage.style.color = '#03a82f';
}

window.addEventListener('load', () => digits[0].focus());
digits.forEach((digit) => {
  digit.addEventListener('input', (e) => {
    const current = e.target;
    if (current.value.length === 1) {
      if (current.dataset.digit < digits.length) {
        current.nextElementSibling.focus();
      }
      if (current.dataset.digit >= digits.length) {
        verifyBtn.click();
      }
    }
  });
  digit.addEventListener('paste', (e) => {
    e.preventDefault();
    const clipboard = e.clipboardData.getData('text').split('');
    let current = e.target;
    while (clipboard.length && current && current.dataset.digit <= digits.length) {
      current.value = clipboard.shift();
      current = current.nextElementSibling;
      if (current) {
        current.focus();
      }
    }
    if (digits[digits.length - 1].value) {
      verifyBtn.click();
    }
  });
  digit.addEventListener('keydown', (e) => {
    const current = e.target;
    if (e.key === 'Backspace') {
      if (!current.value.length) {
        current.previousElementSibling.focus();
      }
    }
  });
});
verifyBtn.addEventListener('click', verify);
