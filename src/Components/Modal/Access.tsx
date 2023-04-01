import Link from "next/link";
import { Button } from "../Button";
import { Close } from "../Icon/Close";
import { Title } from "../Title";

export function Access({ onClick }: any) {
  return (
    <div className="fixed w-screen h-screen flex justify-center items-center bg-[rgba(0,0,0,.3)] z-50">
      <div className="h-[20vh] w-[30vw] px-14 bg-brand-primary border border-[rgba(255,255,255,.3)] rounded-2xl flex flex-col justify-center items-center gap-4">
        <Close
          className={"absolute top-[42%] right-[36%] cursor-pointer"}
          onClick={onClick}
        />
        <Title color="white" className="text-lg font-medium">
          Como deseja acessar nossa plataforma?
        </Title>
        <Link
          href={"/create-account"}
          className="bg-[#353441] text-lg transition-all duration-300 ease-in-out font-medium text-white font-lato w-full flex justify-start items-center h-12 px-4 hover:bg-[#4C24D0] border border-[rgba(255,255,255,.3)] rounded-lg"
        >
          Entrar como usuário
        </Link>
      </div>
    </div>
  );
}
