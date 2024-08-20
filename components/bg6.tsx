import type { NextPage } from "next";
import styles from "./bg6.module.css";

export type Bg6Type = {
  className?: string;
};

const Bg6: NextPage<Bg6Type> = ({ className = "" }) => {
  return (
    <div className={[styles.bg, className].join(" ")}>
      <div className={styles.bgChild} />
      <img className={styles.quem1} alt="" src="/quem--1@2x.png" />
      <div className={styles.chefQuestion}>
        <h2 className={styles.afinalQuemContainer}>
          <p className={styles.afinalQuem}>{`Afinal, quem é o Chef `}</p>
          <p className={styles.tuaniBonamini}>Tuani Bonamini? </p>
        </h2>
      </div>
      <div className={styles.tuaniBonaminiContainer}>
        <p
          className={styles.donoDaBona}
        >{`Tuani Bonamini é chef confeiteiro, empresário e `}</p>
        <p className={styles.donoDaBona}>
          dono da Bona Petit, uma das Boulangeries de maior
        </p>
        <p
          className={styles.donoDaBona}
        >{`sucesso no país, com um faturamento de +7 milhões `}</p>
        <p className={styles.donoDaBona}>de reais por ano. </p>
      </div>
      <div className={styles.chefExperience}>
        <div className={styles.professorConvidadoDaContainer}>
          <p
            className={styles.donoDaBona}
          >{`Professor convidado da Le Cordon Bleu, o chef Tuani `}</p>
          <p className={styles.donoDaBona}>
            é graduado em administração de empresas, além de
          </p>
          <p
            className={styles.donoDaBona}
          >{`possuir formação de confeitaria e gastronomia em `}</p>
          <p
            className={styles.donoDaBona}
          >{`cursos na França, Espanha e Itália, onde desenvolveu `}</p>
          <p className={styles.donoDaBona}>
            sua metodologia autoral nesses países. 
          </p>
        </div>
      </div>
      <div className={styles.tuaniBonaminiContainer}>
        <p
          className={styles.donoDaBona}
        >{`Também presta consultoria para grandes restaurantes `}</p>
        <p
          className={styles.donoDaBona}
        >{`de sucesso no Brasil, como o Copacabana Palace, o `}</p>
        <p
          className={styles.donoDaBona}
        >{`Tuju (estrela Michelin em São Paulo) e o bistrô Ça-Va, `}</p>
        <p className={styles.donoDaBona}>do chef Erick Jacquin. </p>
      </div>
      <div className={styles.eAgoraEleContainer}>
        <p
          className={styles.donoDaBona}
        >{`E agora ele reuniu todo esse conhecimento e experiência `}</p>
        <p
          className={styles.donoDaBona}
        >{`internacional dentro de um único lugar, a sua escola online: `}</p>
        <p className={styles.donoDaBona}>a Confeitaria Lucrativa! </p>
      </div>
    </div>
  );
};

export default Bg6;
