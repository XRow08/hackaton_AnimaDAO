import React from "react";
import classNames from "classnames";

type Props = {
  color?: "black" | "white" | "yellow";
  className?: string;
  children?: React.ReactNode;
  ref?: any;
  onClick?: () => void;
  id?: string;
};

export function Title({ children, className, color, ref, onClick, id }: Props) {
  return (
    <h1
      id={id}
      ref={ref}
      onClick={onClick}
      className={classNames(
        "font-lato",
        {
          "text-black": color === "black",
        },
        {
          "text-white": color === "white",
        },
        {
          "text-[#FFA958]": color === "yellow",
        },
        className
      )}
    >
      {children}
    </h1>
  );
}
