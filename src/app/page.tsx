import styles from "./page.module.css";
import Window from "../pages/window/Window";
import Footer from "@/component/Footer";
import { Reset } from "styled-reset";

export default function Home() {
  return (
    <>
      <div className={styles.div}>
        {/* <Reset /> */}
        <Window />
        <Footer />
      </div>
    </>
  );
}
