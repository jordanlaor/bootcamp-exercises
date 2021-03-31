import { React, useState, useEffect } from "react";
import axios from "axios";

import Btn from "./components/Btn.component";
import Joke from "./components/Joke.component";

import "./App.css";

function App() {
  let [joke, setJoke] = useState("");
  let [fetch, setFetch] = useState(false);

  const fetchJoke = async () => {
    let source = axios.CancelToken.source();
    if (fetch) {
      const fetchedJoke = (await axios.get(`https://api.chucknorris.io/jokes/random`, { cancelToken: source.token })).data.value;
      setJoke(fetchedJoke);
    } else {
      setJoke("");
    }
    return () => {
      source.cancel("Cancelling in cleanup");
    };
  };

  useEffect(() => fetchJoke(), [fetch]);

  const toggleFetch = () => {
    setFetch(!fetch);
  };

  return (
    <div>
      <Btn onClick={toggleFetch}>{fetch ? "Disable" : "Enable"}</Btn>
      <Joke>{joke}</Joke>
    </div>
  );
}

export default App;
