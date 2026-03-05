import { CHILD_MEDICINE_INFO, TITLE_CENTER_INFO } from "@/asscents/constans";
import Image from "next/image";
import TitleCenter from "./title-center";

export default function ChildMedicine() {
  const sixthItem = TITLE_CENTER_INFO?.[6];
  if (!sixthItem) return null;

  return (
    <section
      id="services"
      className="relative py-24 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <TitleCenter
          title={sixthItem.title}
          text={sixthItem.text}
          classnameTitle="text-gray-900"
          classnameText="text-gray-600"
        />

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {CHILD_MEDICINE_INFO.map((el, i) => (
            <div
              key={i ?? el.title}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <div className="relative aspect-4/5 w-full">
                <Image
                  src={el.image}
                  alt={el.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-8 py-6 text-center rounded-xl transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {el.title}
                </h3>
              </div>

              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {el.text.map((e, i) => (
                  <p
                    key={i}
                    className="text-lg font-medium text-white leading-relaxed mb-4"
                  >
                    {e}
                  </p>
                ))}

                <h3 className="text-2xl font-bold text-[#00AC94] mt-4">
                  {el.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}