import { Map } from "../Icon/Map";
import { Arrowdown } from "../Icon/arrowdown";
import { Title } from "../Title";

export function Dropdown() {
  return (
    <div className="flex items-center gap-2">
      <Map />
      <Title color="white">Qualquer lugar</Title>
      <Arrowdown />
    </div>
  );
}
