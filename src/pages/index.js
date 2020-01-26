import React from "react"
import { Link } from "gatsby"

import Layout from "src/components/Layout/layout"
import Image from "src/components/Image/image"
import SEO from "src/components/SEO/seo"
import HomePage from "src/components/HomePage/HomePage"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePage />
    <Link to="/projects">Projects</Link>
    <Link to="/persons">Persons</Link>
  </Layout>
)

export default IndexPage
