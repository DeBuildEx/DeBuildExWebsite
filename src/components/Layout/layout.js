import React from "react";
import CurvedBox from "Components/Layout/CurvedBox/CurvedBox";
import Navbar from "Components/NavBar/NavBar";
import styles from "./Layout.module.scss";
function Layout(props) {
  return (
    <main>
      <CurvedBox loc="a" background="#358" style={{ "z-index": "8" }}>
        <header>
          <Navbar></Navbar>
          <div className={styles.logo}>
            <img src={process.env.PUBLIC_URL+"/logo.png"} alt="amir" />
          </div>
        </header>
        <section class={styles.pageMeta}>
          <h1>{props.pageTitle}</h1>
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
