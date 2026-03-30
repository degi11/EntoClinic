"use client";
import { TITLE_CENTER_INFO, TRADITIONAL_INFO } from "@/asscents/constans";
import TitleCenter from "./title-center";
import Image from "next/image";
import { motion } from "motion/react";

export default function TraditionalMedicine() {
  const fifthItem = TITLE_CENTER_INFO[5];

  return (
    <section
      id="services"
      className="relative py-24 bg-gray-100 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-20 pointer-events-none
        bg-size-[22px_22px]"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <TitleCenter
          title={fifthItem.title}
          text={fifthItem.text}
          classnameTitle="text-gray-900"
          classnameText="text-gray-600"
        />

        <div className="mt-20 space-y-28">
          {TRADITIONAL_INFO.map((el, index) => {
            const isOdd = index % 2 === 1;

            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-14 items-center ${
                  isOdd ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: isOdd ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative h-105 w-full rounded-lg overflow-hidden bg-[radial-gradient(#9ca3af_1px,transparent_1px)] bg-size-[22px_22px]"
                >
                  <Image
                    src={el.image}
                    alt="photo"
                    fill
                    className="object-cover p-10 rounded-lg flex"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: isOdd ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-12 rounded-lg shadow-sm"
                >
                  <div className="w-14 h-1 bg-[#00AC94] mb-6" />

                  {el.text.map((e, i) => (
                    <p
                      key={i}
                      className="text-lg font-medium text-gray-700 leading-relaxed mb-4"
                    >
                      {e}
                    </p>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}