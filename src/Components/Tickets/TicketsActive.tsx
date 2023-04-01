//IMPORTS REACT / NEXT
import Image from "next/image";

//IMPORTS COMPONENTS
import { Title } from "../Title";
import { useState } from "react";
import classNames from "classnames";

export function TicketsActive({ setModal }: any) {
  function List() {
    const items = ["0", "0", "0", "0", "0"];

    return (
      <div className="w-full mt-4 flex justify-between gap-2">
        {items.map((index: string) => (
          <ListItem key={index} />
        ))}
      </div>
    );
  }

  function ListItem() {
    const [hover, setHover] = useState(false);

    const itemClassNames = classNames(
      "absolute cursor-pointer transition-all duration-300 ease-in-out text-white font-medium text-[0px] flex justify-center items-center h-2 w-[6.45rem] rounded-lg bg-transparent -ml-2 z-[0]",
      {
        "bg-[rgba(33,112,37,1)] text-[14px] h-8 -mt-6": hover,
      }
    );
    return (
      <div className="w-1/5 h-full flex flex-col items-center ">
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="bg-brand-primary rounded-lg p-2 pt-3 overflow-hidden"
        >
          <Image
            src={"/verificado.png"}
            alt={"verificado"}
            height={1000}
            width={1000}
            className="absolute w-4"
          />
          <Image
            src={"/ticket.png"}
            alt={"ticket"}
            height={1000}
            width={1000}
          />

          <div onClick={setModal} className={itemClassNames}>
            Comprar
          </div>
        </div>
        <Title color="white" className="text-base font-medium">
          Ticket1
        </Title>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-[22rem] bg-[#1B1A26] p-4 rounded-lg border border-[rgba(255,255,255,.3)]">
      <div className="w-full flex flex-col justify-between items-center">
        <div className="w-full flex items-center justify-between">
          <Title color="white" className="text-lg font-normal drop-shadow-none">
            Tickets
          </Title>
          <Title color="white" className="text-lg font-normal drop-shadow-none">
            Disponíveis
          </Title>
        </div>
        <div className="mt-4">
          <List />
          <List />
        </div>
      </div>
    </div>
  );
}
