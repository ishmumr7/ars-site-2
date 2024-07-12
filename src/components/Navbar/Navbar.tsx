import styles from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <span>Placeholder</span>
      <div>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Custom Solutions</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}
