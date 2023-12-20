import React from "react";
import Background from "./Componenets/Background";
import Foreground from "./Componenets/Foreground";
import Card from "./Componenets/Card";

const App = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Background />
      <Foreground />
      <Card />
    </div>
  );
};

export default App;
