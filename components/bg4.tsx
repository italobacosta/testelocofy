import type { NextPage } from "next";
import { Button } from "@mui/material";
import styles from "./bg4.module.css";

export type Bg4Type = {
  className?: string;
};

const Bg4: NextPage<Bg4Type> = ({ className = "" }) => {
  return (
    <div className={[styles.bg, className].join(" ")}>
      <div className={styles.bgChild} />
      <img className={styles.icon} alt="" src="/2-1@2x.png" />
      <div className={styles.content}>
        <div className={styles.highlightParent}>
          <div className={styles.highlight}>
            <h2 className={styles.nemSDeContainer}>
              <p className={styles.nemSDe}>{`Nem só de receitas vive o `}</p>
              <p className={styles.nemSDe}>Confeiteiro do Novo Mundo…</p>
            </h2>
          </div>
          <div className={styles.muitoAlmDeContainer}>
            <p
              className={styles.muitoAlmDe}
            >{`Muito além de novas receitas, dentro da Confeitaria Lucrativa você `}</p>
            <p className={styles.muitoAlmDe}>
              encontra tudo que precisa para atingir sua liberdade financeira.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.bgInner}>
        <div className={styles.listParent}>
          <div className={styles.list}>
            <div className={styles.item}>
              <div className={styles.frameChild} />
              <img
                className={styles.itemChild}
                loading="lazy"
                alt=""
                src="/rectangle-4@2x.png"
              />
            </div>
            <div className={styles.description}>
              <div className={styles.descriptionChild} />
              <div className={styles.title}>
                <h3 className={styles.marketingNoInstagramContainer}>
                  <p className={styles.muitoAlmDe}>Marketing no</p>
                  <p className={styles.muitoAlmDe}>Instagram</p>
                  <p className={styles.nemSDe}>&nbsp;</p>
                </h3>
              </div>
              <div className={styles.todosOsSegredosContainer}>
                <p
                  className={styles.todosOsSegredos}
                >{`Todos os segredos para `}</p>
                <p
                  className={styles.todosOsSegredos}
                >{`criar reels que dão água `}</p>
                <p className={styles.todosOsSegredos}>{`na boca dos seus `}</p>
                <p className={styles.todosOsSegredos}>clientes só de olhar. </p>
              </div>
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.item}>
              <div className={styles.frameChild} />
              <img
                className={styles.itemChild}
                loading="lazy"
                alt=""
                src="/rectangle-4-1@2x.png"
              />
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.descriptionChild} />
              <h3 className={styles.vendasParaConfeitaria}>
                Vendas para Confeitaria
              </h3>
              <div className={styles.comoFecharContratosContainer}>
                <p
                  className={styles.todosOsSegredos}
                >{`Como fechar contratos de +60 `}</p>
                <p
                  className={styles.todosOsSegredos}
                >{`doces por semana para um `}</p>
                <p
                  className={styles.todosOsSegredos}
                >{`único cliente e garantir um `}</p>
                <p
                  className={styles.todosOsSegredos}
                >{`faturamento fixo mensal de `}</p>
                <p className={styles.todosOsSegredos}>+R$ 5.000. </p>
              </div>
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.item}>
              <div className={styles.frameChild} />
              <img
                className={styles.itemChild}
                loading="lazy"
                alt=""
                src="/rectangle-4-2@2x.png"
              />
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.descriptionChild} />
              <h3 className={styles.calculadoraDePrecificao}>
                Calculadora de Precificação
              </h3>
              <div className={styles.minhaUmaCalculadoraPessoalWrapper}>
                <div className={styles.minhaUmaCalculadoraContainer}>
                  <p
                    className={styles.todosOsSegredos}
                  >{`Minha uma calculadora pessoal `}</p>
                  <p
                    className={styles.todosOsSegredos}
                  >{`paravocê saber, antes de `}</p>
                  <p
                    className={styles.todosOsSegredos}
                  >{`aceitar qualquer encomenda, `}</p>
                  <p
                    className={styles.todosOsSegredos}
                  >{`qual vai ser seu custo e seu `}</p>
                  <p className={styles.todosOsSegredos}>lucro final!</p>
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
            background: "linear-gradient(90deg, #008325, #2bff67 50%, #008325)",
            borderRadius: "0px 0px 0px 0px",
            "&:hover": {
              background:
                "linear-gradient(90deg, #008325, #2bff67 50%, #008325)",
            },
            width: 619,
          }}
        >
          QUERO ENRIQUECER NA CONFEITARIA
        </Button>
      </div>
    </div>
  );
};

export default Bg4;
