import axios from "axios";
import { React, useState, useEffect } from "react";
import "./App.css";

function App() {
  let [movie, setMovie] = useState({});
  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get("https://swapi.dev/api/films/1/");
      console.log(data);
      setMovie(data);
    };
    fetch();
  }, []);
  return (
    <div>
      <h1>{movie.title}</h1>
      <h4>{movie.director}</h4>
    </div>
  );
}

export default App;
