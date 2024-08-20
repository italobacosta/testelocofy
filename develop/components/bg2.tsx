import type { NextPage } from "next";
import { Button } from "@mui/material";

export type Bg2Type = {
  className?: string;
};

const Bg2: NextPage<Bg2Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0rem] left-[-0.125rem] bg-black w-full h-[32.188rem] z-[11] text-center text-[1.5rem] text-white font-inter ${className}`}
    >
      <div className="absolute top-[0rem] left-[0.125rem] bg-black w-full h-full hidden" />
      <img
        className="absolute top-[0rem] left-[0rem] w-full h-full object-cover"
        loading="lazy"
        alt=""
        src="/7-1@2x.png"
      />
      <h2 className="m-0 absolute top-[3.125rem] left-[33.5rem] text-[2.625rem] font-black font-[inherit] text-moccasin z-[12] mq450:text-[1.563rem] mq825:text-[2.125rem]">
        <p className="[margin-block-start:0] [margin-block-end:8px]">
          Deixa eu te contar um último segredinho 
        </p>
        <p className="[margin-block-start:0] [margin-block-end:8px]">
          antes de você entrar…
        </p>
      </h2>
      <div className="absolute top-[12.25rem] left-[29rem] font-light z-[13] mq450:text-[1.188rem]">
        <p className="[margin-block-start:0] [margin-block-end:10px]">
          Dentro do módulo chamado "Vendas Lucrativas" eu vou te mostrar como
          recuperar
        </p>
        <p className="[margin-block-start:0] [margin-block-end:10px]">
          todo seu investimento na Confeitaria Lucrativa com uma estratégia
          simples de vendas.
        </p>
      </div>
      <b className="absolute top-[17.438rem] left-[35.438rem] inline-block min-h-[6.688rem] z-[12] mq450:text-[1.188rem]">
        <p className="[margin-block-start:0] [margin-block-end:10px]">{`Apenas com esse bônus você já consegue recuperar todo seu `}</p>
        <p className="[margin-block-start:0] [margin-block-end:10px]">
          investimento no curso antes mesmo da segunda parcela chegar. 
        </p>
      </b>
      <Button
        className="absolute top-[23.063rem] left-[39.813rem] z-[13]"
        disableElevation
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#000",
          fontSize: "22",
          background:
            "linear-gradient(90deg, #008325 0.32%, #2bff67 51.18%, #008325)",
          borderRadius: "0px 0px 0px 0px",
          "&:hover": {
            background:
              "linear-gradient(90deg, #008325 0.32%, #2bff67 51.18%, #008325)",
          },
          width: 619,
          height: 79,
        }}
      >
        QUERO CONHECER ESSA ESTRATÉGIA
      </Button>
    </div>
  );
};

export default Bg2;
