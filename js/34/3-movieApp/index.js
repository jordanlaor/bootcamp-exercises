const DATA_URL = `http://www.omdbapi.com/?apikey=36152117&t=`;
const SEARCH_BTN = document.querySelector('button');
const MOVIE_NAME = document.querySelector('input');
const ERROR_MESSAGE = document.querySelector('.errorMessage');
const movie = {};

function focusOnInput() {
  USERNAME.focus();
}

function handleError(err) {
  ERROR_MESSAGE.textContent = err;
  setTimeout(() => (ERROR_MESSAGE.textContent = ''), 2000);
}

function updateMovieCard() {}

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
      movie.actors = data.actors;
      movie.ratings = {};
      for (const rating of data.Ratings) {
        if (['Internet Movie Database', 'Rotten Tomatoes', 'Metacritic'].includes(rating.Source)) {
          movie.ratings[rating.Source] = rating.Value;
        }
      }
      updateMovieCard();
    }
  } catch (err) {
    handleError(err);
  }
}

SEARCH_BTN.addEventListener('click', searchMovieHandle);
window.addEventListener('load', focusOnInput);
