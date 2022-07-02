import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify | Clone</title>
        <link rel="icon" href="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-green-logo-8.png" />
      </Head>

      <main>
        {/* Sidebar */}
        <Sidebar />
        {/* Center */}
      </main>

      <div>
        {/* Player */}
      </div>

    </div>
  )
}

export default Home
