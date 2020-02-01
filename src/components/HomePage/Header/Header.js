import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import NavBar from "src/components/NavBar/NavBar"
import Slider from "src/components/HomePage/Header/Slider/Slider"
import dashboardSample from "src/images/dashboard-design-inspiration-01.jpg"
import styles from "./Header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery1 {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={styles.header}>
      <NavBar siteTitle={data.site.siteMetadata.title} />
      <h1>طراحی، ساخت، اجرا</h1>
      <Slider>
        <img src={dashboardSample} alt="dashboard sample" />
      </Slider>
    </header>
  )
}

export default Header
