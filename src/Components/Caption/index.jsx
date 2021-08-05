import styles from "./style.module.css";

function Caption() {
  return (
    <div className={styles.caption}>
      <h1>
        Embrace Your Vision<span style={{ color: "#6163ff" }}>.</span>
      </h1>
      <p>
        Perception will not only help people with impaired vision to read and
        write but also to become autonomous, independent and above all to
        embrace their uniqueness.
      </p>
      <a className="btn btn-primary" href="#mission">
        Get more info
      </a>
    </div>
  );
}

export default Caption;
