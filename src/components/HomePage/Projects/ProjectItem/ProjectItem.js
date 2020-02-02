import React from "react"
import PropTypes from "prop-types"
import styles from "./ProjectItem.module.scss"
import { Link } from "gatsby"
import StatusBox from "../../../StatusBox/StatusBox"

const ProjectItem = ({ imageSource, title, link, status }) => {
  return (
    <figure>
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
          <Link to={`projects/${link}`}>مشاهده جزئیات</Link>
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
