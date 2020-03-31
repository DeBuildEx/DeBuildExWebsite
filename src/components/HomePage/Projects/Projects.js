import React from "react"
import styles from "./Projects.module.scss"
import ProjectItem from "./ProjectItem/ProjectItem"
import { useStaticQuery, graphql } from "gatsby"

const Projects = () => {
  const {
    allProjectListJson: { nodes: projectsArray },
  } = useStaticQuery(graphql`
    query MyQuery3 {
      allProjectListJson {
        nodes {
          link
          status
          title
          imageSource
        }
      }
    }
  `)
  // debugger
  console.log(projectsArray)
  return (
    <div className={styles.projects}>
      <h1>آخرین پروژه ها</h1>
      <div className={styles.container}>
        {projectsArray.map(({ id, imageSource, link, status, title }) => (
          <ProjectItem key={id} {...{ imageSource, title, link, status }} />
        ))}
      </div>
    </div>
  )
}

export default Projects
