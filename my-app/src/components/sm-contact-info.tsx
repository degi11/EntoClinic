import { Clock, Phone, Shield } from "lucide-react";

export default function SmContactInfo() {
  return (
    <section className="bg-teal-600 text-white py-4 mb-[80px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="flex">
            <Clock className="w-5 h-5 mr-2" />
            <span>Same-Day Results Available</span>
          </div>
          <div className="flex ">
            <Phone className="w-5 h-5 mr-2" />
            <span>Call: (+976) 72009898</span>
          </div>
          <div className="flex ">
            <Shield className="w-5 h-5 mr-2" />
            <span>HIPAA Compliant & Secure</span>
          </div>
        </div>
      </div>
    </section>
  );
}
