import type { NextPage } from "next";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.bgWrapper, className].join(" ")}>
      <div className={styles.bg}>
        <img
          className={styles.agrupar12}
          loading="lazy"
          alt=""
          src="/agrupar-1-2@2x.png"
        />
        <img className={styles.agrupar13} alt="" src="/agrupar-1-2@2x.png" />
        <div className={styles.title}>
          <h2 className={styles.eMais}>E MAIS….</h2>
        </div>
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.itemChild} />
            <div className={styles.heading2Container}>
              <p className={styles.comunidadeDe}>{`Comunidade de `}</p>
              <p className={styles.comunidadeDe}>Alunos </p>
            </div>
            <div className={styles.umaComunidadeNaContainer}>
              <span className={styles.umaComunidadeNaContainer1}>
                <p className={styles.umaComunidadeNa}>
                  Uma comunidade na plataforma para você trocar experiências com
                  outros colegas confeiteiros.
                </p>
              </span>
            </div>
            <div className={styles.media}>
              <div className={styles.image} />
              <img
                className={styles.mockup1Icon}
                alt=""
                src="/mockup-1@2x.png"
              />
              <div className={styles.mediaChild} />
              <div className={styles.support}>
                <img
                  className={styles.supportChild}
                  alt=""
                  src="/rectangle-1.svg"
                />
                <img
                  className={styles.mockupSuporte1}
                  loading="lazy"
                  alt=""
                  src="/mockup-suporte-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.item1}>
            <div className={styles.itemItem} />
            <div className={styles.heading2}>Suporte Pedagógico </div>
            <div className={styles.umaEquipeEspecializadaContainer}>
              <span className={styles.umaComunidadeNaContainer1}>
                <p className={styles.umaComunidadeNa}>
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
