import styles from "./style.module.css";
import Title from "../UI/Title";

function Partners() {

  return (
    <div id="partners" className={styles.partners}>
      <Title>Our Amazing Partners</Title>
      <div className={styles.group}>
        <img src="icons/microsoft.png" alt="microsoft" />
        <img src="icons/microsoft.png" alt="microsoft" />
        <img src="icons/microsoft.png" alt="microsoft" />
        <img src="icons/microsoft.png" alt="microsoft" />
      </div>
    </div>
  );
}

export default Partners;
