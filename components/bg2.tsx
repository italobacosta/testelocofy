import type { NextPage } from "next";
import { Button } from "@mui/material";
import styles from "./bg2.module.css";

export type Bg2Type = {
  className?: string;
};

const Bg2: NextPage<Bg2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.bg, className].join(" ")}>
      <div className={styles.bgChild} />
      <img className={styles.icon} loading="lazy" alt="" src="/7-1@2x.png" />
      <h2 className={styles.deixaEuTeContainer}>
        <p className={styles.deixaEuTe}>
          Deixa eu te contar um último segredinho 
        </p>
        <p className={styles.deixaEuTe}>antes de você entrar…</p>
      </h2>
      <div className={styles.dentroDoMduloContainer}>
        <p className={styles.dentroDoMdulo}>
          Dentro do módulo chamado "Vendas Lucrativas" eu vou te mostrar como
          recuperar
        </p>
        <p className={styles.dentroDoMdulo}>
          todo seu investimento na Confeitaria Lucrativa com uma estratégia
          simples de vendas.
        </p>
      </div>
      <b className={styles.apenasComEsseContainer}>
        <p
          className={styles.dentroDoMdulo}
        >{`Apenas com esse bônus você já consegue recuperar todo seu `}</p>
        <p className={styles.dentroDoMdulo}>
          investimento no curso antes mesmo da segunda parcela chegar. 
        </p>
      </b>
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
          height: 79,
        }}
      >
        QUERO CONHECER ESSA ESTRATÉGIA
      </Button>
    </div>
  );
};

export default Bg2;
