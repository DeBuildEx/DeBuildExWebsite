import React from "react"
import { Link } from "gatsby"
import Layout from "src/components/Layout/layout"
import SEO from "src/components/SEO/seo"
import HomePage from "src/components/HomePage/HomePage"
import { AppContext } from "src/Utils/AppContext/AppContext.js"

const IndexPage = ({ location }) => (
  <Layout>
    <SEO title="Home" />
    {/* we store the location in the app context cause window.location is not accessible in production mode 
    and server side rendering */}
    <AppContext.Provider value={{ location }}>
      <HomePage />
    </AppContext.Provider>
    <Link to="/projects">Projects</Link>
    <Link to="/persons">Persons</Link>
  </Layout>
)

export default IndexPage
