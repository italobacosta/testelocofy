import type { NextPage } from "next";
import { Button } from "@mui/material";

export type Bg7Type = {
  className?: string;
};

const Bg7: NextPage<Bg7Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-black flex flex-col items-end justify-start pt-[3.75rem] px-[20.375rem] pb-[5.75rem] box-border relative gap-[3.312rem] shrink-0 max-w-full z-[6] mt-[-5.75rem] text-center text-[2.625rem] text-white font-inter mq1275:pl-[10.188rem] mq1275:pr-[10.188rem] mq1275:pb-[3.75rem] mq1275:box-border mq825:gap-[1.625rem] mq825:pl-[5.063rem] mq825:pr-[5.063rem] mq825:pb-[2.438rem] mq825:box-border ${className}`}
    >
      <div className="w-[120rem] h-[81.75rem] relative bg-black hidden max-w-full z-[0]" />
      <img
        className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] object-cover z-[1]"
        alt=""
        src="/1-4@2x.png"
      />
      <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pl-[0rem] pr-[1.25rem] box-border max-w-full text-springgreen">
        <h2 className="m-0 w-[63.25rem] relative text-inherit font-black font-[inherit] inline-block max-w-full z-[7] mq450:text-[1.563rem] mq825:text-[2.125rem]">
          <p className="[margin-block-start:0] [margin-block-end:10px]">
            Com essas receitas do novo mundo, o único
          </p>
          <p className="[margin-block-start:0] [margin-block-end:10px]">{` momento que seu cliente vai perguntar o preço, `}</p>
          <p className="[margin-block-start:0] [margin-block-end:10px]">
            é na hora de fazer o PIX!!
          </p>
        </h2>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[0.562rem] max-w-full text-left text-[2rem]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.812rem] min-w-[25.375rem] max-w-full z-[7] mq1275:min-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.062rem] pr-[0rem] box-border max-w-full">
            <div className="h-[8.75rem] flex-1 relative max-w-full">
              <div className="absolute top-[0rem] left-[2.188rem] rounded-xl [background:linear-gradient(140.16deg,_#222,_#414141)] border-red border-[1px] border-solid box-border w-[36.813rem] flex flex-row items-start justify-start pt-[1.875rem] px-[3.937rem] pb-[2rem] max-w-full">
                <div className="h-[8.75rem] w-[36.813rem] relative rounded-xl [background:linear-gradient(140.16deg,_#222,_#414141)] border-red border-[1px] border-solid box-border hidden max-w-full" />
                <div className="relative leading-[2.313rem] font-light z-[1] mq450:text-[1.188rem] mq450:leading-[1.375rem] mq825:text-[1.625rem] mq825:leading-[1.875rem]">
                  <p className="m-0">{`Não importa se a "fulana" `}</p>
                  <p className="m-0">cobra 3 vezes mais barato…</p>
                </div>
              </div>
              <div className="absolute top-[2.063rem] left-[0rem] w-[4.375rem] flex flex-row items-start justify-start">
                <div className="h-[4.563rem] flex-1 relative">
                  <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gainsboro w-full h-full z-[1]" />
                  <img
                    className="absolute top-[1.063rem] left-[0.938rem] w-[2.438rem] h-[2.438rem] object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src="/cancelar-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[8.75rem] relative max-w-full">
            <div className="absolute top-[2.063rem] left-[0rem] w-[4.375rem] flex flex-row items-start justify-start">
              <div className="h-[4.563rem] flex-1 relative">
                <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gainsboro w-full h-full z-[1]" />
                <img
                  className="absolute top-[1.063rem] left-[1rem] w-[2.438rem] h-[2.438rem] object-cover z-[2]"
                  loading="lazy"
                  alt=""
                  src="/cancelar-1@2x.png"
                />
              </div>
            </div>
            <div className="absolute top-[0rem] left-[2.188rem] rounded-xl [background:linear-gradient(140.16deg,_#222,_#414141)] border-red border-[1px] border-solid box-border w-[36.813rem] flex flex-row items-start justify-start py-[1.937rem] px-[4rem] max-w-full">
              <div className="h-[8.75rem] w-[36.813rem] relative rounded-xl [background:linear-gradient(140.16deg,_#222,_#414141)] border-red border-[1px] border-solid box-border hidden max-w-full" />
              <div className="w-[26.625rem] relative leading-[2.313rem] font-light flex items-center max-w-full z-[1] mq450:text-[1.188rem] mq450:leading-[1.375rem] mq825:text-[1.625rem] mq825:leading-[1.875rem]">
                <span className="w-full">
                  <p className="m-0">{`Nunca mais fique refém das `}</p>
                  <p className="m-0">margens apertadas.</p>
                </span>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[8.75rem] relative max-w-full">
            <div className="absolute top-[2.063rem] left-[0rem] w-[4.375rem] flex flex-row items-start justify-start">
              <div className="h-[4.563rem] flex-1 relative">
                <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gainsboro w-full h-full z-[1]" />
                <img
                  className="absolute top-[1.063rem] left-[1rem] w-[2.438rem] h-[2.438rem] object-cover z-[2]"
                  loading="lazy"
                  alt=""
                  src="/cancelar-1@2x.png"
                />
              </div>
            </div>
            <div className="absolute top-[0rem] left-[2.188rem] rounded-xl [background:linear-gradient(140.16deg,_#222,_#414141)] border-red border-[1px] border-solid box-border w-[36.813rem] flex flex-row items-start justify-start pt-[1.875rem] px-[3.625rem] pb-[2rem] max-w-full">
              <div className="h-[8.75rem] w-[36.813rem] relative rounded-xl [background:linear-gradient(140.16deg,_#222,_#414141)] border-red border-[1px] border-solid box-border hidden max-w-full" />
              <div className="relative leading-[2.313rem] font-light z-[1] mq450:text-[1.188rem] mq450:leading-[1.375rem] mq825:text-[1.625rem] mq825:leading-[1.875rem]">
                <p className="m-0">Fuja da guerra de preços da</p>
                <p className="m-0">sua cidade.</p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain min-w-[25.375rem] min-h-[27.875rem] z-[7] mq1275:min-w-full"
          loading="lazy"
          alt=""
          src="/sim@2x.png"
        />
      </div>
      <div className="w-[76.813rem] flex flex-row items-start justify-end py-[0rem] px-[3.187rem] box-border max-w-full mq1275:pl-[1.563rem] mq1275:pr-[1.563rem] mq1275:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.125rem] max-w-full">
          <h2 className="m-0 self-stretch relative text-inherit font-black font-[inherit] z-[7] mq450:text-[1.563rem] mq825:text-[2.125rem]">
            <p className="[margin-block-start:0] [margin-block-end:10px]">{`Não dá mais para se contentar com uma vida de muito `}</p>
            <p className="[margin-block-start:0] [margin-block-end:10px]">{`trabalho e pouco retorno financeiro… Eu quero te `}</p>
            <p className="[margin-block-start:0] [margin-block-end:10px]">
              libertar do Velho Mundo da Confeitaria. 
            </p>
          </h2>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[1.875rem] pr-[1.937rem] box-border max-w-full text-[2.125rem]">
            <div className="flex-1 flex flex-col items-end justify-start max-w-full">
              <h3 className="m-0 relative text-inherit font-light font-[inherit] inline-block min-h-[8.938rem] z-[7] mq450:text-[1.25rem] mq825:text-[1.688rem]">
                <p className="[margin-block-start:0] [margin-block-end:10px]">{`Por isso, dentro da Confeitaria Lucrativa eu vou fazer de tudo para `}</p>
                <p className="[margin-block-start:0] [margin-block-end:10px]">
                  você conquistar a vida que sempre sonhou por meio da
                  confeitaria!
                </p>
              </h3>
              <div className="w-[65.813rem] h-[4.938rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
                <Button
                  className="self-stretch w-[38.688rem] max-w-full z-[8] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border"
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
                  }}
                >
                  QUERO ENRIQUECER NA CONFEITARIA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bg7;
