import { React, useState, useEffect } from "react";
import Joke from "./components/Joke/Joke.component";
import Btn from "./components/Btn/Btn.component";
import ChuckApi from "./api/Chuck.api";
import "./App.css";

export default function App() {
  let [category, setCategory] = useState("");
  let [btns, setBtns] = useState([]);
  let [shouldJokeUpdate, setShouldJokeUpdate] = useState(false);

  const btnsHandler = (event) => {
    setCategory(event.target.value);
    setShouldJokeUpdate(true);
  };

  useEffect(() => setShouldJokeUpdate(false), [shouldJokeUpdate]);

  const createBtnCategories = async () => {
    const categories = (await ChuckApi("categories")).data;
    const categoryBtns = categories.map((item) => ({ value: item, btnText: item }));
    categoryBtns.unshift({ value: "", btnText: "random" });
    setBtns(categoryBtns);
  };

  const drawBtns = () => {
    return btns.map((btn) => <Btn key={btn.btnText} handleBtnClick={btnsHandler} btnText={btn.btnText} value={btn.value} />);
  };

  useEffect(() => createBtnCategories(), []);
  useEffect(drawBtns, [btns]);

  return (
    <div>
      <Joke category={category} shouldJokeUpdate={shouldJokeUpdate} />
      {drawBtns()}
    </div>
  );
}
