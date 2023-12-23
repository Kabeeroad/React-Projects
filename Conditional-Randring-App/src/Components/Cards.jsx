import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";

const Cards = ({ data }) => {
  return (
    <div className=" relative   w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white py-8 px-7 overflow-hidden shrink-0">
      <FaRegFileLines />
      <p className="text-sm leading-tight mt-5 font-semibold ">{data.Dsec}</p>
      <div className="footer absolute  bottom-0 w-full  left-0 ">
        <div className="flex justify-between items-center py-3 px-8 mb-3">
          <h5>{data.filesize}</h5>
          <h4 className="bg-white rounded-full w-7 h-7 flex items-center justify-center text-zinc-600">
            {data.tag.isOpen ? <IoMdClose /> : <MdOutlineFileDownload />}
          </h4>
        </div>
        {data.tag.isOpen && (
          <div className="tag w-full py-4 bg-green-600 flex items-center justify-center">
            <h5 className="text-sm font-semibold">Download Now</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
