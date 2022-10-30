import React, {useEffect, useState} from 'react'
import { useTheme } from 'next-themes'
import Metatags from "../components/Metatages";
import NavBarLoggedIn from '../components/NavBarLoggedIn';
import SearchBar from "../components/SearchBar";
import DropDownMenu from "../components/DropDownMenu";

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

  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div>
      {/* Meta tags (for SEO purposes) */}
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
        <div className='flex items-center space-x-5 mt-5 ml-1'>
          <DropDownMenu title="Date Applied" />
          <DropDownMenu title="Status" />          
        </div>
      </section>

      {/* Jobs */}
      <section className='flex flex-col mt-10 space-y-6 mb-32'>
        {jobsData && jobsData.map((eachJob, idx) => (
          <div key={idx} className='bg-white shadow-lg rounded-lg w-[90%] lg:w-[65%] h-[200px] mx-auto'>
            <div>

            </div>
          </div>
        ))}
      </section>

    </div>
  )
}
