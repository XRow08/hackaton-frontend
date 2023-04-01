//IMPORTS REACT / NEXT
import Image from "next/image";

//IMPORTS COMPONENTS
import { Title } from "../Title";

export function Tickets() {
  function Item() {
    return (
      <div className="w-1/5 flex flex-col items-center ">
        <div className="bg-brand-primary rounded-lg ">
          <Image
            src={"/ticket_esgotado.png"}
            alt={"ticket"}
            height={1000}
            width={1000}
          />
        </div>
        <Title color="white" className="text-base font-medium">
          Ticket1
        </Title>
      </div>
    );
  }
  return (
    <div className="flex flex-col w-full h-[22rem] bg-[#1B1A26] p-4 rounded-lg border border-[rgba(255,255,255,.3)]">
      <div className="w-full flex justify-between items-center">
        <Title color="white" className="text-lg font-normal drop-shadow-none">
          Tickets
        </Title>
        <Title color="white" className="text-lg font-normal drop-shadow-none">
          em breve
        </Title>
      </div>
      <div className="w-full mt-4 flex justify-between gap-2">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      <div className="w-full mt-4 flex justify-between gap-2">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}
