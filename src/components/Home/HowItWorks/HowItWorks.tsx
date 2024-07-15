import styles from "./HowItWorks.module.css";
import Image from "next/image";
import bg_pic from "../../../../public/assets/warehouse_bg.png";
import a_500 from "../../../../public/assets/A500_render_cropped.png";

export default function HowItWorks() {
  return (
    <div className={styles.how} id="how">
      <div className={styles.bg_container}>
        <div>
          <Image className="bg-image" src={bg_pic} alt="Background" fill />
        </div>
      </div>
      <div className={styles.how_container}>
        <div className={styles.how_left}>
          <div>
            <h3>One Stop Solution for</h3>
            <h1>Industry 4.0 AMR</h1>
            <p>
              One Stop Solution for INDUSTRY 4.0 AMR Designed to optimize your
              workflows, increase your productivity, and reduce your costs.
              Whether you need to transport materials or deliver goods, we have
              the right solution for you.
            </p>
          </div>
        </div>
        <div className={styles.how_right}>
          <div className={styles.amr_name}>
            A Series
            <br />
            A-500
          </div>
          <div className={styles.amr_container}>
            <Image className="image" src={a_500} alt="A-500 Render" fill />
          </div>
        </div>
      </div>
    </div>
  );
}
