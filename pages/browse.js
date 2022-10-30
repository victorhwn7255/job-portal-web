import React, { useState } from "react";
import { useTheme } from "next-themes";
import Metatags from "../components/Metatages";
import NavBarLoggedIn from "../components/NavBarLoggedIn";
import { HiOfficeBuilding } from "react-icons/hi";
import { BsStack } from "react-icons/bs";
import { AiFillDollarCircle, AiFillCheckCircle } from "react-icons/ai";
import { MdLocationOn, MdDelete } from "react-icons/md";
import Select from "react-select";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

export default function BrowseJobsPage() {
  const [selectedSkills, setSeletedSkills] = useState([]);
  const [resume, setResume] = useState("");
  const [resumeUpdateDate, setResumeUpdateDate] = useState("");
  const [qualificationType, setqualificationType] = useState(null);
  const [yearAttained, setyearAttained] = useState(null);
  const [schoolName, setschoolName] = useState("");
  const [qualificationName, setqualificationName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const { theme, setTheme } = useTheme();

  const router = useRouter();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const education = [
    { value: "diplomas", label: "Diplomas" },
    { value: "bachelors", label: "Bachelors" },
    { value: "masters", label: "Masters" },
  ];

  const employmentTypes = [
    { value: "parttime", label: "Part Time" },
    { value: "fulltime", label: "Full Time" },
    { value: "internship", label: "Internship" },
  ];

  const skills = ["HTML", "CSS", "JavaScript", "React", "Github", "API"];

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;

  const handleSubmit = async (e) => {
    e.preventDefault();

    //UPDATE THE USER DATA FOR THE USER PROFILE
    const newApplication = {
      name: "Johnathan Doe",
      resume: resume,
      resumeUpdateDate: resumeUpdateDate,
      qualificationType: qualificationType,
      yearAttained: yearAttained,
      schoolName: schoolName,
      qualificationName: qualificationName,
      companyName: companyName,
      jobTitle: jobTitle,
      employmentType: employmentType,
      startDate: startDate,
      endDate: endDate,
    };

    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ newApplication }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("User Data: ", data);

    //ADD THIS JOB TO THE "APPLIED JOBS" PAGE
    const newAppliedJob = {
      title: "Front End Developer",
      companyName: "Company A",
      experience: "0-2 years",
      salary: "$4,500 - $7,000",
      location: "Singapore, Singapore",
      submission: "2 weeks ago",
      status: "In Progress",
    };

    const newAppliedJobResponse = await fetch("/api/applied", {
      method: "POST",
      body: JSON.stringify({ newAppliedJob }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const appliedJobData = await newAppliedJobResponse.json();
    console.log("New Applied Job Data: ", appliedJobData);

    router.push("/applied");

    toast.success("Thanks for your Application!");
  };

  return (
    <div>
      {/* Meta tags (for SEO purposes) */}
      <Metatags title="Browse & Apply Jobs" />

      {/* Navbar Header */}
      <header>
        <NavBarLoggedIn toggleTheme={toggleTheme} theme={theme} />
      </header>

      {/* Job Banner */}
      <section className="w-full h-[260px] bg-slate-100 flex items-center justify-center">
        <div className="flex flex-col justify-center items-start w-[90%] lg:w-[65%] px-3">
          <div className="flex items-center space-x-6">
            <div className="bg-lightBlue text-grayClassic50 rounded-lg w-[95px] h-[95px] flex justify-center items-center">
              <HiOfficeBuilding size={39} />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <p className="text-xs md:text-sm text-grayClassic600">
                Application for
              </p>
              <h2 className="text-base md:text-lg font-semibold">
                Front End Developer
              </h2>
              <p className=" text-grayClassic700">Company A</p>
            </div>
          </div>
          <div className="flex items-center space-x-5 md:space-x-14 text-grayClassic600 mt-10">
            <div className="flex items-center space-x-1">
              <MdLocationOn size={15} />
              <p className="text-xs md:text-sm">Singapore, Singapore</p>
            </div>
            <div className="flex items-center space-x-2">
              <BsStack size={15} />
              <p className="text-xs md:text-sm">0-2 years</p>
            </div>
            <div className="flex items-center space-x-1">
              <AiFillDollarCircle size={15} />
              <p className="text-xs md:text-sm">$4,500 - $7,000 monthly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="w-full flex items-center justify-center pb-20">
        <form
          className="flex flex-col justify-center w-[90%] sm:w-[85%] lg:w-[65%] mt-16"
          onSubmit={handleSubmit}
        >
          {/* resume */}
          <div className="w-full px-9 py-12 bg-white shadow-lg rounded-xl border border-lightGray flex flex-col">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start space-y-2">
                <div className="flex space-x-1">
                  <h3 className="formTitle">Resume</h3>
                  <p className="text-red-500">*</p>
                </div>
                <p className="text-xs md:text-base font-light text-grayClassic700">
                  Include one resume with your application
                </p>
              </div>
              <div className="uploadFile">
                <button className="uploadBtn flex items-center space-x-2">
                  <span className="fa fa-upload"></span>
                  <p>Upload</p>
                  <input
                    type="file"
                    required
                    value={resume}
                    onChange={(e) => {
                      setResume(e.target.value);
                      setResumeUpdateDate(resumeUpdateDate);
                    }}
                  />
                </button>
              </div>
            </div>
            {resume && (
              <div className="w-[100%] bg-grayClassic100 h-[70px] rounded-xl mt-8 px-6 py-4 flex items-center justify-between">
                <div className="flex flex-col items-start space-y-1 overflow-hidden">
                  <p className="text-sm font-medium">{resume}</p>
                  <p className="text-xs font-light text-grayClassic700">
                    updated on {today}
                  </p>
                </div>
                <button onClick={() => setResume("")}>
                  <MdDelete
                    size={25}
                    className="text-grayClassic700 hover:text-red-500 duration-200"
                  />
                </button>
              </div>
            )}
          </div>

          {/* Education */}
          <div className="w-full px-9 py-12 pb-20 bg-white shadow-lg rounded-xl border border-lightGray flex flex-col items-start mt-12">
            <div className="flex flex-col items-start space-y-2">
              <h3 className="formTitle">Education</h3>
              <p className="text-xs md:text-base font-light text-grayClassic700">
                Select your highest qualification
              </p>
            </div>
            <div className="flex flex-col lg:flex-row items-start justify-start space-x-0 space-y-10 lg:space-y-0 lg:space-x-3 mt-8">
              {/* col 1 */}
              <div className="w-[450px] space-y-10">
                {/* qualification */}
                <div className="flex flex-col justify-start space-y-3 w-[60%] md:w-[90%] cursor-pointer">
                  <label className="text-grayClassic700 font-medium text-sm md:text-base">
                    Qualification Type
                  </label>
                  <Select
                    options={education}
                    onChange={(option) => {
                      setqualificationType(option.label);
                    }}
                  />
                </div>
                {/* name of school */}
                <div className="flex flex-col justify-start space-y-3 w-[60%] md:w-[90%]">
                  <label
                    htmlFor="school"
                    className="text-grayClassic700 font-medium text-sm md:text-base"
                  >
                    Name of School
                  </label>
                  <input
                    type="text"
                    placeholder="Enter name of school"
                    className="bg-grayClassic100 py-1 px-5 rounded-lg h-[39px] text-sm font-light outline-none focus:bg-gray-50 focus:shadow-inner duration-200"
                    id="school"
                    value={schoolName}
                    onChange={(e) => {
                      setschoolName(e.target.value);
                    }}
                  />
                </div>
              </div>
              {/* col 2 */}
              <div className="w-[450px] space-y-10">
                {/* year attained */}
                <div className="flex flex-col justify-start space-y-3">
                  <label
                    htmlFor="attainedyear"
                    className="text-grayClassic700 font-medium text-sm md:text-base"
                  >
                    Year Attained
                  </label>
                  <input
                    type="text"
                    placeholder="YYYY"
                    className="bg-grayClassic100 py-1 px-3 rounded-lg h-[36px] w-[120px] text-sm font-light text-center outline-none focus:bg-gray-50 focus:shadow-inner duration-200"
                    id="attainedyear"
                    value={yearAttained}
                    onChange={(e) => {
                      setyearAttained(e.target.value);
                    }}
                  />
                </div>
                {/* qualification name */}
                <div className="flex flex-col justify-start space-y-3 w-[60%] md:w-[90%]">
                  <label
                    htmlFor="qualification"
                    className="text-grayClassic700 font-medium text-sm md:text-base"
                  >
                    Qualification Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter name of qualification"
                    className="bg-grayClassic100 py-1 px-5 rounded-lg h-[39px] text-sm font-light outline-none focus:bg-gray-50 focus:shadow-inner duration-200"
                    id="qualification"
                    value={qualificationName}
                    onChange={(e) => {
                      setqualificationName(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="w-full px-9 py-12 pb-20 bg-white shadow-lg rounded-xl border border-lightGray flex flex-col items-start mt-12">
            <div className="flex flex-col items-start space-y-2">
              <h3 className="formTitle">Work Experience</h3>
              <p className="text-xs md:text-base font-light text-grayClassic700">
                Share your relevant work experience
              </p>
            </div>
            <div className="flex flex-col lg:flex-row items-start justify-start space-x-0 space-y-10 lg:space-y-0 lg:space-x-3 mt-8">
              {/* col 1 */}
              <div className="w-[450px] space-y-10">
                {/* company name */}
                <div className="flex flex-col justify-start space-y-3 w-[60%] md:w-[90%]">
                  <label
                    id="companyname"
                    className="text-grayClassic700 font-medium text-sm md:text-base"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter company name"
                    className="bg-grayClassic100 py-1 px-5 rounded-lg h-[39px] text-sm font-light outline-none focus:bg-gray-50 focus:shadow-inner duration-200"
                    id="companyname"
                    value={companyName}
                    onChange={(e) => {
                      setCompanyName(e.target.value);
                    }}
                  />
                </div>
                {/* employment type */}
                <div className="flex flex-col justify-start space-y-3 w-[60%] md:w-[90%]">
                  <label
                    htmlFor="school"
                    className="text-grayClassic700 font-medium text-sm md:text-base"
                  >
                    Employment Type
                  </label>
                  <Select
                    options={employmentTypes}
                    onChange={(option) => {
                      setEmploymentType(option.label);
                    }}
                  />
                </div>
              </div>
              {/* col 2 */}
              <div className="w-[450px] space-y-10">
                {/* job title */}
                <div className="flex flex-col justify-start space-y-3 w-[60%] md:w-[90%]">
                  <label
                    htmlFor="jobtitle"
                    className="text-grayClassic700 font-medium text-sm md:text-base"
                  >
                    Job Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter job title"
                    className="bg-grayClassic100 py-1 px-5 rounded-lg h-[39px] text-sm font-light outline-none focus:bg-gray-50 focus:shadow-inner duration-200"
                    id="jobtitle"
                    value={jobTitle}
                    onChange={(e) => {
                      setJobTitle(e.target.value);
                    }}
                  />
                </div>
                {/* employment period */}
                <div className="flex flex-col justify-start space-y-3">
                  <label className="text-grayClassic700 font-medium text-sm md:text-base">
                    Employment Period
                  </label>
                  <div className="flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-3 space-y-3 md:space-y-0">
                    <input
                      type="date"
                      className="bg-grayClassic100 px-5 cursor-pointer text-grayClassic400 py-2 rounded-lg text-sm outline-none w-[60%] md:w-[40%]"
                      id="startdate"
                      value={startDate}
                      onChange={(e) => {
                        setStartDate(e.target.value);
                      }}
                    />
                    <p className="text-grayClassic500 hidden md:block"> - </p>
                    <input
                      type="date"
                      className="bg-grayClassic100 px-5 cursor-pointer text-grayClassic400 py-2 rounded-lg text-sm outline-none w-[60%] md:w-[40%]"
                      id="enddate"
                      value={endDate}
                      onChange={(e) => {
                        setEndDate(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* optional */}
            <label className="text-grayClassic700 font-medium mt-10 text-sm md:text-base">
              Workd Description (optional)
            </label>
            <textarea
              className="bg-grayClassic100 w-[100%] md:w-[90%] mt-3 rounded-lg text-sm px-6 py-4 outline-none focus:bg-gray-50 focus:shadow-inner duration-200"
              placeholder="Enter work description"
              rows={6}
              maxLength="800"
            ></textarea>
          </div>

          {/* skills */}
          <div className="w-full px-9 py-12 bg-white shadow-lg rounded-xl border border-lightGray flex flex-col items-start mt-12">
            <div className="flex flex-col items-start space-y-2">
              <h3 className="formTitle">Skills</h3>
              <p className="text-xs md:text-base font-light text-grayClassic700">
                Add the skills you possess
              </p>
            </div>
            <div className="mt-5 flex items-center space-x-3 lg:space-x-5 flex-wrap space-y-2 lg:space-y-0 ">
              {skills.map((eachSkill, idx) => (
                <button
                  key={idx}
                  className={`${
                    selectedSkills.includes(eachSkill)
                      ? "bg-lightBlue text-grayClassic50 hover:bg-blue-800 dark:text-grayClassic50"
                      : "bg-grayClassic100 hover:bg-gray-200 dark:text-gray-800"
                  } px-5 py-2 rounded-xl duration-200 flex items-center space-x-1`}
                  onClick={() => {
                    if (!selectedSkills.includes(eachSkill)) {
                      setSeletedSkills([...selectedSkills, eachSkill]);
                    } else {
                      let index = selectedSkills.indexOf(eachSkill);
                      selectedSkills.splice(index, 1);
                      setSeletedSkills([...selectedSkills]);
                    }
                  }}
                  type="button"
                >
                  <span
                    className={`${
                      selectedSkills.includes(eachSkill) ? "block" : "hidden"
                    }`}
                  >
                    <AiFillCheckCircle />
                  </span>
                  <p>{eachSkill}</p>
                </button>
              ))}
            </div>
          </div>

          {/* button */}
          <button type="submit" className="smBlueBtn mt-12 w-[150px] mx-auto">
            <p>Submit</p>
          </button>
        </form>
      </section>
    </div>
  );
}
