import type { NextPage } from "next";
import { Button } from "@mui/material";
import styles from "./bg7.module.css";

export type Bg7Type = {
  className?: string;
};

const Bg7: NextPage<Bg7Type> = ({ className = "" }) => {
  return (
    <section className={[styles.bg, className].join(" ")}>
      <div className={styles.bgChild} />
      <img className={styles.icon} alt="" src="/1-4@2x.png" />
      <div className={styles.statement}>
        <h2 className={styles.comEssasReceitasContainer}>
          <p className={styles.comEssasReceitas}>
            Com essas receitas do novo mundo, o único
          </p>
          <p
            className={styles.comEssasReceitas}
          >{` momento que seu cliente vai perguntar o preço, `}</p>
          <p className={styles.comEssasReceitas}>é na hora de fazer o PIX!!</p>
        </h2>
      </div>
      <div className={styles.comparison}>
        <div className={styles.nao}>
          <div className={styles.cross}>
            <div className={styles.price}>
              <div className={styles.content}>
                <div className={styles.contentChild} />
                <div className={styles.noImportaSeContainer}>
                  <p
                    className={styles.noImportaSe}
                  >{`Não importa se a "fulana" `}</p>
                  <p className={styles.noImportaSe}>
                    cobra 3 vezes mais barato…
                  </p>
                </div>
              </div>
              <div className={styles.closeButton}>
                <div className={styles.icon1}>
                  <div className={styles.iconChild} />
                  <img
                    className={styles.cancelar1Icon}
                    loading="lazy"
                    alt=""
                    src="/cancelar-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cross1}>
            <div className={styles.closeButton}>
              <div className={styles.icon1}>
                <div className={styles.iconChild} />
                <img
                  className={styles.cancelar2Icon}
                  loading="lazy"
                  alt=""
                  src="/cancelar-1@2x.png"
                />
              </div>
            </div>
            <div className={styles.margins}>
              <div className={styles.contentChild} />
              <div className={styles.nuncaMaisFiqueContainer}>
                <span className={styles.nuncaMaisFiqueContainer1}>
                  <p
                    className={styles.noImportaSe}
                  >{`Nunca mais fique refém das `}</p>
                  <p className={styles.noImportaSe}>margens apertadas.</p>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.cross1}>
            <div className={styles.closeButton}>
              <div className={styles.icon1}>
                <div className={styles.iconChild} />
                <img
                  className={styles.cancelar2Icon}
                  loading="lazy"
                  alt=""
                  src="/cancelar-1@2x.png"
                />
              </div>
            </div>
            <div className={styles.priceWar}>
              <div className={styles.contentChild} />
              <div className={styles.noImportaSeContainer}>
                <p className={styles.noImportaSe}>
                  Fuja da guerra de preços da
                </p>
                <p className={styles.noImportaSe}>sua cidade.</p>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.simIcon}
          loading="lazy"
          alt=""
          src="/sim@2x.png"
        />
      </div>
      <div className={styles.hardWork}>
        <div className={styles.content1}>
          <h2 className={styles.noDMaisContainer}>
            <p
              className={styles.comEssasReceitas}
            >{`Não dá mais para se contentar com uma vida de muito `}</p>
            <p
              className={styles.comEssasReceitas}
            >{`trabalho e pouco retorno financeiro… Eu quero te `}</p>
            <p className={styles.comEssasReceitas}>
              libertar do Velho Mundo da Confeitaria. 
            </p>
          </h2>
          <div className={styles.contentInner}>
            <div className={styles.porIssoDentroDaConfeitariParent}>
              <h3 className={styles.porIssoDentroContainer}>
                <p
                  className={styles.comEssasReceitas}
                >{`Por isso, dentro da Confeitaria Lucrativa eu vou fazer de tudo para `}</p>
                <p className={styles.comEssasReceitas}>
                  você conquistar a vida que sempre sonhou por meio da
                  confeitaria!
                </p>
              </h3>
              <div className={styles.botaoWrapper}>
                <Button
                  className={styles.botao}
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
