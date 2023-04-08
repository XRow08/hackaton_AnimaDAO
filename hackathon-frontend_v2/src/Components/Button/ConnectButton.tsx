import { BiWalletAlt } from "react-icons/bi";

export default function ConnectButton({ setWallet }: any) {
  return (
    <>
      <label onClick={setWallet} className="cursor-pointer">
        <BiWalletAlt color="white" size={24} />
      </label>
    </>
  );
}
