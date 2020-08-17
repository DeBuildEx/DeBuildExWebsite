import React from "react";
import Layout from "Components/Layout/Layout";
import CurvedBox from "Components/Layout/CurvedBox/CurvedBox";
import styles from './Main.module.scss'
function Main() {
  return (
    <Layout>
      <CurvedBox loc='a' background="#199" className={styles['m-90']}>
        سلام دنیا
      </CurvedBox>
    </Layout>
  );
}

export default Main;
