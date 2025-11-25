"use client";
import { useState } from "react";
import { TITLE_CENTER_INFO } from "@/asscents/constans";
import TitleCenter from "@/components/title-center";

export default function HumanResource() {
  const [loading, setLoading] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    if (!cvFile) {
      setError("CV файл оруулна уу!");
      setLoading(false);
      return;
    }

    const formData = new FormData(e.target);
    formData.append("cv", cvFile);

    try {
      const res = await fetch("/api/human-resource", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
      } else {
        setError(data.error || "Алдаа гарлаа!");
      }
    } catch (err) {
      setError("Сервертэй холбогдож чадсангүй!");
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
            text=''
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
                type="text"
                placeholder="Таны нэр"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />

              <input
                type="email"
                placeholder="Email Хаяг"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="Утасны дугаар"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Өргөдөл өгсөн албан тушаал"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
              <textarea
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
              {error && (
                <div className="mt-4 p-2 bg-red-200 text-red-800 border border-red-400 rounded">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
