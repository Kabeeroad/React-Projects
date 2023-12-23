import React from "react";
import Cards from "./Cards";

const Foreground = () => {
  const data = [
    {
      Dsec: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, quis!",
      filesize: ".9mb",
      icone: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
  ];
  return (
    <div className="z-[3] fixed top-0 left-0  w-full h-full flex gap-8">
      <Cards />
    </div>
  );
};

export default Foreground;
