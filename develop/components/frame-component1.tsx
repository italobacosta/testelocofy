import type { NextPage } from "next";
import { Button } from "@mui/material";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[5.187rem] box-border max-w-full mt-[-5.75rem] text-left text-[1.5rem] text-white font-inter mq1275:pb-[3.375rem] mq1275:box-border mq825:pb-[2.188rem] mq825:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-[10.25rem] px-[20rem] pb-[5.812rem] box-border relative gap-[1rem] shrink-0 max-w-full z-[2] mq1275:pt-[7rem] mq1275:px-[10rem] mq1275:pb-[3.75rem] mq1275:box-border mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:pb-[2.438rem] mq450:box-border mq825:pl-[5rem] mq825:pr-[5rem] mq825:box-border">
        <div className="w-full h-[53rem] absolute !m-[0] right-[0rem] bottom-[0rem] left-[0rem] bg-black" />
        <img
          className="w-full h-[53rem] absolute !m-[0] top-[0rem] right-[0rem] left-[0rem] max-w-full overflow-hidden shrink-0 object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/agrupar-1-6@2x.png"
        />
        <div className="flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.562rem] box-border max-w-full text-[2.625rem]">
          <h2 className="m-0 relative text-inherit font-black font-[inherit] z-[3] mq450:text-[1.563rem] mq825:text-[2.125rem]">
            O que é a Confeitaria Lucrativa?
          </h2>
        </div>
        <div className="relative font-light inline-block max-w-full z-[3] mq450:text-[1.188rem]">
          <p className="[margin-block-start:0] [margin-block-end:10px]">{`A Confeitaria Lucrativa é o único lugar que existe no Brasil `}</p>
          <p className="[margin-block-start:0] [margin-block-end:10px]">{`para você aprender a produzir Entremets aí mesmo na cozinha `}</p>
          <p className="[margin-block-start:0] [margin-block-end:10px]">
            da sua casa.
          </p>
        </div>
        <div className="flex flex-col items-start justify-start max-w-full">
          <div className="flex flex-col items-start justify-start gap-[1.156rem] max-w-full">
            <b className="relative inline-block max-w-full z-[3] mq450:text-[1.188rem]">
              <p className="[margin-block-start:0] [margin-block-end:10px]">{`E ainda com todo o passo-a-passo para você ganhar mais de `}</p>
              <p className="[margin-block-start:0] [margin-block-end:10px]">
                R$ 10.000 por mês fazendo seus Entremets!
              </p>
            </b>
            <div className="relative font-light z-[3] mq450:text-[1.188rem]">
              <p className="[margin-block-start:0] [margin-block-end:10px]">{`Na Confeitaria Lucrativa eu revelo todos os segredos das receitas `}</p>
              <p className="[margin-block-start:0] [margin-block-end:10px]">{`responsáveis pelo faturamento de 7 milhões por ano da minha loja, `}</p>
              <p className="[margin-block-start:0] [margin-block-end:10px]">
                a Bona Petit.
              </p>
            </div>
            <div className="flex flex-row items-start justify-start py-[0rem] pl-[0.062rem] pr-[0rem]">
              <b className="relative inline-block min-h-[6.688rem] z-[3] mq450:text-[1.188rem]">
                <p className="[margin-block-start:0] [margin-block-end:10px]">{`Para você não apenas viver da confeitaria, mas verdadeiramente `}</p>
                <p className="[margin-block-start:0] [margin-block-end:10px]">
                  ENRIQUECER nesse mercado!
                </p>
              </b>
            </div>
          </div>
          <Button
            className="w-[38.688rem] h-[4.938rem] max-w-full z-[3] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "22",
              background:
                "linear-gradient(90deg, #008325, #2bff67 50%, #008325)",
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
      </div>
    </section>
  );
};

export default FrameComponent1;
