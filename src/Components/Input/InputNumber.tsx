"use client";
import { useState } from "react";
import { Arrowdown } from "../Icon/arrowdown";
import "./index.css";

export function InputNumber() {
  const [value, setValue] = useState(0);
  if (value < 0) setValue(0);

  return (
    <label className="flex items-center gap-1 transition-all duration-300 ease-in-out">
      <div
        className={`border ${
          value === 0
            ? "border-[rgba(255,255,255,0.3)]"
            : "border-[rgba(255,255,255,1)]"
        } rounded-full w-6 h-6 flex justify-center items-center pr-[2px] cursor-pointer transition-all duration-300 ease-in-out`}
        onClick={() => setValue(value - 1)}
      >
        <Arrowdown className={"rotate-90"} />
      </div>
      <div className="rounded-full w-6 h-6 p-3 bg-transparent flex justify-center items-center border outline-none transition-all duration-300 ease-in-out">
        {value}
      </div>
      <div
        className={`border rounded-full w-6 h-6 flex justify-center items-center pl-[1px] cursor-pointer ${
          value != 0 && "bg-[#4C24D0]"
        } transition-all duration-300 ease-in-out`}
        onClick={() => setValue(value + 1)}
      >
        <Arrowdown className={"-rotate-90"} />
      </div>
    </label>
  );
}
