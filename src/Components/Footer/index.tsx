import Image from "next/image";
import Link from "next/link";
import { Title } from "../Title";

export function Footer() {
  return (
    <section className="bg-[#181623] h-[20vh] w-full gap-4 flex flex-col justify-end items-center pb-8">
      <div className="flex items-center gap-2">
        <Link href={"/create-nft"} className="text-white text-lg">
          Create
        </Link>
        <div className="rounded-full h-1 w-1 mt-1 bg-[rgba(255,255,255,.5)]" />
        <Link href={"/pricing"} className="text-white text-lg">
          pricing
        </Link>
        <div className="rounded-full h-1 w-1 mt-1 bg-[rgba(255,255,255,.5)]" />
        <Link href={"/history"} className="text-white text-lg">
          history
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <Title color="white">© 2023 NFT BLOOM.</Title>
        <Title color="white">All rights reserved.</Title>
      </div>
    </section>
  );
}
