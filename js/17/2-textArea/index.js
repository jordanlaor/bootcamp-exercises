const message = document.querySelector('.message');
const btn = document.querySelector('.submit');
const textarea = document.querySelector('.textarea');

function checkRequired() {
  const inputvalue = textarea.value;
  if (inputvalue.length > 100) {
    message.classList.add('hidden');
    return true;
  }
  message.classList.remove('hidden');
  return false;
}

btn.addEventListener('click', checkRequired);
