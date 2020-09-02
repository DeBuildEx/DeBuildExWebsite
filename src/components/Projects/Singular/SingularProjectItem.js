import React from "react";
import styles from "./SingularProjectItem.module.scss";
import MaterialIcon from "material-icons-react";
import { renderStatus } from "Utils/Functions";
import { Link } from "react-router-dom";
function SingularProjectItem({
  picture = "/images/post-ph.jpg",
  name,
  status,
  slug,
}) {
  return (
    <div className={styles.SingularProjectItemContainer}>
      <div className={styles.SingularProjectItem}>
        <div
          className={styles.image}
          style={{
            backgroundImage: 'url("' + process.env.PUBLIC_URL + picture + '")',
          }}
        ></div>

        <h3>{name}</h3>
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
