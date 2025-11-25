import { HandHeart, ShieldCheck, Users } from "lucide-react";

export default function SmInfo() {
  return (
    <section className="bg-teal-600 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="flex items-center">
            <Users className="w-5 h-5 mr-2" />
            <span>Багийн ажиллагаа</span>
          </div>
          <div className="flex items-center">
            <HandHeart className="w-5 h-5 mr-2" />
            <span>Өөриймсөг хандлага</span>
          </div>
          <div className="flex items-center">
            <ShieldCheck className="w-5 h-5 mr-2" />
            <span>Чанарыг эрхэмлэнэ</span>
          </div>
        </div>
      </div>
    </section>
  );
}
