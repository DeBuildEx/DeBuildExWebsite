import styles from "./Project.module.scss";
import MaterialIcon from "material-icons-react";
import { renderStatus } from "Utils/Functions";
import { Link } from "react-router-dom";
import Layout from "Components/Layout/Layout";
import React, { useEffect, useState } from "react";
function ProjectContent({
    picture = "/images/post-ph.jpg",
    title,
    status,
    slug,
  }) 
  {
      console.log(title)
  return (
    <Layout pageTitle={title} pageThumb={picture}>
      <div className={styles.SingularProjectItemContainer}>
        <div className={styles.SingularProjectItem}>
          <div
            className={styles.image}
            style={{
              backgroundImage:
                'url("' + process.env.PUBLIC_URL + picture + '")',
            }}
          ></div>

          <h3>{title}</h3>
          <div className={styles.meta}>
            {renderStatus(status, (o) => (
              <button className={styles.projectInfo + " " + o.class}>
                {o.name}
                <MaterialIcon icon={o.icon} />
              </button>
            ))}
            <Link to={"project/" + slug}>
              <button className={"flat dark " + styles.forwardIcon}>
                مشاهده جزئیات <MaterialIcon icon="arrow_back_ios" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProjectContent;
