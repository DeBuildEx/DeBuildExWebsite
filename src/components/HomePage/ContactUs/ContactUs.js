import React from "react"
//images
import teamPicture from "src/images/team.jpg"
import phonePicture from "src/images/phone.svg"
import mailPicture from "src/images/mail.svg"
import whatsAppPicture from "src/images/whatsApp.svg"
import telegramPicture from "src/images/telegram.svg"
//styles
import styles from "./ContactUs.module.scss"

const ContactUs = () => {
  return (
    <div className={styles.contactUs}>
      <h2>تماس با ما</h2>
      <div className={styles.formContainer}>
        <form>
          <fieldset>
            <legend>فرم تماس با ما</legend>
            <label>
              <i className={`icon ion-md-person`}></i>

              <input required type="text" placeholder="نام شما" />
            </label>

            <label>
              <i className={`icon ion-md-at`}></i>

              <input required type="email" placeholder="آدرس ایمیل شما" />
            </label>
            <textarea required placeholder="پیام شما"></textarea>
            <button type="submit">
              <span>ارسال پیام</span>
              <i className={`icon ion-md-arrow-back`}></i>
            </button>
          </fieldset>
        </form>
        <div className={styles.contactInformation}>
          <div
            className={styles.headerPicture}
            style={{ background: `url(${teamPicture})` }}
          ></div>
          <div className={styles.infoContainer}>
            <div>
              <div
                className={styles.image}
                style={{ background: `url(${phonePicture})` }}
              ></div>

              <p>021-4435-3164</p>
            </div>
            <div>
              <div
                className={styles.image}
                style={{ background: `url(${mailPicture})` }}
              ></div>
              <p>021-4435-3164</p>
            </div>
            <div>
              <div
                className={styles.image}
                style={{ background: `url(${whatsAppPicture})` }}
              ></div>
              <p>021-4435-3164</p>
            </div>
            <div>
              <div
                className={styles.image}
                style={{ background: `url(${telegramPicture})` }}
              ></div>
              <p>021-4435-3164</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
