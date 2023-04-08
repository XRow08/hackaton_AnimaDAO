import { Link } from "react-router-dom";
import { Title } from "../Title";
import classNames from "classnames";

type Props = {
  title?: string;
  subtitle?: string;
  date?: any;
  className?: string;
  bg?: string;
};

export function CardNormal({ title, subtitle, date, className, bg }: Props) {
  return (
    <Link
      to={"/event-active"}
      className={classNames(
        "w-1/5 h-[35vh] flex flex-col gap-2 rounded-lg cursor-pointer p-4 bg-brand-primary drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-all duration-300 ease-in-out border-2 hover:border-brand-text border-[rgba(255,255,255,.3)]",
        className
      )}
    >
      <div
        className={`w-full h-[70%] ${bg} bg-no-repeat bg-cover rounded-lg`}
      />
      <div className="flex flex-col gap-1 justify-between h-[30%]">
        <Title color="white" className="font-bold">
          {title}
        </Title>
        <Title color="white" className="font-light text-sm">
          {subtitle}
        </Title>
        <Title className="font-bold text-brand-text">{date}</Title>
      </div>
    </Link>
  );
}
