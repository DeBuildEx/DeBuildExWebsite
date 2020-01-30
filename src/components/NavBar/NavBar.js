import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useCallback, useContext } from "react"
import Media from "react-media"
import styles from "./NavBar.module.scss"
import { AppContext } from "src/Utils/AppContext/AppContext.js"

const NavBar = ({ siteTitle }) => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  /* get the location from the context store */
  const {
    location: { hash },
  } = useContext(AppContext)
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
          <Media queries={{ large: "(max-width:1280px)" }}>
            {matches =>
              matches.large ? (
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
              ) : (
                ""
              )
            }
          </Media>
          {isMenuOpen ? (
            <i
              onClick={toggleNavBar}
              role="button"
              className={`icon ion-md-close ${styles["navBar__toggleButton"]}`}
            ></i>
          ) : (
            <i
              role="button"
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
              <Link to="/#" className={hash === "" ? styles.activeLink : ""}>
                صفحه اصلی
              </Link>
              <Link
                to="#services"
                className={hash === "#services" ? styles.activeLink : ""}
              >
                خدمات
              </Link>
              <Link
                to="#projects"
                className={hash === "#projects" ? styles.activeLink : ""}
              >
                پروژه ها
              </Link>
              <Link
                to="#team"
                className={hash === "#team" ? styles.activeLink : ""}
              >
                اعضای تیم
              </Link>
              <Link
                to="#contact-us"
                className={hash === "#contact-us" ? styles.activeLink : ""}
              >
                تماس با ما
              </Link>
              <Link
                to="#order"
                className={hash === "#order" ? styles.activeLink : ""}
              >
                مشاوره و سفارش پروژه<i className="icon ion-md-add-circle"></i>
              </Link>
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
