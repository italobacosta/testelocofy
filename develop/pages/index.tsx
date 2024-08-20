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

const PaginaVendasTuani: NextPage = () => {
  return (
    <div className="w-full relative bg-moccasin overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <FrameComponent />
      <FrameComponent1 />
      <section className="self-stretch flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[5.625rem] box-border shrink-0 max-w-full mt-[-5.75rem] mq1275:pb-[1.563rem] mq1275:box-border mq450:pb-[1.25rem] mq450:box-border">
        <BG />
        <Bg4 />
        <FrameComponent2 />
      </section>
      <Bg7 />
      <section className="self-stretch flex flex-col items-start justify-start shrink-0 max-w-full mt-[-5.75rem]">
        <Bg1 />
        <Bg5 />
        <div className="self-stretch h-[76.375rem] relative">
          <Bg2 />
          <Bg3 />
        </div>
        <Bg6 />
      </section>
    </div>
  );
};

export default PaginaVendasTuani;
