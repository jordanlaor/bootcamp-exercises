import Checkbox from "./components/Checkbox.component";
import "./App.css";

function App() {
  return (
    <div>
      <Checkbox>I read the terms of the app</Checkbox>
      <Checkbox>I accept the terms of the app</Checkbox>
      <Checkbox isChecked={true}>I want to get the weekly news letter</Checkbox>
      <Checkbox isChecked={true}>I want to get sales and offers</Checkbox>
    </div>
  );
}

export default App;
