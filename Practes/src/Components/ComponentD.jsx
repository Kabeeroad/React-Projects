import React, { useContext } from "react";
import { UserContext } from "./ComponentA";
const ComponentD = () => {
  const user = useContext(UserContext); //argument pass
  return (
    <div className="A">
      <h1>ComponentD</h1>
      <h2>by{user}</h2>
    </div>
  );
};

export default ComponentD;
