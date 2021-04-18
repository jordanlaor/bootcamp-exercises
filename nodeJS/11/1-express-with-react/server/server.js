const express = require("express");
const { getAllMovies, getMovieById, createMovie, editMovie, deleteMovie } = require("./utils");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

const pubDir = path.join(__dirname, "../client/build");
app.use(express.static(pubDir));

app.get("/api/movies", async (req, res) => {
  try {
    const movies = await getAllMovies();
    res.status(200).send(movies);
  } catch (error) {
    res.status(error.code).send({ message: error.message });
  }
});

app.get("/api/movies/:id", async (req, res) => {
  try {
    const movie = await getMovieById(req.params.id);
    res.status(200).send({ ...movie });
  } catch (error) {
    res.status(error.code).send({ message: error.message });
  }
});

app.post("/api/movies", async (req, res) => {
  try {
    const { title, rating, genre, length } = req.body;
    const id = await createMovie(title, rating, genre, length);
    res.status(201).send({ id });
  } catch (error) {
    res.status(error.code).send({ message: error.message });
  }
});

app.put("/api/movies/:id", async (req, res) => {
  try {
    const movie = await editMovie(req.params.id, req.body);
    res.status(200).send({ ...movie });
  } catch (error) {
    res.status(error.code).send({ message: error.message });
  }
});

app.delete("/api/movies/:id", async (req, res) => {
  try {
    const movies = await deleteMovie(req.params.id);
    res.status(200).send(movies);
  } catch (error) {
    res.status(error.code).send({ message: error.message });
  }
});

// start the app
const PORT = process.env.PORT || 53317;
app.listen(PORT, () => console.log("listening!"));
