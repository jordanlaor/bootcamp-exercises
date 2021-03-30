import { React, useState, useEffect } from "react";
import axios from "axios";

import SearchField from "./components/SearchField.component";
import Btn from "./components/Btn.component";
import ResultsList from "./components/ResultsList.component";
import Spinner from "./components/Spinner.component";

import "./App.css";

function App() {
  let [searchTerm, setSearchTerm] = useState("hooks");
  let [searchValue, setSearchValue] = useState("hooks");
  let [errorMessage, setError] = useState("");
  let [isLoading, setIsLoading] = useState(false);

  const handleSearchFieldChange = (e) => {
    setSearchValue(e.target.value);
  };

  let [results, setResults] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get("https://hn.algolia.com/api/v1/search", {
          params: {
            query: searchTerm,
          },
        });
        setResults(data.hits.map((hit) => ({ title: hit.title, url: hit.url, id: hit.objectID })));
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetch();
  }, [searchTerm]);

  const search = () => {
    setSearchTerm(searchValue);
  };

  return (
    <div>
      <SearchField value={searchValue} onChange={handleSearchFieldChange} />
      <Btn value="Search" onClick={search} />
      {isLoading ? <Spinner /> : results.length ? <ResultsList results={results} /> : <div>{errorMessage}</div>}
    </div>
  );
}

export default App;
