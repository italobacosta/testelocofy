import type { NextPage } from "next";
import { Button } from "@mui/material";

export type Bg3Type = {
  className?: string;
};

const Bg3: NextPage<Bg3Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[32.125rem] left-[0rem] bg-lightsteelblue w-full h-[44.25rem] z-[12] text-left text-[1.5rem] text-black font-inter ${className}`}
    >
      <div className="absolute top-[0rem] left-[0rem] bg-lightsteelblue w-full h-full hidden" />
      <img
        className="absolute top-[4.625rem] left-[20.125rem] w-[33.125rem] h-[33.063rem] object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/selo-1@2x.png"
      />
      <h2 className="m-0 absolute top-[3.313rem] left-[55.063rem] text-[2.625rem] font-black font-[inherit] z-[13] mq450:text-[1.563rem] mq825:text-[2.125rem]">
        O risco é todo meu! 
      </h2>
      <div className="absolute top-[8.063rem] left-[55.063rem] font-light z-[13] mq450:text-[1.188rem]">
        <p className="[margin-block-start:0] [margin-block-end:10px]">
          Minha missão é fazer você conquistar o mesmo sucesso
        </p>
        <p className="[margin-block-start:0] [margin-block-end:10px]">
          que eu tive na confeitaria. 
        </p>
      </div>
      <div className="absolute top-[13.375rem] left-[55.188rem] font-light z-[14] mq450:text-[1.188rem]">
        <p className="[margin-block-start:0] [margin-block-end:10px]">{`Então se por algum motivo você achar que a Confeitaria `}</p>
        <p className="[margin-block-start:0] [margin-block-end:10px]">{`Lucrativa não é para você, basta enviar uma única mensagem `}</p>
        <p className="[margin-block-start:0] [margin-block-end:10px]">{`ao nosso suporte no WhatsApp, que eu devolvo todo o seu `}</p>
        <p className="[margin-block-start:0] [margin-block-end:10px]">
          dinheiro na mesma hora.
        </p>
      </div>
      <div className="absolute top-[23.938rem] left-[55.063rem] font-light inline-block min-h-[9.125rem] z-[13] mq450:text-[1.188rem]">
        <p className="[margin-block-start:0] [margin-block-end:10px]">{`Você fica feliz com o sucesso da sua confeitaria, ou você `}</p>
        <p className="[margin-block-start:0] [margin-block-end:10px]">{`fica feliz com seu dinheiro de volta. E nós continuamos `}</p>
        <p className="[margin-block-start:0] [margin-block-end:10px]">
          amigos, pode ser? 
        </p>
      </div>
      <Button
        className="absolute top-[36.063rem] left-[55.188rem] z-[13]"
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
      <div className="absolute top-[33.063rem] left-[67.688rem] font-extrabold z-[14] mq450:text-[1.188rem]">
        CUPOM LIBERADO
      </div>
    </div>
  );
};

export default Bg3;
