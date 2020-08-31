import React from "react";
import styles from "./testimonialItem.module.scss"
function testimonialItem({ avatar=process.env.PUBLIC_URL+'/images/avatar-ph.jpg', name, content }) {
  return (
    <div className={styles.testimonialItem}>
      <div className={styles.meta}>
        <img src={avatar} alt={name} />
        <span>{name}</span>
      </div>
      <p>{content}</p>
    </div>
  );
}

export default testimonialItem;
