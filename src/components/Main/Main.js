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
import SocialBar from "Components/SocialBar/SocialBar";
function Main() {
  var testimonialSettings = {
    isRTL: true,
    itemsToShow: 1,
    pagination: false,
  };
  return (
    <Layout
      pageTitle="طراحی، ساخت و اجرا"
      pageThumb={process.env.PUBLIC_URL + "/images/mainpagethumb.jpg"}
    >
      <section>
        <h3>نظرات مشتریان</h3>
        <div className={styles.testimonialContainer}>
          <Carousel {...testimonialSettings}>
            <TestimonialItem
              avatar="https://www.w3schools.com/w3images/avatar2.png"
              name="یوسف حق گو"
              content="
همکاری با شرکت بیلدکس یکی از بهترین تجربه‌های کاری تیم همیار زبان بود. دقت، ظرافت در طراحی و پاسخگویی سریع از ویژگی‌های تیم نوین بود و خیلی خوشحالم که طراحی سایت خودمون رو به این تیم سپردیم."
            />
            <TestimonialItem
              avatar="https://www.w3schools.com/w3images/avatar2.png"
              name="یوسف حق گو"
              content="شما بهترینید"
            />
            <TestimonialItem
              avatar="https://www.w3schools.com/w3images/avatar2.png"
              name="یوسف حق گو"
              content="شما بهترینید"
            />
          </Carousel>
        </div>
      </section>
      <CurvedBox loc="ba" background={vars.seconderyWhite} className="">
        <section>
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
      <section>
        <h3>آخرین پروژه ها</h3>
        <div className={styles.projectsContainer}>
          <SingularProjectItem
            name="پروژه آرت ورک"
            status="1"
            picture="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"
          />
          <SingularProjectItem
            name="پروژه آرت ورک"
            status="2"
            picture="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"
          />{" "}
          <SingularProjectItem
            name="پروژه آرت ورک"
            status="1"
            picture="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"
          />{" "}
          <SingularProjectItem
            name="پروژه آرت ورک"
            status="3"
            picture="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"
          />
          <SingularProjectItem
            name="پروژه آرت ورک"
            status="1"
            picture="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"
          />{" "}
          <SingularProjectItem
            name="پروژه آرت ورک"
            status="3"
            picture="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"
          />
        </div>
        <button className={styles.moreProjects + " primary"}>بیشتر</button>
      </section>
      <CurvedBox
        loc="ba"
        background={vars.seconderyWhite}
        className=""
        style={{ marginBottom: 0 }}
      >
        <section>
          <h3>تیم ما</h3>
          <div className={styles.teamContainer}>
            <SingularMember
              name="امیرمحمد سلطانیان"
              avatar="https://image.freepik.com/free-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg"
              link="#"
              role="توسعه دهنده front-end"
              count="53"
            />
            <SingularMember
              name="امیرمحمد سلطانیان"
              avatar="https://image.freepik.com/free-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg"
              link="#"
              role="توسعه دهنده front-end"
              count="53"
            />
            <SingularMember
              name="امیرمحمد سلطانیان"
              avatar="https://image.freepik.com/free-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg"
              link="#"
              role="توسعه دهنده front-end"
              count="53"
            />
            <SingularMember
              name="امیرمحمد سلطانیان"
              avatar="https://image.freepik.com/free-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg"
              link="#"
              role="توسعه دهنده front-end"
              count="53"
            />
            <SingularMember
              name="امیرمحمد سلطانیان"
              avatar="https://image.freepik.com/free-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg"
              link="#"
              role="توسعه دهنده front-end"
              count="53"
            />
            <SingularMember
              name="امیرمحمد سلطانیان"
              avatar="https://image.freepik.com/free-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg"
              link="#"
              role="توسعه دهنده front-end"
              count="53"
            />
          </div>
        </section>
      </CurvedBox>

      <CurvedBox
        loc="a"
        background={vars.primaryColor}
        style={{ paddingTop: "100px"}}
      >
        <section>
          <h3 className="light">تماس با ما</h3>
          <Contact />
        </section>
      </CurvedBox>
      <CurvedBox
      loc="b"
      background={vars.seconderyWhite}
      className={styles.specialSection1}>
        <section>
          <SocialBar />
        </section>
      </CurvedBox>
    </Layout>
  );
}

export default Main;
