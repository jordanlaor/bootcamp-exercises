const form = document.querySelector('form');

function changeHTML() {
  form.remove();
  const div = document.createElement('div');
  div.innerHTML = '<p>Congratulations you successfully sent this form!</p>';
  document.body.appendChild(div);
}

function confirmF(e) {
  const name = e.currentTarget.querySelector('#name');
  const age = e.currentTarget.querySelector('#age');
  const email = e.currentTarget.querySelector('#email');
  const userChoice = confirm(
    `Is your ${name.id} ${name.value}? Are you ${age.value}? Is your ${email.id} ${email.value}?`
  );
  !userChoice ? e.preventDefault() : changeHTML();
}

form.addEventListener('submit', confirmF);
