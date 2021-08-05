import styles from "./style.module.css";
import { useState } from "react";

function Title(props) {
  const [overlay, setOverlay] = useState(false);
  let content = props.content;

  function overlayHandlerIn() {
    setOverlay(true);
  }

  function overlayHandlerOut() {
    setOverlay(false);
  }

  return (
    <div className={styles.card}>
      <div
        className={styles.team}
        style={{ backgroundImage: `url("${content.image}")` }}
        onMouseEnter={overlayHandlerIn}
        onMouseLeave={overlayHandlerOut}
      >
        <div className={overlay ? styles.overlay : ""}></div>
      </div>
      <div className={styles.info}>
        <h4>
          {content.firstname} <span className={overlay ? styles.lname: styles.lnameHide}>{content.lastname}</span>
        </h4>
        <p>{content.team}</p>
      </div>
    </div>
  );
}

export default Title;
