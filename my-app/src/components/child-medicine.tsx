"use client";
import { useState } from "react";
import { CHILD_MEDICINE_INFO, TITLE_CENTER_INFO } from "@/asscents/constans";
import Image from "next/image";
import TitleCenter from "./title-center";

export default function ChildMedicine() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const sixthItem = TITLE_CENTER_INFO?.[6];
  if (!sixthItem) return null;

  return (
    <section id="services" className="relative py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <TitleCenter
          title={sixthItem.title}
          text={sixthItem.text}
          classnameTitle="text-gray-900"
          classnameText="text-gray-600"
        />

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {CHILD_MEDICINE_INFO.map((el, i) => {
            const isActive = activeIndex === i;

            return (
              <div
                key={i}
                onClick={() => setActiveIndex(isActive ? null : i)}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              >
                <div className="relative aspect-4/5 w-full">
                  <Image
                    src={el.image}
                    alt={el.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={75}
                    className={`object-cover transition-all duration-500
                      ${isActive ? "scale-110 blur-sm" : ""}
                      group-hover:blur-sm group-hover:brightness-50 group-hover:contrast-125
                    `}
                  />
                </div>

                <div
                  className={`absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-8 py-6 text-center rounded-xl transition-all duration-300
                  ${isActive ? "opacity-0 translate-y-6" : ""}
                  group-hover:opacity-0 group-hover:translate-y-6`}
                >
                  <h3 className="text-xl font-bold text-gray-900">
                    {el.title}
                  </h3>
                </div>

                <div
                  className={`absolute inset-0 flex flex-col px-6 py-8 text-center transition-opacity duration-300
                  ${isActive ? "opacity-100" : "opacity-0"}
                  group-hover:opacity-100`}
                >
                  <div className="overflow-y-auto">
                    {el.text.map((e, idx) => (
                      <p
                        key={idx}
                        className="text-lg font-medium text-white leading-relaxed mb-4"
                      >
                        {e}
                      </p>
                    ))}
                  </div>

                  <h3 className="mt-auto text-2xl font-bold text-[#00AC94]">
                    {el.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
