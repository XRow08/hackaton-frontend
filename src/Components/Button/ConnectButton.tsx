"use client";
import { useState } from "react";
import { BiWalletAlt } from "react-icons/bi";
import { MetaMaskInpageProvider } from "@metamask/providers";

/* var window: Window & MetaMaskInpageProvider & any; */

export default function ConnectButton() {
  const [wallet, setWallet] = useState("");
  console.log(wallet);
  async function requestAccount() {
    interface CustomWindow extends Window {
      ethereum?: any;
    }

    const customWindow = window as CustomWindow;

    if (customWindow.ethereum) {
      try {
        const accounts = await customWindow.ethereum.request({
          method: "eth_requestAccounts",
        });

        setWallet(accounts[0]);
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <label onClick={requestAccount} className="cursor-pointer">
      <BiWalletAlt color="white" size={24} />
    </label>
  );
}
