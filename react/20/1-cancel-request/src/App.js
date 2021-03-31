import { React, useState, useEffect } from "react";
import axios from "axios";

import Btn from "./components/Btn.component";
import Joke from "./components/Joke.component";

import "./App.css";

function App() {
  let [joke, setJoke] = useState("");
  let [fetch, setFetch] = useState(false);

  useEffect(() => {
    let source = axios.CancelToken.source();
    const fetchJoke = async () => {
      if (fetch) {
        console.log("fetching");
        const fetchedJoke = (await axios.get(`https://api.chucknorris.io/jokes/random`, { cancelToken: source.token })).data.value;
        setJoke(fetchedJoke);
      } else {
        setJoke("");
      }
    };
    fetchJoke();
    return () => source.cancel();
  }, [fetch]);

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
