import React from "react";
import { FaRegBookmark, FaRegFileLines } from "react-icons/fa6";
import { MdFileDownload, MdOutlineFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Card = ({ data }) => {
  //destructuring data
  return (
    <div className=" relative flex-shrink-0  w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white py-8 px-7 overflow-hidden">
      <FaRegFileLines />
      <p className=" text-sm leading-tight mt-5 font-semibold ">{data.desc}</p>
      <div className="footer absolute  bottom-0 w-full  left-0 ">
        <div className="flex justify-between items-center py-3 px-8 mb-2">
          <h5>{data.filesize}</h5>
          <span className=" w-7 h-7 bg-zinc-600 rounded-full items-center justify-center flex">
            {data.close ? (
              <IoMdClose />
            ) : (
              <MdOutlineFileDownload size=".9em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 bg-${data.tag.tagColor}-600 flex items-center justify-center`}
          >
            <h3 className=" text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
