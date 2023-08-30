"use client";
import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { BsMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBox = () => {
  const searchParam = useSearchParams();
  const router = useRouter();

  const searchTerm = searchParam.get("search");
  const [term, setTerm] = useState(searchTerm || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?search=${term.trim()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex border border-gray-200  rounded-full  shadow-lg px-6 py-3 ml-10 mr-5 items-center flex-grow max-w-3xl "
    >
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="  w-full focus:outline-none "
      />
      <RxCross1
        onClick={() => setTerm("")}
        className=" text-2xl text-gray-500 cursor-pointer sm:mr-2 "
      />
      <BsMicFill className=" hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 mr-3 border-gray-300  " />
      <AiOutlineSearch onClick={handleSubmit} className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer" />
    </form>
  );
};

export default SearchBox;
