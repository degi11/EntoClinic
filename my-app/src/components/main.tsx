import Image from "next/image";
import Picture from "../asscents/HeaderImage.jpg";
import { Zap } from "lucide-react";
import { RESULT_SM_INFO } from "@/asscents/constans";

export default function Main() {
  return (
    <div
      id="main"
      className="relative overflow-hidden max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 mt-12 flex flex-col md:flex-row items-center gap-12 bg-white"
    >
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <div className="inline-flex items-center self-start bg-teal-50 text-teal-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-6 border border-teal-100 shadow-sm transition-all duration-300 hover:bg-teal-100">
          <Zap className="w-4 h-4 mr-2 text-teal-600 fill-teal-600/20" />
          Оношлогооны дэвшилтэт технологи
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-none mb-6">
          НАРИЙВЧИЛСАН{" "}
          <span className="text-teal-600 block mt-1">ОНОШИЛГОО</span>
          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 block mt-3">
            МЭРГЭЖИЛТНҮҮДИЙН ЗӨВЛӨГӨӨ
          </span>
        </h1>

        <div className="border-l-4 border-teal-500 pl-4 my-6 text-slate-600 space-y-2 text-sm sm:text-base leading-relaxed max-w-md">
          <p className="font-bold text-slate-900 text-base sm:text-lg">
            Үнэт зүйл
          </p>
          <p>Харилцан хүндлэлтэй хамтын ажиллагааг эрхэмлэнэ.</p>
          <p>
            Үйлчлүүлэгч төвтэй, найзын дотно сэтгэлээр тусламж үйлчилгээг
            үзүүлнэ.
          </p>
          <p className="text-teal-700 font-medium">
            Нотолгоонд суурилсан, шинэ санаа, бүтээлч байдлыг дэмжин ажиллана.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-8 mt-4 border-t border-slate-100">
          {RESULT_SM_INFO.map((el, index) => (
            <div
              className="group p-3 rounded-2xl bg-slate-50/50 border border-slate-100 flex flex-col items-center text-center transition-all duration-300 hover:bg-white hover:shadow-md hover:border-teal-100"
              key={index}
            >
              <div className="p-2 bg-teal-50 rounded-xl mb-2 text-teal-600 transition-transform duration-300 group-hover:scale-110">
                <el.icon className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-700 leading-tight">
                {el.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2 h-87.5 sm:h-112.5 md:h-125 relative">
        <div className="absolute inset-0 bg-linear-to-tr from-teal-600/10 to-transparent rounded-2xl md:rounded-3xl z-10 pointer-events-none" />
        <Image
          src={Picture}
          className="rounded-2xl md:rounded-3xl h-full w-full object-cover shadow-xl border border-slate-100 transform transition-transform duration-500 hover:scale-[1.01]"
          alt="Diagnostics"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
