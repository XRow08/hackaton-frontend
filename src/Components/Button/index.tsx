"use client";
import classNames from "classnames";
import { MouseEventHandler } from "react";

type Props = {
  type?: "button" | "submit";
  className?: string;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

export function Button({
  type = "button",
  className,
  children,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={classNames(
        "font-lato bg-[#4C24D0] transition-all ease-in-out duration-300 no-underline h-12",
        className
      )}
    >
      {children}
    </button>
  );
}
