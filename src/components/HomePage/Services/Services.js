import React from "react"
import ServiceItem from "./ServiceItem/ServiceItem"
import frontend from "src/images/front-end.png"
import backend from "src/images/backend.png"
import uiDesign from "src/images/graphic-design.png"
import styles from "./Services.module.scss"

const Services = () => {
  return (
    <div id="services" className={styles.services}>
      <h1>خدمات ما</h1>
      <div className={styles.container}>
        <ServiceItem
          imageSource={frontend}
          boldTitle={`کد نویسی`}
          text={`Front End`}
        />
        <ServiceItem
          imageSource={backend}
          boldTitle={`کد نویسی`}
          text={`Back End`}
        />
        <ServiceItem
          imageSource={uiDesign}
          boldTitle={`رابط کاربری`}
          text={`Ui Design`}
        />
        <ServiceItem
          imageSource={frontend}
          boldTitle={`کد نویسی`}
          text={`Front End`}
        />
        <ServiceItem
          imageSource={backend}
          boldTitle={`کد نویسی`}
          text={`Back End`}
        />
        <ServiceItem
          imageSource={uiDesign}
          boldTitle={`رابط کاربری`}
          text={`Ui Design`}
        />
      </div>
    </div>
  )
}

export default Services
