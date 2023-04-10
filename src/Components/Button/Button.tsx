"use client";
import React from "react";
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
        "font-lato bg-[#1B1A26] hover:bg-[#2C2B39] active:bg-[#4C24D0] hover:ring-2 hover:ring-[rgba(255,255,255,.3)] rounded-lg transition-all ease-in-out duration-300 no-underline h-14",
        className
      )}
    >
      {children}
    </button>
  );
}
