import React from 'react'
import Navbar from '../Components/Navbar'
import Cover from '../Components/Cover'
import Intro from '../Components/Intro'
import ScrollToTop from '../Components/GoUpBtn'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Cover />
      <Intro/>
      <ScrollToTop/>
      <Footer />
    </>
  )
}

export default Home
