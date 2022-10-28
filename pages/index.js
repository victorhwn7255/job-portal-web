import Head from 'next/head'
import Metatags from '../components/Metatages'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div>
      <Metatags title='Home | Job Portal Web' />

      <NavBar />

    </div>
  )
}
