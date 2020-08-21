import React from "react";
import styles from "./SingularMember.module.scss";
import { Link } from "react-router-dom";
function SingularMember({ name, role, avatar, link , count }) {
  return (
    <div className={styles.singularMemberItemContainer}>
      <div className={styles.singularMemberItem}>
        <div
          className={styles.avatar}
        >
            <img src={avatar} alt={name} />
        </div>
        <div className={styles.content}>
  <h4>{role}</h4>
  <h3>{name}</h3>
  <span>مشارکت در {count} پروژه</span>
  <Link to={link} ><button className='secondery'>مشاهده جزئیات</button></Link>
        </div>
      </div>
    </div>
  );
}

export default SingularMember;
