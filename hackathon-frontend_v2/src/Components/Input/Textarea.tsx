import classNames from "classnames";

type Props = {
  placeholder?: string;
  cols?: number;
  rows?: number;
  className?: string;
  name?: string;
};

export function Textarea({
  placeholder,
  cols,
  rows,
  className,
  name,
  ...field
}: Props) {
  return (
    <textarea
      {...field}
      className={classNames(
        "bg-transparent border border-[rgba(255,255,255,.3)] w-full rounded-lg p-4 text-white font-lato font-medium hover:border-brand-text focus:border-brand-text transition-all duration-300 ease-in-out",
        className
      )}
      name={name}
      placeholder={placeholder}
      cols={cols}
      rows={rows}
    ></textarea>
  );
}
