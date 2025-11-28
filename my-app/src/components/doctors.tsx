import { CONSULTATION_EXPERTS, TITLE_CENTER_INFO } from "@/asscents/constans";
import { Award } from "lucide-react";
import Image from "next/image";
import TitleCenter from "./title-center";
import image1 from "../asscents/ulamjlalt or.jpg"

export default function Doctors() {
  const thirdItem = TITLE_CENTER_INFO[2];
  return (
    <section id="doctors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {TITLE_CENTER_INFO && (
          <TitleCenter
            title={thirdItem.title}
            text={thirdItem.text}
            classnameTitle="text-gray-900"
            classnameText="text-gray-600"
          />
        )}
        <div className="grid md:grid-cols-3 gap-8">
          {CONSULTATION_EXPERTS.map((el, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="relative w-full h-90">
                <Image
                  src={el.image}
                  alt={el.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {el.name}
                </h3>

                <p className="text-gray-600 text-sm mb-3">{el.credentials}</p>

                <div className="mb-2">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Award className="w-4 h-4 mr-1" />
                    {el.experience} жил
                  </div>

                  <div className="space-y-1">
                    {el.expertise.map((skill, i) => (
                      <span
                        key={i}
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
