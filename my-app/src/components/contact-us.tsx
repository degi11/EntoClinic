"use client";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { Input } from "./ui/input";
import { CONTACTUS_CARD, TITLE_CENTER_INFO } from "@/asscents/constans";
import TitleCenter from "./title-center";

export default function ContactUs() {
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

  const thirdItem = TITLE_CENTER_INFO[3];

  return (
    <form
      onSubmit={handleSubmit}
      id="contact-us"
      className="py-20 bg-teal-600 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {TITLE_CENTER_INFO && (
          <TitleCenter
            title={thirdItem.title}
            text={thirdItem.text}
            classnameText="text-teal-100"
          />
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
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
                <div className="flex gap-4">
                  <div className="flex flex-col gap-3">
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          id="date-picker"
                          className="justify-between font-normal w-fit p-5"
                        >
                          {date ? date.toLocaleDateString() : "Он, Сар, Өдөр"}

                          <ChevronDownIcon />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto overflow-hidden p-0"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={date}
                          captionLayout="dropdown"
                          onSelect={(date) => {
                            setDate(date);
                            setOpen(false);
                          }}
                          disabled={(date) => {
                            const day = date.getDay();
                            return day === 0;
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Input
                      type="time"
                      id="time"
                      step="60"
                      min="08:00"
                      max="16:00"
                      defaultValue="10:30"
                      className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none p-5"
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </div>
                </div>
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
            {CONTACTUS_CARD.map((el, index) => (
              <div className="bg-teal-700 p-6 rounded-xl" key={index}>
                <el.icon className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{el.title}</h3>
                <p className="text-teal-100 mb-1">{el.text1}</p>
                <p className="text-teal-100 mb-1">{el.text2}</p>
                <p className="text-teal-100 mb-1">{el.text3}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
}
