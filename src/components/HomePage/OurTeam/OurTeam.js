import React from "react"
import styles from "./OurTeam.module.scss"
import { useStaticQuery, graphql, Link } from "gatsby"
const OurTeam = () => {
  const data = useStaticQuery(graphql`
    query OurTeamQuery {
      allPersonsJson {
        nodes {
          role
          name
          contributedProjectsCount
          link
          image
        }
      }
    }
  `)
  console.log(data)
  return (
    <div className={styles.ourTeam}>
      <h1>تیم ما</h1>
      <div className={styles.container}>
        {data.allPersonsJson.nodes.map(
          ({ role, name, image, contributedProjectsCount, link }) => (
            <div className={styles.card}>
              <div className={styles.profilePicture}>
                <img src={image} alt={name} />
              </div>
              <div className={styles.details}>
                <p className={styles.role}>{role}</p>

                <div className={styles.info}>
                  <h2> {name}</h2>
                  <div>
                    <div className={styles.projectCount}>
                      {" "}
                      مشارکت در {contributedProjectsCount} پروژه{" "}
                    </div>
                    <Link to={"persons/" + link}>مشاهده جزئیات</Link>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default OurTeam
