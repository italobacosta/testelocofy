import type { NextPage } from "next";
import styles from "./b-g.module.css";

export type BGType = {
  className?: string;
};

const BG: NextPage<BGType> = ({ className = "" }) => {
  return (
    <div className={[styles.bg, className].join(" ")}>
      <div className={styles.menu}>
        <div className={styles.menuChild} />
        <img
          className={styles.camada01}
          loading="lazy"
          alt=""
          src="/camada-0-1@2x.png"
        />
        <img className={styles.tuani1Icon} alt="" src="/tuani-1@2x.png" />
        <div className={styles.content}>
          <div className={styles.title}>
            <h2 className={styles.conheaOCardpioContainer}>
              <p
                className={styles.conheaOCardpio}
              >{`Conheça o cardápio hipnótico que vai `}</p>
              <p className={styles.conheaOCardpio}>
                garantir sua liberdade financeira
              </p>
            </h2>
            <div className={styles.subheading}>
              <div className={styles.comEssesDocesContainer}>
                <p className={styles.comEssesDoces}>
                  Com esses doces sofisticados você vai ganhar dinheiro
                </p>
                <p className={styles.comEssesDoces}>
                  desde a primeira semana de curso.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.gallery}>
          <div className={styles.product}>
            <div className={styles.item}>
              <div className={styles.entremetLimone}>
                <div className={styles.image}>
                  <div className={styles.macaronpng}>
                    <img
                      className={styles.image1Icon}
                      alt=""
                      src="/image-1@2x.png"
                    />
                    <img
                      className={styles.entremetLimo1}
                      alt=""
                      src="/entremet-limo--1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.heading2}>Entremet Limone</div>
                <div className={styles.description}>
                  <div className={styles.umDosDocesContainer}>
                    <p className={styles.conheaOCardpio}>
                      Um dos doces mais pedidos da Bona Petit. Ele tem esse
                      formato incrível de limão, levando todas as partes da
                      fruta na sua receita.  
                    </p>
                  </div>
                  <div className={styles.vocVaiSeContainer}>
                    <p
                      className={styles.conheaOCardpio}
                    >{`Você vai se surpreender com o efeito `}</p>
                    <p className={styles.conheaOCardpio}>
                      hipnótico que esse doce tem nos clientes. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.entremetLimone1}>
              <div className={styles.image}>
                <div className={styles.macaronpng}>
                  <img
                    className={styles.image1Icon1}
                    alt=""
                    src="/image-11@2x.png"
                  />
                  <img
                    className={styles.bonapetit51Icon}
                    alt=""
                    src="/bona-petit16-1@2x.png"
                  />
                  <img
                    className={styles.bona41Icon}
                    alt=""
                    src="/bona4-1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.heading2}>Entremet Tiramisú</div>
              <div className={styles.description1}>
                <div className={styles.umDosDocesContainer}>
                  <p className={styles.conheaOCardpio}>
                    Minha versão autoral do Entremet Tiramisu, no formato de
                    trufa negra com recheio delicioso de mascarpone…
                  </p>
                </div>
                <div className={styles.vocVaiSeContainer}>
                  <p
                    className={styles.conheaOCardpio}
                  >{`Uma vez que seus clientes levam essa `}</p>
                  <p
                    className={styles.conheaOCardpio}
                  >{`explosão de texturas e sabores à boca, `}</p>
                  <p
                    className={styles.conheaOCardpio}
                  >{`eles ficam completamente enfeitiçados e `}</p>
                  <p className={styles.conheaOCardpio}>
                    querem consumir 2, 3 e até 5x por semana!
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.entremetTropi}>
              <div className={styles.macaronpngWrapper}>
                <div className={styles.macaronpng2}>
                  <img
                    className={styles.image2Icon}
                    alt=""
                    src="/image-2@2x.png"
                  />
                  <img
                    className={styles.bonaPetit1911}
                    loading="lazy"
                    alt=""
                    src="/bona-petit19-1-1@2x.png"
                  />
                  <img
                    className={styles.entremetCocoComAbacaxi1}
                    alt=""
                    src="/entremetcoco-com-abacaxi-1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.heading2}>Entremet Tropi</div>
              <div className={styles.umaMisturaPerfeitaDeCocoEParent}>
                <div className={styles.vocVaiSeContainer}>
                  Uma mistura perfeita de coco e abacaxi.
                </div>
                <div className={styles.vocVaiSeContainer}>
                  <p
                    className={styles.conheaOCardpio}
                  >{`Em regiões mais quentes, ele faz muito `}</p>
                  <p
                    className={styles.conheaOCardpio}
                  >{`sucesso entre os clientes porque é um doce `}</p>
                  <p className={styles.conheaOCardpio}>
                    muito gostoso e refrescante. 
                  </p>
                </div>
                <div className={styles.eEleLevaContainer}>
                  <p
                    className={styles.conheaOCardpio}
                  >{`E ele leva essa enrobage de chocolate que `}</p>
                  <p
                    className={styles.conheaOCardpio}
                  >{`vai deixar seus clientes malucos pela sua `}</p>
                  <p className={styles.conheaOCardpio}>
                    semelhança com um coco real!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.item1}>
            <div className={styles.product1}>
              <div className={styles.entremetMorango}>
                <div className={styles.image2}>
                  <div className={styles.macaronpng}>
                    <img
                      className={styles.image2Icon}
                      alt=""
                      src="/image-21@2x.png"
                    />
                    <img
                      className={styles.bonapetit51Icon}
                      alt=""
                      src="/bonapetit5-1@2x.png"
                    />
                    <img
                      className={styles.lua15021Icon}
                      alt=""
                      src="/lua-1502-1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.description2}>
                  <div className={styles.heading23}>Entremet Morango</div>
                  <div className={styles.vocVaiSeContainer}>
                    <p
                      className={styles.conheaOCardpio}
                    >{`Um doce cremoso que remete ao paladar `}</p>
                    <p
                      className={styles.conheaOCardpio}
                    >{`do seu cliente uma memória afetiva com `}</p>
                    <p className={styles.conheaOCardpio}>
                      sabor de danoninho… 
                    </p>
                  </div>
                  <div className={styles.vocVaiSeContainer}>
                    <p
                      className={styles.conheaOCardpio}
                    >{`Te garanto que todas as outras sobremesas `}</p>
                    <p
                      className={styles.conheaOCardpio}
                    >{`de morango vão perder a graça pro seu `}</p>
                    <p className={styles.conheaOCardpio}>
                      cliente depois que ele experimentar essa!
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.romeuEJulieta}>
                <div className={styles.macaronpngContainer}>
                  <div className={styles.macaronpng}>
                    <img
                      className={styles.image3Icon}
                      alt=""
                      src="/image-3@2x.png"
                    />
                    <img
                      className={styles.bonaPetit2011}
                      alt=""
                      src="/bona-petit20-1-1@2x.png"
                    />
                    <img
                      className={styles.lua916611}
                      alt=""
                      src="/lua-9166-1-1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.heading2MacaronParent}>
                  <div className={styles.heading2Container}>
                    <p className={styles.conheaOCardpio}>{`Entremet Romeu `}</p>
                    <p className={styles.conheaOCardpio}>{`& Julieta`}</p>
                  </div>
                  <div className={styles.aCombinaoPerfeitaContainer}>
                    <p
                      className={styles.conheaOCardpio}
                    >{`A combinação perfeita de queijo com goiaba, `}</p>
                    <p className={styles.conheaOCardpio}>
                      do jeito que o brasileiro gosta, mas com
                    </p>
                    <p
                      className={styles.conheaOCardpio}
                    >{`uma roupagem completamente nova do `}</p>
                    <p className={styles.conheaOCardpio}>
                      novo mundo da confeitaria!
                    </p>
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
