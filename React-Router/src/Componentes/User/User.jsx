import React from "react";
import { useParams } from "react-router-dom";
const User = () => {
  const { userid } = useParams();
  return (
    <div>
      <h1
        className=" bg-zinc-400
       text-white p-5 flex justify-center font-serif font-semibold "
      >
        User : {userid}
      </h1>
    </div>
  );
};

export default User;
