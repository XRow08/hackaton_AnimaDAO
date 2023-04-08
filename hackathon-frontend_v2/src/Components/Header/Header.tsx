"use client";
import ConnectButton from "../Button/ConnectButton";
import { CgShoppingCart } from "react-icons/cg";
import { Avatar } from "../Icon/avatar";
import { Dropdown } from "../Dropdown";
import { Search } from "../Search";
import { Title } from "../Title";
import { useState } from "react";
import { Access } from "../Modal/ConectWallet";
import { Link } from "react-router-dom";
import { StorageHelper } from "../../helpers/StorageHelper";

export function Header() {
  const [modal, setModal] = useState(false);

  async function addNetwork() {
    console.log("caiu");
    interface CustomWindow extends Window {
      ethereum?: any;
    }
    const customWindow = window as CustomWindow;

    if (customWindow.ethereum) {
      try {
        const accounts = await customWindow.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts[0]);
        StorageHelper.setItem("adress", accounts[0]);
      } catch (err) {
        console.log(err);
      }
      try {
        await customWindow.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0xAEF3",
              chainName: "Celo native asset",
              nativeCurrency: {
                name: "Celo native asset",
                symbol: "CELO",
                decimals: 18,
              },
              blockExplorerUrls: ["https://testnet.bscscan.com"],
              rpcUrls: ["https://alfajores-forno.celo-testnet.org"],
            },
          ],
        });
      } catch (addError) {
        console.log(addError);
      }
      setModal(false);
    } else {
      alert("MetaMask is not installed.");
    }
  }

  return (
    <>
      {modal && (
        <Access
          onClick={() => setModal(false)}
          addNetwork={() => addNetwork()}
        />
      )}
      <div className="h-[8vh] bg-[#181623] px-24 flex justify-between items-center">
        <Link to={"/"}>
          <Title color="white">NAMEPROJECT</Title>
        </Link>
        <div className="flex items-center justify-end gap-8 w-[100%]">
          <Search
            placeholder={"Pesquise sobre eventos, ingressos e empresas"}
          />
          <Dropdown />
          <ConnectButton setWallet={() => setModal(true)} />
          <CgShoppingCart size={24} color="white" className="cursor-pointer" />
          <Link to={"/perfil"}>
            <Avatar />
          </Link>
        </div>
      </div>
    </>
  );
}
