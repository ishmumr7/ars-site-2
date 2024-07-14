import styles from "./About.module.css";
import Image from "next/image";
import bg_image from "../../../../public/assets/warehouse_bg.png";
import jawahir from "../../../../public/assets/JAWAHIR-1.jpg";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.about_bg}>
        <Image src={bg_image} alt="ARS" fill style={{ objectFit: "cover" }} />
      </div>
      <div className={styles.about_bg_mask}></div>
      <div className={styles.about_who}>
        <h1>Who are We</h1>
        <p>
          Advanced Robotics System is an Industrial Automation & Robotic company
          focused on the R&D and deployment aspects of Industrial Automation.
          Using our in-house robotics and automation system, we target to
          streamline the factory floor to IR 4.0 category.
        </p>
        <h3>What we Aim to Server our Customers</h3>
        <p>
          Our Mission <strong>"Full House Automation"</strong>
          <br />
          This system consists of the following three categories mentioned
          below, our target is to implement the following systems in a factory
          together thus the client can have a high margin in <em>Production</em>
          , <em>Labour Savings</em>, and <em>Efficiency</em>.
        </p>
      </div>
      <div className={styles.about_partner}>
        <h1>Our Strategic Partner</h1>
        <div className={styles.line}></div>
        <div className={styles.partner_image}>
          <div>
            <Image className="image" src={jawahir} alt="Jawahir" fill />
          </div>
        </div>
      </div>
    </div>
  );
}
