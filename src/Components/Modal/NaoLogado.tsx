import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Title } from "../Title";

export function NaoLogado({ onClick }: any) {
  return (
    <>
      <div className="fixed h-screen w-screen bg-[rgba(0,0,0,0.3)] flex justify-center items-center z-50">
        <div className=" w-[40%] flex flex-col items-center justify-center gap-4 px-20 p-8 bg-brand-primary rounded-2xl border border-[rgba(255,255,255,.3)]">
          <img src={"/getReward.png"} alt="reward" className="w-1/2" />
          <Title className="text-white font-medium text-xl font-lato">
            Voce não está logado!
          </Title>
          <Link to={"/login"} className="w-1/2">
            <Button className="text-white w-full rounded-lg border p-2 border-[rgba(255,255,255,.3)]">
              Fazer Login
            </Button>
          </Link>
          <Link to={"/register"} className="w-1/2">
            <Button className="text-white w-full rounded-lg border p-2 border-[rgba(255,255,255,.3)]">
              Se registrar
            </Button>
          </Link>
          <Button
            onClick={onClick}
            className="text-white rounded-lg w-1/2 border p-2 border-[rgba(255,255,255,.3)]"
          >
            Voltar
          </Button>
        </div>
      </div>
    </>
  );
}
