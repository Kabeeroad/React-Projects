import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <h1>Hey Developer 👋</h1>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
