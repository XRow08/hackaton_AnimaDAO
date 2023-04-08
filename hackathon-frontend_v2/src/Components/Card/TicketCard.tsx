import classNames from "classnames";
import { Title } from "../Title";

export function TicketCard(tickets: any) {
  return tickets.map((data: any, index: any) => {
    return (
      <div
        id={index}
        className={classNames(
          "w-1/5 h-[35vh] flex flex-col gap-2 rounded-lg p-4 bg-brand-primary drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-all duration-300 ease-in-out border-2 hover:border-brand-text border-[rgba(255,255,255,.3)]"
        )}
      >
        <img
          src={data.image}
          draggable={false}
          className={`w-full h-[70%] rounded-lg`}
        />
        <div className="flex flex-col gap-2 h-[30%] overflow-hidden">
          <Title color="white" className="font-bold">
            {data.name}
          </Title>
          <Title color="white" className="font-bold">
            Beneficente: {data.attributes[0].value.toString()}
          </Title>
          <Title color="white" className="font-light text-sm">
            {data.description}
          </Title>
        </div>
      </div>
    );
  });
}
