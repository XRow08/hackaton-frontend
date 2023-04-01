import Image from "next/image";

//IMPORTS COMPONENTS
import { Title } from "../Title";
import { Clock } from "../Icon/Clock";
import { Map } from "../Icon/Map";
import { InputDoFilhoDaPuta } from "../Input/InputDoFilhoDaPuta";
import { Button } from "../Button";
import { Close } from "../Icon/Close";

export function Modal({ onClick }: any) {
  return (
    <div className="fixed h-screen w-screen bg-[rgba(0,0,0,0.6)] flex justify-center items-center z-50">
      <Close
        className={"absolute top-28 right-[36%] cursor-pointer"}
        onClick={onClick}
      />
      <div className="h-[80vh] w-[30%] flex flex-col gap-4 px-20 p-8 bg-brand-primary rounded-2xl border border-[rgba(255,255,255,.3)]">
        <Image
          height={1000}
          width={1000}
          src={"/previewModal.png"}
          alt="preview"
          className="w-[100%]"
        />
        <Title color="white" className="text-lg font-bold">
          Ticket Espectador
        </Title>
        <div className="flex items-center gap-2">
          <Map />
          <Title className="text-[rgba(255,255,255,.7)] font-medium">
            Evento presencial em{" "}
            <span className="border-b border-brand-text text-brand-text">
              Igloo Network - São Paulo, SP
            </span>
          </Title>
        </div>
        <div className="flex items-center gap-2">
          <Clock />
          <Title className="text-[rgba(255,255,255,.7)] font-medium">
            31 mar - 2023 • 11:52 {">"} 17 abr - 2023 • 11:00
          </Title>
        </div>
        <div className="bg-[#26252F] text-[rgba(255,255,255,.7)] rounded-lg flex items-center gap-2 w-[70%] h-12 p-3 border border-[rgba(255,255,255,.3)]">
          Token beneficiente
          <Image
            src={"/verificado.png"}
            alt={"verificado"}
            height={1000}
            width={1000}
            className="w-3"
          />
        </div>

        <div className="bg-[#1B1A26] text-[rgba(255,255,255,.7)] rounded-lg flex flex-col items-start gap-4 w-full h-full border border-[rgba(255,255,255,.3)]">
          <div className="w-full h-14 bg-[#26252F] rounded-t-lg flex items-center justify-between border-b px-4 border-[rgba(255,255,255,.3)]">
            <Title color="white" className="font-medium">
              Ingressos restantes
            </Title>
            <Title color="white" className="font-medium">
              1000
            </Title>
          </div>
          <div className="w-full flex items-center justify-between px-4">
            <Title color="white" className="font-medium">
              Qt de ingressos
            </Title>
            <InputDoFilhoDaPuta />
          </div>
          <div className="flex w-full justify-center items-center text-base font-normal text-[rgba(255,255,255,.7)]">
            Vendas até 17/04/2023
          </div>
          <Button className="w-[80%] text-white self-center text-lg font-normal rounded-lg outline-none">
            Comprar
          </Button>
        </div>
      </div>
    </div>
  );
}
