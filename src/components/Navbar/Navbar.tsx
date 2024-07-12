"use client";

import styles from "./Navbar.module.css";
import Image from "next/image";
import ars_logo from "../../../public/assets/ARS_2_cropped.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [logo, showLogo] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 600 ? showLogo(true) : showLogo(false);
    });
  }, []);

  return (
    <nav className={styles.navbar}>
      <span className={`${styles.nav_logo} ${logo ? styles.show_logo : ""}`}>
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
