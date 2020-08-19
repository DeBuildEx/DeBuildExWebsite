import React from "react";
import styles from "./SingularProjectItem.module.scss";
function SingularProjectItem({ picture, name, status, link }) {
  return (
    <div className={styles.SingularProjectItemContainer}>
      <div className={styles.SingularProjectItem}>
          <div className={styles.image} style={{backgroundImage:('url("'+picture+'")')}} >
          </div>
          
        <h3>{name}</h3>
        <div className={styles.meta}>
          <button className={styles.success}>اجرا شده</button>
          <button className={"flat"}>مشاهده جزئیات</button>
        </div>
      </div>
    </div>
  );
}

export default SingularProjectItem;
