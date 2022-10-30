import React from 'react'
import { useTheme } from 'next-themes'
import Metatags from "../components/Metatages";
import NavBarLoggedIn from '../components/NavBarLoggedIn';

export default function UserProfilePage() {

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


    </div>
  )
}
