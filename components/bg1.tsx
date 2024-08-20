import type { NextPage } from "next";
import { Button } from "@mui/material";
import styles from "./bg1.module.css";

export type Bg1Type = {
  className?: string;
};

const Bg1: NextPage<Bg1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.bg, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img className={styles.icon} alt="" src="/3-1@2x.png" />
        <h2 className={styles.paraQuem}>
          Para quem é a Confeitaria Lucrativa?
        </h2>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.iconsParent}>
              <div className={styles.icons}>
                <div className={styles.iconsChild} />
                <div className={styles.shop}>
                  <div className={styles.shopChild} />
                  <div className={styles.atelier}>
                    <div className={styles.frameGroup}>
                      <div className={styles.sacoDeConfeitar1Wrapper}>
                        <img
                          className={styles.sacoDeConfeitar1Icon}
                          loading="lazy"
                          alt=""
                          src="/sacodeconfeitar-1@2x.png"
                        />
                      </div>
                      <h3 className={styles.quemInicianteContainer}>
                        <p
                          className={styles.quemIniciante}
                        >{`Quem é iniciante `}</p>
                        <p className={styles.naConfeitaria}>na Confeitaria</p>
                      </h3>
                    </div>
                  </div>
                  <div className={styles.eNoQuerContainer}>
                    <p
                      className={styles.eNoQuer}
                    >{`e não quer continuar fazendo `}</p>
                    <p
                      className={styles.eNoQuer}
                    >{`os mesmos doces que todo `}</p>
                    <p
                      className={styles.eNoQuer}
                    >{`mundo faz. Com a receita dos `}</p>
                    <p
                      className={styles.eNoQuer}
                    >{`5 entremets hipnóticos você `}</p>
                    <p
                      className={styles.eNoQuer}
                    >{`vai se diferenciar da sua `}</p>
                    <p className={styles.naConfeitaria}>
                      concorrência instantaneamente!
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.icons}>
                <div className={styles.iconsChild} />
                <div className={styles.frameContainer}>
                  <div className={styles.quemJPossuiUmaLojaOuUmWrapper}>
                    <h3 className={styles.quemJPossuiContainer}>
                      <p
                        className={styles.quemIniciante}
                      >{`Quem já possui `}</p>
                      <p
                        className={styles.quemIniciante}
                      >{`uma loja ou um `}</p>
                      <p className={styles.naConfeitaria}>ateliê</p>
                    </h3>
                  </div>
                  <div className={styles.eDesejaEscalarContainer}>
                    <p
                      className={styles.eNoQuer}
                    >{` e deseja escalar o seu `}</p>
                    <p
                      className={styles.eNoQuer}
                    >{`faturamento. As receitas de `}</p>
                    <p
                      className={styles.eNoQuer}
                    >{`5 Entremet são baratas de `}</p>
                    <p
                      className={styles.eNoQuer}
                    >{`fazer, fáceis de produzir e caro `}</p>
                    <p
                      className={styles.eNoQuer}
                    >{`de vender… Margem, escala e `}</p>
                    <p
                      className={styles.eNoQuer}
                    >{`recorrência na sua forma mais `}</p>
                    <p className={styles.eNoQuer}>perfeita!</p>
                  </div>
                  <div className={styles.shopIcon}>
                    <div className={styles.icon2} />
                    <img
                      className={styles.loja1Icon}
                      loading="lazy"
                      alt=""
                      src="/loja-1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.income}>
              <div className={styles.background}>
                <div className={styles.iconsChild} />
                <div className={styles.content}>
                  <div className={styles.shopChild} />
                  <div className={styles.iconContainer}>
                    <img
                      className={styles.renda1Icon}
                      loading="lazy"
                      alt=""
                      src="/renda-1@2x.png"
                    />
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.quemEstEmBuscaDeUmaRendWrapper}>
                      <h3 className={styles.quemEstEmContainer}>
                        <p
                          className={styles.quemIniciante}
                        >{`Quem está em busca `}</p>
                        <p className={styles.naConfeitaria}>
                          de uma renda extra
                        </p>
                      </h3>
                    </div>
                    <div className={styles.paraComporAContainer}>
                      <p
                        className={styles.eNoQuer}
                      >{`para compor a renda familiar. `}</p>
                      <p
                        className={styles.eNoQuer}
                      >{`Com apenas poucas horas por `}</p>
                      <p
                        className={styles.eNoQuer}
                      >{`semana fazendo Entremet, você `}</p>
                      <p className={styles.eNoQuer}>
                        já consegue um ganho mensal
                      </p>
                      <p className={styles.eNoQuer}>de 5 à 10 mil reais. </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.background}>
                <div className={styles.iconsChild} />
                <div className={styles.content1}>
                  <div className={styles.shopChild} />
                  <div className={styles.iconContainer1}>
                    <img
                      className={styles.chefeDeCozinha1Icon}
                      loading="lazy"
                      alt=""
                      src="/chefedecozinha-1@2x.png"
                    />
                  </div>
                  <div className={styles.quemAmaCozinharEQuerTrabaParent}>
                    <h3 className={styles.quemInicianteContainer}>
                      <p
                        className={styles.quemIniciante}
                      >{`Quem ama cozinhar e `}</p>
                      <p className={styles.quemIniciante}>
                        quer trabalhar perto
                      </p>
                      <p className={styles.naConfeitaria}> da família.</p>
                    </h3>
                    <div className={styles.aquiEuVouTeEnsinarAConstWrapper}>
                      <div className={styles.aquiEuVouContainer}>
                        <p
                          className={styles.eNoQuer}
                        >{`Aqui eu vou te ensinar a construir `}</p>
                        <p
                          className={styles.eNoQuer}
                        >{`uma Confeitaria Lucrativa de `}</p>
                        <p className={styles.eNoQuer}>
                          dentro da sua cozinha, pra você
                        </p>
                        <p
                          className={styles.eNoQuer}
                        >{` trabalhar pertinho dos seus `}</p>
                        <p className={styles.naConfeitaria}>
                          filhos, maridos ou familiares
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <Button
            className={styles.botao}
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
