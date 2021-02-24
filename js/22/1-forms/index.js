const cbDiv = document.querySelector('div');
const image = document.querySelector('img');
cbDiv.addEventListener('change', (e) => {
  e.target.checked ? image.classList.remove('hidden') : image.classList.add('hidden');
});
