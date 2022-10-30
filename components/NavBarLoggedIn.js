import React, { useEffect, useState } from "react";
import { HiOfficeBuilding } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaUser } from "react-icons/fa";

export default function NavBarLoggedIn({ toggleTheme, theme }) {
  const [showHamMenu, setShowHamMenu] = useState(false);

  const router = useRouter();
  const currentPage = router.pathname;

  const handleChange = () => {
    setShowHamMenu((current) => !current);
  };

  return (
    <nav className="w-full px-3 md:px-6 py-6 flex-row border-b shadow-md bg-white dark:bg-backgroundDark dark:border-slate-800">
      <div className="container flex justify-between items-center mx-auto">
        {/* left */}
        <Link href="/" className="flex items-center space-x-2 group">
          <HiOfficeBuilding
            size={33}
            className="text-lightBlue dark:text-grayClassic50 ring-2 rounded-full ring-lightBlue p-[6px] group-hover:scale-95 group-hover:text-white group-hover:ring-blue-800 group-hover:bg-blue-800 duration-200"
          />
          <h3 className="text-lightBlue dark:text-grayClassic50 font-semibold text-base md:text-lg group-hover:text-blue-800 dark:group-hover:text-grayClassic50 duration-200">
            Quick Jobs
          </h3>
        </Link>

        {/* right */}
        <div className="flex items-center space-x-3 md:space-x-4 lg:space-x-6 relative">
          {/* dark mode toggle button */}
          <div className="flex items-center mr-3 absolute right-[3rem] sm:right-0 sm:relative">
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox"
              onChange={toggleTheme}
            />
            <label
              htmlFor="checkbox"
              className="flex justify-between items-center w-[34px] h-[18px] bg-black rounded-2xl p-1 relative label cursor-pointer group"
            >
              <i className="fas fa-sun group-hover:brightness-125 duration-200" />
              <i className="fas fa-moon group-hover:brightness-125 duration-200" />
              <div className="w-[14px] h-[14px] absolute bg-grayClassic50 rounded-full ball" />
            </label>
          </div>
          {/* nav menu items */}
          <nav className="md:flex items-center space-x-6 hidden">
            {/* two links */}
            <div className="flex items-center space-x-3">
              <Link href="/browse">
                <p
                  className={`${
                    currentPage === "/browse"
                      ? "activeNavTab"
                      : "nonActiveNavTab"
                  }`}
                >
                  Browse Jobs
                </p>
              </Link>
              <Link href="/applied">
                <p
                  className={`${
                    currentPage === "/applied"
                      ? "activeNavTab"
                      : "nonActiveNavTab"
                  }`}
                >
                  Applied Jobs
                </p>
              </Link>
            </div>
            {/* user */}
            <Link
              href="/userProfile"
              className="flex items-center space-x-2 group"
            >
              <FaUser
                size={30}
                className="text-lightBlue dark:text-grayClassic50 ring-2 rounded-full ring-lightBlue p-[6px] group-hover:scale-95 group-hover:text-white group-hover:ring-blue-800 group-hover:bg-blue-800 duration-200"
              />
              <p className=" text-grayClassic600 dark:text-gray-50 group-hover:text-blue-800 dark:group-hover:text-white duration-200 lg:block hidden">
                Jonathan Doe
              </p>
            </Link>
          </nav>

          {/* Hamburger Button */}
          <label htmlFor="check" className="bar ml-0 block md:hidden">
            <input
              id="check"
              type="checkbox"
              value={showHamMenu}
              onChange={handleChange}
            />
            <span className="top bg-black dark:bg-grayClassic50"></span>
            <span className="middle bg-black dark:bg-grayClassic50"></span>
            <span className="bottom bg-black dark:bg-grayClassic50"></span>
          </label>

          {/* Ham Menu */}
          {showHamMenu && (
            <div className="absolute bg-white dark:bg-slate-900 h-[150px] w-[250px] rounded-xl top-[4rem] -right-3 z-50 p-3 flex flex-col justify-around items-center shadow-xl">
              <Link
                href="/browse"
                className="bg-lightGray text-textDark w-[90%] py-3 rounded-xl flex justify-center items-center"
              >
                <p>Browse Jobs</p>
              </Link>
              <Link
                href="/applied"
                className="bg-lightBlue text-grayClassic50 w-[90%] py-3 rounded-xl flex justify-center items-center"
              >
                <p>Applied Jobs</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
