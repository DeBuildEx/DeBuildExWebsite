import React from "react";
import styles from "./SingularMember.module.scss";
import { Link } from "react-router-dom";
function SingularMember({ name, role, avatar='/images/avatar-ph.jpg' , link, count,className }) {
  return (
    <div className={styles.singularMemberItemContainer + ' ' + className}>
      <div className={styles.singularMemberItem}>
        <div className={styles.avatar}>
          <img src={process.env.PUBLIC_URL+avatar} alt={name} />
        </div>
        <div className={styles.content}>
          <h4>{role}</h4>
          <h3>{name}</h3>
        <div className={styles.footer}>  <span>مشارکت در {count} پروژه</span>
          <Link to={'member/'+link}>
            <button className="primary">مشاهده جزئیات</button>
          </Link></div>
        </div>
      </div>
    </div>
  );
}

export default SingularMember;
