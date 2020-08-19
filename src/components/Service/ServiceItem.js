import React from "react";
import styles from "./ServiceItem.module.scss";
function ServiceItem({ image, title, subtitle }) {
  return (
    <div className={styles.serviceItemContainer}>
      <div className={styles.serviceItem}>
        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.title}>
          <h2>{title}</h2>
          <span>{subtitle}</span>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
