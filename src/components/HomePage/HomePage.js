import React from "react"
import Header from "src/components/HomePage/Header/Header"
import Quotes from "src/components/HomePage/Quotes/Quotes"
import Services from "src/components/HomePage/Services/Services"
import Projects from "src/components/HomePage/Projects/Projects"
const HomePage = () => {
  return (
    <div>
      <Header />
      <Quotes />
      <Services />
      <Projects />
    </div>
  )
}

export default HomePage
