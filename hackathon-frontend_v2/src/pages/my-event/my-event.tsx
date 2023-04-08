import classNames from "classnames";
import { BiShareAlt } from "react-icons/bi";
import { CgOptions } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";
import {
  Header,
  Title,
  Colar,
  InstagramIcon,
  TiktokIcon,
  TwitterIcon,
  Footer,
  Search,
} from "../../Components";
import { useEffect, useState } from "react";
import {
  verUltimoId,
  verUriDoContrato,
  verUriDoToken,
} from "../../services/Contratos";
import { TicketCard } from "../../Components/Card/TicketCard";
import { Loading } from "../../Components/Loading";

export function MyEvent() {
  const [active, setActive] = useState("atividades");
  const [modal, setModal] = useState(false);
  const [infoEvent, setInfoEvent] = useState<any | null>(null);
  const [tickets, setTickets] = useState<any | []>([]);
  const location = useLocation();
  const { a }: any = queryString.parse(location.search);
  const firstFour = a.substring(0, 4);
  const lastFour = a.slice(-4);
  const result = `${firstFour}...${lastFour}`;

  useEffect(() => {
    async function VerId() {
      const uri = await verUriDoContrato(a);
      const res = await fetch(uri);
      const data = await res.json();
      setInfoEvent(data);
      const ids = await verUltimoId(a);
      const uris: any = [];
      for (let i = 1; i <= Number(ids); i++) {
        const uriToken = await verUriDoToken(a, i);
        const res = await fetch(uriToken);
        const data = await res.json();
        uris.push(data);
      }
      setTickets(uris);
    }
    VerId();
  }, []);

  return (
    <>
      <Header />
      {infoEvent ? (
        <>
          <img className="w-full h-[20rem]" src={infoEvent.image} />
          <section className="bg-brand-primary h-[100vh] p-8 px-32 w-full flex flex-col gap-12">
            <div className="flex items-start justify-between">
              <div className="flex flex-col justify-center gap-2 w-1/3">
                <Title color="white" className="text-2xl font-medium">
                  {infoEvent.name}
                </Title>

                <div className="bg-[#26252F] text-[rgba(255,255,255,.7)] rounded-lg flex flex-col items-start text-left gap-2 mt-4 w-full p-2 border border-[rgba(255,255,255,.3)]">
                  <Title color="white" className="text-base font-medium">
                    Descrição
                  </Title>
                  {infoEvent.description}
                </div>
              </div>

              <div className="flex flex-col w-1/4 justify-center items-end gap-8">
                <div className="flex items-center gap-2">
                  <CgOptions size={20} color="white" />
                  <Title className="text-[rgba(255,255,255,.7)]">Opções</Title>

                  <BiShareAlt size={20} color="white" />
                  <Title className="text-[rgba(255,255,255,.7)]">Opções</Title>
                </div>
                <div className="flex items-center gap-2 h-full">
                  <InstagramIcon />
                  <TiktokIcon />
                  <TwitterIcon />
                </div>
                <div className="bg-[#26252F] text-[rgba(255,255,255,.7)] rounded-lg flex items-center justify-between gap-2 w-full h-12 p-2 border border-[rgba(255,255,255,.3)]">
                  adress do evento
                  <span className="flex items-center gap-2">
                    {result}
                    <Colar />
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full h-12 flex items-center justify-between border-b border-[rgba(255,255,255,0.3)]">
              <div className="flex justify-between items-center w-1/3">
                <div
                  onClick={() => setActive("atividades")}
                  className={classNames(
                    "w-1/4 h-12 font-lato flex justify-center items-center text-[rgba(255,255,255,.5)] transition-all duration-300 ease-in-out cursor-pointer",
                    {
                      "bg-[#1B1A26] text-[#fff] rounded-t-2xl border-b border-[#7050D9]":
                        active === "atividades",
                    }
                  )}
                >
                  Atividades
                </div>
              </div>
              <Search
                className="border-[rgba(255,255,255,.3)]"
                placeholder={"Atividades, tickets e itens"}
              />
            </div>

            {active === "atividades" && (
              <div className="flex items-center justify-start gap-12 h-[40vh]">
                <Link
                  to={`/create-ticket?a=${a}`}
                  className="flex flex-col justify-center items-center rounded-lg h-[12rem] cursor-pointer w-[10rem] font-lato font-medium text-[rgba(255,255,255,0.6)] bg-[#555555]"
                >
                  <svg
                    width="66"
                    height="66"
                    viewBox="0 0 66 66"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M4.5 33.2938H61.5M32.7062 4.5L32.7062 61.5"
                      stroke="white"
                      stroke-width="8"
                      stroke-linecap="round"
                    />
                  </svg>
                  Criar Ticket
                </Link>
                <div className="w-full h-full flex items-center pl-8 gap-4">
                  {TicketCard(tickets)}
                </div>
              </div>
            )}
          </section>
        </>
      ) : (
        <div className="w-screen h-screen bg-brand-primary fixed flex justify-center items-center">
          <Loading size="super-big" label="Carregando..." />
        </div>
      )}
      <Footer />
    </>
  );
}
