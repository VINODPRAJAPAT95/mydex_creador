import Button from "../components/ui/Button";
import PageHero from "../components/ui/PageHero";
import { productCategories } from "../data/siteData";

const GetQuote = () => (
  <>
    <PageHero
      title="Request a Custom Quote"
      subtitle="Share product, quantity and destination — our trade team will respond promptly."
    />
    <section className="section-pad">
      <form
        className="container-lux max-w-3xl card-lux space-y-4"
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
