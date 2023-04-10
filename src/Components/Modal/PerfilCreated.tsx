import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Title } from "../Title";

export function PerfilCreated({ onClick }: any) {
  return (
    <>
      <div className="fixed h-screen w-screen bg-brand-primary flex justify-center items-center z-50">
        <div className="w-[40%] flex flex-col items-center justify-center gap-4 px-20 bg-brand-primary rounded-2xl">
          <img src={"/getReward.png"} alt="reward" className="w-3/5" />
          <Title className="text-white font-medium text-xl font-lato">
            Seu perfil foi criado com sucesso!
          </Title>
          <Title className="text-[rgba(255,255,255,0.7)] text-center font-normal text-base font-lato w-full">
            Desejamos uma excelente experiência em nossa plataforma. Caso ocorra
            algum problema, entre em contato com a nossa equipe.
          </Title>
          <Link to={"/perfil"} className="w-full">
            <Button className="text-white w-full bg-[#4C24D0] rounded-lg border p-2 border-[rgba(255,255,255,.3)]">
              Ir para o perfil
            </Button>
          </Link>
          <Button
            onClick={onClick}
            className="text-white w-full rounded-lg border p-2 border-[rgba(255,255,255,.3)]"
          >
            Voltar
          </Button>
        </div>
      </div>
    </>
  );
}
