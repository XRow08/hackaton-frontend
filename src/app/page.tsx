"use client";
import { Card } from "@/Components/Card";
import { CardNormal } from "@/Components/Card/CardNormal";
import { Container } from "@/Components/Container";
import { Footer } from "@/Components/Footer";
import { Header } from "@/Components/Header";
import { Title } from "@/Components/Title";

export default function Home() {
  return (
    <section className="h-full bg-brand-primary">
      <Header />
      <div className="p-8 px-24 h-[60vh] gap-4 grid grid-rows-2 grid-flow-col">
        <Container className="border bg-brand-text row-span-2"> </Container>
        <Container className="border bg-brand-text col-span-1"> </Container>
        <Container className="border bg-brand-text col-span-1"> </Container>
      </div>
      <section className="px-24 w-full flex flex-col gap-12 pb-20">
        <div>
          <Title color="white" className="text-xl font-normal mb-2">
            Eventos
          </Title>
          <div className="w-full flex items-center gap-20">
            <Card title="Titulo" subtitle="Subtitulo" date="31 MAR > 17 ABR" />
            <Card title="Titulo" subtitle="Subtitulo" date="31 MAR > 17 ABR" />
            <Card title="Titulo" subtitle="Subtitulo" date="31 MAR > 17 ABR" />
            <Card title="Titulo" subtitle="Subtitulo" date="31 MAR > 17 ABR" />
            <Card title="Titulo" subtitle="Subtitulo" date="31 MAR > 17 ABR" />
          </div>
        </div>

        <div className="w-full flex items-center gap-20">
          <div className="w-1/5 h-[20rem] rounded-lg bg-brand-text"></div>
          <div className="w-1/5 h-[20rem] rounded-lg bg-brand-text"></div>
          <div className="w-1/5 h-[20rem] rounded-lg bg-brand-text"></div>
          <div className="w-1/5 h-[20rem] rounded-lg bg-brand-text"></div>
          <div className="w-1/5 h-[20rem] rounded-lg bg-brand-text"></div>
        </div>

        <div>
          <Title color="white" className="text-xl font-normal mb-2">
            Eventos
          </Title>
          <div className="w-full flex items-center gap-20">
            <CardNormal
              title="Titulo"
              subtitle="Subtitulo"
              date="31 MAR > 17 ABR"
            />
            <CardNormal
              title="Titulo"
              subtitle="Subtitulo"
              date="31 MAR > 17 ABR"
            />
            <CardNormal
              title="Titulo"
              subtitle="Subtitulo"
              date="31 MAR > 17 ABR"
            />
            <CardNormal
              title="Titulo"
              subtitle="Subtitulo"
              date="31 MAR > 17 ABR"
            />
            <CardNormal
              title="Titulo"
              subtitle="Subtitulo"
              date="31 MAR > 17 ABR"
            />
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}
