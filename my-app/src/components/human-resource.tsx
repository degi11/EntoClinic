"use client";
import { useState } from "react";
import { TITLE_CENTER_INFO } from "@/asscents/constans";
import TitleCenter from "@/components/title-center";
import { toast } from "sonner";

export default function HumanResource() {
  const [loading, setLoading] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!cvFile) {
      toast.error("CV файл оруулна уу!");
      setLoading(false);
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("cv", cvFile);

    try {
      const res = await fetch("/api/human-resource", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Анкет амжилттай илгээгдлээ!");
      } else {
        toast.error(data.error || "Серверээс алдаа ирлээ!");
      }
    } catch (error) {
      console.error("CV илгээх үед алдаа:", error);
      toast.error("Сервертэй холбогдож чадсангүй!");
    } finally {
      setLoading(false);
    }
  };

  const fourthItem = TITLE_CENTER_INFO[4];

  return (
    <form
      onSubmit={handleSubmit}
      id="contact-us"
      className="py-20 bg-teal-600 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {TITLE_CENTER_INFO && (
          <TitleCenter
            title={fourthItem.title}
            text=""
            classnameText="text-teal-100"
          />
        )}

        <div className="flex items-center justify-center w-full gap-8">
          <div className="bg-white rounded-xl p-8 text-gray-900">
            <h3 className="text-2xl font-semibold mb-6 text-[#00AC94]">
              Ажилд орох анкет илгээх
            </h3>
            <div className="space-y-4">
              <input
              name="name"
                type="text"
                placeholder="Таны нэр"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />

              <input
              name="email"
                type="email"
                placeholder="Email Хаяг"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
              <input
              name="phone"
                type="tel"
                placeholder="Утасны дугаар"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
              <input
              name="position"
                type="text"
                placeholder="Өргөдөл өгсөн албан тушаал"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
              <textarea
              name="message"
                rows={4}
                placeholder="Хүсвэл тайлбар бичиж болно"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              ></textarea>
              <div className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent">
                <label className="block font-medium mb-1">CV Файл</label>

                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setCvFile(e.target.files?.[0] || null)}
                  className="block w-full"
                />
              </div>
              <button
                disabled={loading}
                className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors"
              >
                {loading ? "Илгээж байна..." : "Өрөгдөл илгээх"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
