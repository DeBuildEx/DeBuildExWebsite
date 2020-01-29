import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import NavBar from "src/components/NavBar/NavBar"
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
    </header>
  )
}

export default Header
