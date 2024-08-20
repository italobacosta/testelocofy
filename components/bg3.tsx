import type { NextPage } from "next";
import { Button } from "@mui/material";
import styles from "./bg3.module.css";

export type Bg3Type = {
  className?: string;
};

const Bg3: NextPage<Bg3Type> = ({ className = "" }) => {
  return (
    <div className={[styles.bg, className].join(" ")}>
      <div className={styles.bgChild} />
      <img
        className={styles.selo1Icon}
        loading="lazy"
        alt=""
        src="/selo-1@2x.png"
      />
      <h2 className={styles.oRisco}>O risco é todo meu! </h2>
      <div className={styles.minhaMissoContainer}>
        <p className={styles.minhaMisso}>
          Minha missão é fazer você conquistar o mesmo sucesso
        </p>
        <p className={styles.minhaMisso}>que eu tive na confeitaria. </p>
      </div>
      <div className={styles.entoSePorContainer}>
        <p
          className={styles.minhaMisso}
        >{`Então se por algum motivo você achar que a Confeitaria `}</p>
        <p
          className={styles.minhaMisso}
        >{`Lucrativa não é para você, basta enviar uma única mensagem `}</p>
        <p
          className={styles.minhaMisso}
        >{`ao nosso suporte no WhatsApp, que eu devolvo todo o seu `}</p>
        <p className={styles.minhaMisso}>dinheiro na mesma hora.</p>
      </div>
      <div className={styles.vocFicaFelizContainer}>
        <p
          className={styles.minhaMisso}
        >{`Você fica feliz com o sucesso da sua confeitaria, ou você `}</p>
        <p
          className={styles.minhaMisso}
        >{`fica feliz com seu dinheiro de volta. E nós continuamos `}</p>
        <p className={styles.minhaMisso}>amigos, pode ser? </p>
      </div>
      <Button
        className={styles.chefQuote}
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
        Quero Enriquecer na Confeitaria
      </Button>
      <div className={styles.cupomLiberado}>CUPOM LIBERADO</div>
    </div>
  );
};

export default Bg3;
