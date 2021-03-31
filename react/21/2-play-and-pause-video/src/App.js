import { React, useEffect, useRef, useState } from "react";
import Video from "./components/video.component";
import Btn from "./components/Btn.component";
import "./App.css";

function App() {
  const videoRef = useRef(null);
  let [play, setPlay] = useState(false);
  useEffect(() => {
    if (play) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [play]);
  return (
    <div className="App">
      <Video ref={videoRef} src="small" />
      <Btn onClick={() => setPlay((play) => !play)}>{play ? <span>&#9208;</span> : <span>&#9654;</span>}</Btn>
    </div>
  );
}

export default App;
