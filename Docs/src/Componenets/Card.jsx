import React from "react";
import { FaRegBookmark, FaRegFileLines } from "react-icons/fa6";

const Card = () => {
  return (
    <div className=" relative  w-60 h-72 bg-zinc-900/90 rounded-[20px] text-white p-5 overflow-hidden">
      <FaRegFileLines />
      <p className=" text-sm leading-tight mt-5 font-semibold ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        facere officia dicta!
      </p>
      <div className="footer absolute  bottom-0 bg-sky-200 w-full h-20 left-0 "></div>
    </div>
  );
};

export default Card;
