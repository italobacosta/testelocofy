import type { NextPage } from "next";
import { Button } from "@mui/material";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section className={[styles.bgWrapper, className].join(" ")}>
      <div className={styles.bg}>
        <div className={styles.bgChild} />
        <img className={styles.agrupar15} alt="" src="/agrupar-1-5@2x.png" />
        <div className={styles.vsl}>
          <div className={styles.bgChild} />
          <h1 className={styles.vsl1}>VSL</h1>
        </div>
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
            height: 79,
          }}
        >
          QUERO ENRIQUECER NA CONFEITARIA
        </Button>
      </div>
    </section>
  );
};

export default FrameComponent;
