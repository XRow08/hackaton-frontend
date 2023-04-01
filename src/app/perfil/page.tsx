"use client";
import Image from "next/image";

import { Footer } from "@/Components/Footer";
import { Header } from "@/Components/Header";
import { Colar } from "@/Components/Icon/Colar";
import { Title } from "@/Components/Title";
import { CgOptions } from "react-icons/cg";
import { BiShareAlt } from "react-icons/bi";

export default function Perfil() {
  return (
    <section className="h-full">
      <Header />
      <div className="bg-banner bg-no-repeat bg-cover w-full h-[25vh] p-20" />
      <div className="h-44 w-44 rounded-full border-4 absolute left-32 top-48 bg-logoxr bg-no-repeat bg-cover" />
      <section className="bg-brand-primary h-[70vh] p-16 px-32 w-full flex items-start justify-between">
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

        <div className="flex flex-col justify-center gap-4">
          <div className="flex items-center gap-2">
            <CgOptions size={20} color="white" />
            <Title className="text-[rgba(255,255,255,.7)]">Opções</Title>

            <BiShareAlt size={20} color="white" />
            <Title className="text-[rgba(255,255,255,.7)]">Opções</Title>
          </div>
          <div></div>
        </div>
      </section>
      <Footer />
    </section>
  );
}
