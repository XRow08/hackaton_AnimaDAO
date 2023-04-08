import classNames from "classnames";

export enum AlertEnum {
  INFO = "INFO",
  WARNING = "WARNING",
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
}

type Props = {
  type: AlertEnum;
  children: React.ReactNode;
  className?: string
};

export function Alert({ type = AlertEnum.INFO, children, className }: Props) {
  return (
    <div
      className={classNames(
        "w-full p-4 font-mplus font-normal rounded-lg bg-brand-primary drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] ",
        { "bg-feedback-info text-black": type === AlertEnum.INFO },
        { "bg-feedback-warning text-white": type === AlertEnum.WARNING },
        { "bg-feedback-error text-white": type === AlertEnum.ERROR },
        { "bg-feedback-success text-white": type === AlertEnum.SUCCESS },
        className
      )}
    >
      {children}
    </div>
  );
}
