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

  const deleteFromList = (index) => setCheckboxes(checkboxes.filter((cb, i) => i !== index));

  return (
    <div>
      <Btn onClick={resetList} disabled={false} value="reset the list" />
      <ul>
        {checkboxes.map((cb, index) => {
          return (
            <li>
              <label htmlFor={cb.name}>
                {cb.name}{" "}
                <input type="checkbox" name={cb.name} id={cb.name} onChange={() => toggleCheckbox(cb.name)} checked={cb.checked} />
              </label>
              <Btn onClick={() => deleteFromList(index)} disabled={!cb.checked} value="delete" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
