import React from "react"
import Header from "src/components/HomePage/Header/Header"
import Quotes from "src/components/HomePage/Quotes/Quotes"
import Services from "src/components/HomePage/Services/Services"
import Projects from "src/components/HomePage/Projects/Projects"
import OurTeam from "./OurTeam/OurTeam"
import ContactUs from "./ContactUs/ContactUs"
import Footer from "./Footer/Footer"
const HomePage = () => {
  return (
    <div>
      <Header />
      <Quotes />
      <Services />
      <Projects />
      <OurTeam />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default HomePage
