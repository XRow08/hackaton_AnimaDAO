import classNames from "classnames";
import { Link } from "react-router-dom";
import { Title } from "../Title";

export function EventCard(events: any) {
  return events.map((data: any, index: any) => {
    const nameUrl = data.name.replace(/ /g, "-").toLowerCase();
    return (
      <Link
        id={index}
        to={`/my-event/${nameUrl}?a=${data.adressEvent}`} /*  */
        className={classNames(
          "w-1/5 h-[35vh] flex flex-col gap-2 rounded-lg cursor-pointer p-4 bg-brand-primary drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-all duration-300 ease-in-out border-2 hover:border-brand-text border-[rgba(255,255,255,.3)]"
        )}
      >
        <img src={data.image} className={`w-full h-[70%] rounded-lg`} />
        <div className="flex flex-col gap-1 justify-between h-[30%] overflow-hidden">
          <Title color="white" className="font-bold">
            {data.name}
          </Title>
          <Title color="white" className="font-light text-sm">
            {data.description}
          </Title>
        </div>
      </Link>
    );
  });
}
