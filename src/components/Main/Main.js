import React from "react";
import Layout from "Components/Layout/Layout";
import CurvedBox from "Components/Layout/CurvedBox/CurvedBox";
import styles from "./Main.module.scss";
import Carousel from "react-elastic-carousel";
import TestimonialItem from "Components/testimonial/testimonialItem";
import ServiceItem from "Components/Service/ServiceItem";

function Main() {
  var testimonialSettings = {
    isRTL: true,
    itemsToShow: 1,
    pagination: false,
  };
  return (
    <Layout
      pageTitle="طراحی، ساخت و اجرا"
      pageThumb="/images/mainpagethumb.jpg"
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
      <CurvedBox loc="ba" background="#ccc" className="">
        <section>
          <h3>خدمات ما</h3>
          <div className={styles.servicesContainer}>
            <ServiceItem
              image="/images/services/graphic-design.png"
              title="رابط کاربری"
              subtitle="UI/UX"
            />
            <ServiceItem
              image="/images/services/graphic-design.png"
              title="رابط کاربری"
              subtitle="UI/UX"
            />
            <ServiceItem
              image="/images/services/graphic-design.png"
              title="رابط کاربری"
              subtitle="UI/UX"
            />
            <ServiceItem
              image="/images/services/graphic-design.png"
              title="رابط کاربری"
              subtitle="UI/UX"
            />
            <ServiceItem
              image="/images/services/graphic-design.png"
              title="رابط کاربری"
              subtitle="UI/UX"
            />
            <ServiceItem
              image="/images/services/graphic-design.png"
              title="رابط کاربری"
              subtitle="UI/UX"
            />
          </div>
        </section>
      </CurvedBox>
    </Layout>
  );
}

export default Main;
