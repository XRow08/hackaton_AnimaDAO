import React from "react";
import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: Props) {
  return (
    <div className={classNames("drop-shadow-none rounded-lg", className)}>
      {children}
    </div>
  );
}
