import Image from "next/image";
import Link from "next/link";
import logo from "../asscents/ENTO КЛИНИК  logo.png";
import { Copyright } from "lucide-react";
import { LinkList } from "./link-list";
import { CONTACT_INFO, MENU_ITEMS } from "@/asscents/constans";

const Footer = () => {
  return (
    <footer className="max-w-[1216px] m-auto flex flex-col justify-center items-center py-10 gap-10 p-6 text-[#45556c]">
      <div className="w-full h-px bg-gray-200"></div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          className="flex flex-col gap-2 w-fit col-span-1 md:col-span-1"
          href={"/"}
        >
          <div className="flex items-center">
            <Image
              src={logo}
              alt="logo without text"
              width={120}
              height={120}
            />
          </div>

          <div className="text-[#45556c] text-sm flex flex-col gap-2">
            <p> Хамгийн сүүлийн үеийн технологи,</p>
            <p>батлагдсан аргачлалыг</p>
            <p>ашиглан дэвшилтэт оношилгоо,</p>
            <p>мэргэжлийн эмчийн зөвлөгөө.</p>
          </div>
        </Link>
        <div className="flex flex-col gap-2">
          <a className="text-lg font-bold">Холбоосууд</a>
          <LinkList items={MENU_ITEMS} flexRow={true} />
        </div>

        <div className="flex flex-col gap-2 col-span-1 md:col-span-1 text-[#45556c]">
          <div className="text-lg font-bold">Contact info</div>
          {CONTACT_INFO.map((el, index) => (
            <Link
              href={el.href}
              className="flex items-center gap-2 text-sm text-[#45556c]"
              key={index}
              target="_blank"
            >
              <el.icon className="mr-2 w-5 h-5" />
              <span className="text-[#45556c] hover:text-[#00AC94] duration-500 hover:translate-x-1 w-fit">
                {el.title}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-gray-200"></div>

      <div className="flex justify-between gap-2 items-center text-sm w-full">
        <div className="flex gap-1">
          <Copyright className="text-[#99a1af]" />
          <p className="text-lg font-bold text-[#99a1af]">
            2025
            <span className="text-[#99a1af]">
              ЭНТО Клиник. All rights reserved. | Privacy Policy | Terms of
              Service
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
