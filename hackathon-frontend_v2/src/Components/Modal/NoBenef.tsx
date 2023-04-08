import { useEffect, useState } from "react";

import { StorageHelper } from "../../helpers/StorageHelper";

//IMPORTS COMPONENTS
import { Title } from "../Title";
import { Clock } from "../Icon/Clock";
import { Map } from "../Icon/Map";
import { Button } from "../Button";
import { Close } from "../Icon/Close";
import { Arrowdown } from "../Icon/arrowdown";
import toast from "react-hot-toast";
import "../Input/index.css";

export function NoBenef({ onClick }: any) {
  const [usd, setUsd] = useState(0);
  const [value, setValue] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const adress = StorageHelper.getItem("adress");
  const enterpriseAdress = "0x8bD582Da59Cc09b4486D29eD180FB23f94951a49";
  const eventContract = "0x3f38e875edc17ae02730984a6f5e2a4a4ff15842";
  const id = 3;
  if (value < 0) setValue(0);
  console.log(value);

  async function buy() {
    toast.loading("Carregando...");
    const amount = value;
    toast.success("Sucesso!!");
  }

  return (
    <>
      <div className="fixed h-screen w-screen bg-[rgba(0,0,0,0.3)] flex justify-center items-center z-50">
        <Close
          className={"absolute top-16 right-[32%] cursor-pointer"}
          onClick={onClick}
        />
        <div className="h-[90vh] w-[40%] flex flex-col gap-4 px-20 p-8 bg-brand-primary rounded-2xl border border-[rgba(255,255,255,.3)]">
          <img
            src={"/ticketNao.png"}
            alt="preview"
            className="w-[70%] self-center"
          />
          <div className="flex items-center w-full justify-between">
            <Title color="white" className="text-lg font-bold">
              Ticket Espectador
            </Title>
            <Title color="white" className="text-lg font-bold">
              $50
            </Title>
          </div>
          <div className="flex items-center gap-2">
            <Map />
            <Title className="text-[rgba(255,255,255,.7)] font-medium">
              Evento presencial em{" "}
              <span className="border-b border-brand-text text-brand-text">
                Igloo Network - São Paulo, SP
              </span>
            </Title>
          </div>
          <div className="flex items-center gap-2">
            <Clock />
            <Title className="text-[rgba(255,255,255,.7)] font-medium">
              31 mar - 2023 • 11:52 {">"} 17 abr - 2023 • 11:00
            </Title>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#26252F] text-[rgba(255,255,255,.7)] rounded-lg flex items-center justify-between w-[50%] h-12 p-3 border border-[rgba(255,255,255,.3)]">
              USD <span>{usd}</span>
            </div>
            <div className="bg-[#26252F] text-[rgba(255,255,255,.7)] rounded-lg flex items-center gap-2 w-[50%] h-12 p-3 border border-[rgba(255,255,255,.3)]">
              Token não beneficiente
            </div>
          </div>

          <div className="bg-[#1B1A26] text-[rgba(255,255,255,.7)] rounded-lg flex flex-col items-start gap-4 w-full h-full border border-[rgba(255,255,255,.3)]">
            <div className="w-full h-14 bg-[#26252F] rounded-t-lg flex items-center justify-between border-b px-4 border-[rgba(255,255,255,.3)]">
              <Title color="white" className="font-medium">
                Ingressos restantes
              </Title>
              <Title color="white" className="font-medium">
                {quantity}
              </Title>
            </div>
            <div className="w-full flex items-center justify-between px-4">
              <Title color="white" className="font-medium">
                Qt de ingressos
              </Title>
              <label className="flex items-center gap-1 transition-all duration-300 ease-in-out">
                <div
                  className={`border ${
                    value === 0
                      ? "border-[rgba(255,255,255,0.3)]"
                      : "border-[rgba(255,255,255,1)]"
                  } rounded-full w-6 h-6 flex justify-center items-center pr-[2px] cursor-pointer transition-all duration-300 ease-in-out`}
                  onClick={() => setValue(value - 1)}
                >
                  <Arrowdown className={"rotate-90"} />
                </div>
                <div className="rounded-full w-6 h-6 p-3 bg-transparent flex justify-center items-center border outline-none transition-all duration-300 ease-in-out">
                  {value}
                </div>
                <div
                  className={`border rounded-full w-6 h-6 flex justify-center items-center pl-[1px] cursor-pointer ${
                    value != 0 && "bg-[#4C24D0]"
                  } transition-all duration-300 ease-in-out`}
                  onClick={() => setValue(value + 1)}
                >
                  <Arrowdown className={"-rotate-90"} />
                </div>
              </label>
            </div>
            <div className="flex w-full justify-center items-center text-base font-normal text-[rgba(255,255,255,.7)]">
              Vendas até 17/04/2023
            </div>
            <Button
              onClick={buy}
              className="w-[80%] mb-4 text-white self-center text-lg font-normal rounded-lg outline-none border border-[rgba(255,255,255,.3)]"
            >
              Comprar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
