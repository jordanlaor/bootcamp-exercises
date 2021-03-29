import logo from "./logo.svg";
import "./App.css";
import Text from "./components/Text.component";

function App() {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus odio nibh, volutpat at dictum nec, dictum vitae quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ac luctus arcu. Maecenas tincidunt libero nec enim interdum, in fermentum felis tempus. Vivamus et porttitor nisi, sed.";
  return <Text text={text} length={20} />;
}

export default App;
