"use client";
import { DIAGNOSTIC_SERVICES } from "@/asscents/constans";
import { CheckCircle } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Оношлогооны Цогц Үйлчилгээ
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Нарийвчилсан оношилгоо, эмчилгээг төлөвлөхөд хамгийн сүүлийн үеийн
            тоног төхөөрөмж, батлагдсан арга зүйг ашиглан эмнэлгийн дэвшилтэт
            шинжилгээ, мэргэжилтнүүдийн зөвлөгөө.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIAGNOSTIC_SERVICES.map((el, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all group border border-gray-100"
            >
              <div className="bg-teal-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors">
                <el.icon className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {el.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {el.description}
              </p>

              <ul className="space-y-2 mb-6">
                {el.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <CheckCircle className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" />
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
