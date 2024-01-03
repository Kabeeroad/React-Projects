import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/kabeeroad")
  //       .then((Response) => Response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   });
  return (
    <div className=" text-center m-4 bg-gray-600 text-white  p-5 text-2xl">
      Github followers:{data.followers}
      <img width={300} src={data.avatar_url} alt="git-pic" />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const Response = await fetch("https://api.github.com/users/kabeeroad");
  return Response.json();
};
