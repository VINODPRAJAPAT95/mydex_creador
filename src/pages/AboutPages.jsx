import Button from "../components/ui/Button";
import PageHero from "../components/ui/PageHero";
import SectionTitle from "../components/ui/SectionTitle";
import CountUp from "../components/CountUp";
import { journey } from "../data/siteData";

export const Overview = () => (
  <>
    <PageHero
      title="Company Overview"
      subtitle="A premium global trade partner for dry fruits, spices and agro commodities."
      image="https://images.unsplash.com/photo-1578574577315-52ac877e8a2d?auto=format&fit=crop&w=1400&q=80"
    />
    <section className="section-pad">
      <div className="container-lux grid gap-10 md:grid-cols-2">
        <div>
          <SectionTitle center={false} eyebrow="Who We Are" title="Global Vision. Trusted Partnership. Timeless Quality." />
          <p className="text-gray-600">
            Mydex International operates with Fortune-500 discipline — combining ethical sourcing,
            laboratory-backed quality systems and dependable international logistics.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              "GLOBAL PRESENCE",
              "ETHICAL PRACTICES",
              "PREMIUM QUALITY",
              "CUSTOMER COMMITMENT",
            ].map((item) => (
              <div key={item} className="rounded-lg border border-mydex-gold/30 bg-white p-4 text-xs font-semibold tracking-wider text-mydex-green">
                {item}
              </div>
            ))}
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=1000&q=80"
          alt="Premium products"
          className="h-full min-h-[360px] rounded-2xl object-cover shadow-premium"
        />
      </div>
    </section>
    <section className="section-pad bg-mydex-beige">
      <div className="container-lux grid gap-8 md:grid-cols-3">
        {[
          { t: "Mission", d: "Deliver premium agro commodities with integrity and precision." },
          { t: "Vision", d: "Become a preferred global partner for luxury-grade agricultural trade." },
          { t: "Core Values", d: "Quality first, transparency, reliability and long-term partnerships." },
        ].map((x) => (
          <div key={x.t} className="card-lux">
            <h3 className="font-serif text-2xl text-mydex-gold">{x.t}</h3>
            <p className="mt-3 text-sm text-gray-600">{x.d}</p>
          </div>
        ))}
      </div>
      <div className="container-lux mt-12 text-center">
        <Button to="/get-quote" variant="green">Request Partnership Quote</Button>
      </div>
    </section>
  </>
);

export const Journey = () => (
  <>
    <PageHero title="Our Journey" subtitle="Two decades of building trust across continents." />
    <section className="section-pad">
      <div className="container-lux space-y-6">
        {journey.map((item, i) => (
          <div key={item.year} className={`grid items-center gap-6 md:grid-cols-12 ${i % 2 ? "md:text-right" : ""}`}>
            <div className={`md:col-span-2 ${i % 2 ? "md:order-2" : ""}`}>
              <p className="font-serif text-4xl text-mydex-gold">{item.year}</p>
            </div>
            <div className={`card-lux md:col-span-10 ${i % 2 ? "md:order-1" : ""}`}>
              <h3 className="font-serif text-2xl text-mydex-green">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export const CertificationsPage = () => (
  <>
    <PageHero title="Certifications & Quality" subtitle="Compliance frameworks that protect buyers and brands." />
    <section className="section-pad">
      <div className="container-lux grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {["ISO", "HACCP", "FSSAI", "HALAL", "Organic", "Laboratory", "Quality Control"].map((name) => (
          <div key={name} className="card-lux">
            <h3 className="font-serif text-2xl text-mydex-gold">{name}</h3>
            <p className="mt-3 text-sm text-gray-600">
              Documented processes, audited systems and batch-level controls for export confidence.
            </p>
          </div>
        ))}
      </div>
    </section>
  </>
);

export const GlobalNetwork = () => (
  <>
    <PageHero title="Global Network" subtitle="Serving buyers across 30+ countries with reliable trade lanes." />
    <section className="section-pad">
      <div className="container-lux">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { n: 30, s: "+", l: "Countries Served" },
            { n: 1000, s: "+", l: "Happy Clients" },
            { n: 500, s: "+", l: "Products Exported" },
            { n: 20, s: "+", l: "Years Experience" },
          ].map((x) => (
            <div key={x.l} className="rounded-xl bg-mydex-green p-6 text-center text-white">
              <p className="font-serif text-4xl text-mydex-gold">
                <CountUp end={x.n} suffix={x.s} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-wider text-white/70">{x.l}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border border-mydex-gold/30 bg-white p-8 text-center shadow-premium">
          <h3 className="font-serif text-3xl text-mydex-green">World Map Presence</h3>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Middle East · Europe · North America · Southeast Asia · Africa · Australia
          </p>
          <div className="mt-8">
            <Button to="/contact" variant="gold">Connect With Our Trade Desk</Button>
          </div>
        </div>
      </div>
    </section>
  </>
);
