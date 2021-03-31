import { React, useEffect, useRef, useState } from "react";
import Btn from "./components/Btn.component";
import Input from "./components/Input.component";
import "./App.css";

function App() {
  let [editMode, setEditMode] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [editMode]);

  return (
    <div>
      {editMode && <Input ref={inputRef} />}
      <Btn onClick={() => setEditMode((editMode) => !editMode)}>{editMode ? "save" : "edit"}</Btn>
    </div>
  );
}

export default App;
