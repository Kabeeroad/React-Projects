import React from "react";
import { FaRegBookmark, FaRegFileLines } from "react-icons/fa6";
import { MdFileDownload, MdOutlineFileDownload } from "react-icons/md";

const Card = () => {
  return (
    <div className=" relative  w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white py-8 px-7 overflow-hidden">
      <FaRegFileLines />
      <p className=" text-sm leading-tight mt-5 font-semibold ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        facere officia dicta!
      </p>
      <div className="footer absolute  bottom-0 w-full  left-0 ">
        <div className="flex justify-between items-center py-3 px-8 mb-2">
          <h5>.4mb</h5>
          <span className=" w-7 h-7 bg-zinc-600 rounded-full items-center justify-center flex">
            <MdOutlineFileDownload size=".9em" color="#fff" />
          </span>
        </div>
        <div className=" tag w-full py-4 bg-green-600 flex items-center justify-center">
          <h3 className=" text-sm font-semibold">Download Now</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
