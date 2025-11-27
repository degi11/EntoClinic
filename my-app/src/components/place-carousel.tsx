"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import image1 from "../asscents/shinjilgee.jpg";
import image2 from "../asscents/ulamjlalt or.jpg";
import image3 from "../asscents/waiting stage.jpg";

const images = [image1, image2, image3];

export default function AutoCarousel() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      axis: "y",
    },
    [Autoplay({ delay: 2500, stopOnInteraction: false })]
  );

  return (
   
    <div
      className="relative w-full max-w-7xl mx-auto h-80 overflow-hidden rounded-xl mb-20"
      ref={emblaRef} 
    >
      <div className="flex flex-col h-full">
        {images.map((src, i) => (
          <div className="relative h-80 w-full shrink-0" key={i}>
            <Image
              src={src}
              alt={`Slide ${i}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
