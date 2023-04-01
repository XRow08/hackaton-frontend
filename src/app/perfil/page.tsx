"use client";
import Image from "next/image";

import { Footer } from "@/Components/Footer";
import { Header } from "@/Components/Header";
import { Colar } from "@/Components/Icon/Colar";
import { Title } from "@/Components/Title";
import { CgOptions } from "react-icons/cg";
import { BiShareAlt } from "react-icons/bi";
import { InstagramIcon } from "@/Components/Icon/instagramIcon";
import { TiktokIcon } from "@/Components/Icon/TiktokIcon";
import { TwitterIcon } from "@/Components/Icon/TwitterIcon";
import classNames from "classnames";
import { useState } from "react";
import { CardNormal } from "@/Components/Card/CardNormal";
import { Card } from "@/Components/Card";
import { Search } from "@/Components/Search";
import Link from "next/link";

export default function Perfil() {
  const [active, setActive] = useState("atividades");

  return (
    <section className="h-full">
      <Header />
      <div className="bg-banner bg-no-repeat bg-cover w-full h-[25vh] p-20" />
      <div className="h-44 w-44 rounded-full border-4 absolute left-32 top-48 bg-logoxr bg-no-repeat bg-cover" />
      <section className="bg-brand-primary h-[100vh] p-16 px-32 w-full flex flex-col gap-12">
        <div className="flex items-start justify-between">
          <div className="flex flex-col justify-center gap-4 w-1/3">
            <Title color="white" className="text-2xl font-medium">
              XR System Company
            </Title>
            <div className="bg-[#26252F] text-[rgba(255,255,255,.7)] rounded-lg flex items-center justify-between gap-2 w-full h-12 p-3 border border-[rgba(255,255,255,.3)]">
              Carteira do criador
              <span className="flex items-center gap-2">
                x1f3f78c143fd1f...
                <Colar />
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center items-end gap-8">
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
            <div
              onClick={() => setActive("itens")}
              className={classNames(
                "w-1/4 h-12 font-lato flex justify-center items-center text-[rgba(255,255,255,.5)] transition-all duration-300 ease-in-out cursor-pointer",
                {
                  "bg-[#1B1A26] text-[#fff] rounded-t-2xl border-b border-[#7050D9]":
                    active === "itens",
                }
              )}
            >
              Itens
            </div>
            <div
              onClick={() => setActive("tickets")}
              className={classNames(
                "w-1/4 h-12 font-lato flex justify-center items-center text-[rgba(255,255,255,.5)] transition-all duration-300 ease-in-out cursor-pointer",
                {
                  "bg-[#1B1A26] text-[#fff] rounded-t-2xl border-b border-[#7050D9]":
                    active === "tickets",
                }
              )}
            >
              Tickets
            </div>
            <div
              onClick={() => setActive("ativos")}
              className={classNames(
                "w-1/4 h-12 font-lato flex justify-center items-center text-[rgba(255,255,255,.5)] transition-all duration-300 ease-in-out cursor-pointer",
                {
                  "bg-[#1B1A26] text-[#fff] rounded-t-2xl border-b border-[#7050D9]":
                    active === "ativos",
                }
              )}
            >
              Ativos
            </div>
          </div>
          <Search className="border-[rgba(255,255,255,.3)]" placeholder={"Atividades, tickets e itens"} />
        </div>

        {active === "atividades" && (
          <div className="flex items-center gap-12 h-[40vh]">
            <Link href={'/create-event'} className="flex flex-col justify-center items-center rounded-lg mr-8 h-[12rem] cursor-pointer w-[10rem] font-lato font-medium text-[rgba(255,255,255,0.6)] bg-[#555555]">
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
              Criar Evento
            </Link>
            <CardNormal
              className="h-[40vh] w-1"
              title="WEB3 LATAM - O maior evento"
              subtitle="Igloo Network - São Paulo, SP"
              date="31 MAR > 17 ABR"
            />
            <Card
              className="h-[40vh] w-1"
              title="WEB3 LATAM - O maior evento"
              subtitle="Igloo Network - São Paulo, SP"
              date="31 MAR > 17 ABR"
            />
          </div>
        )}
      </section>
      <Footer />
    </section>
  );
}
