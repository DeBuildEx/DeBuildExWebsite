import styles from "./Project.module.scss";
import MaterialIcon from "material-icons-react";
import { renderStatus } from "Utils/Functions";
import { Link } from "react-router-dom";
import Layout from "Components/Layout/Layout";
import React, { useEffect, useState } from "react";
import CurvedBox from "Components/Layout/CurvedBox/CurvedBox";
import vars from "assets/styles/libs/_vars.scss";
import { persons, projects } from "Utils/Data";
import SingularMember from "Components/Team/SingularMember/SingularMember";
import Carousel from "react-elastic-carousel";

function ProjectContent({
  thumb = "/images/post-ph.jpg",
  title,
  status,
  slug,
  description,
  link,
  members = [],
}) {
  var testimonialSettings = {
    isRTL: true,
    itemsToShow: 2,
    pagination: false,
    
  };
  return (
    <Layout pageTitle={title} pageThumb={thumb} projectMeta={{ status, link }}>
      <div className={styles.projectContent}>
        <p>{description}</p>
        <CurvedBox loc={"ba"} background={vars.seconderyWhite}>
          <section>
            <h3>اعضای پروژه</h3>
            <div className={styles.members}>
            <Carousel {...testimonialSettings}>
            {members.map((m) => {
              let x = persons.find((i) => i.id == m);
              if (!x && m && typeof m == "object") x = m;
              if (x)
                return (
                  <SingularMember
                    name={x.name}
                    avatar={x.image}
                    link={x.slug}
                    role={x.role}
                    count={
                      projects.filter((i) => i.members.includes(x.id)).length
                    }
                    className={styles.singleMember}
                  />
                );
            })}
            </Carousel>
            </div>
          </section>
        </CurvedBox>
      </div>
    </Layout>
  );
}

export default ProjectContent;
