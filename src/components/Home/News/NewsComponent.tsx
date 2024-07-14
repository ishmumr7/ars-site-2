import Image, { StaticImageData } from "next/image";
import styles from "./NewsComponent.module.css";
import { CSSProperties } from "react";

type NewsProp = {
  image: StaticImageData;
  title: String;
  text: String;
};

const ImageStyles: CSSProperties = {
  objectFit: "cover",
  borderTopRightRadius: "10px",
  borderTopLeftRadius: "10px",
};

export default function NewsComponent({ image, title, text }: NewsProp) {
  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <Image src={image} alt="Image" fill style={ImageStyles} />
      </div>
      <div className={styles.card_content}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
