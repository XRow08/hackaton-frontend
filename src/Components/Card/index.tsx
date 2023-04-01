import Link from "next/link";
import { Title } from "../Title";

type Props = {
  title?: string;
  subtitle?: string;
  date?: any;
};

export function Card({ title, subtitle, date }: Props) {
  return (
    <Link
      href={"/event"}
      className="w-1/5 h-[30vh] flex flex-col gap-2 rounded-lg cursor-pointer p-4 bg-brand-primary drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
    >
      <div className="w-full h-[70%] bg-brand-text rounded-lg" />
      <div className="flex flex-col gap-1 justify-between h-[30%]">
        <Title color="white" className="font-bold">
          {title}
        </Title>
        <Title color="white" className="font-light text-sm">
          {subtitle}
        </Title>
        <Title color="white" className="font-bold text-brand-text">
          {date}
        </Title>
      </div>
    </Link>
  );
}
