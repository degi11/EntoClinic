"use client";
import { TitleCenterProps } from "@/types/experts";
import { motion } from "motion/react";

export default function TitleCenter({
  title,
  text,
  classname,
  classnameTitle,
  classnameText,
}: TitleCenterProps) {
  return (
    <div className={`text-center mb-16 ${classname || ""}`}>
      
      <motion.h2
        initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={`text-3xl lg:text-4xl font-bold ${
          classnameTitle || ""
        } mb-4`}
      >
        {title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className={`text-lg max-w-2xl mx-auto ${
          classnameText || ""
        }`}
      >
        {text}
      </motion.p>
    </div>
  );
}