import React from "react";
import styles from "./SingularProjectItem.module.scss";
const renderStatus = (i, callback) => {
  switch (i) {
    case '1':
      return callback({ name: "انجام شده", class: "green" });
    case '2':
      return callback({ name: "در حال اجرا", class: "yellow" });
    case '3':
      return callback({ name: "در حال تست", class: "blue" });
  }
  //return;
};
function SingularProjectItem({ picture, name, status, link }) {
  return (
    <div className={styles.SingularProjectItemContainer}>
      <div className={styles.SingularProjectItem}>
        <div
          className={styles.image}
          style={{ backgroundImage: 'url("' + picture + '")' }}
        ></div>

        <h3>{name}</h3>
        <div className={styles.meta}>
          {renderStatus(status, (o) => (
            <button className={styles.projectInfo + " " + o.class}>
              {o.name}
            </button>
          ))}
          <button className={"flat dark"}>
            مشاهده جزئیات <i className={"custom forward"}></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingularProjectItem;
