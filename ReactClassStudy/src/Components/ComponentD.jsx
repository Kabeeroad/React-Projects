import React, { useContext } from "react";
import { UseContext } from "./ComponentA";

const ComponentD = () => {
  const user = useContext(UseContext);
  return (
    <div>
      <h1>ComponetD</h1>

      <h2>by{user}</h2>
    </div>
  );
};

export default ComponentD;
