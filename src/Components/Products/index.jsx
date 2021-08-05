import styles from "./style.module.css";
import Title from "../UI/Title";
import Product from "../Product";
import { useState } from "react";

function Products() {
  const glasses = {
    image: "icons/glasses.svg",
    title: "Perception Glasses",
    desc: "Smart glasses based on artificial intelligence that allow the user to read any picture by detecting the text. Perception Glasses can be used by visually impaired people, and those who struggle to read.",
  };

  const writing = {
    image: "icons/write.svg",
    title: "Perception Writing",
    desc: "Perception Write is a pen that allows its user to overcome his disability and get even more autonomy and independence through a pen plotter.",
  };

  const [index, setIndex] = useState(1);
  const [content, setContent] = useState(glasses);

  const data = [glasses, writing];

  function next() {
    setIndex((index + 1) % 2);
    setContent(data[index])
  }

  return (
    <div id="products" className={styles.products}>
      <Title>Our Impressive products</Title>
      <div className={styles.section}>
        <img
          className={styles.arrows}
          onClick={next}
          src="icons/left.svg"
          alt="left"
        />
        <Product content={content} />
        <img
          className={styles.arrows}
          onClick={next}
          src="icons/right.svg"
          alt="right"
        />
      </div>
    </div>
  );
}

export default Products;
