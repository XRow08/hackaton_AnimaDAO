import { useEffect, useState } from "react";
import { StorageHelper } from "../../helpers";
import {
  resgatarRecompensaUsuario,
  balanceOfUsd,
  balanceOf1155,
} from "../../services/Contratos";
import { Button } from "../Button";
import { Close } from "../Icon";
import { Title } from "../Title";

export function GetRewardTicket({
  onClick,
  adress,
  getReward,
  contract,
  id,
}: any) {
  const [quantity, setQuantity] = useState(0);
  const userOneAdress = "0xD8f757e25430303c6599295A2FE2eff104Fd65d7";

  useEffect(() => {
    balanceOfUsd(adress)
      .then((response) => console.log(Number(response)))
      .catch((err) => console.log(err));

    balanceOf1155(userOneAdress, id, contract)
      .then((response) => setQuantity(Number(response)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="fixed h-screen w-screen bg-[rgba(0,0,0,0.3)] flex justify-center items-center z-50">
        <Close
          className={"absolute top-[35%] right-[32%] cursor-pointer"}
          onClick={onClick}
        />
        <div className=" w-[40%] flex flex-col items-center justify-center gap-4 px-20 p-8 bg-brand-primary rounded-2xl border border-[rgba(255,255,255,.3)]">
          <img src={"/getReward.png"} alt="reward" className="w-1/2" />
          <Title className="text-white font-medium text-xl font-lato">
            Venha pegar sua recompensa!
          </Title>
          <Button
            onClick={getReward}
            className="text-white rounded-lg border p-2 border-[rgba(255,255,255,.3)]"
          >
            Resgatar recompensa
          </Button>
        </div>
      </div>
    </>
  );
}
