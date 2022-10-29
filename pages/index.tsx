import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Gain from '../components/Gain'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Partners from '../components/Partners'
import Team from '../components/Team'
import Values from '../components/Values'

const Home: NextPage = (props:any) => {
  return (
    <>
      <Head>
        <title>OYETECH</title>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='px-4 sm:px-20 flex flex-col space-y-10 lg:space-y-20 z-0 text-base '>
          <Hero />
          <Partners />
          <About />
          <Gain />
          <Values />
          <Team />
      </main>
    </>
    
  )
}

export default Home




























