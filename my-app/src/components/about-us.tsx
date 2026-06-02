import { SM_INFO_DATA } from "@/asscents/constans";
import image from "../asscents/shinjilgee.jpg";

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="relative w-full min-h-100 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed py-16 md:py-24"
      style={{
        backgroundImage: `url(${image.src})`,
      }}
    >
      <div className="absolute inset-0 bg-linear-to-br from-teal-900/80 via-[#00AC94]/75 to-teal-950/80 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-white w-full">
          {SM_INFO_DATA.map((el, i) => (
            <div
              className="group flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg transition-all duration-300 hover:bg-white/15 hover:border-white/20 hover:scale-[1.03] hover:shadow-xl"
              key={i}
            >
              <div className="mb-5 flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 border border-white/20 transition-all duration-500 group-hover:rotate-6 group-hover:bg-teal-500 group-hover:border-teal-400 group-hover:shadow-lg group-hover:shadow-teal-500/30">
                <el.icon className="w-10 h-10 text-white transition-transform duration-300 group-hover:scale-110" />
              </div>

              <p className="text-sm sm:text-base font-medium leading-relaxed text-teal-50 max-w-60 group-hover:text-white transition-colors duration-300">
                {el.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}