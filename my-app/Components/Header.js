import React from "react";
import Link from "next/link";
const Header = () => {
  // console.log(props);
  return (
    <div className="h-16 px-8 text-white bg-blue-700 flex items-center justify-between">
      {/* <h2>{props.user}</h2> */}
      <h2>logo</h2>
      <div className="flex gap-8 ">
        <Link href="/Home">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/Serveces">Serveces</Link>
        
      </div>
    </div>
  );
};

export default Header;
