import NextLink from "next/link";
import styles from "./page.module.css";
import { IoConstructOutline, IoArrowBack } from "react-icons/io5";
import ars_w1 from "../../../public/assets/ARS_W1.png";
import Image from "next/image";

export default function page() {
  return (
    <div className={styles.construction}>
      <div className={styles.bg_image}>
        <div>
          <Image src={ars_w1} alt="Background" fill />
        </div>
      </div>
      <NextLink href="/">
        <button>
          <IoArrowBack />
        </button>
      </NextLink>
      <div className={styles.construction_container}>
        <div>
          <span>
            <IoConstructOutline />
          </span>
          <p>This Page is still under Construction...</p>
        </div>
      </div>
    </div>
  );
}
