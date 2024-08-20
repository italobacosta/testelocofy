import type { NextPage } from "next";

export type Bg6Type = {
  className?: string;
};

const Bg6: NextPage<Bg6Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-black flex flex-col items-start justify-start pt-[3.812rem] pb-[3.937rem] pl-[20.125rem] pr-[1.25rem] box-border relative gap-[0.375rem] max-w-full z-[13] text-left text-[1.5rem] text-white font-inter mq1275:pl-[10.063rem] mq1275:pt-[7rem] mq1275:pb-[2.563rem] mq1275:box-border mq450:pl-[1.25rem] mq450:box-border mq825:pl-[5rem] mq825:pb-[1.688rem] mq825:box-border ${className}`}
    >
      <div className="w-[120rem] h-[58.25rem] relative bg-black hidden max-w-full z-[0]" />
      <img
        className="w-full h-full absolute !m-[0] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden shrink-0 object-cover z-[1]"
        alt=""
        src="/quem--1@2x.png"
      />
      <div className="flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.812rem] box-border max-w-full text-[2.625rem] text-moccasin">
        <h2 className="m-0 relative text-inherit font-black font-[inherit] z-[14] mq450:text-[1.563rem] mq825:text-[2.125rem]">
          <p className="[margin-block-start:0] [margin-block-end:8px]">{`Afinal, quem é o Chef `}</p>
          <p className="m-0">Tuani Bonamini? </p>
        </h2>
      </div>
      <div className="relative font-light inline-block max-w-full z-[14] mq450:text-[1.188rem]">
        <p className="[margin-block-start:0] [margin-block-end:10px]">{`Tuani Bonamini é chef confeiteiro, empresário e `}</p>
        <p className="[margin-block-start:0] [margin-block-end:10px]">
          dono da Bona Petit, uma das Boulangeries de maior
        </p>
        <p className="[margin-block-start:0] [margin-block-end:10px]">{`sucesso no país, com um faturamento de +7 milhões `}</p>
        <p className="[margin-block-start:0] [margin-block-end:10px]">
          de reais por ano. 
        </p>
      </div>
      <div className="flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.625rem] box-border max-w-full">
        <div className="relative font-light z-[14] mq450:text-[1.188rem]">
          <p className="[margin-block-start:0] [margin-block-end:10px]">{`Professor convidado da Le Cordon Bleu, o chef Tuani `}</p>
          <p className="[margin-block-start:0] [margin-block-end:10px]">
            é graduado em administração de empresas, além de
          </p>
          <p className="[margin-block-start:0] [margin-block-end:10px]">{`possuir formação de confeitaria e gastronomia em `}</p>
          <p className="[margin-block-start:0] [margin-block-end:10px]">{`cursos na França, Espanha e Itália, onde desenvolveu `}</p>
          <p className="[margin-block-start:0] [margin-block-end:10px]">
            sua metodologia autoral nesses países. 
          </p>
        </div>
      </div>
      <div className="relative font-light inline-block max-w-full z-[14] mq450:text-[1.188rem]">
        <p className="[margin-block-start:0] [margin-block-end:10px]">{`Também presta consultoria para grandes restaurantes `}</p>
        <p className="[margin-block-start:0] [margin-block-end:10px]">{`de sucesso no Brasil, como o Copacabana Palace, o `}</p>
        <p className="[margin-block-start:0] [margin-block-end:10px]">{`Tuju (estrela Michelin em São Paulo) e o bistrô Ça-Va, `}</p>
        <p className="[margin-block-start:0] [margin-block-end:10px]">
          do chef Erick Jacquin. 
        </p>
      </div>
      <div className="w-[41.813rem] relative font-light inline-block min-h-[9.125rem] max-w-full z-[14] mq450:text-[1.188rem]">
        <p className="[margin-block-start:0] [margin-block-end:10px]">{`E agora ele reuniu todo esse conhecimento e experiência `}</p>
        <p className="[margin-block-start:0] [margin-block-end:10px]">{`internacional dentro de um único lugar, a sua escola online: `}</p>
        <p className="[margin-block-start:0] [margin-block-end:10px]">
          a Confeitaria Lucrativa! 
        </p>
      </div>
    </div>
  );
};

export default Bg6;
