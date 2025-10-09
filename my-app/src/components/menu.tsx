"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MENU_ITEMS } from "@/asscents/constans";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

export function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="flex md:hidden">
        <MenuIcon>
          <Button variant="outline"></Button>
        </MenuIcon>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-66 h-70 flex flex-col gap-2">
        <DropdownMenuLabel className="">Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition} />

        {MENU_ITEMS.map((el, index) => (
          <DropdownMenuRadioItem key={index} value={el.value}>
            <Link
              key={el.href}
              className="font-semibold text-lg"
              href={el.href}
            >
              {el.title}
            </Link>
          </DropdownMenuRadioItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
