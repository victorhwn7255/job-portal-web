import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image';
import Metatags from "../components/Metatages";
import NavBarLoggedIn from '../components/NavBarLoggedIn';
import { FaRegEdit } from 'react-icons/fa'
import { MdDelete, MdLocationOn } from "react-icons/md";
import { HiOfficeBuilding } from "react-icons/hi";
import profile from '../assets/profile.png';

export default function UserProfilePage() {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/user");
      const data = await response.json();
      setUserData(data[0].user);
    };
    fetchData();
  }, []);
  //console.log(userData)

  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div>
      <Metatags title="My Profile" />

      {/* Navbar Header */}
      <header>
        <NavBarLoggedIn toggleTheme={toggleTheme} theme={theme} />
      </header>

      {/* User Details */}
      {userData && <>
      {/* profile */}
      <div className='w-[360px] sm:w-[400px] px-4 py-5 sm:py-9 bg-white dark:bg-blue-900 dark:border-blue-900 dark:brightness-110 shadow-lg border border-lightGray rounded-lg mx-auto mt-10 sm:mt-16 flex items-center justify-center space-x-8'>
        <Image 
          src={profile} 
          alt="Profile Pic" 
          width={90}
          height={90}
          className='rounded-full' 
        />
        <div className='flex flex-col items-start space-y-2'>
          <h3 className='text-lg font-medium text-grayClassic800 dark:text-grayClassic50'>{userData?.firstName} {userData?.lastName}</h3>
          <p className='text-sm font-light text-grayClassic500 dark:text-grayClassic400'>{userData?.email}</p>
        </div>
        <FaRegEdit size={20} className="text-gray-500 dark:text-grayClassic300 cursor-pointer hover:text-gray-800 dark:hover:text-white duration-200" />
      </div>
      {/* resume */}
      <div className='w-[90%] lg:w-[65%] mx-auto mt-12 sm:mt-20'>
        <h3 className=' text-grayClassic800 dark:text-grayClassic100 font-medium'>Resume</h3>
        <div className=' bg-grayClassic100 dark:bg-bgDark3 shadow-sm rounded-lg py-5 px-5 sm:px-8 flex items-center justify-between mt-2 sm:mt-3'>
          <div className='flex flex-col items-start space-y-2'>
            <p className='font-medium text-grayClassic800 dark:text-grayClassic100 text-sm'>{userData?.resume}</p>
            <p className='text-xs font-light text-grayClassic500 dark:text-grayClassic400'>Uploaded {userData?.resumeUpdateDate}</p>
          </div>
          <div className='flex items-center space-x-3 text-grayClassic500 dark:text-grayClassic300'>
            <FaRegEdit size={22} className='hover:text-grayClassic800 dark:hover:text-white duration-200 cursor-pointer' />
            <MdDelete size={22} className='hover:text-red-500 dark:hover:text-red-400 duration-200 cursor-pointer' />
          </div>
        </div>
      </div>
      {/* Education */}
      <div className='w-[90%] lg:w-[65%] mx-auto mt-12 sm:mt-20'>
        <h3 className=' text-grayClassic800 dark:text-grayClassic100 font-medium'>Education</h3>
        <div className='bg-white dark:bg-bgDark2 dark:border-bgDark2 shadow-lg border border-lightGray rounded-lg px-4 sm:px-6 py-6 mt-2 sm:mt-4 flex items-center space-x-3 sm:space-x-6'>
          <div className="bg-red-300 text-grayClassic50 rounded-lg w-[95px] h-[95px] flex justify-center items-center">
            <HiOfficeBuilding size={39} />
          </div>
          <div className='w-[65%] sm:w-[85%] flex flex-col items-start sm:flex-row sm:items-center sm:justify-between'>
            <div className='flex flex-col space-y-1'>
              <h3 className='font-medium text-grayClassic800 dark:text-grayClassic100'>{userData?.qualificationName}</h3>
              <p className='font-light text-grayClassic600 dark:text-grayClassic300 text-sm'>{userData?.schoolName}</p>
            </div>
            <p className='font-light mt-5 text-grayClassic600 dark:text-grayClassic300 text-sm'>Attained in {userData?.yearAttained}</p>
          </div>
        </div>
      </div>
      {/* Work Experience */}
      <div className='w-[90%] lg:w-[65%] mx-auto mt-12 sm:mt-20 mb-20 sm:mb-40'>
        <h3 className=' text-grayClassic800 dark:text-grayClassic100 font-medium'>Work Experience</h3>
        <div className='bg-white dark:bg-bgDark2 dark:border-bgDark2 shadow-lg border border-lightGray rounded-lg px-4 sm:px-6 py-6 mt-2 sm:mt-4 flex items-start sm:items-center space-x-3 sm:space-x-6'>
          <div className="bg-indigo-300 text-grayClassic50 rounded-lg w-[95px] h-[95px] flex justify-center items-center">
            <HiOfficeBuilding size={39} />
          </div>
          <div className='w-[65%] sm:w-[85%] flex flex-col items-start sm:flex-row sm:items-center sm:justify-between'>
            <div className='flex flex-col'>
              <h3 className='font-medium text-grayClassic800 dark:text-grayClassic100'>{userData?.jobTitle}</h3>
              <p className='font-light text-grayClassic600 dark:text-grayClassic300 text-sm'>{userData?.companyName}</p>
              <div className="flex items-center space-x-1 mt-3 text-grayClassic700 dark:text-grayClassic300">
                <MdLocationOn size={15} />
                <p className="text-xs font-light">{userData?.jobLocation}</p>
              </div>
            </div>
            <p className='font-light text-grayClassic600 dark:text-grayClassic300 mt-3 sm:mt-0 text-xs sm:text-sm'>{userData?.startDate} - {userData?.endDate}</p>
          </div>
        </div>
      </div>
      </>}

    </div>
  )
}
