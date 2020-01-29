import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useCallback } from "react"
import Media from "react-media"
import styles from "./NavBar.module.scss"

const NavBar = ({ siteTitle }) => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {
    location: { hash },
  } = window
  //toggle the visibility of the search bar
  const toggleSearchBar = useCallback(() => {
    setIsSearchBarVisible(isSearchBarVisible => !isSearchBarVisible)
  }, [])
  //toggle the visibility of the nav bar
  const toggleNavBar = useCallback(() => {
    setIsMenuOpen(isMenuOpen => !isMenuOpen)
  }, [])

  return (
    <nav className={styles.navBar}>
      <div className={styles.logo}>
        <Link to="/"></Link>
        <div className={styles.itemContainer}>
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="جستجو ..."
              className={isSearchBarVisible ? styles.visible : styles.hidden}
            />
            <button onClick={toggleSearchBar}>
              <i className="icon ion-md-search"></i>
            </button>
          </div>
          {isMenuOpen ? (
            <i
              onClick={toggleNavBar}
              className={`icon ion-md-close ${styles["navBar__toggleButton"]}`}
            ></i>
          ) : (
            <i
              onClick={toggleNavBar}
              className={`icon ion-md-funnel ${styles["navBar__toggleButton"]}`}
            ></i>
          )}
        </div>
      </div>
      {/* use media tag to add the specific classes based on different media queries */}
      <Media
        queries={{
          large: "(max-width:1280px)",
        }}
      >
        {matches => (
          <>
            <div
              className={`${styles.menu} 

         ${
           matches.large
             ? isMenuOpen
               ? styles.openMenu
               : styles.closedMenu
             : ""
         }
       
       `}
            >
              <a href="#" className={hash === "" ? styles.activeLink : ""}>
                صفحه اصلی
              </a>
              <a
                href="#services"
                className={hash === "#services" ? styles.activeLink : ""}
              >
                خدمات
              </a>
              <a
                href="#projects"
                className={hash === "#projects" ? styles.activeLink : ""}
              >
                پروژه ها
              </a>
              <a
                href="#team"
                className={hash === "#team" ? styles.activeLink : ""}
              >
                اعضای تیم
              </a>
              <a
                href="#contact-us"
                className={hash === "#contact-us" ? styles.activeLink : ""}
              >
                تماس با ما
              </a>
              <a
                href="#order"
                className={hash === "#order" ? styles.activeLink : ""}
              >
                مشاوره و سفارش پروژه<i className="icon ion-md-add-circle"></i>
              </a>
              <div className={styles.searchBox}>
                <input
                  type="text"
                  placeholder="جستجو ..."
                  className={
                    isSearchBarVisible ? styles.visible : styles.hidden
                  }
                />
                <button onClick={toggleSearchBar}>
                  <i className="icon ion-md-search"></i>
                </button>
              </div>
            </div>
          </>
        )}
      </Media>
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
