import { React, useState, useEffect } from "react";

import countriesApi from "./apis/countries.api";
import FilteredCountries from "./components/FilteredCountries.component";
import SearchField from "./components/SearchField.component";

import "./App.css";

function App() {
  let [searchTerm, setSearchTerm] = useState("");
  const handleSearchFieldChange = (e) => {
    setSearchTerm(e.target.value);
  };

  let [countries, setCountries] = useState([]);
  let [filteredCountries, setFilteredCountries] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const { data } = await countriesApi.get();
      setCountries(data.map((country) => ({ name: country.name, id: country.alpha3Code })));
    };
    fetch();
  }, []);

  useEffect(() => {
    const filter = countries.filter((country) => country.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredCountries(filter.length ? filter : countries);
  }, [searchTerm, countries]);
  return (
    <div>
      <SearchField value={searchTerm} onChange={handleSearchFieldChange} />
      <FilteredCountries countries={filteredCountries} />
    </div>
  );
}

export default App;
