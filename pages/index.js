import DropDownMenu from '../components/DropDownMenu'
import Metatags from '../components/Metatages'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'

export default function Home() {
  return (
    <div>
      {/* Meta tags (for SEO purposes) */}
      <Metatags title='Home | Job Portal Web' />

      {/* Navbar Header */}
      <header>
        <NavBar />
      </header>

      {/* Main Container */}
      <main className='w-screen container mx-auto'>
        {/* search bar */}
        <div className='border border-black border-dotted mt-6 mx-2 md:mx-0 md:mt-9'>
          <SearchBar />
        </div>
        {/* drop down menus */}
        <div className='border border-black border-dotted grid grid-cols-2 md:flex items-center gap-2 md:gap-4 mt-4 mx-2 md:mx-0'>
          <DropDownMenu title='Date Posted' />
          <DropDownMenu title='Salary Range' />
          <DropDownMenu title='Experience Level' />
          <DropDownMenu title='Location' />
        </div>

      </main>

    </div>
  )
}
