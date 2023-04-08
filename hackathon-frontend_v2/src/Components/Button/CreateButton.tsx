import { Link } from "react-router-dom";

type Props = {
  link: string;
  label?: string;
};

export function CreateButton({ link, label }: Props) {
  return (
    <Link
      to={link}
      className="flex flex-col justify-center items-center rounded-lg h-[12rem] cursor-pointer min-w-[11rem] font-lato font-medium text-[rgba(255,255,255,0.6)] bg-[#555555]"
    >
      <svg
        width="66"
        height="66"
        viewBox="0 0 66 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          d="M4.5 33.2938H61.5M32.7062 4.5L32.7062 61.5"
          stroke="white"
          stroke-width="8"
          stroke-linecap="round"
        />
      </svg>
      {label}
    </Link>
  );
}
