import styles from "./Navbar.module.css";
import Image from "next/image";
import ars_logo from "../../../public/assets/ARS_2_cropped.png";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <span>
        <Image className="image" src={ars_logo} alt="ARS Logo" fill />
      </span>
      <div>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Custom Solutions</a>
        <a href="#">About</a>
        <a href="#">
          Contact <FaArrowRightLong className="btn-arrow" />
        </a>
      </div>
    </nav>
  );
}
