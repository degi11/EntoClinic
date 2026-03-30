"use client";
import Link from "next/link";

type Item = {
  title: string;
  href: string;
};

export function ServicesDropdown({ items }: { items?: Item[] }) {
  return (
    <div className="max-w-55 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 animate-in fade-in zoom-in-95 duration-200">
      {items?.map((item, index) => (
        <Link key={index} href={item.href}>
          <div className="px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-150 cursor-pointer">
            {item.title}
          </div>
        </Link>
      ))}
    </div>
  );
}