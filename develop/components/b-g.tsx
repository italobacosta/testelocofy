import type { NextPage } from "next";

export type BGType = {
  className?: string;
};

const BG: NextPage<BGType> = ({ className = "" }) => {
  return (
    <div
      className={`mr-[-6.125rem] w-[143.5rem] flex flex-row items-start justify-end py-[0rem] px-[6.125rem] box-border max-w-[120%] shrink-0 z-[3] text-center text-[2.625rem] text-white font-inter mq1275:pl-[3.063rem] mq1275:pr-[3.063rem] mq1275:box-border mq825:pl-[1.5rem] mq825:pr-[1.5rem] mq825:box-border ${className}`}
    >
      <div className="w-[120rem] bg-black flex flex-col items-end justify-start pt-[3.062rem] pb-[4.812rem] pl-[23.875rem] pr-[26.562rem] box-border relative gap-[0.375rem] max-w-full mq1275:pt-[7rem] mq1275:pb-[3.125rem] mq1275:pl-[11.938rem] mq1275:pr-[13.25rem] mq1275:box-border mq825:pl-[5.938rem] mq825:pr-[6.625rem] mq825:pb-[2rem] mq825:box-border">
        <div className="w-[120rem] h-[91.063rem] relative bg-black hidden max-w-full z-[0]" />
        <img
          className="w-[62.438rem] h-full absolute !m-[0] top-[0rem] bottom-[0rem] left-[-17.375rem] max-h-full object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/camada-0-1@2x.png"
        />
        <img
          className="w-[61.063rem] h-full absolute !m-[0] top-[0rem] right-[-6.125rem] bottom-[0rem] max-h-full object-cover z-[1]"
          alt=""
          src="/tuani-1@2x.png"
        />
        <div className="w-[66.875rem] flex flex-row items-start justify-center max-w-full">
          <div className="w-[49.625rem] flex flex-col items-end justify-start gap-[1.25rem] max-w-full">
            <h2 className="m-0 self-stretch relative text-inherit font-black font-[inherit] z-[4] mq450:text-[1.563rem] mq825:text-[2.125rem]">
              <p className="m-0">{`Conheça o cardápio hipnótico que vai `}</p>
              <p className="m-0">garantir sua liberdade financeira</p>
            </h2>
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pl-[1.375rem] pr-[1.25rem] text-[1.5rem]">
              <div className="relative font-light z-[4] mq450:text-[1.188rem]">
                <p className="[margin-block-start:0] [margin-block-end:10px]">
                  Com esses doces sofisticados você vai ganhar dinheiro
                </p>
                <p className="[margin-block-start:0] [margin-block-end:10px]">
                  desde a primeira semana de curso.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-end justify-start gap-[1.25rem] max-w-full text-left text-[2rem]">
          <div className="self-stretch grid flex-row items-start justify-start gap-[0.937rem] max-w-full grid-cols-[repeat(3,_minmax(274px,_1fr))] mq1275:grid-cols-[minmax(274px,_1fr)] mq1575:justify-center mq1575:grid-cols-[repeat(2,_minmax(274px,_474px))]">
            <div className="flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[0.375rem] box-border max-w-full">
              <div className="self-stretch shadow-[10px_10px_10px_rgba(0,_0,_0,_0.25)] rounded-xl [background:linear-gradient(144.9deg,_#222,_#424242)] border-moccasin border-[3px] border-solid box-border flex flex-col items-start justify-start pt-[1.25rem] px-[0.562rem] pb-[7.25rem] gap-[1.312rem] max-w-full z-[4] mq825:pt-[7rem] mq825:pb-[4.688rem] mq825:box-border">
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1.25rem]">
                  <div className="h-[11.313rem] flex-1 relative overflow-hidden bg-[url('/macaronpng@3x.png')] bg-cover bg-no-repeat bg-[top]">
                    <img
                      className="absolute top-[-8.937rem] left-[-0.387rem] w-[18.813rem] h-[28.188rem] object-cover hidden"
                      alt=""
                      src="/image-1@2x.png"
                    />
                    <img
                      className="absolute top-[-7.187rem] left-[-0.387rem] w-[19.75rem] h-[24.688rem] object-cover hidden"
                      alt=""
                      src="/entremet-limo--1@2x.png"
                    />
                  </div>
                </div>
                <div className="relative leading-[2.438rem] font-extrabold mq450:text-[1.188rem] mq450:leading-[1.438rem] mq825:text-[1.625rem] mq825:leading-[1.938rem]">
                  Entremet Limone
                </div>
                <div className="w-[20.431rem] flex flex-col items-start justify-start max-w-full text-[1rem]">
                  <div className="self-stretch relative leading-[1.375rem]">
                    <p className="m-0">
                      Um dos doces mais pedidos da Bona Petit. Ele tem esse
                      formato incrível de limão, levando todas as partes da
                      fruta na sua receita.  
                    </p>
                  </div>
                  <div className="relative leading-[1.375rem]">
                    <p className="m-0">{`Você vai se surpreender com o efeito `}</p>
                    <p className="m-0">
                      hipnótico que esse doce tem nos clientes. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-[10px_10px_10px_rgba(0,_0,_0,_0.25)] rounded-xl [background:linear-gradient(144.9deg,_#222,_#424242)] border-moccasin border-[3px] border-solid box-border flex flex-col items-start justify-start pt-[1.25rem] px-[0.562rem] pb-[3.625rem] gap-[1.312rem] max-w-full z-[4] mq825:pt-[7rem] mq825:pb-[2.375rem] mq825:box-border">
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1.25rem]">
                <div className="h-[11.313rem] flex-1 relative overflow-hidden bg-[url('/macaronpng@3x.png')] bg-cover bg-no-repeat bg-[top]">
                  <img
                    className="absolute top-[-3rem] left-[-0.387rem] w-[18.813rem] h-[28.188rem] object-cover hidden"
                    alt=""
                    src="/image-11@2x.png"
                  />
                  <img
                    className="absolute top-[0rem] left-[-0.012rem] w-full h-full object-cover hidden"
                    alt=""
                    src="/bona-petit16-1@2x.png"
                  />
                  <img
                    className="absolute top-[-5.625rem] left-[-1.262rem] w-[21.063rem] h-[21.813rem] object-cover hidden"
                    alt=""
                    src="/bona4-1@2x.png"
                  />
                </div>
              </div>
              <div className="relative leading-[2.438rem] font-extrabold mq450:text-[1.188rem] mq450:leading-[1.438rem] mq825:text-[1.625rem] mq825:leading-[1.938rem]">
                Entremet Tiramisú
              </div>
              <div className="w-[20.5rem] flex flex-col items-start justify-start gap-[0.875rem] max-w-full text-[1rem]">
                <div className="self-stretch relative leading-[1.375rem]">
                  <p className="m-0">
                    Minha versão autoral do Entremet Tiramisu, no formato de
                    trufa negra com recheio delicioso de mascarpone…
                  </p>
                </div>
                <div className="relative leading-[1.375rem]">
                  <p className="m-0">{`Uma vez que seus clientes levam essa `}</p>
                  <p className="m-0">{`explosão de texturas e sabores à boca, `}</p>
                  <p className="m-0">{`eles ficam completamente enfeitiçados e `}</p>
                  <p className="m-0">
                    querem consumir 2, 3 e até 5x por semana!
                  </p>
                </div>
              </div>
            </div>
            <div className="shadow-[10px_10px_10px_rgba(0,_0,_0,_0.25)] rounded-xl [background:linear-gradient(144.9deg,_#222,_#424242)] border-moccasin border-[3px] border-solid box-border flex flex-col items-start justify-start pt-[1.25rem] pb-[4.625rem] pl-[0.562rem] pr-[0.375rem] gap-[1.312rem] max-w-full z-[4] mq825:pt-[7rem] mq825:pb-[3rem] mq825:box-border">
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[1.25rem] pr-[1.437rem]">
                <div className="h-[11.313rem] flex-1 relative overflow-hidden bg-[url('/macaronpng1@3x.png')] bg-cover bg-no-repeat bg-[top]">
                  <img
                    className="absolute top-[-5.875rem] left-[-0.012rem] w-[18.438rem] h-[18.438rem] object-cover hidden"
                    alt=""
                    src="/image-2@2x.png"
                  />
                  <img
                    className="absolute top-[0rem] left-[-0.012rem] w-full h-full object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/bona-petit19-1-1@2x.png"
                  />
                  <img
                    className="absolute top-[-7.125rem] left-[-2.825rem] w-[24.125rem] h-[33.125rem] object-cover hidden z-[2]"
                    alt=""
                    src="/entremetcoco-com-abacaxi-1@2x.png"
                  />
                </div>
              </div>
              <div className="relative leading-[2.438rem] font-extrabold mq450:text-[1.188rem] mq450:leading-[1.438rem] mq825:text-[1.625rem] mq825:leading-[1.938rem]">
                Entremet Tropi
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.625rem] max-w-full text-[1rem]">
                <div className="relative leading-[1.375rem]">
                  Uma mistura perfeita de coco e abacaxi.
                </div>
                <div className="relative leading-[1.375rem]">
                  <p className="m-0">{`Em regiões mais quentes, ele faz muito `}</p>
                  <p className="m-0">{`sucesso entre os clientes porque é um doce `}</p>
                  <p className="m-0">muito gostoso e refrescante. </p>
                </div>
                <div className="relative leading-[1.375rem] inline-block max-w-full">
                  <p className="m-0">{`E ele leva essa enrobage de chocolate que `}</p>
                  <p className="m-0">{`vai deixar seus clientes malucos pela sua `}</p>
                  <p className="m-0">semelhança com um coco real!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[67.313rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-[1rem]">
            <div className="w-[46.188rem] flex flex-row flex-wrap items-start justify-start gap-[1.312rem] max-w-full">
              <div className="flex-1 shadow-[10px_10px_10px_rgba(0,_0,_0,_0.25)] rounded-xl [background:linear-gradient(144.9deg,_#222,_#424242)] border-moccasin border-[3px] border-solid box-border flex flex-col items-start justify-start pt-[1.25rem] pb-[7.062rem] pl-[0.562rem] pr-[0.437rem] gap-[1.25rem] min-w-[14.563rem] max-w-full z-[4] mq825:pt-[7rem] mq825:pb-[4.563rem] mq825:box-border">
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[1.25rem] pr-[1.375rem]">
                  <div className="h-[11.313rem] flex-1 relative overflow-hidden bg-[url('/macaronpng@3x.png')] bg-cover bg-no-repeat bg-[top]">
                    <img
                      className="absolute top-[-5.875rem] left-[-0.012rem] w-[18.438rem] h-[18.438rem] object-cover hidden"
                      alt=""
                      src="/image-21@2x.png"
                    />
                    <img
                      className="absolute top-[0rem] left-[-0.012rem] w-full h-full object-cover hidden"
                      alt=""
                      src="/bonapetit5-1@2x.png"
                    />
                    <img
                      className="absolute top-[-10.312rem] left-[-2.075rem] w-[22.5rem] h-[33.75rem] object-cover hidden"
                      alt=""
                      src="/lua-1502-1@2x.png"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[0.781rem]">
                  <div className="relative text-[2rem] leading-[2.438rem] font-extrabold mq450:text-[1.188rem] mq450:leading-[1.438rem] mq825:text-[1.625rem] mq825:leading-[1.938rem]">
                    Entremet Morango
                  </div>
                  <div className="relative leading-[1.375rem]">
                    <p className="m-0">{`Um doce cremoso que remete ao paladar `}</p>
                    <p className="m-0">{`do seu cliente uma memória afetiva com `}</p>
                    <p className="m-0">sabor de danoninho… </p>
                  </div>
                  <div className="relative leading-[1.375rem]">
                    <p className="m-0">{`Te garanto que todas as outras sobremesas `}</p>
                    <p className="m-0">{`de morango vão perder a graça pro seu `}</p>
                    <p className="m-0">
                      cliente depois que ele experimentar essa!
                    </p>
                  </div>
                </div>
              </div>
              <div className="shadow-[10px_10px_10px_rgba(0,_0,_0,_0.25)] rounded-xl [background:linear-gradient(144.9deg,_#222,_#424242)] border-moccasin border-[3px] border-solid box-border flex flex-col items-start justify-start pt-[1.25rem] pb-[8.437rem] pl-[0.562rem] pr-[0rem] gap-[1.25rem] min-h-[33.625rem] max-w-full z-[4] text-[2rem] mq825:pt-[7rem] mq825:pb-[5.5rem] mq825:box-border">
                <div className="w-[20.95rem] flex flex-row items-start justify-start py-[0rem] px-[1.25rem] box-border max-w-full">
                  <div className="h-[11.313rem] flex-1 relative overflow-hidden bg-[url('/macaronpng@3x.png')] bg-cover bg-no-repeat bg-[top]">
                    <img
                      className="absolute top-[-0.187rem] left-[-1.512rem] w-[21.188rem] h-[11.938rem] object-cover hidden"
                      alt=""
                      src="/image-3@2x.png"
                    />
                    <img
                      className="absolute top-[-0.187rem] left-[-0.012rem] w-full h-full object-cover hidden"
                      alt=""
                      src="/bona-petit20-1-1@2x.png"
                    />
                    <img
                      className="absolute top-[-2.5rem] left-[-0.012rem] w-[19rem] h-[14.25rem] object-cover hidden"
                      alt=""
                      src="/lua-9166-1-1@2x.png"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[0.562rem]">
                  <div className="relative leading-[2.4rem] font-extrabold mq450:text-[1.188rem] mq450:leading-[1.438rem] mq825:text-[1.625rem] mq825:leading-[1.938rem]">
                    <p className="m-0">{`Entremet Romeu `}</p>
                    <p className="m-0">{`& Julieta`}</p>
                  </div>
                  <div className="relative text-[1rem] leading-[1.375rem]">
                    <p className="m-0">{`A combinação perfeita de queijo com goiaba, `}</p>
                    <p className="m-0">
                      do jeito que o brasileiro gosta, mas com
                    </p>
                    <p className="m-0">{`uma roupagem completamente nova do `}</p>
                    <p className="m-0">novo mundo da confeitaria!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BG;
