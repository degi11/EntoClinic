import { CONSULTATION_EXPERTS } from "@/asscents/constans";
import { Award } from "lucide-react";
import Image from "next/image";

export default function Doctors() {
  return (
    <section id="doctors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Манай Оношлогооны Мэргэжилтнүүдтэй Уулзана уу
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Оношлогооны анагаах ухаан, дэвшилтэт эмнэлгийн шинжилгээний тайлбар
            бүхий арвин туршлагатай, зөвлөлийн гэрчилгээтэй мэргэжилтнүүд
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {CONSULTATION_EXPERTS.map((el, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Image
                src={el.image}
                alt={el.name}
                width={600}
                height={64}
                className="object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {el.name}
                </h3>

                <p className="text-gray-600 text-sm mb-3">{el.credentials}</p>

                <div className="mb-4">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Award className="w-4 h-4 mr-1" />
                    {el.experience} жил
                  </div>

                  <div className="space-y-1">
                    {el.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded mr-1 mb-1"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
