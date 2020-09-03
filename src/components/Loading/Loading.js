import React from "react";
import styles from "./Loading.module.scss";
import ReactLoading from "react-loading";
import vars from "assets/styles/libs/_vars.scss";

function Loading({}) {
  return (
    <div className={styles.loadingBox}>
      <ReactLoading type={'bubbles'} color={vars.seconderyWhite} />
    </div>
  );
}

export default Loading;
