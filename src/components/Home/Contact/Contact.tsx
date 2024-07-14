import styles from "./Contact.module.css";
import telephone_img from "../../../../public/assets/telephone_converted.png";
import Image from "next/image";
import { CSSProperties } from "react";
import {
  FaSquareInstagram,
  FaLinkedin,
  FaFacebook,
  FaLocationDot,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const ImageStyles: CSSProperties = {
    objectFit: "cover",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
  };

  return (
    <div className={styles.contact}>
      <div className={styles.contact_main}>
        <div className={styles.contact_container}>
          <div className={styles.contact_img}>
            <div>
              <Image
                src={telephone_img}
                alt="Contact Us"
                fill
                style={ImageStyles}
              />
            </div>
          </div>
          <div className={styles.contact_details}>
            <div className={styles.item}>
              <FaSquareInstagram />
              <div className={styles.item_text}>
                <div className={styles.item_title}>Instagram</div>
                <div className={styles.item_other}>@arsystems.sa</div>
              </div>
            </div>
            <div className={styles.item}>
              <FaLinkedin />
              <div className={styles.item_text}>
                <div className={styles.item_title}>LinkedIn</div>
                <div className={styles.item_other}></div>
              </div>
            </div>
            <div className={styles.item}>
              <FaFacebook />
              <div className={styles.item_text}>
                <div className={styles.item_title}>Facebook</div>
                <div className={styles.item_other}></div>
              </div>
            </div>
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
      <div className={styles.footer}></div>
    </div>
  );
}
