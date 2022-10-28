import Metatags from '../components/Metatages'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'

export default function Home() {
  return (
    <div>
      <Metatags title='Home | Job Portal Web' />
      <header>
        <NavBar />
      </header>
      <main className='w-screen container mx-auto'>
        <div className='border border-black border-dotted mt-6 mx-2 md:mx-0 md:mt-9'>
          <SearchBar />
        </div>
      </main>

    </div>
  )
}
