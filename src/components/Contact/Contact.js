import React from "react";
import styles from "./Contact.module.scss";
//import vars from "assets/styles/libs/_vars.scss";
import MaterialIcon from "material-icons-react";

function Contact(props) {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contact}>
        <form>
          <div className={styles.inputIcons}>
            <MaterialIcon icon="person" />
            <input placeholder="نام شما" />
          </div>
          <div className={styles.inputIcons}>
            <MaterialIcon icon="alternate_email" />
            <input placeholder="آدرس ایمیل شما" />
          </div>
          <textarea placeholder="پیام شما" className="message" />
          <button type="submit" className="primary">
            ارسال پیام <MaterialIcon icon="keyboard_backspace" />
          </button>
        </form>
        <div className={styles.banner}>
          <img src={process.env.PUBLIC_URL+"/images/contact.png"} />
          <div className={styles.list}>
            <item>
            <img
                src={process.env.PUBLIC_URL + "/icons/social/telephone.png"}
              />{" "}
             021-4435-3164
            </item>{" "}
            <item>
            <img
                src={process.env.PUBLIC_URL + "/icons/social/email.png"}
              />{" "}
              info@debuildex.ir
            </item>{" "}
            <item>
              <img
                src={process.env.PUBLIC_URL + "/icons/social/whatsapp.png"}
              />{" "}
              980 0878 0912
            </item>{" "}
            <item>
              <img
                src={process.env.PUBLIC_URL + "/icons/social/telegram.png"}
              />{" "}
              thebuildex.ir@
            </item>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
