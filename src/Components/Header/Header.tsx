"use client";
import ConnectButton from "../Button/ConnectButton";
import { CgShoppingCart } from "react-icons/cg";
import { Avatar } from "../Icon/avatar";
import { Dropdown } from "../Dropdown";
import { Search } from "../Search";
import { Title } from "../Title";
import { useState } from "react";
import { Link } from "react-router-dom";
import { StorageHelper } from "../../helpers/StorageHelper";
import { ConnectWallet } from "../Modal";
import { addNetwork } from "../../services";

export function Header() {
  const [modal, setModal] = useState(false);

  async function OnSubmit() {
    try {
      await addNetwork();
      setModal(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {modal && (
        <ConnectWallet
          onClick={() => setModal(false)}
          addNetwork={() => OnSubmit()}
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
