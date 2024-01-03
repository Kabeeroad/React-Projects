import React from "react";
import Header from "./Componentes/Header/Header";
import Footer from "./Componentes/Footer/Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
