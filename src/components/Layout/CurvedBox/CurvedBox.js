import React from "react";
import styles from "./CurvedBox.module.scss";
function CurvedBox(props) {
  console.log(props.after);
  return (
    <div
      className={styles.curveContainer + " " + (styles[props.loc]  || '') + ' '+ (props.className || '')}
      style={{ "background-color": props.background,...props.style}}
    >
      {props.children}
    </div>
  );
}

export default CurvedBox;
