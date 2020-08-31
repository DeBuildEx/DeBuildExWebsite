import React from "react";
import styles from "./SingularProjectItem.module.scss";
import MaterialIcon from "material-icons-react";
const renderStatus = (i, callback) => {
  switch (i) {
    case 1:
      return callback({ name: "انجام شده", class: "green", icon:"check_circle" });
    case 2:
      return callback({ name: "در حال اجرا", class: "yellow" ,icon:"av_timer" });
    case 3:
      return callback({ name: "در حال تست", class: "blue", icon:"playlist_add_check" });
  }
  //return;
};
function SingularProjectItem({ picture='/images/post-ph.jpg', name, status, link }) {
  return (
    <div className={styles.SingularProjectItemContainer}>
      <div className={styles.SingularProjectItem}>
        <div
          className={styles.image}
          style={{ backgroundImage: 'url("' + process.env.PUBLIC_URL+picture + '")' }}
        ></div>

        <h3>{name}</h3>
        <div className={styles.meta}>
          {renderStatus(status, (o) => (
            <button className={styles.projectInfo + " " + o.class}>
              {o.name}
              <MaterialIcon icon={o.icon} />
            </button>
          ))}
          <button className={"flat dark "+styles.forwardIcon}>
            مشاهده جزئیات <MaterialIcon icon='arrow_back_ios' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingularProjectItem;
