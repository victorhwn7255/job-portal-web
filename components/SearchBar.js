import React from "react";
import { GoSearch } from "react-icons/go";

export default function SearchBar() {
  return (
    <div className="flex items-center relative w-[100%] mx-auto lg:mx-0 md:w-[96%] lg:w-[60%] xl:w-[50%]">
      <input
        className="w-full bg-lightGray dark:text-textDark text-xs md:text-sm py-[10px] px-6 rounded-3xl outline-none focus:shadow-inner focus:bg-grayClassic50"
        placeholder="Search jobs by title, industry, location"
      />

      <button className="flex justify-center items-center bg-lightBlue hover:bg-darkerBlue duration-200 rounded-3xl px-4 py-[6px] text-white space-x-1 absolute right-1">
        <GoSearch size={15} />
        <p className="text-xs md:text-sm font-light">Search</p>
      </button>
    </div>
  );
}
