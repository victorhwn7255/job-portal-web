import React, { useRef, useState } from "react";
import { VscTriangleDown } from "react-icons/vsc";

export default function DropDownMenu({ title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex items-center justify-between md:justify-around min-w-[100%] md:min-w-[160px] bg-lightGray rounded-md px-5 md:px-2 py-[6px] text-xs md:text-sm font-light text-grayClassic600 cursor-pointer relative mx-auto lg:mx-0 hover:bg-blue-100 dark:hover:bg-white hover:brightness-110 duration-200"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <p>{title}</p>
      <VscTriangleDown
        className={`transition-all duration-300 ${isOpen ? "rotate-180" : ""}`}
      />

      {isOpen && (
        <div className="absolute top-8 md:top-9 left-0 w-full h-[200px] bg-lightGray rounded-md z-50 flex flex-col justify-around items-center py-2 px-3">
          {["Option 1", "Option 2", "Option 3", "Option 4"].map(
            (eachOption) => (
              <p
                key={eachOption}
                className="text-grayClassic600 text-xs hover:bg-gray-50 hover:font-semibold px-10 py-2 rounded-lg duration-100"
              >
                {eachOption}
              </p>
            )
          )}
        </div>
      )}
    </div>
  );
}
