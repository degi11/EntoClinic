"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";
import { SERVICES_CAROUSEL_INFO, TITLE_CENTER_INFO } from "@/asscents/constans";
import TitleCenter from "./title-center";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TestimonialCarousel() {
  const autoplay = Autoplay({ 
    delay: 4000, 
    stopOnInteraction: false,
    playOnInit: true,
    stopOnMouseEnter: true
  });

  const [emblaRef, embla] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [autoplay]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;

    embla.on("select", onSelect);
    embla.on("settle", onSelect); 
    
    onSelect();

    return () => {
      embla.off("select", onSelect);
      embla.off("settle", onSelect);
    };
  }, [embla, onSelect]);

  const firstItem = TITLE_CENTER_INFO[0];

  return (
    <div className="relative w-full mx-auto py-16 md:py-24 bg-slate-50/50">
      <TitleCenter
        title={firstItem.title}
        text={firstItem.text}
        classnameTitle="text-slate-900 text-3xl md:text-4xl font-extrabold tracking-tight"
        classnameText="text-slate-500 max-w-2xl mx-auto mt-3"
      />

      <div className="overflow-hidden mt-12 cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex gap-6 md:gap-8 px-4">
          {SERVICES_CAROUSEL_INFO.map((el, i) => {
            const isActive = selectedIndex === i;
            return (
              <div
                key={i}
                className={`shrink-0 w-[85%] md:w-[50%] lg:w-[40%] h-105
                  rounded-3xl relative transition-all duration-500 overflow-hidden group
                  ${isActive ? "scale-100 shadow-xl border border-teal-500/20" : "scale-95 opacity-40 shadow-md"}
                `}
              >
                <Image
                  src={el.image}
                  alt={el.title}
                  fill
                  sizes="(max-width: 768px) 85vw, 40vw"
                  quality={85}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-900/40 to-transparent z-10" />

                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 z-20 flex flex-col justify-end h-1/2 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-teal-500/20 backdrop-blur-md rounded-xl text-teal-400 border border-teal-500/30">
                      <el.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-teal-300 transition-colors">
                      {el.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-200 line-clamp-2 leading-relaxed mb-5">
                    {el.text}
                  </p>

                  <Link href={`/${el.href}`} className="self-start">
                    <button className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-teal-400 group/btn transition-colors duration-300 hover:text-white">
                      Дэлгэрэнгүй үзэх
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center mt-10 gap-2.5">
        {SERVICES_CAROUSEL_INFO.map((_, i) => (
          <button
            key={i}
            onClick={() => embla?.scrollTo(i)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer
              ${selectedIndex === i ? "bg-teal-600 w-8" : "bg-teal-600/20 w-2 hover:bg-teal-600/40"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}