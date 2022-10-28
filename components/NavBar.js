import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { HiOfficeBuilding } from 'react-icons/hi'
import Image from 'next/image';
import Link from 'next/link'
import cross from '../assets/cross.png'
import menu from '../assets/menu.png'


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setTheme('light')
  }, [])

  return (
    <nav className='w-full px-6 py-6 flex-row border-b shadow-md bg-white dark:bg-backgroundDark dark:border-slate-800'>
      <div className='container flex justify-between items-center mx-auto'>
        {/* left */}
        <Link href="/" className='flex items-center space-x-2 group'>
          <HiOfficeBuilding size={33} className="text-lightBlue dark:text-grayClassic50 ring-2 rounded-full ring-lightBlue p-[6px] group-hover:scale-95 group-hover:text-white group-hover:ring-blue-800 group-hover:bg-blue-800 duration-200" />
          <h3 className='text-lightBlue dark:text-grayClassic50 font-semibold text-base md:text-lg group-hover:text-blue-800 dark:group-hover:text-grayClassic50 duration-200'>Quick Jobs</h3>
        </Link>

        {/* right */}
        <div className='flex items-center space-x-3 md:space-x-6'>
          {/* dark mode toggle button */}
          <div className="flex items-center mr-3">
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox"
              onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            />
            <label htmlFor="checkbox" className="flex justify-between items-center w-[34px] h-[18px] bg-black rounded-2xl p-1 relative label cursor-pointer group">
              <i className="fas fa-sun group-hover:brightness-125 duration-200" />
              <i className="fas fa-moon group-hover:brightness-125 duration-200" />
              <div className="w-[14px] h-[14px] absolute bg-grayClassic50 rounded-full ball" />
            </label>
          </div>
          {/* sign up */}
          <Link href='/' className='hidden md:flex'>
            <p className='text-lightBlue dark:text-grayClassic50 hover:text-blue-800 font-medium text-sm md:text-base hover:underline underline-offset-[6px] decoration-wavy duration-200'>Sign Up</p>
          </Link>
          {/* login */}
          <Link href='/' className='bg-lightBlue rounded-lg px-[25px] py-[10px] border border-lightBlue text-white font-medium text-sm md:text-base hover:bg-grayClassic100 dark:hover:bg-backgroundDark dark:hover:brightness-150 hover:text-lightBlue dark:hover:text-grayClassic50 duration-200 hidden md:flex'>
            <p>Login</p>
          </Link>

          {/* Hamburger Botton (for small screens) */}
          <div className='flex md:hidden'>
            {isOpen ? (
              <Image
                src={cross}
                objectFit="contain"
                width={24}
                height={24}
                alt="close"
                onClick={() => { setIsOpen(!isOpen); }}
                className={theme === 'light' ? 'filter invert' : undefined}
              />
            ) : (
              <Image
                src={menu}
                objectFit="contain"
                width={24}
                height={24}
                alt="menu"
                onClick={() => { setIsOpen(!isOpen); }}
                className={theme === 'light' ? 'filter invert' : undefined}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
