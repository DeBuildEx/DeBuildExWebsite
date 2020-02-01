import React from "react"
import PropTypes from "prop-types"
import styles from "./ServiceItem.module.scss"

const ServiceItem = ({ imageSource, boldTitle, text }) => {
  return (
    <figure className={styles.serviceItem}>
      <img src={imageSource} alt="" />
      <figcaption>
        {boldTitle && <strong>{boldTitle}</strong>}
        {text}
      </figcaption>
    </figure>
  )
}

ServiceItem.propTypes = {
  imageSource: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  boldTitle: PropTypes.string,
}

export default ServiceItem
