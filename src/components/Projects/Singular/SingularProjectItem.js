import React from "react";
import styles from "./SingularProjectItem.module.scss";
import MaterialIcon from "material-icons-react";
import { renderStatus } from "Utils/Functions";
import { Link } from "react-router-dom";
function SingularProjectItem({
  thumb = process.env.PUBLIC_URL+"/images/post-ph.jpg",
  title,
  status,
  slug,
}) {
  return (
    <div className={styles.SingularProjectItemContainer}>
      <div className={styles.SingularProjectItem}>
        <div
          className={styles.image}
          style={{
            backgroundImage: 'url("'+ thumb + '")',
          }}
        ></div>

        <h3>{title}</h3>
        <div className={styles.meta}>
          {renderStatus(status, (o) => (
            <button className={styles.projectInfo + " " + o.class}>
              {o.name}
              <MaterialIcon icon={o.icon} />
            </button>
          ))}
          <Link to={"project/" + slug}>
            <button className={"flat dark " + styles.forwardIcon}>
              مشاهده جزئیات <MaterialIcon icon="arrow_back_ios" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingularProjectItem;
