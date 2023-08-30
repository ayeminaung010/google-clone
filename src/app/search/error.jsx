"use client";
import React, { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log("Error : ", error);
  }, [error]);

  return (
    <div className=" flex justify-center items-center flex-col pt-10  " >
      <h1 className=" text-3xl  mb-4 ">Something went wrong!</h1>
      <button className=" text-blue-500 " onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
};

export default Error;
