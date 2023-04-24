import classNames from "classnames";
import { Title } from "../Title";

export function TicketCard(tickets: any, balances: any) {
  for (let i = 0; i < balances.length; i++) {
    tickets[i].balance = balances[i];
  }
  return tickets.map((data: any, index: any) => {
    return (
      <div
        key={index}
        id={index}
        className={classNames(
          "w-1/5 h-[35vh] flex flex-col gap-2 rounded-lg p-4 bg-brand-primary drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-all duration-300 ease-in-out border-2 hover:border-brand-text border-[rgba(255,255,255,.3)]"
        )}
      >
        <div className="absolute right-2 top-2 bg-white rounded-lg p-1">
          <Title className="font-semibold text-sm">x{data.balance}</Title>
        </div>
        <img
          src={data.image}
          draggable={false}
          className={`w-full h-[70%] rounded-lg`}
        />
        <div className="flex flex-col gap-2 h-[30%] overflow-hidden">
          <Title color="white" className="font-bold">
            {data.name}
          </Title>
          <Title color="white" className="font-bold">
            Beneficente: {data.attributes[0].value.toString()}
          </Title>
          <Title color="white" className="font-light text-sm">
            {data.description}
          </Title>
        </div>
      </div>
    );
  });
}
