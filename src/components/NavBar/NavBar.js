import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useCallback } from "react"
import styles from "./NavBar.module.scss"

const NavBar = ({ siteTitle }) => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false)
  // const [currentTab, setCurrentTab] = u
  const toggleSearchBar = useCallback(() => {
    setIsSearchBarVisible(isSearchBarVisible => !isSearchBarVisible)
  }, [])
  return (
    <nav className={styles.navBar}>
      <div className={styles.logo}>
        <Link to="/"></Link>
      </div>
      <div className={styles.menu}>
        <a
          href="/#"
          className={window.location.hash === "" ? styles.activeLink : ""}
        >
          صفحه اصلی
        </a>
        <a
          href="/#services"
          className={
            window.location.hash === "#services" ? styles.activeLink : ""
          }
        >
          خدمات
        </a>
        <a
          href="/#projects"
          className={
            window.location.hash === "#projects" ? styles.activeLink : ""
          }
        >
          پروژه ها
        </a>
        <a
          href="/#team"
          className={window.location.hash === "#team" ? styles.activeLink : ""}
        >
          اعضای تیم
        </a>
        <a
          href="/#contact-us"
          className={
            window.location.hash === "#contact-us" ? styles.activeLink : ""
          }
        >
          تماس با ما
        </a>
        <a
          href="/#order"
          className={window.location.hash === "#order" ? styles.activeLink : ""}
        >
          مشاوره و سفارش پروژه<i className="icon ion-md-add-circle"></i>
        </a>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="... جستجو"
            className={isSearchBarVisible ? styles.visible : styles.hidden}
          />
          <button onClick={toggleSearchBar}>
            <i className="icon ion-md-search"></i>
          </button>
        </div>
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  siteTitle: PropTypes.string,
}

NavBar.defaultProps = {
  siteTitle: ``,
}

export default NavBar
