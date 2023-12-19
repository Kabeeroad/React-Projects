"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="h-16 px-8 text-white bg-blue-700 flex items-center justify-between">
      <Link href={"/"}>back</Link>
      <div className="flex gap-8 ">
        <Link href="/Home">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/Serveces">Serveces</Link>
      </div>
    </div>
  );
};

export default Header;
