"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";
import { SERVICES_CAROUSEL_INFO, TITLE_CENTER_INFO } from "@/asscents/constans";
import TitleCenter from "./title-center";
import Link from "next/link";

export default function TestimonialCarousel() {

  const autoplay = Autoplay({ delay: 6000, stopOnInteraction: false });

  const [emblaRef, embla] = useEmblaCarousel(
    {
      loop: false,
      align: "center",
      skipSnaps: false,
    },
    [autoplay],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;

    embla.on("select", onSelect);
    onSelect();

    return () => {
      embla.off("select", onSelect);
    };
  }, [embla, onSelect]);

  const firstItem = TITLE_CENTER_INFO[0];

  return (
    <div className="relative w-full mx-auto py-20">
      <TitleCenter
        title={firstItem.title}
        text={firstItem.text}
        classnameTitle="text-gray-900"
        classnameText="text-gray-600"
      />

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-10">
          {SERVICES_CAROUSEL_INFO.map((el, i) => (
            <div
              key={i}
              className="
                shrink-0 w-full md:w-[70%] lg:w-[60%] mx-auto h-96
                bg-white shadow-lg rounded-3xl relative
                transition-transform duration-300 scale-[0.9] group cursor-pointer hover:shadow-xl hover:scale-95
              "
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden">
                <Image
                  src={el.image}
                  alt={el.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  quality={75}
                  className="object-cover"
                />

                <div className="absolute bottom-6 left-6 text-black p-4 bg-white rounded-xl max-w-[90%]">
                  <div className="flex items-center gap-2">
                    <el.icon className="text-[#00AC94]" />
                    <p className="font-semibold group-hover:text-[#00AC94] transition-colors">
                      {el.title}
                    </p>
                  </div>

                  <p className="text-sm md:text-base">{el.text}</p>

                  <Link href={`/${el.href}`}>
                    <button className="bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors px-3 py-1 mt-2 flex justify-self-end">
                      Дэлгэрэнгүй...
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10 gap-2">
        {SERVICES_CAROUSEL_INFO.map((_, i) => (
          <button
            key={i}
            onClick={() => embla?.scrollTo(i)}
            className={`w-3 h-3 rounded-full transition-all cursor-pointer
              ${
                selectedIndex === i
                  ? "bg-[#00AC94] scale-125"
                  : "bg-[#00AC94]/40"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
