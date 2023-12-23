import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const Cards = (data) => {
  return (
    <div className=" relative flex-shrink-0  w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white py-8 px-7 overflow-hidden">
      <FaRegFileLines />
      <p className="text-sm leading-tight mt-5 font-semibold ">{data.Dsec}</p>
      <div className="footer absolute  bottom-0 w-full  left-0 ">
        <h5 className="flex  justify-center items-center font-bold"></h5>
        <div className="flex justify-between items-center py-3 px-8 mb-2">
          <h5>{data.filesize}</h5>
          <h4 className="bg-white rounded-full w-7 h-7 flex items-center justify-center text-zinc-600">
            <IoMdClose />
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Cards;
