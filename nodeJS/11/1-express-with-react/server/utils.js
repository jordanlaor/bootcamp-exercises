const fs = require("fs").promises;
const uuid = require("uuid").v4;

const MOVIES_JSON = `${__dirname}/movies.json`;

// throw { message: "message", code: 305 };
const getAllMovies = async () => {
  try {
    const movies = await fs.readFile(MOVIES_JSON, "utf-8");
    return movies || JSON.stringify([]);
  } catch (error) {
    throw { message: error.code, code: 500 };
  }
};

const getMovieById = async (id) => {
  if (!id) throw { message: "you need to pass an id", code: 406 };
  try {
    const movies = JSON.parse(await getAllMovies());
    const movie = movies.find((movie) => movie.id === id);
    if (movie) return movie;
    throw { message: "no such movie was found", code: 404 };
  } catch (error) {
    throw { message: error.message, code: 500 };
  }
};

const createMovie = async (title, rating, genre, length) => {
  if (!title || !rating || !genre || !length)
    throw { message: "one of the parameters is missing (title, rating, genre, length)", code: 406 };
  if (!Array.isArray(genre)) throw { message: "genre need to be an array", code: 406 };
  if (Number.isNaN(Number(length))) throw { message: "length needs to be a number", code: 406 };
  try {
    const movies = JSON.parse(await getAllMovies());
    const movie = { id: uuid(), title, rating, genre, length };

    movies.push(movie);
    try {
      await fs.writeFile(MOVIES_JSON, JSON.stringify(movies));
      return movie.id;
    } catch (error) {
      throw { message: error.message, code: 500 };
    }
  } catch (error) {
    throw { message: error.message, code: 500 };
  }
};

const editMovie = async (id, { title, rating, genre, length }) => {
  if (!id) throw { message: "you need to pass an id", code: 406 };

  try {
    const movies = JSON.parse(await getAllMovies());
    const movie = movies.find((movie) => movie.id === id);
    if (!movie) throw { message: "no such movie was found", code: 404 };
    if (title) {
      movie.title = title;
    }
    if (rating) {
      movie.rating = rating;
    }
    if (genre) {
      if (!Array.isArray(genre)) throw { message: "genre need to be an array", code: 406 };
      movie.genre = genre;
    }
    if (length) {
      if (Number.isNaN(Number(length))) throw { message: "length needs to be a number", code: 406 };
      movie.length = length;
    }

    try {
      await fs.writeFile(MOVIES_JSON, JSON.stringify(movies));
      return movie;
    } catch (error) {
      throw { message: error.message, code: 500 };
    }
  } catch (error) {
    throw { message: error.message, code: 500 };
  }
};

const deleteMovie = async (id) => {
  if (!id) throw { message: "you need to pass an id", code: 406 };

  try {
    const movies = JSON.parse(await getAllMovies());
    const filteredMovies = movies.filter((movie) => movie.id !== id);
    try {
      await fs.writeFile(MOVIES_JSON, JSON.stringify(filteredMovies));
      return filteredMovies;
    } catch (error) {
      throw { message: error.message, code: 500 };
    }
  } catch (error) {
    throw { message: error.message, code: 500 };
  }
};

module.exports = { getAllMovies, getMovieById, createMovie, editMovie, deleteMovie };
