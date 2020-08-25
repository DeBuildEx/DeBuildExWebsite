import React from "react";
import styles from "./SocialBar.module.scss";
import { Link } from "react-router-dom";
function SocialBar() {

  return <div className={styles.socialBar}>
      <a href="#">
          <img src={process.env.PUBLIC_URL+'/icons/social/twitter.png'} />
      </a>
      <a href="#">
          <img src={process.env.PUBLIC_URL+'/icons/social/behance.png'} />
      </a>
      <a href="#">
          <img src={process.env.PUBLIC_URL+'/icons/social/telegram.png'} />
      </a>
      <a href="#">
          <img src={process.env.PUBLIC_URL+'/icons/social/instagram.png'} />
      </a>
      <a href="#">
          <img src={process.env.PUBLIC_URL+'/icons/social/github.png'} />
      </a>
      <a href="#">
          <img src={process.env.PUBLIC_URL+'/icons/social/dribbble.png'} />
      </a>
  </div>;

}

export default SocialBar;
