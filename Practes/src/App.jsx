import React from "react";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
// import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <h1>hello</h1>
      {/* // outlet mutlab page se jo contan load hokar arha he wo
      kahhhan shoow hoga */}
      <Footer />
    </div>
  );
};

export default App;
