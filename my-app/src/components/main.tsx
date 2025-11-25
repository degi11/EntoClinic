import Image from "next/image";
import Picture from "../asscents/Lab.jpg";
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Нарийвчилсан
            <span className="text-teal-600"> Оношлогоо</span>
            <br />
            Мэргэжилтнүүдийн Зөвлөгөө
          </h1>
          <div className="lg:text-sm text-gray-600 mb-8 leading-relaxed sm:text-sm">
            
            <p className="font-semibold">Үнэт зүйл</p>
            Харилцан хүндлэлтэй хамтын ажиллагааг эрхэмлэн. <br />
            Үйлчлүүлэгч төвтэй, найзын дотно сэтгэлээр тусламж үйлчилгээг
            үзүүлнэ.
            <br />
            Нотолгоонд суурилсан, шинэ санаа, бүтээлч байдлыг дэмжин ажиллана.
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
          {RESULT_SM_INFO.map((el, index) => (
            <div className="text-center flex flex-col items-center" key={index}>
              <el.icon className="text-teal-600 mb-1" />

              <div className="text-sm text-gray-600">{el.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <Image
          src={Picture}
          className="rounded-sm h-full object-cover lg:rounded-3xl"
          alt="Diagnostics"
          width={600}
          height={100}
        />
      </div>
    </div>
  );
}
