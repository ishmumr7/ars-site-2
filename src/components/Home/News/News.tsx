import styles from "./News.module.css";
import NewsComponent from "./NewsComponent";
import bg_image from "../../../../public/assets/warehouse_bg.png";

export default function News() {
  return (
    <div className={styles.news}>
      <div className={styles.news_header}>
        <span>News</span>
        <span className={styles.placeholder}></span>
      </div>
      <div className={styles.news_content}>
        <NewsComponent image={bg_image} title="Test 1" text="Some Text" />
      </div>
    </div>
  );
}
