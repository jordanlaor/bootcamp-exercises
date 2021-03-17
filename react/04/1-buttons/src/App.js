import "./App.css";
import Button from "./Components/Button/Button.component";

function App() {
  return (
    <div>
      <Button text="Important" className="important"></Button>
      <Button text="Not Important" className=""></Button>
    </div>
  );
}

export default App;
