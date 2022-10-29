import React, { useEffect, useState } from 'react'
import { HiOfficeBuilding } from 'react-icons/hi'
import Link from 'next/link'


export default function NavBar({toggleTheme, theme}) {
  const [showHamMenu, setShowHamMenu] = useState(false)

  const handleChange = () => {
    setShowHamMenu(current => !current)
  }

  return (
    <nav className='w-full px-3 md:px-6 py-6 flex-row border-b shadow-md bg-white dark:bg-backgroundDark dark:border-slate-800'>
      <div className='container flex justify-between items-center mx-auto'>
        {/* left */}
        <Link href="/" className='flex items-center space-x-2 group'>
          <HiOfficeBuilding size={33} className="text-lightBlue dark:text-grayClassic50 ring-2 rounded-full ring-lightBlue p-[6px] group-hover:scale-95 group-hover:text-white group-hover:ring-blue-800 group-hover:bg-blue-800 duration-200" />
          <h3 className='text-lightBlue dark:text-grayClassic50 font-semibold text-base md:text-lg group-hover:text-blue-800 dark:group-hover:text-grayClassic50 duration-200'>Quick Jobs</h3>
        </Link>

        {/* right */}
        <div className='flex items-center space-x-3 md:space-x-4 lg:space-x-5 relative'>
          {/* dark mode toggle button */}
          <div className="flex items-center mr-3 absolute right-[3rem] sm:right-0 sm:relative">
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox"
              onChange={toggleTheme}
            />
            <label htmlFor="checkbox" className="flex justify-between items-center w-[34px] h-[18px] bg-black rounded-2xl p-1 relative label cursor-pointer group">
              <i className="fas fa-sun group-hover:brightness-125 duration-200" />
              <i className="fas fa-moon group-hover:brightness-125 duration-200" />
              <div className="w-[14px] h-[14px] absolute bg-grayClassic50 rounded-full ball" />
            </label>
          </div>
          {/* sign up */}
          <Link href='/signup' className='hidden md:flex'>
            <p className='text-lightBlue dark:text-grayClassic50 hover:text-blue-800 font-medium text-sm md:text-base hover:underline underline-offset-[6px] decoration-wavy duration-200'>Sign Up</p>
          </Link>
          {/* login */}
          <Link href='/login' className='smBlueBtn hidden md:flex'>
            <p>Login</p>
          </Link>

          {/* Hamburger Button */}
          <label htmlFor="check" className="bar ml-0 block md:hidden">
            <input id="check" 
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
            <div className='absolute bg-white dark:bg-slate-900 h-[150px] w-[250px] rounded-xl top-[4rem] -right-3 z-50 p-3 flex flex-col justify-around items-center shadow-xl'>
              <Link href='/login' className='bg-lightGray text-textDark w-[90%] py-3 rounded-xl flex justify-center items-center'>
                <p>Login</p>
              </Link>
              <Link href='/signup' className='bg-lightBlue text-grayClassic50 w-[90%] py-3 rounded-xl flex justify-center items-center'>
                <p>Sign Up</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
