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
import DocumentMeta from "react-document-meta";

function ProjectContent({
  thumb = process.env.PUBLIC_URL + "/images/post-ph.jpg",
  title,
  status,
  slug,
  description,
  link,
  members = [],
}) {
  var testimonialSettings = {
    isRTL: true,
    //itemsToShow: 1,
    pagination: false,
    breakPoints: [
      { width: 1, itemsToShow: 1 },
      { width: 960, itemsToShow: 2 },
    ],
  };
  const meta = {
    title: "پروژه ها: " + title + " - توسعه نرم افزار بیلدکس",
    description:
      "پروژه " +
      title +
      " در تیم توسعه نرم افزار بیلدکس ساخته شده است. توضیحات بیشتر از طریق وبسایت بیلدکس در دسترس قرار دارند .",
    meta: {
      "og:title": "پروژه ها: " + title + " - توسعه نرم افزار بیلدکس",
      description:
        "پروژه " +
        title +
        " در تیم توسعه نرم افزار بیلدکس ساخته شده است. توضیحات بیشتر از طریق وبسایت بیلدکس در دسترس قرار دارند .",
      charset: "utf-8",
      name: {
        keywords: "طراحی سایت,برنامه نویسی,نرم افزار,ساخت اپلیکیشن,توسعه دهنده",
      },
    },
  };
  return (
    <DocumentMeta {...meta}>
      <Layout
        pageTitle={title}
        pageThumb={thumb}
        projectMeta={{ status, link }}
      >
        <div className={styles.projectContent}>
          <p>{description}</p>
          {false && (
            <CurvedBox loc={"ba"} background={vars.seconderyWhite}></CurvedBox>
          )}
          {members.length && (
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
                          {...x}
                          count={
                            projects.filter((i) => i.members.includes(x.id))
                              .length
                          }
                          className={styles.singleMember}
                        />
                      );
                  })}
                </Carousel>
              </div>
            </section>
          )}
        </div>
      </Layout>
    </DocumentMeta>
  );
}

export default ProjectContent;
