import { SM_INFO_DATA } from "@/asscents/constans";
import image from "../asscents/shinjilgee.jpg";

export default function SmInfo() {
  return (
    <section
      id="about-us"
      className="relative w-full min-h-100 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url(${image.src})`,
      }}
    >
      <div className="absolute inset-0 bg-[#00AC94]/70"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 h-full py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
          {SM_INFO_DATA.map((el, i) => (
            <div
              className="flex flex-col items-center text-center gap-4"
              key={i}
            >
              <div className="border-2 border-white flex items-center justify-center w-20 h-20 rounded-full">
                <el.icon className="w-10 h-10" />
              </div>
              <p className="max-w-[200px] ">{el.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
