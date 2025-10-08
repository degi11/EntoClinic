import { LinkListProps } from "@/types/experts";
import Link from "next/link";

export const LinkList = ({ items, flexRow = false }: LinkListProps) => (
  <div
    className={`flex flex-col gap-2 col-span-1 md:col-span-1 ${
      flexRow ? "md:flex-row lg:flex-col" : ""
    }`}
  >
    {items.map((el) => (
      <Link
        key={el.href}
        href={el.href}
        className="text-sm text-[#45556c] hover:text-[#00a859] duration-500 hover:translate-x-1"
      >
        {el.title}
      </Link>
    ))}
  </div>
);
