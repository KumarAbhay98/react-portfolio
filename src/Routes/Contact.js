import React from 'react'
import Navbar from '../Components/Navbar'
import ScrollToTop from '../Components/GoUpBtn'
import ContactContent from '../Components/ContactContent'
import Footer from '../Components/Footer'
import ContactMessage from '../Components/ContactMessage'
const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactContent/>
      <ContactMessage/>
      <ScrollToTop/>
      <Footer />
    </>
  )
}

export default Contact
