import React from "react"
import PropTypes from "prop-types"
import styles from "./QuotesItem.module.scss"

const QuotesItem = ({ image, name, quote }) => {
  return (
    <div className={styles.quotesItem}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{quote}</p>
    </div>
  )
}

QuotesItem.propTypes = {
  image: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
}

export default QuotesItem
