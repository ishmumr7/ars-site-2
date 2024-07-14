import About from "@/components/Home/About/About";
import styles from "./page.module.css";
import Hero from "@/components/Home/Hero/Hero";
import HowItWorks from "@/components/Home/HowItWorks/HowItWorks";
import News from "@/components/Home/News/News";

export default function Home() {
  return (
    <div className={styles.homepage}>
      <Hero />
      <HowItWorks />
      <News />
      <About />
    </div>
  );
}
