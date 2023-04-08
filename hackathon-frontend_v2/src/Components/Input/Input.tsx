import "./index.css";
import classNames from "classnames";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { errors?: any; onChange?: any; maxLength?: any };

export function Input({
  type,
  placeholder,
  onChange,
  onClick,
  value,
  name,
  onBlur,
  onKeyDown,
  errors,
  className,
  maxLength,
  ...props
}: Props) {
  return (
    <input
      maxLength={maxLength}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      name={name}
      onClick={onClick}
      onChange={onChange}
      min="0"
      autoComplete="off"
      value={value}
      type={type}
      placeholder={placeholder}
      {...props}
      className={classNames(
        "bg-transparent border border-[rgba(255,255,255,.3)] w-full h-12 px-4 rounded-lg drop-shadow-none shadow-none text-white font-lato font-medium hover:border-brand-text focus:border-brand-text transition-all duration-300 ease-in-out",
        className
      )}
    />
  );
}
