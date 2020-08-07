import React from "react"
//images
import dribblePicture from "src/images/dribble.svg"
import githubPicture from "src/images/github.svg"
import instagramPicture from "src/images/instagram.svg"
import telegramPicture from "src/images/telegram.svg"
import behancePicture from "src/images/behance.svg"
import twitterPicture from "src/images/twitter.svg"

//styles
import styles from "./Footer.module.scss"
const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul>
        <li>
          <a style={{ background: `url(${dribblePicture})` }}></a>
        </li>
        <li>
          <a style={{ background: `url(${githubPicture})` }}></a>
        </li>
        <li>
          <a style={{ background: `url(${instagramPicture})` }}></a>
        </li>
        <li>
          <a style={{ background: `url(${telegramPicture})` }}></a>
        </li>
        <li>
          <a style={{ background: `url(${behancePicture})` }}></a>
        </li>
        <li>
          <a style={{ background: `url(${twitterPicture})` }}></a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
