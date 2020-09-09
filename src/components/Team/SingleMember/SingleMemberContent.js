import styles from "./SingleMember.module.scss";
import { Link } from "react-router-dom";
import Layout from "Components/Layout/Layout";
import React, { useEffect, useState } from "react";
import CurvedBox from "Components/Layout/CurvedBox/CurvedBox";
import vars from "assets/styles/libs/_vars.scss";
import { projects } from "Utils/Data";
import SingularMember from "Components/Team/SingularMember/SingularMember";
import Carousel from "react-elastic-carousel";
import SingularProjectItem from "Components/Projects/Singular/SingularProjectItem";
import DocumentMeta from "react-document-meta";

function SingleMemberContent({
  image = process.env.PUBLIC_URL + "/images/post-ph.jpg",
  name,
  role,
  slug,
  social = {},
  id,
}) {
  var testimonialSettings = {
    isRTL: true,
    pagination: false,
    breakPoints: [
      { width: 1, itemsToShow: 1 },
      { width: 630, itemsToShow: 2 },
      { width: 940, itemsToShow: 3 },
      { width: 1260, itemsToShow: 4 },
    ],
  };
  const meta = {
    title: "اعضای تیم: " + name + " - توسعه نرم افزار بیلدکس",
    description:
      name +
      " با سمت " +
      role +
      "در تیم توسعه نرم افزار بیلدکس حضور دارد. توضیحات بیشتر از طریق وبسایت بیلدکس در دسترس قرار دارند.",
    meta: {
      "og:title": "اعضای تیم: " + name + " - توسعه نرم افزار بیلدکس",
      description:
        name +
        " با سمت " +
        role +
        "در تیم توسعه نرم افزار بیلدکس حضور دارد. توضیحات بیشتر از طریق وبسایت بیلدکس در دسترس قرار دارند.",
      charset: "utf-8",
      name: {
        keywords: "طراحی سایت,برنامه نویسی,نرم افزار,ساخت اپلیکیشن,توسعه دهنده",
      },
    },
  };
  return (
    <DocumentMeta {...meta}>
      <Layout pageTitle={name} pageThumb={image} memberMeta={{ role, social }}>
        <div className={styles.singleMember}>
          <section>
            <h3>پروژه های مشارکت کرده</h3>
            <Carousel {...testimonialSettings}>
              {projects
                .filter((i) => i.members.includes(id))
                .map((m) => (
                  <SingularProjectItem {...m} />
                ))}
            </Carousel>
          </section>
        </div>
      </Layout>
    </DocumentMeta>
  );
}

export default SingleMemberContent;
