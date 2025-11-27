"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { SERVICES_CAROUSEL_INFO, TITLE_CENTER_INFO } from "@/asscents/constans";
import TitleCenter from "./title-center";
import { useRouter } from "next/navigation";

export default function TestimonialCarousel() {
  const router = useRouter();
  const [emblaRef, embla] = useEmblaCarousel(
    {
      loop: false,
      align: "center",
      skipSnaps: false,
    },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!embla) return;

    const onSelect = () => {
      setSelectedIndex(embla.selectedScrollSnap());
    };

    embla.on("select", onSelect);
    onSelect();

    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  const secondItem = TITLE_CENTER_INFO[1];

  return (
    <div className="relative w-full max-w-7xl mx-auto py-20">
      {TITLE_CENTER_INFO && (
        <TitleCenter
          title={secondItem.title}
          text={secondItem.text}
          classnameTitle="text-gray-900"
          classnameText="text-gray-600"
        />
      )}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-16">
          {SERVICES_CAROUSEL_INFO.map((el, i) => (
            <div
              onClick={() => router.push(`/${el.href}`)}
              key={i}
              className="
          shrink-0 w-full md:w-[70%] lg:w-[60%] mx-auto h-96
          bg-white shadow-lg rounded-3xl relative
          transition-all duration-500 scale-[0.85] group cursor-pointer hover:shadow-xl hover:scale-90 
        "
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden">
                <Image
                  src={el.image}
                  alt=""
                  fill
                  className="object-cover"
                />

                <div className="absolute bottom-8 left-6 text-black p-4 bg-white rounded-xl max-w-100">
                  <div className="flex items-center gap-2">
                    <el.icon className="text-[#00AC94]" />
                    <p className="text-base md:text-base lg:text-base font-semibold group-hover:text-[#00AC94] transition">
                      {el.title}
                    </p>
                  </div>
                  <p className="text-sm md:text-base lg:text-base">{el.text}</p>
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
            onClick={() => embla && embla.scrollTo(i)}
            className={`w-3 h-3 rounded-full transition-all cursor-pointer
        ${selectedIndex === i ? "bg-[#00AC94] scale-125" : "bg-[#00AC94]/40"}`}
          />
        ))}
      </div>
    </div>
  );
}
