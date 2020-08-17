import React from "react";
import CurvedBox from "Components/Layout/CurvedBox/CurvedBox"
import Navbar from "Components/Navbar/Navbar";
import styles from './Layout.module.scss';
function Layout(props) {
  return (
    <main>
      <CurvedBox loc='a' background="#358" style={{'z-index':'8'}}>
        <header>
        <Navbar></Navbar> 
        <div className={styles.logo}>
          <img src="/logo.png" alt="amir"/>
        </div>
        </header>
        <section class={styles.pageMeta}>
          <h1>
            طراحی، ساخت و اجرا
          </h1>
        </section>
        <div className={styles.pageThumb}>
          <img src="/images/mainpagethumb.jpg" />
        </div>
      </CurvedBox>
      <div className={styles.content}>
        {props.children}
      </div>
    </main>
  );
}

export default Layout;
