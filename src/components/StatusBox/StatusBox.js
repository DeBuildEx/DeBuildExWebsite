import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { statusCodes } from "src/data/statuscodes.js"
import styles from "./StatusBox.module.scss"

const stautsGenerator = status => {
  switch (status) {
    case 1:
      return "construct"
    case 2:
      return "checkmark-circle"
    case 3:
      return "filing"
  }
}

const StatusBox = ({ status }) => {
  return (
    <div className={`${styles[statusCodes[status].color]} ${styles.statusBox}`}>
      <i className={`icon ion-md-${stautsGenerator(status)}`}>
        {statusCodes[status].title}
      </i>
    </div>
  )
}
StatusBox.propTypes = {
  status: PropTypes.number.isRequired,
}

export default StatusBox
