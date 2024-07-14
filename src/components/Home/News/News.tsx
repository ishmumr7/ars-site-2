import styles from "./News.module.css";
import n_1 from "../../../../public/assets/N_1.jpeg";
import { CSSProperties } from "react";
import Image from "next/image";

export default function News() {
  const ImageStyles: CSSProperties = {
    objectFit: "cover",
    borderTopRightRadius: "10px",
    borderTopLeftRadius: "10px",
  };
  return (
    <div className={styles.news}>
      <div className={styles.news_header}>
        <span>News</span>
        <span className={styles.placeholder}></span>
      </div>
      <div className={styles.news_content}>
        <div className={styles.card}>
          <div className={styles.card_image}>
            <Image src={n_1} alt="Image" fill style={ImageStyles} />
          </div>
          <div className={styles.card_content}>
            <h2>Our Vision</h2>
            <p>
              Advanced Robotics Systems (ARS) is thrilled to announce its
              official launch today (15th July 2024). The event marks a
              significant milestone in advancing Industrial robotics and
              automation technology in the Saudi Vision 20230, promising
              revolutionary solutions for various industries.
              <br />
              "We thrive on solving the pain points of industry where automation
              and robotics systems can be implemented. High-quality output,
              required cycle time, and easy maintenance are some of our primary
              objectives when building a system."
              <br />
              Founder & CTO - Abrar Hussain
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
