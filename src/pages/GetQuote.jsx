import Button from "../components/ui/Button";
import PageHero from "../components/ui/PageHero";
import { productCategories } from "../data/siteData";

/* Subtle repeating watermark used on plain-color sections. Sits at z-0
  behind a section's content, which should be wrapped in a
  `relative z-10` container. Same component used across Gallery,
  BlogPages, ProductPages, AboutPages — kept local here to match that
  existing pattern. */
const FlowerWatermark = ({ tone, motif = "flower", className = "" }) => {
  if (motif === "kaju") {
    const resolvedTone = tone || "black";
    const stroke = resolvedTone === "light" ? "%23F5E6C8" : "%23231F1F";
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-0 opacity-[0.045] ${className}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='170' height='170' viewBox='0 0 170 170'%3E%3Cg fill='none' stroke='${stroke}' stroke-width='1.4'%3E%3Cpath d='M40 55 C20 58 16 80 28 96 C40 112 62 108 65 90 C68 74 62 58 48 54 C45 53 42 54 40 55Z'/%3E%3Cpath d='M46 58 C55 62 60 70 60 80'/%3E%3Cg transform='translate(110,115)'%3E%3Ccircle cx='0' cy='0' r='4'/%3E%3Cpath d='M0 0 C0 -14 -12 -20 0 -32 C12 -20 0 -14 0 0Z'/%3E%3Cpath d='M0 0 C14 0 20 -12 32 0 C20 12 14 0 0 0Z'/%3E%3Cpath d='M0 0 C0 14 12 20 0 32 C-12 20 0 14 0 0Z'/%3E%3Cpath d='M0 0 C-14 0 -20 12 -32 0 C-20 -12 -14 0 0 0Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "170px 170px",
        }}
      />
    );
  }

  const resolvedTone = tone || "gold";
  const stroke = resolvedTone === "light" ? "%23F5E6C8" : "%23C9A227";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 ${
        resolvedTone === "light" ? "opacity-[0.08]" : "opacity-[0.05]"
      } ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cg fill='none' stroke='${stroke}' stroke-width='1.3'%3E%3Ccircle cx='70' cy='70' r='5'/%3E%3Cpath d='M70 70 C70 48 54 38 70 20 C86 38 70 48 70 70Z'/%3E%3Cpath d='M70 70 C92 70 102 54 120 70 C102 86 92 70 70 70Z'/%3E%3Cpath d='M70 70 C70 92 86 102 70 120 C54 102 70 92 70 70Z'/%3E%3Cpath d='M70 70 C48 70 38 86 20 70 C38 54 48 70 70 70Z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "140px 140px",
      }}
    />
  );
};

const GetQuote = () => (
  <>
    <PageHero
      title="Request a Custom Quote"
      subtitle="Share product, quantity and destination — our trade team will respond promptly."
    />

    {/* 🔧 FIX: pehle yeh section plain background par tha (koi bg-mydex-beige,
        blur accents, ya watermark nahi tha) — jabki Gallery, Blog, About
        jaise baaki sabhi pages isi treatment ko use karte hain. Ab yahan
        bhi same pattern hai: bg-mydex-beige + do soft blur accents +
        FlowerWatermark, aur form ko `relative z-10` wrapper me daala hai
        taaki watermark/blur ke upar sahi se dikhe. */}
    <section className="section-pad relative overflow-hidden bg-mydex-beige">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-mydex-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-mydex-green/10 blur-3xl" />
      <FlowerWatermark motif="kaju" />

      <form
        className="container-lux relative z-10 max-w-3xl card-lux space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Quote request submitted successfully.");
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <input required placeholder="Full Name" className="rounded border border-mydex-beige px-3 py-3 text-sm outline-none focus:border-mydex-gold" />
          <input required type="email" placeholder="Business Email" className="rounded border border-mydex-beige px-3 py-3 text-sm outline-none focus:border-mydex-gold" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <input placeholder="Company" className="rounded border border-mydex-beige px-3 py-3 text-sm outline-none focus:border-mydex-gold" />
          <input placeholder="Phone / WhatsApp" className="rounded border border-mydex-beige px-3 py-3 text-sm outline-none focus:border-mydex-gold" />
        </div>
        <select required className="w-full rounded border border-mydex-beige px-3 py-3 text-sm outline-none focus:border-mydex-gold">
          <option value="">Select Product Category</option>
          {productCategories.map((c) => (
            <option key={c.slug} value={c.slug}>{c.name}</option>
          ))}
        </select>
        <div className="grid gap-4 sm:grid-cols-2">
          <input placeholder="Quantity / MOQ interest" className="rounded border border-mydex-beige px-3 py-3 text-sm outline-none focus:border-mydex-gold" />
          <input placeholder="Destination Country" className="rounded border border-mydex-beige px-3 py-3 text-sm outline-none focus:border-mydex-gold" />
        </div>
        <textarea required rows={5} placeholder="Product specs / packaging / additional notes" className="w-full rounded border border-mydex-beige px-3 py-3 text-sm outline-none focus:border-mydex-gold" />
        <Button type="submit" variant="gold">Submit Quote Request</Button>
      </form>
    </section>
  </>
);

export default GetQuote;