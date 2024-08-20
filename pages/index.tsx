import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import BG from "../components/b-g";
import Bg4 from "../components/bg4";
import FrameComponent2 from "../components/frame-component2";
import Bg7 from "../components/bg7";
import Bg1 from "../components/bg1";
import Bg5 from "../components/bg5";
import Bg2 from "../components/bg2";
import Bg3 from "../components/bg3";
import Bg6 from "../components/bg6";
import styles from "./index.module.css";

const PaginaVendasTuani: NextPage = () => {
  return (
    <div className={styles.paginaVendasTuani}>
      <FrameComponent />
      <FrameComponent1 />
      <section className={styles.bgParent}>
        <BG />
        <Bg4 />
        <FrameComponent2 />
      </section>
      <Bg7 />
      <section className={styles.bgGroup}>
        <Bg1 />
        <Bg5 />
        <div className={styles.testimonial}>
          <Bg2 />
          <Bg3 />
        </div>
        <Bg6 />
      </section>
    </div>
  );
};

export default PaginaVendasTuani;
