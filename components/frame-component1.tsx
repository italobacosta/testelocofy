import type { NextPage } from "next";
import { Button } from "@mui/material";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.bgWrapper, className].join(" ")}>
      <div className={styles.bg}>
        <div className={styles.bgChild} />
        <img
          className={styles.agrupar16}
          loading="lazy"
          alt=""
          src="/agrupar-1-6@2x.png"
        />
        <div className={styles.title}>
          <h2 className={styles.oQue}>O que é a Confeitaria Lucrativa?</h2>
        </div>
        <div className={styles.aConfeitariaLucrativaContainer}>
          <p
            className={styles.aConfeitariaLucrativa}
          >{`A Confeitaria Lucrativa é o único lugar que existe no Brasil `}</p>
          <p
            className={styles.aConfeitariaLucrativa}
          >{`para você aprender a produzir Entremets aí mesmo na cozinha `}</p>
          <p className={styles.aConfeitariaLucrativa}>da sua casa.</p>
        </div>
        <div className={styles.content}>
          <div className={styles.benefits}>
            <b className={styles.eAindaComContainer}>
              <p
                className={styles.aConfeitariaLucrativa}
              >{`E ainda com todo o passo-a-passo para você ganhar mais de `}</p>
              <p className={styles.aConfeitariaLucrativa}>
                R$ 10.000 por mês fazendo seus Entremets!
              </p>
            </b>
            <div className={styles.naConfeitariaLucrativaContainer}>
              <p
                className={styles.aConfeitariaLucrativa}
              >{`Na Confeitaria Lucrativa eu revelo todos os segredos das receitas `}</p>
              <p
                className={styles.aConfeitariaLucrativa}
              >{`responsáveis pelo faturamento de 7 milhões por ano da minha loja, `}</p>
              <p className={styles.aConfeitariaLucrativa}>a Bona Petit.</p>
            </div>
            <div className={styles.benefitThree}>
              <b className={styles.paraVocNoContainer}>
                <p
                  className={styles.aConfeitariaLucrativa}
                >{`Para você não apenas viver da confeitaria, mas verdadeiramente `}</p>
                <p className={styles.aConfeitariaLucrativa}>
                  ENRIQUECER nesse mercado!
                </p>
              </b>
            </div>
          </div>
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
