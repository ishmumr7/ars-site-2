import styles from "./Contact.module.css";
import { CSSProperties } from "react";
import {
  FaSquareInstagram,
  FaLinkedin,
  FaFacebook,
  FaLocationDot,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.contact_main}>
        <div className={styles.contact_container}>
          <div className={styles.contact_title}>
            <div>Contact us for a solution tailored to meet your needs</div>
          </div>
          <div className={styles.contact_details}>
            <a
              href="https://www.instagram.com/arsystems.sa?igsh=ZTRqZ3d6NDh0eXYw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.item}>
                <FaSquareInstagram />
                <div className={styles.item_text}>
                  <div className={styles.item_title}>Instagram</div>
                  <div className={styles.item_other}>@arsystems.sa</div>
                </div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/advanced-robotics-systems/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.item}>
                <FaLinkedin />
                <div className={styles.item_text}>
                  <div className={styles.item_title}>LinkedIn</div>
                  <div className={styles.item_other}></div>
                </div>
              </div>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61562469073840&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.item}>
                <FaFacebook />
                <div className={styles.item_text}>
                  <div className={styles.item_title}>Facebook</div>
                  <div className={styles.item_other}></div>
                </div>
              </div>
            </a>
            <div className={`${styles.item} ${styles.item_big}`}>
              <MdEmail />
              <div className={`${styles.item_text} ${styles.item_text_big}`}>
                <div className={styles.item_title}>Email&nbsp;:</div>
                <div className={styles.item_other}>inquires@arsystems.org</div>
              </div>
            </div>
            <div className={`${styles.item} ${styles.item_big}`}>
              <MdEmail />
              <div className={`${styles.item_text} ${styles.item_text_big}`}>
                <div className={styles.item_title}>Phone&nbsp;No&nbsp;:</div>
                <div className={styles.item_other}>
                  +966&nbsp;50&nbsp;312&nbsp;4449
                </div>
              </div>
            </div>
            <div className={`${styles.item} ${styles.item_big}`}>
              <FaLocationDot style={{ margin: "2px" }} />
              <div className={`${styles.item_text} ${styles.item_text_big}`}>
                <div style={{ fontSize: "16px" }} className={styles.item_title}>
                  Address&nbsp;:
                </div>
                <div style={{ fontSize: "14px" }} className={styles.item_other}>
                  R&D Office: 7012 Al Farazdaq St, Ad Dhubbat, Riyadh 12627,
                  Saudi Arabia
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <p>&copy; 2024 ARS. All Rights Reserved</p>
        <ul>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
}
