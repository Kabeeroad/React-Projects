import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion";

const Cards = ({ data }) => {
  return (
    <motion.div
      drag
      className=" relative   w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white py-8 px-7 overflow-hidden shrink-0"
    >
      <FaRegFileLines />
      <p className="text-sm leading-tight mt-5 font-semibold ">{data.Dsec}</p>
      <div className="footer absolute  bottom-0 w-full  left-0 ">
        <div className="flex justify-between items-center py-3 px-8 mb-3">
          <h5>{data.filesize}</h5>
          <h4 className=" bg-zinc-600 rounded-full flex items-center justify-cente text-white">
            {data.close ? <IoMdClose /> : <MdOutlineFileDownload />}
          </h4>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-green-600" : "bg-blue-600"
            } flex items-center justify-center`}
          >
            <h5 className="text-sm font-semibold">{data.tag.tagTitle}</h5>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Cards;
