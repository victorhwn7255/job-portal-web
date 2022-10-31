import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Metatags from "../components/Metatages";
import NavBarLoggedIn from "../components/NavBarLoggedIn";
import SearchBar from "../components/SearchBar";
import DropDownMenu from "../components/DropDownMenu";
import { BsStack } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import ColorIcon from "../components/ColorIcon";
import StatusButton from "../components/StatusButton";

export default function MyAppliedJobsPage() {
  const [jobsData, setJobsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/applied");
      const data = await response.json();
      setJobsData(data);
    };
    fetchData();
  }, []);

  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="w-screen">
      <Metatags title="My Applications" />

      {/* Navbar Header */}
      <header>
        <NavBarLoggedIn toggleTheme={toggleTheme} theme={theme} />
      </header>

      {/* Search Bar & Filters */}
      <section className="w-[90%] lg:w-[65%] mx-auto mt-10">
        {/* search bar */}
        <div className="">
          <SearchBar />
        </div>
        {/* filters */}
        <div className="flex items-start mt-3 ml-1 space-x-5 w-[40%] md:w-[55%] lg:w-full">
          <DropDownMenu title="Date Applied" />
          <DropDownMenu title="Status" />
        </div>
      </section>

      {/* Jobs */}
      <section className="flex flex-col mt-6 md:mt-10 space-y-6 pb-32">
        {jobsData &&
          jobsData.map((eachJob, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-bgDark2 shadow-lg rounded-lg w-[93%] lg:w-[65%] mx-auto"
            >
              <div className="px-3 py-3 md:px-6 md:py-6 flex items-start sm:items-center space-x-5">
                <ColorIcon status={eachJob.appliedJob?.status} />
                <div className="flex flex-col sm:flex-row items-start justify-between w-full">
                  {/* info */}
                  <div>
                    <h3 className="font-medium text-grayClassic700 dark:text-grayClassic50">
                      {eachJob.appliedJob?.title}
                    </h3>
                    <p className="text-sm font-light text-grayClassic700 dark:text-grayClassic300">
                      {eachJob.appliedJob?.companyName}
                    </p>
                    <div className="text-grayClassic700 dark:text-grayClassic300 flex items-center space-x-3 mt-3">
                      <div className="flex items-center space-x-1">
                        <BsStack size={15} />
                        <p className="text-xs">
                          {eachJob.appliedJob?.experience}
                        </p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <AiFillDollarCircle size={15} />
                        <p className="text-xs">{eachJob.appliedJob?.salary}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 mt-3 text-grayClassic700 dark:text-grayClassic300">
                      <MdLocationOn size={15} />
                      <p className="text-xs">{eachJob.appliedJob?.location}</p>
                    </div>
                  </div>
                  {/* button */}
                  <div className="w-full sm:w-[150px] sm:h-[100px] mt-6 sm:mt-0 space-x-5 flex items-center sm:flex-col sm:items-end justify-between">
                    <div className="font-light text-grayClassic700 dark:text-grayClassic300 text-sm sm:text-base">
                      {eachJob.appliedJob?.submission}
                    </div>
                    <StatusButton status={eachJob.appliedJob?.status} />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
}
