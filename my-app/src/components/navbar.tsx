"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../asscents/ENTO КЛИНИК  logo.png";
import * as React from "react";
import { MENU_ITEMS } from "@/asscents/constans";
import { ServicesDropdown } from "./service-dropdown";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = (id: string) => {
    if (pathname !== "/") {
      // 😏 өөр page дээр байвал → home руу явна
      router.push(`/#${id}`);
      return;
    }

    // 😎 home дээр байвал → smooth scroll
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed w-full z-50 transition-all duration-300 bg-white/40 backdrop-blur-2xl">
      <div className="max-w-315 mx-auto px-6">
        <div className="flex justify-between h-22.5 items-center py-3">
          <Link href="/">
            <div className="flex items-center justify-center gap-1">
              <Image src={logo} alt="logo" width={120} height={120} />
            </div>
          </Link>

          <ul className="space-x-2 md:flex hidden">
            {MENU_ITEMS.map((el, index) => (
              <li key={index} className="relative group">
                {el.isDropdown ? (
                  <>
                    <p className="px-3 py-2 cursor-pointer text-[#52667A] hover:text-[#00AC94]">
                      {el.title}
                    </p>

                    <div className="absolute left-0 top-full hidden group-hover:block">
                      <ServicesDropdown items={el.items} />
                    </div>
                  </>
                ) : (
                  <p
                    onClick={() => {
                      if (el.href.includes("#")) {
                        const id = el.href.split("#")[1];
                        handleScroll(id);
                      } else {
                        router.push(el.href);
                      }
                    }}
                    className="px-3 py-2 cursor-pointer text-[#52667A] hover:text-[#00AC94]"
                  >
                    {el.title}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}