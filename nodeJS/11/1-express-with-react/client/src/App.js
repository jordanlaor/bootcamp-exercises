import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [movies, setMovies] = useState([]);
  const getMovies = async () => {
    console.log(process.env.NODE_ENV);
    const url = process.env.NODE_ENV === "development" ? "http://localhost:53317/" : "";
    try {
      const { data } = await axios.get(url + "api/movies");
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const renderMovies = async () => {
    {
      const moviesFromApi = await getMovies();
      setMovies(moviesFromApi);
    }
  };

  useEffect(() => renderMovies(), []);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          <div>
            <span>rating: {movie.rating}</span> <span>length: {movie.length} minutes</span>
          </div>
          <div>
            genres:{" "}
            {movie.genre.map((g) => (
              <span key={g}>{g}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
