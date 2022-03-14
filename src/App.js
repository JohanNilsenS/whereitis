import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/">Start</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Start />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
