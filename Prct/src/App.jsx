import { useState } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contect from "./Pages/Contect";
import Navbar from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <h1>Hello Wellcom react-router-dom 🚀🚀🚀</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contect />} />
      </Routes>
    </div>
  );
}

export default App;
