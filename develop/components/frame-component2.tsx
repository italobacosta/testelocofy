import type { NextPage } from "next";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end py-[0rem] pl-[0rem] pr-[0.625rem] box-border max-w-full text-center text-[2.625rem] text-black font-inter ${className}`}
    >
      <div className="w-[120.188rem] flex flex-col items-end justify-start pt-[8.75rem] pb-[12.812rem] pl-[36.25rem] pr-[37.312rem] box-border relative gap-[2.687rem] max-w-[101%] shrink-0 z-[5] mq1275:pt-[7rem] mq1275:pb-[8.313rem] mq1275:pl-[18.125rem] mq1275:pr-[18.625rem] mq1275:box-border mq450:pb-[5.375rem] mq450:box-border mq825:gap-[1.313rem] mq825:pl-[9.063rem] mq825:pr-[9.313rem] mq825:box-border">
        <img
          className="w-[120rem] h-[4.313rem] absolute !m-[0] top-[0rem] left-[0rem] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/agrupar-1-2@2x.png"
        />
        <img
          className="w-[120rem] h-[4.313rem] absolute !m-[0] right-[0rem] bottom-[0rem] object-cover"
          alt=""
          src="/agrupar-1-2@2x.png"
        />
        <div className="w-[45.375rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <h2 className="m-0 h-[3.188rem] w-[12.125rem] relative text-inherit font-black font-[inherit] inline-block z-[6] mq450:text-[1.563rem] mq825:text-[2.125rem]">
            E MAIS….
          </h2>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[2.25rem] max-w-full text-left text-[2rem] text-lightsteelblue mq825:gap-[1.125rem]">
          <div className="self-stretch rounded-xl [background:linear-gradient(140.16deg,_#222,_#414141)] border-moccasin border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[0.875rem] pb-[0.312rem] pl-[20.437rem] pr-[1.25rem] relative gap-[0.625rem] max-w-full z-[7] mq450:pl-[1.25rem] mq450:box-border mq825:pl-[10.188rem] mq825:box-border">
            <div className="w-[46.625rem] h-[13rem] relative rounded-xl [background:linear-gradient(140.16deg,_#222,_#414141)] border-moccasin border-[1px] border-solid box-border hidden max-w-full z-[0]" />
            <div className="relative leading-[2.4rem] font-extrabold z-[8] mq450:text-[1.188rem] mq450:leading-[1.438rem] mq825:text-[1.625rem] mq825:leading-[1.938rem]">
              <p className="[margin-block-start:0] [margin-block-end:5px]">{`Comunidade de `}</p>
              <p className="[margin-block-start:0] [margin-block-end:5px]">
                Alunos 
              </p>
            </div>
            <div className="w-[20.431rem] h-[5.5rem] relative text-[1rem] leading-[1.625rem] flex items-center shrink-0 max-w-full z-[8]">
              <span className="w-full">
                <p className="m-0">
                  Uma comunidade na plataforma para você trocar experiências com
                  outros colegas confeiteiros.
                </p>
              </span>
            </div>
            <div className="w-[53.625rem] h-[35.125rem] absolute !m-[0] bottom-[-18.812rem] left-[-4.25rem]">
              <div className="absolute top-[3.75rem] left-[4.25rem] rounded-xl bg-moccasin w-[46.625rem] h-[13.313rem] z-[6]" />
              <img
                className="absolute top-[0rem] left-[0rem] w-[29.25rem] h-[19.563rem] object-cover z-[9]"
                alt=""
                src="/mockup-1@2x.png"
              />
              <div className="absolute top-[19rem] left-[4.25rem] rounded-xl bg-moccasin w-[46.625rem] h-[13.313rem] z-[10]" />
              <div className="absolute top-[14.938rem] left-[23.375rem] w-[30.25rem] flex flex-row items-start justify-start max-w-full">
                <img
                  className="h-[51.375rem] w-[120rem] absolute !m-[0] top-[-21.937rem] left-[-55.375rem]"
                  alt=""
                  src="/rectangle-1.svg"
                />
                <img
                  className="h-[20.188rem] flex-1 relative max-w-full overflow-hidden object-contain z-[13]"
                  loading="lazy"
                  alt=""
                  src="/mockup-suporte-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-xl [background:linear-gradient(140.16deg,_#222,_#414141)] border-moccasin border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[2.562rem] pb-[1.375rem] pl-[3.312rem] pr-[1.25rem] gap-[0.875rem] max-w-full z-[11] mq450:pl-[1.25rem] mq450:box-border">
            <div className="w-[46.625rem] h-[13rem] relative rounded-xl [background:linear-gradient(140.16deg,_#222,_#414141)] border-moccasin border-[1px] border-solid box-border hidden max-w-full" />
            <div className="relative leading-[2.438rem] font-extrabold inline-block max-w-full z-[12] mq450:text-[1.188rem] mq450:leading-[1.438rem] mq825:text-[1.625rem] mq825:leading-[1.938rem]">
              Suporte Pedagógico 
            </div>
            <div className="w-[20.431rem] h-[5.5rem] relative text-[1rem] leading-[1.625rem] flex items-center shrink-0 max-w-full z-[12]">
              <span className="w-full">
                <p className="m-0">
                  Uma equipe especializada focada no seu sucesso durante o
                  curso, com chat dentro da plataforma.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
