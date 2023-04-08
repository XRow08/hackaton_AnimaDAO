//IMPORTS REACT / NEXT

//IMPORTS COMPONENTS
import { Title } from "../Title";

export function Tickets() {
  return (
    <div className="flex flex-col w-full h-[22rem] bg-[#1B1A26] p-4 rounded-lg border border-[rgba(255,255,255,.3)]">
      <div className="w-full flex justify-between items-center">
        <Title color="white" className="text-lg font-normal drop-shadow-none">
          Tickets
        </Title>
        <Title color="white" className="text-lg font-normal drop-shadow-none">
          Finalizado
        </Title>
      </div>
      <div className="w-full mt-4 flex justify-between gap-2">
        <div className="w-[6rem] flex flex-col items-center ">
          <div className="bg-brand-primary rounded-lg ">
            <img src={"/ticketEsgotado.png"} alt={"ticket"} />
          </div>
          <Title color="white" className="text-base font-medium">
            Lote 1
          </Title>
        </div>
        <div className="w-[6rem] flex flex-col items-center ">
          <div className="bg-brand-primary rounded-lg ">
            <img src={"/ticketEsgotado.png"} alt={"ticket"} />
          </div>
          <Title color="white" className="text-base font-medium">
            Lote 2
          </Title>
        </div>
        <div className="w-[6rem] flex flex-col items-center ">
          <div className="bg-brand-primary rounded-lg ">
            <img src={"/ticketEsgotado.png"} alt={"ticket"} />
          </div>
          <Title color="white" className="text-base font-medium">
            Lote 3
          </Title>
        </div>
        <div className="w-[6rem] flex flex-col items-center ">
          <div className="bg-brand-primary rounded-lg ">
            <img src={"/ticketEsgotado.png"} alt={"ticket"} />
          </div>
          <Title color="white" className="text-base font-medium">
            Lote 4
          </Title>
        </div>
        <div className="w-[6rem] flex flex-col items-center ">
          <div className="bg-brand-primary rounded-lg ">
            <img src={"/ticketEsgotado.png"} alt={"ticket"} />
          </div>
          <Title color="white" className="text-base font-medium">
            Lote 5
          </Title>
        </div>
      </div>
      <div className="w-[6rem] flex flex-col items-center mt-8 ">
        <div className="bg-brand-primary rounded-lg ">
          <img
            src={"/ticketEsgotado.png"}
            alt={"ticket"}
            height={1000}
            width={1000}
          />
        </div>
        <Title color="white" className="text-base font-medium">
          Lote 6
        </Title>
      </div>
    </div>
  );
}
