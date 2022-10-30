import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Gain from '../components/Gain'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Partners from '../components/Partners'
import Team from '../components/Team'
import Values from '../components/Values'

import { useEffect } from 'react'


const Home: NextPage = (props:any) => {
  const isServer = typeof window === 'undefined'
  const WOW = !isServer ? require('wow.js') : null
  useEffect(()=>{
    new WOW().init()

  },[])
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
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap" rel="stylesheet" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='px-6 sm:px-20 flex flex-col space-y-10 lg:space-y-20 z-0 text-base '>
          <Hero />
          <Partners />
          <About />
          <Gain />
          <Values />
          {/* <Team /> */}
      </main>
    </>
    
  )
}

export default Home




























