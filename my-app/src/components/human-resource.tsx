"use client";
import { useState } from "react";
import {  TITLE_CENTER_INFO } from "@/asscents/constans";
import TitleCenter from "@/components/title-center";


export default function HumanResource() {
  const [lastName, setLastName] = useState("");
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formattedDate = date ? date.toISOString().slice(0, 10) : "";

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lastName,
          name,
          phonenumber,
          description,
          formattedDate,
          time,
        }),
      });

      const data = await res.json();
      if (data.success) {
        window.location.reload();
      } else {
        setError(data.error || "Server error");
      }
    } catch (err: unknown) {
      console.error(err);
      setError("Сервертэй холбогдох үед алдаа гарлаа!");
    }

    setLoading(false);
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
            text={fourthItem.text}
            classnameText="text-teal-100"
          />
        )}

        <div className="flex items-center justify-center w-full gap-8">
          <div className="bg-white rounded-xl p-8 text-gray-900">
            <h3 className="text-2xl font-semibold mb-6 text-[#00AC94]">
              Цагаа Захиалаарай
            </h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Овог"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Нэр"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                />
              </div>
              <input
                type="email"
                placeholder="Email Хаяг"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="Утасны дугаар"
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows={4}
                placeholder="Шинжилгээ өгөх Он, Сар, Өдөрөө тодорхой бичнэ үү"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              ></textarea>
              <button
                disabled={loading}
                className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors"
              >
                {loading ? "Илгээж байна..." : "Цаг Захиалах"}
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
