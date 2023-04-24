import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Header, Container, Title, Footer, EventCard } from "../../Components";
import {
  verCriadores,
  verInventarioDeEventos,
  verUriDoContrato,
} from "../../services";

export function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function Funcoes() {
      const criadores = await verCriadores();
      const enderecos: any = [];
      for (let i = 0; i < criadores.length; i++) {
        const events = await verInventarioDeEventos(criadores[i]);
        enderecos.push(events);
      }
      const array: any = [];
      for (const array2 of enderecos) {
        for (const event of array2) {
          const uri: any = await verUriDoContrato(event);
          array.push(uri);
        }
      }

      const promises = array.map((uri: any) =>
        fetch(uri).then((res) => res.json())
      );
      Promise.all(promises)
        .then((results: any) => {
          const eventsWithUri = results.map((event: any, index: any) => {
            return {
              ...event,
              adressEvent: enderecos[index],
            };
          });
          setEvents(eventsWithUri);
        })
        .catch((error) => console.error(error));
    }
    Funcoes();
  });

  return (
    <section className="h-full bg-brand-primary">
      <Header />
      <Toaster />
      <div className="p-8 px-24 h-[60vh] gap-4 grid grid-rows-2 grid-flow-col">
        <Container className="border border-[rgba(255,255,255,.3)] bg-riocrypto bg-no-repeat bg-cover bg-center row-span-2">
          {" "}
        </Container>
        <Container className="border border-[rgba(255,255,255,.3)] bg-websummit bg-no-repeat bg-cover bg-center col-span-1">
          {" "}
        </Container>
        <Container className="border border-[rgba(255,255,255,.3)] bg-tangib bg-no-repeat bg-cover bg-center col-span-1">
          {" "}
        </Container>
      </div>
      <section className="px-24 w-full h-screen flex flex-col gap-12 pb-20">
        <div>
          <Title color="white" className="text-xl font-normal mb-2">
            Eventos
          </Title>
          <div className="w-full flex items-center gap-8">
            <div className="absolute right-8 cursor-pointer hover:scale-105 transition-all ease-in-out">
              <svg
                width="28"
                height="46"
                viewBox="0 0 28 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 40.595L17.3063 23L0 5.405L5.32793 0L28 23L5.32793 46L0 40.595Z"
                  fill="#FFA148"
                />
              </svg>
            </div>
            <div className="absolute left-8 rotate-180 cursor-pointer hover:scale-105 transition-all ease-in-out">
              <svg
                width="28"
                height="46"
                viewBox="0 0 28 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 40.595L17.3063 23L0 5.405L5.32793 0L28 23L5.32793 46L0 40.595Z"
                  fill="#FFA148"
                />
              </svg>
            </div>
            {EventCard(events)}
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}
