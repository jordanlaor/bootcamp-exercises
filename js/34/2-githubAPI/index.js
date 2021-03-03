const BASE_URL = `https://api.github.com/users/`;
const SEARCH_BTN = document.querySelector('button');
const USERNAME = document.querySelector('input');
const ERROR_MESSAGE = document.querySelector('.errorMessage');
const users = {};
const CARDS_WRAPPER = document.querySelector('.cards-wrapper');

function focusOnInput() {
  USERNAME.focus();
}

function handleError(err) {
  ERROR_MESSAGE.textContent = err;
  setTimeout(() => (ERROR_MESSAGE.textContent = ''), 2000);
}

function addCard(userInfo) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `<a class="card-link" href="${userInfo.htmlURL}" target="_blank">
  <img src="${userInfo.photo}" alt="" />
        <h2>${userInfo.username}</h2>
        <div>Number of public Repos: ${userInfo.publicRepos}</div>
        <a href="${userInfo.htmlURL}" target="_blank">To the profile</a></a>`;
  CARDS_WRAPPER.prepend(card);
}

async function fetchUser(e) {
  e.preventDefault();
  ERROR_MESSAGE.textContent = '';
  if (users[USERNAME.value]) {
    handleError('The user info is already on the page');
  } else {
    try {
      const response = await fetch(`${BASE_URL}${USERNAME.value}`);
      console.log(response);
      const data = await response.json();
      if (!response.ok) {
        handleError(data.message);
      } else {
        console.log(data);
        users[USERNAME.value] = {
          username: data.name,
          photo: data.avatar_url,
          publicRepos: data.public_repos,
          htmlURL: data.html_url,
        };
        addCard(users[USERNAME.value]);
      }
    } catch (err) {
      handleError(err);
    }
  }
  focusOnInput();
  USERNAME.value = '';
}

async function main() {}

SEARCH_BTN.addEventListener('click', fetchUser);
window.addEventListener('load', focusOnInput);
