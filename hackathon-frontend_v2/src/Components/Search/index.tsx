import classNames from "classnames";
import { Lupa } from "../Icon/Lupa";

export function Search({ className, placeholder }: any) {
  return (
    <label
      className={classNames(
        "w-1/4 h-10 border rounded-3xl flex items-center px-4",
        className
      )}
    >
      <Lupa />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent outline-none w-full h-full px-2 text-white font-lato font-normal"
      />
    </label>
  );
}
