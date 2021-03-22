import { BrowserRouter, Route, Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <button>
        <Link to="/">Home Page</Link>
      </button>
      <button>
        <Link to="/products">Products</Link>
      </button>
    </div>
  );
}
