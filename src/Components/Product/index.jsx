import styles from "./style.module.css";

function Product(props) {
  let content = props.content;
  return (
    <div className={styles.product}>
      <img src={content.image} alt="glasses" />
      <div className="decription">
        <h3>
          {content.title}<span>.</span>
        </h3>
        <p>
          {content.desc}
        </p>
        <a href="#home">Buy</a>
      </div>
    </div>
  );
}

export default Product;