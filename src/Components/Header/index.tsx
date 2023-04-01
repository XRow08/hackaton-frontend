"use client";
import ConnectButton from "../Button/ConnectButton";
import { CgShoppingCart } from "react-icons/cg";
import { Avatar } from "../Icon/avatar";
import { Dropdown } from "../Dropdown";
import { Search } from "../Search";
import { Title } from "../Title";
import Link from "next/link";
import { useState } from "react";
import { Access } from "../Modal/Access";

export function Header() {
  const [modal, setModal] = useState(false);
  return (
    <>
      {modal && <Access onClick={() => setModal(false)} />}
      <div className="h-[8vh] bg-[#181623] px-24 flex justify-between items-center">
        <Link href={"/"}>
          <Title color="white">NAMEPROJECT</Title>
        </Link>
        <div className="flex items-center justify-end gap-8 w-[100%]">
          <Search
            placeholder={"Pesquise sobre eventos, ingressos e empresas"}
          />
          <Dropdown />
          <ConnectButton setWallet={() => setModal(true)} />
          <CgShoppingCart size={24} color="white" className="cursor-pointer" />
          <Link href={"/perfil"}>
            <Avatar />
          </Link>
        </div>
      </div>
    </>
  );
}
