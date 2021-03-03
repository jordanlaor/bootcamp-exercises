const DATA_URL = `http://www.omdbapi.com/?apikey=36152117&t=`;
const SEARCH_BTN = document.querySelector('button');
const MOVIE_NAME = document.querySelector('input');
const ERROR_MESSAGE = document.querySelector('.errorMessage');
const MOVIE_CARD = document.querySelector('.movie-card');
const movie = {};
let obj;

function focusOnInput() {
  MOVIE_NAME.focus();
}

function handleError(err) {
  ERROR_MESSAGE.textContent = err;
  console.log(err);
  setTimeout(() => (ERROR_MESSAGE.textContent = ''), 2000);
}

function updateMovieCard() {
  let innerHTML = `<div class="img-container">
        <img
          class="poster"
          src="${movie.poster}"
          alt=""
        />
      </div>
      <div class="info-wrapper">
        <h1>${movie.title}</h1>
        <div><span class="title">Genre: </span>${movie.genre}</div>
        <div><span class="title">Release Year: </span>${movie.year}</div>
        <div>
          <span class="title">Plot: </span>${movie.plot}</div>
        <div><span class="title">Director: </span>${movie.director}</div>
        <div><span class="title">Actors: </span>${movie.actors}</div>
        <div class="rating-wrapper">`;
  for (const key of Object.keys(movie.ratings)) {
    innerHTML += `<div class="rating-box">
            <img class="rating-img" src="./${key}.png" alt="" />
            <div>${movie.ratings[key]}</div>
          </div>`;
  }
  MOVIE_CARD.innerHTML = innerHTML;
}

async function searchMovieHandle(e) {
  e.preventDefault();
  ERROR_MESSAGE.textContent = '';
  try {
    const response = await fetch(`${DATA_URL}${MOVIE_NAME.value}`);
    const data = await response.json();
    if (!response.ok) {
      handleError(data.message);
    } else {
      movie.poster = data.Poster;
      movie.title = data.Title;
      movie.genre = data.Genre;
      movie.year = new Date(data.Released).getFullYear();
      movie.plot = data.Plot;
      movie.director = data.Director;
      movie.actors = data.Actors;
      movie.ratings = {};
      obj = data.Ratings;
      for (let i = 0; i < Object.keys(data.Ratings).length; i += 1) {
        if (['Internet Movie Database', 'Rotten Tomatoes', 'Metacritic'].includes(data.Ratings[i].Source)) {
          movie.ratings[data.Ratings[i].Source] = data.Ratings[i].Value;
        }
      }
      updateMovieCard();
    }
  } catch (err) {
    handleError(err);
  }
  focusOnInput();
  MOVIE_NAME.value = '';
}

SEARCH_BTN.addEventListener('click', searchMovieHandle);
window.addEventListener('load', focusOnInput);
