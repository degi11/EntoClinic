export const MENU_ITEMS = [
  {
    title: "Бидний тухай",
    href: "#about-us",
  },
  {
    title: "Үзлэг, Эмчилгээ",
    href: "#services",
  },
  {
    title: "Эмч нар",
    href: "#doctors",
  },
  {
    title: "Холбоо барих",
    href: "#contact-us",
  },
];

import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const CONTACT_INFO = [
  {
    icon: MapPin,
    title:
      "Хаяг: БЗД 26-р хороо, Кристал таун хотхоны баруун урд талд HCC төв 3-р давхарт",
    href: "https://www.google.com/maps/place/ENTO+clinic/@47.9045084,106.9387123,310m/data=!3m2!1e3!4b1!4m6!3m5!1s0x5d96930054b6bccb:0xd921b38a885f024b!8m2!3d47.9045084!4d106.9399998!16s%2Fg%2F11xds6dr7_?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    icon: Phone,
    title: "Утас: +72009898",
    href: "tel:+72009898",
  },
  {
    icon: Mail,
    title: "И-мэйл: info@entoclinic.mn",
    href: "/contact-us",
  },
];

export const RESULT_SM_INFO = [
  {
    count: "24hr",
    title: "Үр дүнгийн эргэлт",
  },
  {
    count: "98%",
    title: "Нарийвчлалын түвшин",
  },
  {
    count: "15K+",
    title: "Туршилтуудыг хийсэн",
  },
];

export const TITLE_CENTER_INFO = [
  {
    title: "Энто Клиник ХХК",
    text: "ЭНТО Клиник нь орчин үеийн шаардлагад нийцсэн эрүүл мэндийн цогц тусламж үйлчилгээг нэг дороос авах боломжийг бүрдүүлсэн эмчилгээ оношилгооны төв юм. Манай төв нь хүүхэд, дотор болон уламжлалтын эмчилгээний чиглэлээр мэргэшсэн эмч нарын багтайгаар ажиллаж мэргэжлийн түвшинд эрүүл мэндийн үйлчилгээг хүргэдэг. Мөн бид лабораторийн нарийвчилсан шинжилгээ, оношилгооны үйлчилгээ үзүүлдэг бөгөөд энэ нь үйлчлүүлэгчдэдээ түргэн шуурхай, найдвартай үйлчилгээ авах боломжуудыг бүрдүүлдэг. Орчин үеийн завгүй амьдралын хэмнэлд тохируулан, нэг дороос бүрэн үйлчилгээг авах боломжийг бий болгосон бөгөөд гэр бүлийн бүх гишүүн бүрт зориулагдсан гэдгээрээ онцлог юм.",
  },
  {
    title: "Оношлогооны Цогц Үйлчилгээ",
    text: "Нарийвчилсан оношилгоо, эмчилгээг төлөвлөхөд хамгийн сүүлийн үеийн тоног төхөөрөмж, батлагдсан арга зүйг ашиглан эмнэлгийн дэвшилтэт шинжилгээ, мэргэжилтнүүдийн зөвлөгөө.",
  },
  {
    title: "Манай Оношлогооны Мэргэжилтнүүдтэй Уулзана уу",
    text: "Оношлогооны анагаах ухаан, дэвшилтэт эмнэлгийн шинжилгээний тайлбар бүхий арвин туршлагатай, зөвлөлийн гэрчилгээтэй мэргэжилтнүүд.",
  },
  {
    title: "Зөвлөгөөний Хуваарь Гарга",
    text: "Мэргэшсэн эмчийн зөвлөгөө, нарийн оношилгооны шинжилгээг аваарай. Манай мэргэжилтнүүд танд цогц тусламж үзүүлэхэд бэлэн байна.",
  },
];

import { Microscope, Activity, Brain, Eye, Search, Target } from "lucide-react";

export const DIAGNOSTIC_SERVICES = [
  {
    icon: Microscope,
    title: "Лабораторийн шинжилгээ",
    description:
      "Цусны иж бүрэн шинжилгээ, генетикийн шинжилгээ, нарийн мэргэжлийн лабораторийн оношлогоо нь тухайн өдрийн үр дүн.",
    features: [
      "Complete Blood Count",
      "Genetic Screening",
      "Hormone Analysis",
      "Allergy Testing",
    ],
  },
  {
    icon: Activity,
    title: "Зүрхний оношлогоо",
    description:
      "Хамгийн сүүлийн үеийн тоног төхөөрөмж ашиглан зүрхний ахисан түвшний хяналт, зүрх судасны үнэлгээ.",
    features: [
      "ECG/EKG",
      "Echocardiogram",
      "Stress Testing",
      "Holter Monitoring",
    ],
  },
  {
    icon: Brain,
    title: "Мэдрэлийн шинжилгээ",
    description:
      "Хамгийн сүүлийн үеийн дүрслэлийн технологи бүхий тархи, мэдрэлийн системийн цогц үнэлгээ.",
    features: ["MRI Scans", "CT Scans", "EEG Testing", "Cognitive Assessment"],
  },
  {
    icon: Eye,
    title: "Эмнэлгийн дүрслэл",
    description:
      "Нарийвчлалтай оношлох, эмчилгээг төлөвлөх өндөр нарийвчлалтай оношлогооны дүрс бичлэгийн үйлчилгээ.",
    features: ["X-Ray", "Ultrasound", "MRI", "CT Scans"],
  },
  {
    icon: Target,
    title: "Мэргэшсэн зөвлөгөөнүүд",
    description:
      "Олон чиглэлээр мэргэшсэн мэргэжилтнүүдтэй зөвлөлдсөн эмнэлгийн зөвлөгөө.",
    features: [
      "Second Opinions",
      "Treatment Planning",
      "Specialist Referrals",
      "Follow-up Care",
    ],
  },
  {
    icon: Search,
    title: "Урьдчилан сэргийлэх үзлэг",
    description:
      "Эрүүл мэндийг оновчтой болгохын тулд эрүүл мэндийн цогц үзлэг, эрт илрүүлэх хөтөлбөрүүд.",
    features: [
      "Cancer Screening",
      "Health Check-ups",
      "Risk Assessment",
      "Wellness Programs",
    ],
  },
];

import { Expert } from "../types/experts";

export const CONSULTATION_EXPERTS: Expert[] = [
  {
    name: "Д.ОДОНТУЯА эмч",
    experience: "Ажлын тушлага 42+",
    image:
      "https://scontent.fuln2-2.fna.fbcdn.net/v/t39.30808-6/500280719_1093885632759944_3924174466058012128_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=VERady7wS00Q7kNvwG4QRuC&_nc_oc=AdnUdV9knvBIcvU79has6RQ1jOtYEOHM0C1dT8H7YgPVY8Npm8_nrvvdJxK9ArYn3No&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&_nc_gid=krJ1t7N3gZXAyDA8W6rajQ&oh=00_AfYpDPK7_kQ6YxcKN5Kmp6hylWuf724jCs-xVcZm_SMwRQ&oe=68E3EC30",
    credentials: "АУ-ны доктор, профессор",
    expertise: [
      "Үе мөчний өвчлөлүүд",
      "Зүрх судас- Дотоод шүүрэл",
      "Мэдрэлийн өвчин",
      "Хүүхдийн үзлэг, эмчилгээ",
      "Хөнгөвчлөхийн өвчний үзлэг эмчилгээ",
    ],
  },
  {
    name: "Р.ОЮУНГЭРЭЛ эмч",
    experience: "Ажлын тушлага 36+",
    image:
      "https://scontent.fuln2-2.fna.fbcdn.net/v/t39.30808-6/539338592_1169386891876484_3062003615371194726_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MLmMINRI7AUQ7kNvwE-6pY7&_nc_oc=AdmkFtT1mHquZU4EDVd5W5rAI3w1zBm6chbJ3kwVkSWd0A96KO9g5elZ-xtOx38At4k&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&_nc_gid=x4DUl8ISNzphrm6NR9bxdQ&oh=00_AfaVZrcxADK788Pxryc6BwJpZLjSBTuh5JT_131mzjOzrg&oe=68E3EB6F",
    credentials: " АУ-ны доктор, дэд профессор, халдвартын ба хүүхдийн эмч",
    expertise: ["Дотор", "Хүүхэд", "Халдварт өвч"],
  },
  {
    name: "Л. ЭНХТУЯА эмч",
    experience: "Ажлын тушлага 33+",
    image:
      "https://scontent.fuln2-2.fna.fbcdn.net/v/t39.30808-6/500315738_1093173749497799_6430653548834363174_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EUeGz6QqF3EQ7kNvwGhW0sK&_nc_oc=AdlvlVDyyidYvZ0AxIq62JDrzR-7vhaKny2TZaX5up-jBkFFH8-CCCHlM03wKo2H6IA&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&_nc_gid=1jDJDLmrOwWXEEx3-DuHnw&oh=00_AfYhuQYSs3kTRUL_22j9zHshzHdAJtYHusEtBD-JMm5sQw&oe=68E3D0B2",
    credentials: "Клиникийн профессор, тэргүүлэх зэргийн эмч",
    expertise: [
      "Хоол боловсруулах замын эмгэг",
      "Бөөр, шээс ялгаруулах замын эмгэг",
      "Ядарч сульдсан үед",
      "Урьдчилан сэргийлэх зорилгоор үзүүлэх боломжтой",
    ],
  },
];

export const CONTACTUS_CARD = [
  {
    icon: Phone,
    title: "Утас",
    text1: "Main: (+976) 72009898",
    text2: "И-мэйл: info@entoclinic.mn",
  },
  {
    icon: MapPin,
    title: "Манай клиникийг зориорой",
    text1:
      "БЗД 26-р хороо, Кристал таун хотхоны баруун урд талд HCC төв 3-р давхарт",
  },
  {
    icon: Clock,
    title: "Цаг",
    text1: "Дав-Бям: 8:00 - 17:00",
    text2: "Ням: Амарна",
  },
];
