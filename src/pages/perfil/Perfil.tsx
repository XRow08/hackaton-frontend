import classNames from "classnames";
import { useEffect, useState } from "react";
import { BiShareAlt } from "react-icons/bi";
import { CgOptions } from "react-icons/cg";

//FUNÇÕES
import {
  balanceOfUsd,
  verInventarioDeEventos,
  verUriDoContrato,
} from "../../services/Contratos";

//HELPERS
import { StorageHelper } from "../../helpers";

//COMPONENTS
import {
  Title,
  Header,
  Colar,
  InstagramIcon,
  TiktokIcon,
  TwitterIcon,
  TicketPerfil,
  Footer,
  Search,
  GetRewardTicket,
  CreateButton,
} from "../../Components";
import { EventCard } from "../../Components/Card/EventCard";
import { Loading } from "../../Components/Loading";

export function Perfil() {
  const [active, setActive] = useState("atividades");
  const [modal, setModal] = useState(false);
  const [usd, setUsd] = useState(0);
  const [events, setEvents] = useState<any | null>(null);
  const adress = StorageHelper.getItem("adress");
  const user = StorageHelper.getItem("user");
  const firstFour = adress.substring(0, 4);
  const lastFour = adress.slice(-4);
  const result = `${firstFour}...${lastFour}`;

  useEffect(() => {
    balanceOfUsd(adress)
      .then((response) => setUsd(Number(response)))
      .catch((err) => console.log(err));

    verInventarioDeEventos(adress).then(async (events) => {
      const array: any[] = [];
      for (const event of events) {
        const uri = await verUriDoContrato(event);
        array.push(uri);
      }

      const promises = array.map((uri) => fetch(uri).then((res) => res.json()));
      Promise.all(promises)
        .then((results) => {
          const eventsWithUri = results.map((event, index) => {
            return {
              ...event,
              adressEvent: events[index],
            };
          });
          setEvents(eventsWithUri);
        })
        .catch((error) => console.error(error));
    });
  }, []);

  return (
    <section className="h-full">
      <Header />
      <div className="bg-banner bg-no-repeat bg-cover w-full h-[25vh] p-20" />
      <div className="h-44 w-44 rounded-full border-4 absolute left-32 top-48 bg-logoxr bg-no-repeat bg-cover" />
      <section className="bg-brand-primary h-[100vh] p-16 pt-24 px-32 w-full flex flex-col gap-12">
        <div className="flex items-start justify-between">
          <div className="flex flex-col justify-center gap-4 w-1/3">
            <Title color="white" className="text-2xl font-medium">
              {user.name}
            </Title>
            <div className="bg-[#26252F] text-[rgba(255,255,255,.7)] rounded-lg flex items-center justify-between gap-2 w-full h-12 p-2 border border-[rgba(255,255,255,.3)]">
              Carteira do criador
              <span className="flex items-center gap-2">
                {!adress ? "Sem carteira" : `${result}`}
                <Colar />
              </span>
            </div>
            <div className="bg-[#26252F] text-[rgba(255,255,255,.7)] rounded-lg flex items-center justify-between gap-2 w-full h-12 p-3 border border-[rgba(255,255,255,.3)]">
              USD
              <span>{!adress ? "Sem carteira" : `$${usd}`}</span>
            </div>
          </div>

          <div className="flex flex-col justify-center items-end gap-8">
            <div className="flex items-center gap-2">
              <div className="cursor-pointer mr-8 flex items-center gap-2">
                <CgOptions size={20} color="white" />
                <Title className="text-[rgba(255,255,255,.7)]">Opções</Title>
              </div>

              <div className="cursor-pointer flex items-center gap-2">
                <BiShareAlt size={20} color="white" />
                <Title className="text-[rgba(255,255,255,.7)]">
                  Compartilhar
                </Title>
              </div>
            </div>
            <div className="flex items-center gap-2 h-full cursor-pointer">
              <InstagramIcon />
              <TiktokIcon />
              <TwitterIcon />
            </div>
          </div>
        </div>

        <div className="w-full h-12 flex items-center justify-between border-b border-[rgba(255,255,255,0.3)]">
          <div className="flex items-center w-1/3">
            <div
              onClick={() => setActive("atividades")}
              className={classNames(
                "w-1/4 h-12 font-lato flex justify-center items-center text-[rgba(255,255,255,.5)] transition-all duration-300 ease-in-out hover:text-white cursor-pointer",
                {
                  "bg-[#1B1A26] text-[#fff] rounded-t-2xl border-b border-[#7050D9]":
                    active === "atividades",
                }
              )}
            >
              Atividades
            </div>
            <div
              onClick={() => setActive("tickets")}
              className={classNames(
                "w-1/4 h-12 font-lato flex justify-center items-center text-[rgba(255,255,255,.5)] transition-all duration-300 ease-in-out hover:text-white cursor-pointer",
                {
                  "bg-[#1B1A26] text-[#fff] rounded-t-2xl border-b border-[#7050D9]":
                    active === "tickets",
                }
              )}
            >
              Tickets
            </div>
          </div>
          <Search
            className="border-[rgba(255,255,255,.3)] mb-2"
            placeholder={"Atividades, tickets e itens"}
          />
        </div>

        {active === "atividades" && (
          <div className="flex items-center justify-between h-[40vh]">
            <CreateButton link="/create-event" label="Criar Evento" />

            {events ? (
              <div className="w-full h-full flex items-center pl-8 gap-4">
                {EventCard(events)}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center w-full">
                <Loading size="big" label="Carregando eventos..." />
              </div>
            )}
          </div>
        )}

        {active === "tickets" && (
          <TicketPerfil onClick={() => setModal(true)} />
        )}
      </section>
      <Footer />
    </section>
  );
}
