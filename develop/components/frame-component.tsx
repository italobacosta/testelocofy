import type { NextPage } from "next";
import { Button } from "@mui/material";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[3.5rem] box-border max-w-full text-left text-[12.5rem] text-black font-inter mq1275:pb-[2.25rem] mq1275:box-border mq825:pb-[1.438rem] mq825:box-border ${className}`}
    >
      <div className="h-[58.75rem] flex-1 relative bg-gainsboro shrink-0 max-w-full">
        <div className="absolute top-[0rem] left-[0rem] bg-gainsboro w-full h-full hidden" />
        <img
          className="absolute top-[0rem] left-[0rem] w-full h-full object-cover z-[1]"
          alt=""
          src="/agrupar-1-5@2x.png"
        />
        <div className="absolute top-[2.25rem] left-[39.063rem] bg-gainsboro w-[42.063rem] h-[46.813rem] z-[2]">
          <div className="absolute top-[0rem] left-[0rem] bg-gainsboro w-full h-full hidden" />
          <h1 className="m-0 absolute top-[12.625rem] left-[8.313rem] text-inherit font-black font-[inherit] z-[1] mq450:text-[3.125rem] mq825:text-[5rem]">
            VSL
          </h1>
        </div>
        <Button
          className="absolute top-[51.563rem] left-[40.625rem] z-[2]"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "22",
            background: "linear-gradient(90deg, #008325, #2bff67 50%, #008325)",
            borderRadius: "0px 0px 0px 0px",
            "&:hover": {
              background:
                "linear-gradient(90deg, #008325, #2bff67 50%, #008325)",
            },
            width: 619,
            height: 79,
          }}
        >
          QUERO ENRIQUECER NA CONFEITARIA
        </Button>
      </div>
    </section>
  );
};

export default FrameComponent;
