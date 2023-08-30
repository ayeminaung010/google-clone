"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchHeaderOption = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParam = useSearchParams();
  const searchTerm = searchParam.get("search");
  const selectTab = (tab) => {
    router.push(
      `/search/${tab === "Images" ? "image" : "web"}?search=${searchTerm}`
    );
  };

  return (
    <div className=" flex space-x-2 select-none border-b-4 w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm">
      <div
        onClick={() => selectTab("All")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500  cursor-pointer pb-3 px-2 
      ${pathname === "/search/web" && "!text-blue-600  !border-blue-600 "}
      `}
      >
        <AiOutlineSearch className=" text-md " />
        <p>All</p>
      </div>
      <div
        onClick={() => selectTab("Images")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500  cursor-pointer pb-3 px-2 
      ${pathname === "/search/image" && "!text-blue-600  !border-blue-600 "}
      `}
      >
        <AiOutlineSearch className=" text-md " />
        <p>Images</p>
      </div>
    </div>
  );
};

export default SearchHeaderOption;
