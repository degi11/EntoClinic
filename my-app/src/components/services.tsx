"use client";
import { DIAGNOSTIC_SERVICES, TITLE_CENTER_INFO } from "@/asscents/constans";
import { CheckCircle } from "lucide-react";
import TitleCenter from "./title-center";

export default function Lab() {
  const fifthItem = TITLE_CENTER_INFO[5];
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-8 mt-10">
        {TITLE_CENTER_INFO && (
          <TitleCenter
            title={fifthItem.title}
            text={fifthItem.text}
            classnameTitle="text-gray-900"
            classnameText="text-gray-600"
          />
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DIAGNOSTIC_SERVICES.map((el, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all group border border-gray-100"
            >
              <div className="flex w-full gap-4">
                <div className="bg-teal-100 w-14 h-14 rounded-lg px-2 flex items-center mb-6 group-hover:bg-teal-200 transition-colors">
                  <el.icon className="w-10 h-8 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-900 ">
                  {el.title}
                </h3>
              </div>

              <ul className="space-y-2 mb-6">
                {el.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <CheckCircle className="w-4 h-4 text-teal-500 mr-2 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
