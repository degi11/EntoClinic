import Image from "next/image";
import Picture1 from "../asscents/Diagnostics.jpg";
import { Zap } from "lucide-react";
import { RESULT_SM_INFO } from "@/asscents/constans";

export default function Main() {
  return (
    <div
      id="main"
      className="relative overflow-hidden max-w-[1260px] mx-auto px-6 py-[80px] mt-[90px] flex flex-col md:flex-row gap-5 bg-white"
    >
      <div className="text-black w-full md:w-1/2 h-min-screen sm:px-6">
        <div className="inline-flex items-center bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Zap className="w-4 h-4 mr-2" />
          Оношлогооны дэвшилтэт технологи
        </div>
        <div>
          <h1 className="text-4xl sm:text-3xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Нарийвчилсан
            <span className="text-teal-600"> Оношлогоо</span>
            <br />
            Мэргэжилтнүүдийн Зөвлөгөө
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed sm:text-sm">
            ЭНТО КЛИНИК эмчилгээ, оношилгооны төв нь дараах чиглэлээр үйл
            ажиллагаа явуулж байна. Эрүүл мэндийн чанартай үйлчилгээг орчин
            үеийн технологид тулгуурлан, мэргэжлийн өндөр түвшинд хүргэнэ.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
          {RESULT_SM_INFO.map((el, index) => (
            <div className="text-center" key={index}>
              <div className="text-2xl font-bold text-teal-600 mb-1">
                {el.count}
              </div>
              <div className="text-sm text-gray-600">{el.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <Image
          src={Picture1}
          className="rounded-3xl"
          alt="Diagnostics"
          width={600}
          height={100}
        />
      </div>
    </div>
  );
}
