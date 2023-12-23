import React from "react";
import Cards from "./Cards";

const Foreground = () => {
  const data = [
    {
      Dsec: "Lorem ipsum  consectetur adipisicing elit. Minus, quis!",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: false,
        tagtitle: "Upload Now",
        tagColor: "blue",
      },
    },
    {
      Dsec: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, quis!",
      filesize: ".9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "yello",
      },
    },
    {
      Dsec: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, quis!",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Upload Now",
        tagColor: "blue",
      },
    },
  ];

  return (
    <div className="z-[3] fixed top-0 left-0  w-full h-full flex gap-10 p-8 flex-wrap ">
      {data.map((item, index) => (
        <Cards data={item} />
      ))}
    </div>
  );
};

export default Foreground;
