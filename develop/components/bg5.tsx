import type { NextPage } from "next";
import { Button } from "@mui/material";

export type Bg5Type = {
  className?: string;
};

const Bg5: NextPage<Bg5Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[74.063rem] relative bg-black z-[10] text-left text-[1.875rem] text-white font-inter ${className}`}
    >
      <div className="absolute top-[0rem] left-[0rem] bg-black w-full h-full hidden" />
      <img
        className="absolute top-[0rem] left-[0rem] w-full h-full object-cover z-[1]"
        alt=""
        src="/4-1@2x.png"
      />
      <div className="absolute top-[4.063rem] left-[33rem] shadow-[20px_20px_20px_rgba(0,_0,_0,_0.4)] rounded-71xl [background:linear-gradient(161.91deg,_#222,_#414141)] border-black border-[1px] border-solid box-border w-[52.875rem] h-[64.375rem] z-[11]">
        <div className="absolute top-[0rem] left-[0rem] shadow-[20px_20px_20px_rgba(0,_0,_0,_0.4)] rounded-71xl [background:linear-gradient(161.91deg,_#222,_#414141)] border-black border-[1px] border-solid box-border w-full h-full hidden" />
        <h1 className="m-0 absolute top-[19.25rem] left-[5.563rem] text-[3.438rem] font-bold font-[inherit] text-center z-[1] mq450:text-[2.063rem] mq825:text-[2.75rem]">
          SOMENTE NESSA PÁGINA
        </h1>
        <h1 className="m-0 absolute top-[25.625rem] left-[3.188rem] text-[3.125rem] font-bold font-[inherit] text-center z-[1] mq450:text-[1.875rem] mq825:text-[2.5rem]">
          <p className="m-0">CONFEITARIA LUCRATIVA</p>
          <p className="m-0">COM DESCONTO TEMPORÁRIO</p>
        </h1>
        <div className="absolute top-[35.438rem] left-[16.875rem] z-[1] mq450:text-[1.125rem] mq825:text-[1.5rem]">
          <span className="font-light">{`DE: `}</span>
          <b className="text-[3.125rem]">R$ 997,00</b>
        </div>
        <div className="absolute top-[43.688rem] left-[10.5rem] z-[1] mq450:text-[1.125rem] mq825:text-[1.5rem]">
          <span className="font-light">{`12x de: `}</span>
          <b className="text-[5.625rem]">R$ 29,82</b>
        </div>
        <div className="absolute top-[40.688rem] left-[21.313rem] font-light z-[1] mq450:text-[1.125rem] mq825:text-[1.5rem]">
          POR APENAS
        </div>
        <div className="absolute top-[50.5rem] left-[11.688rem] font-light z-[1] mq450:text-[1.125rem] mq825:text-[1.5rem]">
          (ou com 17% de desconto à vista)
        </div>
        <img
          className="absolute top-[0rem] left-[7.375rem] w-[38.125rem] h-[22.375rem] object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/mockup-as-1@2x.png"
        />
        <Button
          className="absolute top-[55.313rem] left-[0rem] z-[12]"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "30",
            background:
              "linear-gradient(90deg, #008325 0.32%, #2bff67 51.18%, #008325)",
            borderRadius: "0px 0px 0px 0px",
            "&:hover": {
              background:
                "linear-gradient(90deg, #008325 0.32%, #2bff67 51.18%, #008325)",
            },
            width: 846,
            height: 79,
          }}
        >
          QUERO APROVEITAR O DESCONTO
        </Button>
      </div>
    </div>
  );
};

export default Bg5;
