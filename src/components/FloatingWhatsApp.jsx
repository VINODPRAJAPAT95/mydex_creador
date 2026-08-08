import { FaWhatsapp } from "react-icons/fa";
import { company } from "../data/siteData";

const FloatingWhatsApp = () => (
  <a
    href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
      "Hello Mydex International, I would like to inquire about your products."
    )}`}
    target="_blank"
    rel="noreferrer"
    className="fixed bottom-6 right-6 z-50 rounded-full bg-[#25D366] p-4 text-white shadow-lg transition hover:scale-105"
    aria-label="WhatsApp"
  >
    <FaWhatsapp size={24} />
  </a>
);

export default FloatingWhatsApp;
