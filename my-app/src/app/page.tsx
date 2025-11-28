import { AboutUs } from "@/components/about-us";
import ContactUs from "@/components/contact-us";
import Doctors from "@/components/doctors";
import Main from "@/components/main";
import TestimonialCarousel from "@/components/service-place-carousel";
import SmContactInfo from "@/components/sm-info";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Main />
      <SmContactInfo />
      <AboutUs />
      <TestimonialCarousel />
      <Doctors />
      <ContactUs />
    </div>
  );
}
