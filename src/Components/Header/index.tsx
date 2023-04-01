import ConnectButton from "../Button/ConnectButton";
import { CgShoppingCart } from "react-icons/cg";
import { Avatar } from "../Icon/avatar";
import { Dropdown } from "../Dropdown";
import { Search } from "../Search";
import { Title } from "../Title";
import Link from "next/link";

export function Header() {
  return (
    <header className="h-[8vh] bg-[#181623] px-24 flex justify-between items-center">
      <Link href={"/"}>
        <Title color="white">NAMEPROJECT</Title>
      </Link>
      <div className="flex items-center justify-end gap-8 w-[100%]">
        <Search />
        <Dropdown />
        <ConnectButton />
        <CgShoppingCart size={24} color="white" className="cursor-pointer" />
        <Link href={"/perfil"}>
          <Avatar />
        </Link>
      </div>
    </header>
  );
}
