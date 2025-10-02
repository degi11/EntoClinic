import { AboutUs } from "@/components/about-us";
import ContactUs from "@/components/contact-us";
import Doctors from "@/components/doctors";
import Main from "@/components/main";
import Services from "@/components/services";
import SmContactInfo from "@/components/sm-contact-info";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Main />
      <SmContactInfo />
      <AboutUs />
      <Services />
      <Doctors />
      <ContactUs />
    </div>
  );
}
