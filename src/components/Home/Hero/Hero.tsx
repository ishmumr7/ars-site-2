import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_left}>ARS Logo</div>
      <div className={styles.hero_right}>
        <h1>
          Revolutionizing Automation,
          <br />
          Driving Innovation
        </h1>
      </div>
      <div>
        <button>Next</button>
      </div>
    </div>
  );
}
