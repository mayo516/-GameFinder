import styles from "./page.module.css";
import Window from "../pages/window/Window";
import Footer from "@/component/Footer";

export default function Home() {
  return (
    <>
      <div className={styles.div}>
        <Window />
        <Footer />
      </div>
    </>
  );
}
