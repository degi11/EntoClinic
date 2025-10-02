export const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="w-full min-h-[400px] bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage:
          "url('https://ento.mn/_next/image?url=%2Fimages%2Fbusiness%2Fclinic.jpg&w=1920&q=75')",
      }}
    >
      <div className="md:bg-transparent gap-[30px] bg-opacity-50 w-full flex flex-col md:flex-row min-h-[400px] items-center justify-center border-[8px] md:border-[18px] border-solid border-white">
        <div className="inset-0 bg-white/70 backdrop-blur-sm max-w-[1260px] mx-auto px-4 sm:px-6 py-6 rounded-3xl">
          <div className="w-full flex justify-center">
            <h2 className="my-5 text-2xl sm:text-3xl md:text-[38px] font-bold text-[#00AC94] text-center">
              Энто Клиник ХХК
            </h2>
          </div>

          <p className="p-2 text-[#45556c] text-sm sm:text-base leading-relaxed text-justify">
            ЭНТО Клиник нь орчин үеийн шаардлагад нийцсэн эрүүл мэндийн цогц
            тусламж үйлчилгээг нэг дороос авах боломжийг бүрдүүлсэн эмчилгээ
            оношилгооны төв юм. Манай төв нь хүүхэд, дотор болон уламжлалтын
            эмчилгээний чиглэлээр мэргэшсэн эмч нарын багтайгаар ажиллаж,
            мэргэжлийн түвшинд эрүүл мэндийн үйлчилгээг хүргэдэг. Мөн бид
            лабораторийн нарийвчилсан шинжилгээ, оношилгооны үйлчилгээ үзүүлдэг
            бөгөөд энэ нь үйлчлүүлэгчдэдээ түргэн шуурхай, найдвартай үйлчилгээ
            авах боломжуудыг бүрдүүлдэг. Орчин үеийн завгүй амьдралын хэмнэлд
            тохируулан, нэг дороос бүрэн үйлчилгээг авах боломжийг бий болгосон
            бөгөөд гэр бүлийн бүх гишүүн бүрт зориулагдсан гэдгээрээ онцлог юм.
          </p>
        </div>
      </div>
    </section>
  );
};
