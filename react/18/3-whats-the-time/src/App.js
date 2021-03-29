import { React, useState } from "react";
import Input from "./components/Input.component";
import "./App.css";

function App() {
  let [second, setSecond] = useState(0);
  let [minute, setMinute] = useState(0);
  let [hour, setHour] = useState(0);

  const handleSec = (e) => {
    const sec = Number(e.target.value);
    setSecond(sec);
    setMinute(sec / 60);
    setHour(sec / 360);
  };

  const handleMin = (e) => {
    const min = Number(e.target.value);
    setSecond(min * 60);
    setMinute(min);
    setHour(min / 60);
  };

  const handleHour = (e) => {
    const hour = Number(e.target.value);
    setSecond(hour * 360);
    setMinute(hour * 60);
    setHour(hour);
  };

  return (
    <div>
      <Input value={second} unit="second" onChange={handleSec} />
      <Input value={minute} unit="minute" onChange={handleMin} />
      <Input value={hour} unit="hour" onChange={handleHour} />
    </div>
  );
}

export default App;
