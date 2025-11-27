import { AboutUs } from "@/components/about-us";
import ContactUs from "@/components/contact-us";
import Doctors from "@/components/doctors";
import Main from "@/components/main";
import AutoCarousel from "@/components/place-carousel";
import Services from "@/components/services";
import SmContactInfo from "@/components/sm-info";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Main />
      <AutoCarousel/>
      <SmContactInfo />
      <AboutUs />
      <Services />
      <Doctors />
      <ContactUs />
    </div>
  );
}
