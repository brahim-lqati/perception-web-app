import styles from "./style.module.css";

function Title(props) {
  return <h2 className={styles.title}>{props.children}</h2>;
}

export default Title;
