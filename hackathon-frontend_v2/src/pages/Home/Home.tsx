import { Title } from "../../Components/Title";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Card } from "../../Components/Card";
import { CardNormal } from "../../Components/Card/CardNormal";
import { Container } from "../../Components/Container";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";

export default function Home() {
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
      <section className="px-24 w-full h-full flex flex-col gap-12 pb-20">
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
            <Link
              to={"/event-soon"}
              className={
                "w-1/5 h-[35vh] flex flex-col gap-2 rounded-lg cursor-pointer p-4 bg-brand-primary drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-all duration-300 ease-in-out border-2 hover:border-brand-text border-[rgba(255,255,255,.3)]"
              }
            >
              <div
                className={`w-full h-[70%] bg-blockchain bg-no-repeat bg-cover rounded-lg`}
              />
              <div className="flex flex-col gap-1 justify-between h-[30%]">
                <Title color="white" className="font-bold">
                  Blockchain RIO
                </Title>
                <Title color="white" className="font-light text-sm">
                  EXPOMAG – RJ
                </Title>
                <Title className="font-bold text-brand-text">
                  31 MAR {">"} 17 ABR
                </Title>
              </div>
            </Link>
            <CardNormal
              bg="bg-riocrypto bg-center"
              title="RIO CRIPTO DAY"
              subtitle="Teatro Multiplan – VillageMall"
              date="6 ABR > 17 ABR"
            />
            <Card
              bg="bg-sambaeth bg-center"
              title="ETH SAMBA"
              subtitle="Rio de Janeiro"
              date="31 MAR > 02 ABR"
            />

            <Card
              bg="bg-websummit bg-center"
              title="WEB SUMMIT RIO "
              subtitle="Rio Centro - RJ"
              date="01 AGO > 05 AGO"
            />
            <Card
              bg="bg-bitsampa"
              title="BITSAMPA - Prepare-se!"
              subtitle="EXPO Center Norte – SP"
              date="10 JUN > 11 JUN"
            />
          </div>
        </div>

        <div className="w-full flex items-center gap-8">
          <div className="w-1/5 h-[20rem] rounded-lg bg-no-repeat bg-cover bg-center bg-rj"></div>
          <div className="w-1/5 h-[20rem] rounded-lg bg-no-repeat bg-cover bg-center bg-sp"></div>
          <div className="w-1/5 h-[20rem] rounded-lg bg-no-repeat bg-cover bg-center bg-floriano"></div>
          <div className="w-1/5 h-[20rem] rounded-lg bg-no-repeat bg-cover bg-center bg-curitiba"></div>
          <div className="w-1/5 h-[20rem] rounded-lg bg-no-repeat bg-cover bg-center bg-balneario"></div>
        </div>

        <div>
          <Title color="white" className="text-xl font-normal mb-2">
            Eventos em alta
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
            <Card
              bg="bg-etherium bg-center"
              title="Ethereum Rio"
              subtitle="Rio de janeiro"
              date="31 MAR > 17 ABR"
            />
            <CardNormal
              bg="bg-blockchain"
              title="Blockchain RIO"
              subtitle="EXPOMAG – RJ"
              date="31 MAR > 17 ABR"
            />
            <CardNormal
              bg="bg-nftbrasil "
              title="NFT BRASIL"
              subtitle="Pavilhão Ciccillo Matarazzo"
              date="02 JUN > 04 JUN"
            />
            <CardNormal
              bg="bg-tangib bg-no-repeat bg-cover bg-center"
              title="TANGIBL3"
              subtitle="CUBO – SP"
              date="05 MAI > 12 MAI"
            />
            <CardNormal
              bg={"bg-latam "}
              title="WEB3 LATAM"
              subtitle="Igloo Network - São Paulo, SP"
              date="31 MAR > 17 ABR"
            />
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}
