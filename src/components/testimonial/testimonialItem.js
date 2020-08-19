import React from "react";
import styles from "./testimonialItem.module.scss"
function testimonialItem({ avatar, name, content }) {
  return (
    <div className={styles.testimonialItem}>
      <div className={styles.meta}>
        <img src={avatar} />
        <span>{name}</span>
      </div>
      <p>{content}</p>
    </div>
  );
}

export default testimonialItem;
