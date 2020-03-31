import React from "react"
import PropTypes from "prop-types"
import styles from "./ProjectItem.module.scss"
import { Link } from "gatsby"
import StatusBox from "src/components/StatusBox/StatusBox.js"

const ProjectItem = ({ imageSource, title, link, status }) => {
  return (
    <figure className={styles.projectItem}>
      <div
        className={styles.image}
        style={{ background: `url(${imageSource})` }}
      ></div>
      <figcaption>
        <h3>{title}</h3>
        <div className={styles.container}>
          <div className={styles.status}>
            <StatusBox {...{ status }} />
          </div>
          <Link className={styles.link} to={`projects/${link}`}>
            مشاهده جزئیات
            <i className="icon ion-ios-arrow-back"></i>
          </Link>
        </div>
      </figcaption>
    </figure>
  )
}

ProjectItem.propTypes = {
  imageSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
}

export default ProjectItem
