import styles from "./page.module.scss";
import Window from "../pages/window/Window";
import Footer from "@/component/Footer";

export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <Window />
        <Footer />
      </div>
    </>
  );
}
