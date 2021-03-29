import { React, useState } from "react";
import Btn from "./components/Btn.component";
import "./App.css";

function App() {
  const list = ["one", "two", "three", "four", "five"];
  const cbs = () =>
    list.map((cb) => {
      return { name: cb, checked: false };
    });
  let [checkboxes, setCheckboxes] = useState(cbs());

  const toggleCheckbox = (cbName) => {
    setCheckboxes(
      checkboxes.map((cb) => {
        if (cb.name === cbName) {
          return { name: cb.name, checked: !cb.checked };
        }
        return cb;
      })
    );
  };

  const resetList = () => setCheckboxes(cbs());

  const deleteFromList = () => setCheckboxes(checkboxes.filter((cb) => !cb.checked));

  return (
    <div>
      <Btn onClick={resetList} value="reset the list" />
      <Btn onClick={deleteFromList} value="delete" />

      <ul>
        {checkboxes.map((cb, index) => {
          return (
            <li>
              <label htmlFor={cb.name}>
                <input type="checkbox" name={cb.name} id={cb.name} onChange={() => toggleCheckbox(cb.name)} checked={cb.checked} />
                {cb.name}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
