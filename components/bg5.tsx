import type { NextPage } from "next";
import { Button } from "@mui/material";
import styles from "./bg5.module.css";

export type Bg5Type = {
  className?: string;
};

const Bg5: NextPage<Bg5Type> = ({ className = "" }) => {
  return (
    <div className={[styles.bg, className].join(" ")}>
      <div className={styles.bgChild} />
      <img className={styles.icon} alt="" src="/4-1@2x.png" />
      <div className={styles.retangulo}>
        <div className={styles.retanguloChild} />
        <h1 className={styles.somenteNessaPgina}>SOMENTE NESSA PÁGINA</h1>
        <h1 className={styles.confeitariaLucrativaComContainer}>
          <p className={styles.confeitariaLucrativa}>CONFEITARIA LUCRATIVA</p>
          <p className={styles.confeitariaLucrativa}>COM DESCONTO TEMPORÁRIO</p>
        </h1>
        <div className={styles.deR99700Container}>
          <span className={styles.de}>{`DE: `}</span>
          <b className={styles.r99700}>R$ 997,00</b>
        </div>
        <div className={styles.xDeRContainer}>
          <span className={styles.de}>{`12x de: `}</span>
          <b className={styles.r2982}>R$ 29,82</b>
        </div>
        <div className={styles.porApenas}>POR APENAS</div>
        <div className={styles.ouCom17}>(ou com 17% de desconto à vista)</div>
        <img
          className={styles.mockupAs1}
          loading="lazy"
          alt=""
          src="/mockup-as-1@2x.png"
        />
        <Button
          className={styles.botao}
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "30",
            background:
              "linear-gradient(90deg, #008325 0.32%, #2bff67 51.18%, #008325)",
            borderRadius: "0px 0px 0px 0px",
            "&:hover": {
              background:
                "linear-gradient(90deg, #008325 0.32%, #2bff67 51.18%, #008325)",
            },
            width: 846,
            height: 79,
          }}
        >
          QUERO APROVEITAR O DESCONTO
        </Button>
      </div>
    </div>
  );
};

export default Bg5;
