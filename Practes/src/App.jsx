import React from "react";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
// import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Outlet } from "react-router-dom";
import Userinfo from "./Components/Userinfo";
import UseEffct from "./Components/UseEffct";
import DigitalClock from "./Components/DigitalClock";
import ComponentA from "./Components/ComponentA";

const App = (props) => {
  return (
    <div>
      <Nav />
      <Outlet />
      <hr />
      {/* // outlet mutlab page se jo contan load hokar arha he wo kahhhan shoow hoga */}
      {/* <Userinfo /> */}

      {/* <UseEffct /> */}
      {/* <DigitalClock /> */}
      <ComponentA />

      <Footer />
    </div>
  );
};

export default App;
