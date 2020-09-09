import React from "react";
import Layout from "Components/Layout/Layout";
import CurvedBox from "Components/Layout/CurvedBox/CurvedBox";
import styles from "./Main.module.scss";
import Carousel from "react-elastic-carousel";
import TestimonialItem from "Components/testimonial/testimonialItem";
import ServiceItem from "Components/Service/ServiceItem";
import SingularProjectItem from "Components/Projects/Singular/SingularProjectItem";
import SingularMember from "Components/Team/SingularMember/SingularMember";
import vars from "assets/styles/libs/_vars.scss";
import Contact from "Components/Contact/Contact";
import { projects, quotes, persons } from "Utils/Data";
import DocumentMeta from 'react-document-meta';

function Main() {
  var testimonialSettings = {
    isRTL: true,
    itemsToShow: 1,
    pagination: false,
  };
  const meta = {
    title: 'صفحه اصلی - گروه طراحی و توسعه نرم افزار بیلدکس',
    description: 'انواع خدمات نرم افزاری، اعضای تیم و پروژه های اجرا شده توسط تیم بیلدکس',
    meta: {
     'og:title': 'گروه طراحی و توسعه نرم افزار بیلدکس',
      description: 'انواع خدمات نرم افزاری، اعضای تیم و پروژه های اجرا شده توسط تیم بیلدکس',
      charset: 'utf-8',
      name: {
        keywords: 'طراحی سایت,برنامه نویسی,نرم افزار,ساخت اپلیکیشن,توسعه دهنده'
      }
    }
  };
  return (
    <DocumentMeta {...meta}>
    <Layout
      pageTitle="طراحی، ساخت و اجرا"
      pageThumb={[
        process.env.PUBLIC_URL + "/images/slider.png",
        process.env.PUBLIC_URL + "/images/slider.png",
        process.env.PUBLIC_URL + "/images/slider.png",
      ]}
      isHome={true}
    >
      <section>
        <h3>نظرات مشتریان</h3>
        <div className={styles.testimonialContainer}>
          <Carousel {...testimonialSettings}>
            {quotes.map((item) => (
              <TestimonialItem
                avatar={item.image}
                name={item.name}
                content={item.quote}
              />
            ))}
          </Carousel>
        </div>
      </section>
      <CurvedBox loc="ba" background={vars.seconderyWhite} className="">
        <section id="services">
          <h3>خدمات ما</h3>
          <div className={styles.servicesContainer}>
            <ServiceItem
              image={
                process.env.PUBLIC_URL + "/images/services/front-end.png"
              }
              title="کدنویسی"
              subtitle="Front End"
            />{" "}
            <ServiceItem
              image={
                process.env.PUBLIC_URL + "/images/services/graphic-design.png"
              }
              title="کدنویسی"
              subtitle="Back End"
            />{" "}
            <ServiceItem
              image={
                process.env.PUBLIC_URL + "/images/services/backend.png"
              }
              title="رابط کاربری"
              subtitle="UI/UX"
            />{" "}
           <ServiceItem
              image={
                process.env.PUBLIC_URL + "/images/services/front-end.png"
              }
              title="کدنویسی"
              subtitle="Front End"
            />{" "}
            <ServiceItem
              image={
                process.env.PUBLIC_URL + "/images/services/graphic-design.png"
              }
              title="کدنویسی"
              subtitle="Back End"
            />{" "}
            <ServiceItem
              image={
                process.env.PUBLIC_URL + "/images/services/backend.png"
              }
              title="رابط کاربری"
              subtitle="UI/UX"
            />{" "}
          </div>
        </section>
      </CurvedBox>
      <section id="projects">
        <h3>آخرین پروژه ها</h3>
        <div className={styles.projectsContainer}>
          {projects.map((item) => (
            <SingularProjectItem {...item} />
          ))}
        </div>
        <button className={styles.moreProjects + " primary"}>بیشتر</button>
      </section>
      <CurvedBox
        loc="ba"
        background={vars.seconderyWhite}
        className=""
        style={{ marginBottom: 0 }}
      >
        <section id="team">
          <h3>تیم ما</h3>
          <div className={styles.teamContainer}>
            {persons.map((item) => (
              <SingularMember
                {...item}
                count={
                  projects.filter((i) => i.members.includes(item.id)).length
                }
              />
            ))}
          </div>
        </section>
      </CurvedBox>

      <CurvedBox
        loc="a"
        background={vars.primaryColor}
        style={{ paddingTop: "100px" }}
      >
        <section id="contact">
          <h3 className="light">تماس با ما</h3>
          <Contact />
        </section>
      </CurvedBox>
    </Layout>
    </DocumentMeta >
  );
}

export default Main;
