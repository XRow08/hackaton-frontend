"use client";
import ConnectButton from "../Button/ConnectButton";
import { CgShoppingCart } from "react-icons/cg";
import { Avatar } from "../Icon/avatar";
import { Dropdown } from "../Dropdown";
import { Search } from "../Search";
import { Title } from "../Title";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ConnectWallet, NaoLogado } from "../Modal";
import { addNetwork } from "../../services";
import { StorageHelper } from "../../helpers";

export function Header() {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const navigate = useNavigate();

  async function Navigate() {
    try {
      const user = StorageHelper.getItem("user");
      if (user) navigate("/perfil");
      if (!user) throw new Error("Sem usuário");
    } catch (error) {
      setModal2(true)
    }
  }

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
      {modal2 && <NaoLogado onClick={() => setModal2(false)} />}
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

          <Avatar onClick={Navigate} />
        </div>
      </div>
    </>
  );
}
