import { useEffect, useState } from "react";
import { HiOfficeBuilding } from "react-icons/hi";
import { BsStack } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";

export default function JobListing() {
  const [selectedJob, setSelectedJob] = useState(0);
  const [jobsData, setJobsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/jobs");
      const data = await response.json();
      setJobsData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center lg:space-x-5 mx-3 sm:mx-5 lg:mx-0">
      {/* LEFT Side */}
      <div className="w-full lg:w-[30%] space-y-5">
        {jobsData &&
          jobsData.map((eachJob) => (
            <div key={eachJob.id} onClick={() => setSelectedJob(eachJob.id)}>
              <div
                className={`${
                  selectedJob === eachJob.id
                    ? "bg-slate-100 shadow-lg dark:bg-slate-900 dark:brightness-110"
                    : "shadow-sm border border-lightGray dark:bg-bgDark3 "
                } flex justify-center items-start space-x-3 md:space-x-10 lg:space-x-4 xl:space-x-5 rounded-xl pl-3 pr-5 py-5 cursor-pointer hover:shadow-lg hover:brightness-105 dark:hover:brightness-125 duration-200 dark:border-none`}
              >
                <div
                  className={`${
                    selectedJob === eachJob.id
                      ? "bg-lightBlue text-grayClassic50"
                      : "bg-gray-200 text-slate-500"
                  }  rounded-lg w-[85px] h-[85px] xl:w-[90px] xl:h-[90px] flex justify-center items-center`}
                >
                  <HiOfficeBuilding size={39} />
                </div>
                <div className="w-[85%] md:w-[65%] lg:w-[75%]">
                  <h3 className="font-semibold text-sm">{eachJob.title}</h3>
                  <p className=" font-light text-sm">{eachJob.company}</p>
                  <div className="flex items-center text-grayClassic700 dark:text-grayClassic400 space-x-6 mt-[12px]">
                    <div className="flex items-center space-x-1">
                      <BsStack size={15} />
                      <p className="text-xs">{eachJob.experience}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <AiFillDollarCircle size={15} />
                      <p className="text-xs">{eachJob.salary}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-grayClassic700 dark:text-grayClassic400 mt-[12px]">
                    <div className="flex items-center space-x-1">
                      <MdLocationOn size={15} />
                      <p className="text-xs">{eachJob.location}</p>
                    </div>
                    <p className="text-xs">{eachJob.postedTime}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* RIGHT Side */}
      <div className="lg:w-[70%] w-full bg-white dark:bg-slate-900 dark:brightness-110 shadow-lg rounded-xl border border-lightGray dark:border-slate-900 min-h-[750px] mt-6 lg:mt-0 px-3 pt-3 pb-10 md:p-9">
        {/* top */}
        <div className="flex items-start justify-between">
          <div className="bg-lightBlue text-grayClassic50 rounded-lg w-[95px] h-[95px] flex justify-center items-center">
            <HiOfficeBuilding size={39} />
          </div>
          <Link href="/login" className="smBlueBtn w-[100px] dark:hover:bg-slate-900">
            <p>Apply</p>
          </Link>
        </div>
        {/* middle */}
        <div className="text-grayClassic600 dark:text-gray-200 mt-9">
          {/* title company time applicants */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-textDark dark:text-white font-semibold text-base md:text-lg">
                {jobsData[selectedJob]?.title}
              </h3>
              <p className="text-grayClassic800 dark:text-grayClassic50 font-light text-sm md:text-base">
                {jobsData[selectedJob]?.company}
              </p>
            </div>
            <div className="text-end">
              <h3 className="text-xs md:text-sm">
                {jobsData[selectedJob]?.postedTime}
              </h3>
              <div className="flex items-center space-x-2">
                <div className=" relative h-[0.9rem] w-[0.9rem] my-auto ml-1">
                  <div className="h-full w-full absolute top-0 left-0 bg-[#2dbf00] rounded-full animate-ping"></div>
                  <div className="h-full w-full absolute top-0 left-0 bg-[#2dbf00] rounded-full"></div>
                </div>
                <p className="text-xs md:text-sm">
                  {jobsData[selectedJob]?.applicants} applicants
                </p>
              </div>
            </div>
          </div>
          {/* location */}
          <div className="flex items-center space-x-1 mt-3 text-grayClassic700 dark:text-gray-200">
            <MdLocationOn size={18} />
            <p className="text-xs md:text-sm">
              {jobsData[selectedJob]?.location}
            </p>
          </div>
          {/* experience salary */}
          <div className="flex items-center text-grayClassic700 dark:text-gray-200 space-x-12 mt-8">
            <div className="flex items-center space-x-1">
              <BsStack size={18} />
              <p className="text-xs md:text-sm">
                {jobsData[selectedJob]?.experience}
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <AiFillDollarCircle size={18} />
              <p className="text-xs md:text-sm">
                {jobsData[selectedJob]?.salary} monthly
              </p>
            </div>
          </div>
          {/* description */}
          <div className="space-y-3 mt-9">
            <h3 className="text-textDark dark:text-grayClassic50 font-semibold">Job Description</h3>
            <p className="text-xs md:text-sm font-light">{jobsData[selectedJob]?.discription1}</p>
            <p className="text-xs md:text-sm font-light">{jobsData[selectedJob]?.discription2}</p>
          </div>
          {/* skills */}
          <div className="space-y-5 mt-9">
            <h3 className="text-textDark dark:text-grayClassic50 font-semibold">Skills</h3>
            <div className="flex items-center space-x-3 flex-wrap space-y-1 md:space-y-0">
              {jobsData[selectedJob]?.skills.map((eachSkill) => (
                <div key={eachSkill} className="bg-gray-200 rounded-lg shadow-sm py-2 px-5 text-grayClassic800">
                  <p className="text-sm">{eachSkill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
