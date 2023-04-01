"use client";
/* import { useState } from "react";
import Web3 from "web3";
import { newKit, newKitFromWeb3 } from "@celo/contractkit"; */
import { BiWalletAlt } from "react-icons/bi";

/* var window: Window & MetaMaskInpageProvider & any; */

export default function ConnectButton({ setWallet }: any) {
  return (
    <>
      <label onClick={setWallet} className="cursor-pointer">
        <BiWalletAlt color="white" size={24} />
      </label>
    </>
  );
}
