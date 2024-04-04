import React from "react";
import ComponentC from "./ComponentC";
import ComponentA from "./ComponentA";

const ComponentB = () => {
  return (
    <div className="A">
      ComponentB
      <ComponentA />
    </div>
  );
};

export default ComponentB;
