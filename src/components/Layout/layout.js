import React from "react";
import CurvedBox from "Components/Layout/CurvedBox/CurvedBox";
import Navbar from "Components/NavBar/NavBar";
import styles from "./Layout.module.scss";
import vars from "assets/styles/libs/_vars.scss";

function Layout(props) {
  return (
    <main>
      <CurvedBox loc="a" background={vars.primaryColor} >
        <header>
          <Navbar></Navbar>
          <div className={styles.logo}>
            <img src={process.env.PUBLIC_URL+"/logo.png"} alt="amir" />
          </div>
        </header>
        <section class={styles.pageMeta}>
          <h1 className="light">{props.pageTitle}</h1>
        </section>
        {props.pageThumb && (
          <div className={styles.pageThumb}>
            <img src={props.pageThumb} />
          </div>
        )}
      </CurvedBox>
      <div className={props.pageThumb ? styles.content : styles.contentNoThumb}>
        {props.children}
      </div>
    </main>
  );
}

export default Layout;
