import Link from "next/link";
import { Title } from "../Title";
import classNames from "classnames";

type Props = {
  title?: string;
  subtitle?: string;
  date?: any;
  className?: string;
};

export function CardNormal({ title, subtitle, date, className }: Props) {
  return (
    <Link
      href={"/event-active"}
      className={classNames(
        "w-1/5 h-[30vh] flex flex-col gap-2 rounded-lg cursor-pointer p-4 bg-brand-primary drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]",
        className
      )}
    >
      <div className="w-full h-[70%] bg-latam bg-no-repeat bg-cover rounded-lg" />
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
