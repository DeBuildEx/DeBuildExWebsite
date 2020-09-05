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
function Main() {
  var testimonialSettings = {
    isRTL: true,
    itemsToShow: 1,
    pagination: false,
  };
  return (
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
                process.env.PUBLIC_URL + "/images/services/graphic-design.png"
              }
              title="رابط کاربری"
              subtitle="UI/UX"
            />{" "}
            <ServiceItem
              image={
                process.env.PUBLIC_URL + "/images/services/graphic-design.png"
              }
              title="رابط کاربری"
              subtitle="UI/UX"
            />{" "}
            <ServiceItem
              image={
                process.env.PUBLIC_URL + "/images/services/graphic-design.png"
              }
              title="رابط کاربری"
              subtitle="UI/UX"
            />{" "}
            <ServiceItem
              image={
                process.env.PUBLIC_URL + "/images/services/graphic-design.png"
              }
              title="رابط کاربری"
              subtitle="UI/UX"
            />{" "}
            <ServiceItem
              image={
                process.env.PUBLIC_URL + "/images/services/graphic-design.png"
              }
              title="رابط کاربری"
              subtitle="UI/UX"
            />{" "}
            <ServiceItem
              image={
                process.env.PUBLIC_URL + "/images/services/graphic-design.png"
              }
              title="رابط کاربری"
              subtitle="UI/UX"
            />
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
  );
}

export default Main;
