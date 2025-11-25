import { TITLE_CENTER_INFO } from "@/asscents/constans";

export const AboutUs = () => {
  const firstItem = TITLE_CENTER_INFO[0];
  return (
    <section
      id="about-us"
      className="w-full min-h-[400px] bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage:
          "url('https://ento.mn/_next/image?url=%2Fimages%2Fbusiness%2Fclinic.jpg&w=1920&q=75')",
      }}
    >
      <div className="md:bg-transparent gap-[30px] bg-opacity-50 w-full flex flex-col md:flex-row min-h-[600px] md:min-h-[400px] items-center justify-center border-8 md:border-18 border-solid border-white">
        <div className="inset-0 bg-white/70 backdrop-blur-sm max-w-[1260px] mx-auto px-1 md:px-4 sm:px-6 py-2 rounded-3xl">
          <h2 className="my-5 text-2xl sm:text-3xl md:text-[38px] font-bold text-[#00AC94] text-center">
            {firstItem.title}
          </h2>

          <p className="p-2 text-[#45556c] text-sm sm:text-base leading-relaxed text-justify">
            {firstItem.text}
          </p>
        </div>
      </div>
    </section>
  );
};
