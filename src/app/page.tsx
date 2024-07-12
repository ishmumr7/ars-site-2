import styles from "./page.module.css";
import Hero from "@/components/Home/Hero/Hero";
import HowItWorks from "@/components/Home/HowItWorks/HowItWorks";

export default function Home() {
  return (
    <div className={styles.homepage}>
      <Hero />
      <HowItWorks />
    </div>
  );
}
