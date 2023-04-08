//IMPORTS REACT / NEXT

//IMPORTS COMPONENTS
import { Title } from "../Title";
import { useState } from "react";
import classNames from "classnames";

export function TicketsSoon({ setModal, setModal1 }: any) {
  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);
  return (
    <div className="flex flex-col w-full h-[22rem] bg-[#1B1A26] p-4 rounded-lg border border-[rgba(255,255,255,.3)]">
      <div className="w-full flex flex-col justify-between items-center">
        <div className="w-full flex items-center justify-between">
          <Title color="white" className="text-lg font-normal drop-shadow-none">
            Tickets
          </Title>
          <Title color="white" className="text-lg font-normal drop-shadow-none">
            Disponíveis
          </Title>
        </div>
        <div className="flex w-full mt-4">
          <div className="w-full flex gap-4">
            <div className="w-[4.67rem] h-full flex flex-col items-center ">
              <img
                src={"/ticketEsgotadoVerify.png"}
                alt={"ticket"}
                className="rounded-lg"
              />
              <Title color="white" className="text-base font-medium">
                Ticket1
              </Title>
            </div>
            <div className="w-[5rem] h-full flex flex-col items-center ">
              <div
                onMouseEnter={() => setHover1(true)}
                onMouseLeave={() => setHover1(false)}
                className="bg-brand-primary rounded-lg p-2 pt-3 overflow-hidden"
              >
                <img
                  src={"/verificado.png"}
                  alt={"verificado"}
                  className="absolute w-[11px] -mt-[6px] -ml-1"
                />
                <img src={"/ticket.png"} alt={"ticket"} />

                <div
                  onClick={setModal}
                  className={classNames(
                    "absolute cursor-pointer transition-all duration-300 ease-in-out text-white font-medium text-[0px] flex justify-center items-center h-2 w-[5rem] rounded-lg -ml-2 z-[0]",
                    {
                      "bg-[rgba(33,112,37,1)] text-[14px] h-8 -mt-6": hover1,
                    }
                  )}
                >
                  Comprar
                </div>
              </div>
              <Title color="white" className="text-base font-medium">
                Ticket1
              </Title>
            </div>
            <div className="w-[5rem] h-full flex flex-col items-center ">
              <div
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="bg-brand-primary rounded-lg p-2 pt-3 overflow-hidden"
              >
                <img src={"/ticket.png"} alt={"ticket"} />

                <div
                  onClick={setModal1}
                  className={classNames(
                    "absolute cursor-pointer transition-all duration-300 ease-in-out text-white font-medium text-[0px] flex justify-center items-center h-2 w-[5rem] rounded-lg -ml-2 z-[0]",
                    {
                      "bg-[rgba(33,112,37,1)] text-[14px] h-8 -mt-6": hover,
                    }
                  )}
                >
                  Comprar
                </div>
              </div>
              <Title color="white" className="text-base font-medium">
                Ticket1
              </Title>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
