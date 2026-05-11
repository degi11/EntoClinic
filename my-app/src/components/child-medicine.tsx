"use client";

import { CHILD_MEDICINE_INFO, TITLE_CENTER_INFO } from "@/asscents/constans";
import Image from "next/image";
import TitleCenter from "./title-center";
import ContactUs from "./contact-us";
import { motion } from "framer-motion";

export default function ChildMedicine() {
  const sixthItem = TITLE_CENTER_INFO?.[6];
  if (!sixthItem) return null;

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-10">

        <TitleCenter
          title={sixthItem.title}
          text={sixthItem.text}
          classnameTitle="text-gray-900"
          classnameText="text-gray-600"
        />

        <div className="mt-16 space-y-20">
          {CHILD_MEDICINE_INFO.map((el, i) => (
            <div key={i} className="grid lg:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative w-full aspect-4/3 md:aspect-16/10 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={el.image}
                  alt={el.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  {el.title}
                </h2>

                <ul className="space-y-3 text-gray-700 text-base md:text-lg">
                  {el.text.map((e, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <ContactUs />
      </div>
    </section>
  );
}
