"use client";
//IMPORTS REACT / NEXT

//IMPORTS COMPONENTS
import { CgDanger } from "react-icons/cg";
import { Container } from "../../Components/Container";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { Clock } from "../../Components/Icon/Clock";
import { Colar } from "../../Components/Icon/Colar";
import { Map } from "../../Components/Icon/Map";
import { Tickets } from "../../Components/Tickets";
import { Title } from "../../Components/Title";

export default function Event() {
  return (
    <section className="h-full bg-brand-primary">
      <Header />
      <section className="px-24 p-8 flex gap-12">
        <div className="w-[55%]">
          <Container className="border bg-sambaeth bg-no-repeat bg-cover bg-center h-[60vh]">
            {" "}
          </Container>
          <div className="mt-4 w-full flex items-center gap-4">
            <div className="bg-preview1 bg-cover bg-center w-1/6 h-20 rounded-lg" />
            <div className="bg-preview2 bg-cover bg-center w-1/6 h-20 rounded-lg" />
            <div className="bg-preview3 bg-cover bg-center w-1/6 h-20 rounded-lg" />
            <div className="bg-preview4 bg-cover bg-center w-1/6 h-20 rounded-lg" />
            <div className="bg-preview5 bg-cover bg-center w-1/6 h-20 rounded-lg" />
            <div className="bg-transparent w-1/6 h-20 rounded-lg flex justify-center items-center border border-[rgba(255,255,255,.3)] text-[rgba(255,255,255,.5)] text-xl font-medium">
              +12 <br /> Fotos
            </div>
          </div>
          <div className="w-full h-[60vh] p-6 pr-40 flex flex-col gap-8 border border-[rgba(255,255,255,.3)] bg-[#1B1A26] mt-4 rounded-lg">
            <Title color="white" className="text-lg font-bold">
              Comentários
            </Title>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-white font-medium">
                <img
                  src={"/person1.png"}
                  alt={"avatar"}
                  className="w-8 rounded-full"
                />
                Francisco
              </div>
              <Title className="text-[rgba(255,255,255,.7)]">
                Parabéns, WEB3 LATAM! O evento superou todas as minhas
                expectativas e me proporcionou uma experiência única. Obrigada,
                Joana.
              </Title>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-white font-medium">
                <img
                  src={"/person2.png"}
                  alt={"avatar"}
                  className="w-8 rounded-full"
                />
                Francisco
              </div>
              <Title className="text-[rgba(255,255,255,.7)]">
                A organização do WEB3 LATAM está de parabéns! O evento foi
                incrível e me deu a oportunidade de conhecer pessoas incríveis.
                Obrigado, Pedro.
              </Title>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-white font-medium">
                <img
                  src={"/person3.png"}
                  alt={"avatar"}
                  className="w-8 rounded-full"
                />
                Francisco
              </div>
              <Title className="text-[rgba(255,255,255,.7)]">
                Sem dúvida, o WEB3 LATAM é o melhor evento de tecnologia que já
                participei! As palestras foram incríveis e os workshops super
                informativos. Obrigado, Lucas.
              </Title>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex flex-col gap-4">
          <Title className="text-2xl font-medium" color="white">
            ETH SAMBA - Aprenda os fundamentos do Web3 ou participe de workshops
            mais avançados de alguns dos melhores educadores
          </Title>

          <div className="flex items-center gap-4">
            <Map />
            <Title className="text-[rgba(255,255,255,.7)] font-medium">
              Evento presencial em{" "}
              <span className="border-b border-brand-text text-brand-text">
                Igloo Network - São Paulo, SP
              </span>
            </Title>
          </div>
          <div className="flex items-center gap-4">
            <Clock />
            <Title className="text-[rgba(255,255,255,.7)] font-medium">
              31 mar - 2023 • 11:52 {">"} 17 abr - 2023 • 11:00
            </Title>
          </div>
          <div className="bg-[#1B1A26] text-[rgba(255,255,255,.7)] rounded-lg flex items-center justify-between w-[60%] h-12 p-3 border border-[rgba(255,255,255,.3)]">
            Total supply do token
            <Title color="white">1500</Title>
          </div>
          <div className="bg-[#1B1A26] text-[rgba(255,255,255,.7)] rounded-lg flex items-center justify-between w-[100%] h-12 p-3 border border-[rgba(255,255,255,.3)]">
            Carteira do criador
            <span className="flex items-center gap-2">
              x1f3f78c143fd1fc... <Colar />
            </span>
          </div>

          <div className="bg-bg-[#1B1A26] text-[rgba(255,255,255,.7)] rounded-lg flex items-center justify-between w-[100%] h-12 p-3 border border-[#217025]">
            Recompensa disponivel aos benificentes
          </div>

          <Tickets />

          <div className="w-full bg-[#1B1A26] p-4 rounded-lg border border-[rgba(255,255,255,.3)]">
            <Title color="white" className="font-medium">
              Descrição
            </Title>
            <Title className="text-[rgba(255,255,255,.7)] mt-2">
              O ETH SAMBA é o maior evento de metaverso da América Latina, que
              oferece uma oportunidade única para conhecer as tecnologias mais
              inovadoras e explorar as possibilidades de negócios no universo
              digital em constante evolução.
            </Title>
          </div>
          <div className="w-full h-[10%] bg-[#1B1A26] p-4 flex flex-col justify-between rounded-lg border border-[rgba(255,255,255,.3)]">
            <div className="w-full flex items-center justify-between">
              <Title color="white" className="font-medium">
                Metas
              </Title>
              <CgDanger color="white" size={22} />
            </div>
            <div className="w-full flex items-center justify-between">
              <Title color="white" className="font-medium">
                R$12.000
              </Title>
              <Title color="white" className="font-medium">
                R$50.000,00
              </Title>
            </div>

            <div className="w-full bg-white rounded-full h-2 after:rounded-lg after:content-[' '] after:absolute after:bg-[#4C24D0] after:w-[10%] after:h-2 after:z-10" />
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}
