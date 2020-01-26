import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const NavBar = ({ siteTitle }) => (
  <nav>
    <div>
      <Link>img</Link>
    </div>
  </nav>
)

NavBar.propTypes = {
  siteTitle: PropTypes.string,
}

NavBar.defaultProps = {
  siteTitle: ``,
}

export default NavBar
