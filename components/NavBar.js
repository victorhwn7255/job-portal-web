import React, { useEffect } from 'react'
import { useTheme } from 'next-themes'
import { HiOfficeBuilding } from 'react-icons/hi'
import Link from 'next/link'


export default function NavBar() {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setTheme('light')
  }, [])

  return (
    <nav className='w-full fixed px-6 py-6 flex-row border-b shadow-md bg-white'>
      <div className='container flex justify-between items-center mx-auto'>
        {/* left */}
        <Link href="http://localhost:3000/" className='flex items-center space-x-2 group'>
          <HiOfficeBuilding size={33} className="text-lightBlue ring-2 rounded-full ring-lightBlue p-[6px] group-hover:scale-95 group-hover:text-white group-hover:ring-blue-800 group-hover:bg-blue-800 duration-200" />
          <h3 className='text-lightBlue font-semibold text-base md:text-lg group-hover:text-blue-800 duration-200'>Quick Jobs</h3>
        </Link>

        {/* right */}
        <div className='flex items-center space-x-3 md:space-x-9'>
          <Link href='/'>
            <p className='text-lightBlue hover:text-blue-800 font-medium text-sm md:text-base hover:underline underline-offset-[6px] decoration-wavy duration-200'>Sign Up</p>
          </Link>

          <Link href='/' className='bg-lightBlue rounded-lg px-[25px] py-[10px] border border-lightBlue text-white font-medium text-sm md:text-base hover:bg-white hover:text-lightBlue duration-200'>
            <p className=''>Login</p>
          </Link>
        </div>
      </div>
    </nav>
  )
}
