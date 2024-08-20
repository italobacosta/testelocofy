import type { NextPage } from "next";
import { Button } from "@mui/material";

export type Bg4Type = {
  className?: string;
};

const Bg4: NextPage<Bg4Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-black flex flex-col items-end justify-start pt-[3.625rem] pb-[5.75rem] pl-[20.187rem] pr-[21.937rem] box-border relative max-w-full z-[4] text-center text-[2.625rem] text-moccasin font-inter mq1275:pt-[7rem] mq1275:pb-[3.75rem] mq1275:pl-[10.063rem] mq1275:pr-[10.938rem] mq1275:box-border mq825:pl-[5rem] mq825:pr-[5.438rem] mq825:pb-[2.438rem] mq825:box-border ${className}`}
    >
      <div className="w-[120rem] h-[78.938rem] relative bg-black hidden max-w-full z-[0]" />
      <img
        className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover z-[1]"
        alt=""
        src="/2-1@2x.png"
      />
      <div className="w-[75.144rem] flex flex-row items-start justify-center max-w-full">
        <div className="w-[47.25rem] flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[4.75rem] pr-[4.812rem] mq825:pl-[2.375rem] mq825:pr-[2.375rem] mq825:box-border">
            <h2 className="m-0 relative text-inherit font-black font-[inherit] z-[5] mq450:text-[1.563rem] mq825:text-[2.125rem]">
              <p className="m-0">{`Nem só de receitas vive o `}</p>
              <p className="m-0">Confeiteiro do Novo Mundo…</p>
            </h2>
          </div>
          <div className="self-stretch relative text-[1.5rem] font-light text-white inline-block min-h-[6.688rem] z-[6] mt-[-2rem] mq450:text-[1.188rem]">
            <p className="[margin-block-start:0] [margin-block-end:10px]">{`Muito além de novas receitas, dentro da Confeitaria Lucrativa você `}</p>
            <p className="[margin-block-start:0] [margin-block-end:10px]">
              encontra tudo que precisa para atingir sua liberdade financeira.
            </p>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[4.125rem] box-border max-w-full text-left text-[2.188rem] text-white mq450:pb-[1.75rem] mq450:box-border mq825:pb-[2.688rem] mq825:box-border">
        <div className="flex-1 grid flex-row items-start justify-start gap-[1.756rem] max-w-full grid-cols-[repeat(3,_minmax(297px,_1fr))] z-[5] mq1275:grid-cols-[minmax(297px,_1fr)] mq1575:justify-center mq1575:grid-cols-[repeat(2,_minmax(297px,_515px))]">
          <div className="h-[46.25rem] relative max-w-full">
            <div className="absolute top-[0rem] left-[0rem] w-full h-full">
              <div className="absolute top-[1.925rem] left-[0rem] rounded-mini bg-moccasin w-[24.756rem] h-[44.325rem]" />
              <img
                className="absolute top-[0rem] left-[0rem] rounded-mini w-[24.756rem] h-[18.569rem] object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/rectangle-4@2x.png"
              />
            </div>
            <div className="absolute top-[1.006rem] left-[0rem] rounded-mini bg-gray w-full flex flex-col items-start justify-end pt-[19.231rem] px-[0.875rem] pb-[6.893rem] box-border max-w-full z-[1]">
              <div className="w-[24.756rem] h-[44.325rem] relative rounded-mini bg-gray hidden max-w-full" />
              <div className="h-[7.075rem] flex flex-row items-start justify-start py-[0rem] px-[0.125rem] box-border">
                <h3 className="m-0 h-[12.375rem] relative text-inherit font-extrabold font-[inherit] inline-block z-[2] mq450:text-[1.313rem] mq825:text-[1.75rem]">
                  <p className="[margin-block-start:0] [margin-block-end:10px]">
                    Marketing no
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:10px]">
                    Instagram
                  </p>
                  <p className="m-0">&nbsp;</p>
                </h3>
              </div>
              <div className="relative text-[1.563rem] font-light inline-block min-h-[11.125rem] z-[2] mq450:text-[1.25rem]">
                <p className="[margin-block-start:0] [margin-block-end:7px]">{`Todos os segredos para `}</p>
                <p className="[margin-block-start:0] [margin-block-end:7px]">{`criar reels que dão água `}</p>
                <p className="[margin-block-start:0] [margin-block-end:7px]">{`na boca dos seus `}</p>
                <p className="[margin-block-start:0] [margin-block-end:7px]">
                  clientes só de olhar. 
                </p>
              </div>
            </div>
          </div>
          <div className="h-[46.25rem] relative max-w-full">
            <div className="absolute top-[0rem] left-[0rem] w-full h-full">
              <div className="absolute top-[1.925rem] left-[0rem] rounded-mini bg-moccasin w-[24.756rem] h-[44.325rem]" />
              <img
                className="absolute top-[0rem] left-[0rem] rounded-mini w-[24.756rem] h-[18.569rem] object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/rectangle-4-1@2x.png"
              />
            </div>
            <div className="absolute top-[1.006rem] left-[0rem] rounded-mini bg-gray w-full flex flex-col items-start justify-start pt-[19.231rem] pb-[5.456rem] pl-[1.062rem] pr-[0.75rem] box-border gap-[0.95rem] max-w-full z-[1]">
              <div className="w-[24.756rem] h-[44.325rem] relative rounded-mini bg-gray hidden max-w-full" />
              <h3 className="m-0 w-[19.988rem] relative text-inherit font-extrabold font-[inherit] inline-block z-[2] mq450:text-[1.313rem] mq825:text-[1.75rem]">
                Vendas para Confeitaria
              </h3>
              <div className="self-stretch relative text-[1.563rem] font-light inline-block min-h-[13.438rem] z-[2] mq450:text-[1.25rem]">
                <p className="[margin-block-start:0] [margin-block-end:7px]">{`Como fechar contratos de +60 `}</p>
                <p className="[margin-block-start:0] [margin-block-end:7px]">{`doces por semana para um `}</p>
                <p className="[margin-block-start:0] [margin-block-end:7px]">{`único cliente e garantir um `}</p>
                <p className="[margin-block-start:0] [margin-block-end:7px]">{`faturamento fixo mensal de `}</p>
                <p className="[margin-block-start:0] [margin-block-end:7px]">
                  +R$ 5.000. 
                </p>
              </div>
            </div>
          </div>
          <div className="h-[46.25rem] relative max-w-full">
            <div className="absolute top-[0rem] left-[0rem] w-full h-full">
              <div className="absolute top-[1.925rem] left-[0rem] rounded-mini bg-moccasin w-[24.756rem] h-[44.325rem]" />
              <img
                className="absolute top-[0rem] left-[0rem] rounded-mini w-[24.756rem] h-[18.569rem] object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/rectangle-4-2@2x.png"
              />
            </div>
            <div className="absolute top-[1.006rem] left-[0rem] rounded-mini bg-gray w-full flex flex-col items-start justify-start pt-[19.231rem] pb-[5.456rem] pl-[1.062rem] pr-[0.187rem] box-border gap-[0.95rem] max-w-full z-[1]">
              <div className="w-[24.756rem] h-[44.325rem] relative rounded-mini bg-gray hidden max-w-full" />
              <h3 className="m-0 self-stretch relative text-inherit font-extrabold font-[inherit] z-[2] mq450:text-[1.313rem] mq825:text-[1.75rem]">
                Calculadora de Precificação
              </h3>
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.125rem] pr-[0.062rem] box-border max-w-full text-[1.563rem]">
                <div className="flex-1 relative font-light inline-block min-h-[13.438rem] max-w-full z-[2] mq450:text-[1.25rem]">
                  <p className="[margin-block-start:0] [margin-block-end:7px]">{`Minha uma calculadora pessoal `}</p>
                  <p className="[margin-block-start:0] [margin-block-end:7px]">{`paravocê saber, antes de `}</p>
                  <p className="[margin-block-start:0] [margin-block-end:7px]">{`aceitar qualquer encomenda, `}</p>
                  <p className="[margin-block-start:0] [margin-block-end:7px]">{`qual vai ser seu custo e seu `}</p>
                  <p className="[margin-block-start:0] [margin-block-end:7px]">
                    lucro final!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[4.938rem] flex flex-row items-start justify-center py-[0rem] pl-[0.437rem] pr-[0rem] box-border max-w-full">
        <Button
          className="self-stretch w-[38.688rem] max-w-full z-[5] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border"
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
          }}
        >
          QUERO ENRIQUECER NA CONFEITARIA
        </Button>
      </div>
    </div>
  );
};

export default Bg4;
