//IMPORTS REACT / NEXT

//IMPORTS COMPONENTS
import { Title } from "../Title";

export function TicketPerfil({ onClick }: any) {
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
        <div className="flex items-center justify-center w-full mt-4">
          <div className="w-full flex items-center justify-center mt-14 gap-12">
            <div
              onClick={onClick}
              className="w-[12rem] h-[12rem] flex flex-col items-center "
            >
              <div className="bg-brand-primary rounded-lg p-6 pt-3 overflow-hidden border border-[rgba(255,255,255,.3)] hover:border-[#217025] transition-all duration-300 ease-in-out cursor-pointer">
                <img
                  src={"/ticketAmarelo.png"}
                  alt={"ticket"}
                  className="w-[8rem] mt-2"
                />
              </div>
            </div>
            <div
              onClick={onClick}
              className="w-[12rem] h-[12rem] flex flex-col items-center "
            >
              <div className="bg-brand-primary rounded-lg p-6 pt-3 overflow-hidden border border-[rgba(255,255,255,.3)] hover:border-[#217025] transition-all duration-300 ease-in-out cursor-pointer">
                <img
                  src={"/ticketNormalVerifyAzul.png"}
                  alt={"ticket"}
                  className="w-[8rem] h-[8rem] mt-2"
                />
              </div>
            </div>
            <div
              onClick={onClick}
              className="w-[12rem] h-[12rem] flex flex-col items-center "
            >
              <div className="bg-brand-primary rounded-lg p-6 pt-3 overflow-hidden border border-[rgba(255,255,255,.3)] hover:border-[#217025] transition-all duration-300 ease-in-out cursor-pointer">
                <img
                  src={"/ticketRosa.png"}
                  alt={"ticket"}
                  className="w-[8rem] mt-2"
                />
              </div>
            </div>
            <div
              onClick={onClick}
              className="w-[12rem] h-[12rem] flex flex-col items-center "
            >
              <div className="bg-brand-primary rounded-lg p-6 pt-3 overflow-hidden border border-[rgba(255,255,255,.3)] hover:border-[#217025] transition-all duration-300 ease-in-out cursor-pointer">
                <img
                  src={"/ticketNormalVerifyVerde.png"}
                  alt={"ticket"}
                  className="w-[8rem] h-[8rem] mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
