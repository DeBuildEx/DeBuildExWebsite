import React from "react";
import styles from "./SocialBar.module.scss";
function SocialBar() {

  return <div className={styles.socialBar}>
      <a href="https://twitter.com/" rel='nofollow'>
          <img src={process.env.PUBLIC_URL+'/icons/social/twitter.png'} alt="توئیتر"/>
      </a>
      <a href="https://behance.com/" rel='nofollow'>
          <img src={process.env.PUBLIC_URL+'/icons/social/behance.png'} alt="بی هنس"/>
      </a>
      <a href="https://telegram.me/" rel='nofollow'>
          <img src={process.env.PUBLIC_URL+'/icons/social/telegram.png'} alt="تلگرام"/>
      </a>
      <a href="https://instagram.com/" rel='nofollow'>
          <img src={process.env.PUBLIC_URL+'/icons/social/instagram.png'} alt="اینستاگرام"/>
      </a>
      <a href="https://github.com/" rel='nofollow'>
          <img src={process.env.PUBLIC_URL+'/icons/social/github.png'} alt="گیت هاب"/>
      </a>
      <a href="https://dribbble.com/" rel='nofollow'>
          <img src={process.env.PUBLIC_URL+'/icons/social/dribbble.png'} alt="دریبل"/>
      </a>
  </div>;

}

export default SocialBar;
