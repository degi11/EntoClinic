"use client";
import { Clock, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phonenumber, description }),
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

  return (
    <form
      onSubmit={handleSubmit}
      id="contact-us"
      className="py-20 bg-teal-600 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Зөвлөгөөний Хуваарь Гарга
          </h2>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto">
            Мэргэшсэн эмчийн зөвлөгөө, нарийн оношилгооны шинжилгээг аваарай.
            Манай мэргэжилтнүүд танд цогц тусламж үзүүлэхэд бэлэн байна..
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 text-gray-900">
              <h3 className="text-2xl font-semibold mb-6">Цагаа Захиалаарай</h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Овог"
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

          <div className="space-y-8">
            <div className="bg-teal-700 p-6 rounded-xl">
              <Phone className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Утас</h3>
              <p className="text-teal-100 mb-2">Main: (+976) 72009898</p>
            </div>

            <div className="bg-teal-700 p-6 rounded-xl">
              <MapPin className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Манай клиникийг зориорой
              </h3>
              <p className="text-teal-100">
                БЗД 26-р хороо, Кристал таун хотхоны
                <br />
                баруун урд талд HCC төв 3-р давхарт
              </p>
            </div>

            <div className="bg-teal-700 p-6 rounded-xl">
              <Clock className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Цаг</h3>
              <p className="text-teal-100 mb-1">Дав-Бям: 8:00 - 17:00</p>
              <p className="text-teal-100 mb-1">Ням: Амарна:</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
