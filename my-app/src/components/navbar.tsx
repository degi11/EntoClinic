"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../asscents/Logo.svg";
import * as React from "react";
import { MENU_ITEMS } from "@/asscents/constans";
import { DropdownMenuRadioGroupDemo } from "./menu";

export default function Navbar() {
  return (
    <div
      className={`fixed w-full z-50 transition-all duration-300 bg-white/40 backdrop-blur-2xl `}
    >
      <div className="max-w-[1260px] mx-auto px-6">
        <div className="flex justify-between h-[90px] items-center py-3">
          <Link href="/">
            <div className="flex items-center justify-center gap-1">
              <Image
                src={logo}
                alt="logo without text"
                width={120}
                height={120}
              />
            </div>
          </Link>
          <ul className="space-x-2 md:flex hidden">
            {MENU_ITEMS.map((el, index) => (
              <li key={index}>
                <Link href={el.href}>
                  <p
                    className={`isolate inline-block items-center justify-center px-3 py-2 font-caption-1-semi-bold text-dark-tertiary 
text-[#52667A] text-[length:var(--caption-1-semi-bold-font-size)] tracking-[var(--caption-1-semi-bold-letter-spacing)] leading-[var(--caption-1-semi-bold-line-height)] whitespace-nowrap [font-style:var(--caption-1-semi-bold-font-style)] hover:text-[#00AC94] hover:[text-shadow:0_0_24px_#00AC94]`}
                  >
                    {el.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <DropdownMenuRadioGroupDemo />
        </div>
      </div>
    </div>
  );
}
