import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQAccordion = ({ items }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={item.q} className="rounded-lg border border-mydex-gold/25 bg-white">
          <button
            className="flex w-full items-center justify-between px-5 py-4 text-left font-medium text-mydex-green"
            onClick={() => setActive(active === i ? -1 : i)}
          >
            {item.q}
            <FaChevronDown className={`transition ${active === i ? "rotate-180" : ""}`} />
          </button>
          {active === i && <p className="border-t border-mydex-beige px-5 py-4 text-sm text-gray-600">{item.a}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
