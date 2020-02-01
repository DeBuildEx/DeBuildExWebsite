import React from "react"
import styles from "./Slider.module.scss"

const Slider = ({ children }) => {
  return <div className={styles.slider}>{children}</div>
}

export default Slider
