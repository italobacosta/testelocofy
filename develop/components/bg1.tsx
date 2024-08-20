import type { NextPage } from "next";
import { Button } from "@mui/material";

export type Bg1Type = {
  className?: string;
};

const Bg1: NextPage<Bg1Type> = ({ className = "" }) => {
  return (
    <div
      className={`ml-[-2.813rem] w-[126.25rem] flex flex-row items-start justify-start py-[0rem] px-[2.812rem] box-border max-w-[106%] shrink-0 z-[9] text-center text-[2.625rem] text-moccasin font-inter mq1275:pl-[1.375rem] mq1275:pr-[1.375rem] mq1275:box-border ${className}`}
    >
      <div className="flex-1 bg-black flex flex-col items-end justify-start pt-[9.375rem] px-[34.687rem] pb-[4.937rem] box-border relative gap-[3.75rem] max-w-full mq1275:gap-[1.875rem] mq1275:pt-[7rem] mq1275:px-[17.313rem] mq1275:pb-[2.063rem] mq1275:box-border mq825:gap-[0.938rem] mq825:pl-[8.625rem] mq825:pr-[8.625rem] mq825:pb-[1.313rem] mq825:box-border">
        <div className="w-[120rem] h-[116.5rem] relative bg-black hidden max-w-full z-[0]" />
        <img
          className="w-[126.25rem] h-full absolute !m-[0] top-[0rem] right-[-3.437rem] bottom-[0rem] max-h-full object-cover z-[1]"
          alt=""
          src="/3-1@2x.png"
        />
        <h2 className="m-0 relative text-inherit font-black font-[inherit] inline-block max-w-full z-[10] mq450:text-[1.563rem] mq825:text-[2.125rem]">
          Para quem é a Confeitaria Lucrativa?
        </h2>
        <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pl-[0rem] pr-[0.062rem] box-border max-w-full text-[2.188rem] text-white">
          <div className="flex-1 flex flex-col items-start justify-start gap-[1.812rem] max-w-full z-[10]">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0.812rem] max-w-full">
              <div className="h-[42.375rem] flex-1 relative min-w-[16.063rem] max-w-full">
                <div className="absolute top-[0.938rem] left-[0rem] rounded-mini bg-moccasin w-[24.75rem] h-[41.438rem]" />
                <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-gray w-full flex flex-col items-start justify-start pt-[2.062rem] pb-[4.187rem] pl-[1rem] pr-[0.25rem] box-border gap-[2.875rem] max-w-full z-[1] mq450:gap-[1.438rem]">
                  <div className="w-[24.75rem] h-[40.688rem] relative rounded-mini bg-gray hidden max-w-full" />
                  <div className="w-[22.75rem] flex flex-row items-start justify-start py-[0rem] px-[2.062rem] box-border max-w-full">
                    <div className="flex-1 flex flex-col items-end justify-start gap-[1.687rem]">
                      <div className="flex flex-row items-start justify-end py-[0rem] px-[3.687rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                        <img
                          className="h-[10.563rem] w-[10.563rem] relative object-cover z-[2]"
                          loading="lazy"
                          alt=""
                          src="/sacodeconfeitar-1@2x.png"
                        />
                      </div>
                      <h3 className="m-0 self-stretch relative text-inherit font-extrabold font-[inherit] z-[2] mq450:text-[1.313rem] mq825:text-[1.75rem]">
                        <p className="[margin-block-start:0] [margin-block-end:10px]">{`Quem é iniciante `}</p>
                        <p className="m-0">na Confeitaria</p>
                      </h3>
                    </div>
                  </div>
                  <div className="self-stretch relative text-[1.563rem] font-light z-[2] mq450:text-[1.25rem]">
                    <p className="[margin-block-start:0] [margin-block-end:7px]">{`e não quer continuar fazendo `}</p>
                    <p className="[margin-block-start:0] [margin-block-end:7px]">{`os mesmos doces que todo `}</p>
                    <p className="[margin-block-start:0] [margin-block-end:7px]">{`mundo faz. Com a receita dos `}</p>
                    <p className="[margin-block-start:0] [margin-block-end:7px]">{`5 entremets hipnóticos você `}</p>
                    <p className="[margin-block-start:0] [margin-block-end:7px]">{`vai se diferenciar da sua `}</p>
                    <p className="m-0">concorrência instantaneamente!</p>
                  </div>
                </div>
              </div>
              <div className="h-[42.375rem] flex-1 relative min-w-[16.063rem] max-w-full">
                <div className="absolute top-[0.938rem] left-[0rem] rounded-mini bg-moccasin w-[24.75rem] h-[41.438rem]" />
                <div className="absolute top-[0rem] left-[0rem] w-full flex flex-col items-start justify-start pt-[13.937rem] pb-[0rem] pl-[1.062rem] pr-[0.75rem] box-border gap-[0.625rem] h-full">
                  <div className="flex flex-row items-start justify-start py-[0rem] pl-[2.75rem] pr-[3.125rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                    <h3 className="m-0 w-[17.063rem] relative text-inherit font-extrabold font-[inherit] inline-block z-[2] mq450:text-[1.313rem] mq825:text-[1.75rem]">
                      <p className="[margin-block-start:0] [margin-block-end:10px]">{`Quem já possui `}</p>
                      <p className="[margin-block-start:0] [margin-block-end:10px]">{`uma loja ou um `}</p>
                      <p className="m-0">ateliê</p>
                    </h3>
                  </div>
                  <div className="self-stretch relative text-[1.563rem] font-light inline-block min-h-[18.063rem] z-[2] mq450:text-[1.25rem]">
                    <p className="[margin-block-start:0] [margin-block-end:7px]">{` e deseja escalar o seu `}</p>
                    <p className="[margin-block-start:0] [margin-block-end:7px]">{`faturamento. As receitas de `}</p>
                    <p className="[margin-block-start:0] [margin-block-end:7px]">{`5 Entremet são baratas de `}</p>
                    <p className="[margin-block-start:0] [margin-block-end:7px]">{`fazer, fáceis de produzir e caro `}</p>
                    <p className="[margin-block-start:0] [margin-block-end:7px]">{`de vender… Margem, escala e `}</p>
                    <p className="[margin-block-start:0] [margin-block-end:7px]">{`recorrência na sua forma mais `}</p>
                    <p className="[margin-block-start:0] [margin-block-end:7px]">
                      perfeita!
                    </p>
                  </div>
                  <div className="w-full h-[40.688rem] absolute !m-[0] top-[0rem] right-[0rem] left-[0rem]">
                    <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-gray w-full h-full z-[1]" />
                    <img
                      className="absolute top-[2.813rem] left-[6.375rem] w-[13rem] h-[9.5rem] object-cover z-[2]"
                      loading="lazy"
                      alt=""
                      src="/loja-1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1rem] max-w-full">
              <div className="h-[42.375rem] flex-1 relative min-w-[16.125rem] max-w-full">
                <div className="absolute top-[0.938rem] left-[0rem] rounded-mini bg-moccasin w-[24.75rem] h-[41.438rem]" />
                <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-gray w-full flex flex-col items-end justify-start pt-[0.937rem] pb-[3.687rem] pl-[0.812rem] pr-[0rem] box-border gap-[2rem] max-w-full z-[1] mq450:gap-[1rem]">
                  <div className="w-[24.75rem] h-[40.688rem] relative rounded-mini bg-gray hidden max-w-full" />
                  <div className="w-[23.125rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
                    <img
                      className="h-[11.5rem] w-[11.5rem] relative object-cover z-[2]"
                      loading="lazy"
                      alt=""
                      src="/renda-1@2x.png"
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-end justify-start gap-[3.25rem] mq450:gap-[1.625rem]">
                    <div className="flex flex-row items-start justify-end py-[0rem] pl-[0.625rem] pr-[0.25rem]">
                      <h3 className="m-0 w-[23.063rem] relative text-inherit font-extrabold font-[inherit] inline-block z-[2] mq450:text-[1.313rem] mq825:text-[1.75rem]">
                        <p className="[margin-block-start:0] [margin-block-end:10px]">{`Quem está em busca `}</p>
                        <p className="m-0">de uma renda extra</p>
                      </h3>
                    </div>
                    <div className="self-stretch relative text-[1.563rem] font-light inline-block min-h-[13.438rem] z-[2] mq450:text-[1.25rem]">
                      <p className="[margin-block-start:0] [margin-block-end:7px]">{`para compor a renda familiar. `}</p>
                      <p className="[margin-block-start:0] [margin-block-end:7px]">{`Com apenas poucas horas por `}</p>
                      <p className="[margin-block-start:0] [margin-block-end:7px]">{`semana fazendo Entremet, você `}</p>
                      <p className="[margin-block-start:0] [margin-block-end:7px]">
                        já consegue um ganho mensal
                      </p>
                      <p className="[margin-block-start:0] [margin-block-end:7px]">
                        de 5 à 10 mil reais. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[42.375rem] flex-1 relative min-w-[16.125rem] max-w-full">
                <div className="absolute top-[0.938rem] left-[0rem] rounded-mini bg-moccasin w-[24.75rem] h-[41.438rem]" />
                <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-gray w-full flex flex-col items-start justify-start pt-[1.125rem] pb-[5.812rem] pl-[1rem] pr-[0rem] box-border gap-[1.125rem] max-w-full z-[1]">
                  <div className="w-[24.75rem] h-[40.688rem] relative rounded-mini bg-gray hidden max-w-full" />
                  <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pl-[1.25rem] pr-[1.875rem]">
                    <img
                      className="h-[12.188rem] w-[12.188rem] relative object-cover z-[2]"
                      loading="lazy"
                      alt=""
                      src="/chefedecozinha-1@2x.png"
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-end justify-start gap-[0.812rem] max-w-full">
                    <h3 className="m-0 self-stretch relative text-inherit font-extrabold font-[inherit] z-[2] mq450:text-[1.313rem] mq825:text-[1.75rem]">
                      <p className="[margin-block-start:0] [margin-block-end:10px]">{`Quem ama cozinhar e `}</p>
                      <p className="[margin-block-start:0] [margin-block-end:10px]">
                        quer trabalhar perto
                      </p>
                      <p className="m-0"> da família.</p>
                    </h3>
                    <div className="flex flex-row items-start justify-end py-[0rem] px-[0.062rem] box-border max-w-full text-[1.438rem]">
                      <div className="w-[22.875rem] relative font-light inline-block z-[2] mq450:text-[1.125rem]">
                        <p className="[margin-block-start:0] [margin-block-end:7px]">{`Aqui eu vou te ensinar a construir `}</p>
                        <p className="[margin-block-start:0] [margin-block-end:7px]">{`uma Confeitaria Lucrativa de `}</p>
                        <p className="[margin-block-start:0] [margin-block-end:7px]">
                          dentro da sua cozinha, pra você
                        </p>
                        <p className="[margin-block-start:0] [margin-block-end:7px]">{` trabalhar pertinho dos seus `}</p>
                        <p className="m-0">filhos, maridos ou familiares</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[48.688rem] h-[4.938rem] flex flex-row items-start justify-end py-[0rem] px-[5rem] box-border max-w-full mq825:pl-[2.5rem] mq825:pr-[2.5rem] mq825:box-border">
          <Button
            className="self-stretch flex-1 max-w-full z-[10] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border"
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
            }}
          >
            QUERO ENRIQUECER NA CONFEITARIA
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Bg1;
