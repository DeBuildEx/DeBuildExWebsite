import React from "react"
import styles from "./Projects.module.scss"
import ProjectItem from "./ProjectItem/ProjectItem"
import { useStaticQuery, graphql } from "gatsby"

const Projects = () => {
  const {
    allProjectsJson: { nodes: projectsArray },
  } = useStaticQuery(graphql`
    query MyQuery3 {
      allProjectsJson {
        nodes {
          link
          status
          title
          imageSource
        }
      }
    }
  `)
  return (
    <div className={styles.projects}>
      <h1>آخرین پروژه ها</h1>
      <div className={styles.container}>
        {projectsArray.map(({ id, imageSource, link, status, title }) => (
          <ProjectItem key={id} {...{ imageSource, title, link, status }} />
        ))}
      </div>
      <button className={styles.more}>بیشتر</button>
    </div>
  )
}

export default Projects
