import Button from "../components/ui/Button";
import PageHero from "../components/ui/PageHero";
import SectionTitle from "../components/ui/SectionTitle";
import { services } from "../data/siteData";

const Services = () => (
  <>
    <PageHero
      title="Comprehensive Export Solutions"
      subtitle="End-to-end sourcing, quality, packaging, documentation and logistics."
    />
    <section className="section-pad">
      <div className="container-lux">
        <SectionTitle eyebrow="Services" title="Built for International Buyers" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article key={s.title} className="card-lux">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-mydex-gold">{s.title}</h3>
              <p className="mt-3 text-sm text-gray-600">{s.desc}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 rounded-2xl bg-mydex-green px-8 py-10 text-center text-white">
          <h3 className="font-serif text-3xl">Need a Custom Supply Chain Plan?</h3>
          <p className="mt-2 text-white/70">Tell us your destination, volume and product mix.</p>
          <div className="mt-6 flex justify-center">
            <Button to="/get-quote" variant="gold">Request a Custom Quote</Button>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Services;
