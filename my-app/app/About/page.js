import React from "react";
import Header from "@/Components/Header";
const page = (props) => {
  return (
    <div>
      About
      <h2>Hello {props.user} </h2>
    </div>
  );
};

export default page;
