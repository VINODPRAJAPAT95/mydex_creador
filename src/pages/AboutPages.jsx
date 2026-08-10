import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import PageHero from "../components/ui/PageHero";
import SectionTitle from "../components/ui/SectionTitle";
import CountUp from "../components/CountUp";
import { journey } from "../data/siteData";

// ─── LOCAL IMAGE IMPORTS ───────────────────────────────────────────────────────
// Replace these paths with your actual asset locations
import whoWeAreImg from "../assets/images/who-we-are.jpg";       // facility / product shot
import missionBgImg from "../assets/images/mission-bg.jpg";       // optional, not used in layout below
// ──────────────────────────────────────────────────────────────────────────────

const missionVisionItems = [
  {
    key: "mission",
    title: "Mission",
    text: "Our mission is to bring the true taste and authentic quality of Indian dry fruits, spices and masala products to international buyers, the same way we have proudly served customers across India and around the world for seventy years. Every almond, every spice, every masala blend that leaves our Unjha facility is graded, checked and packed to a standard we would trust for our own family — because trust, once earned, is what has carried this company across three generations and across borders. We do not just export products; we export a promise of consistency, honesty and reliability — the same promise that has built lasting loyalty with partners across international markets, shipment after shipment.",
    accentText: "text-[#E0334F]",
    circles: ["bg-[#F4C6CE]/70", "bg-[#F9DEE2]/70", "bg-[#F4C6CE]/50"],
    icon: (
      <svg
        viewBox="0 0 100 100"
        className="h-16 w-16 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
      >
        <circle cx="42" cy="58" r="28" />
        <circle cx="42" cy="58" r="17" />
        <circle cx="42" cy="58" r="6" fill="#E0334F" stroke="none" />
        <path d="M58 42 L84 16" strokeLinecap="round" />
        <path d="M84 16 L70 18 M84 16 L82 30" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: "vision",
    title: "Vision",
    text: "Our vision is for Mydex International to become a trusted global name in Indian dry fruits, spices and masala exports — known not for being the biggest, but for being the most reliable. We want international buyers to associate our name with authentic sourcing, pure spice quality, and the kind of dependability that comes only from seventy years of doing this the right way.",
    accentText: "text-[#1C7ED6]",
    circles: ["bg-[#BFE0F7]/70", "bg-[#D9EDFB]/70", "bg-[#BFE0F7]/50"],
    icon: (
      <svg
        viewBox="0 0 100 60"
        className="h-14 w-20 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
      >
        <path d="M4 30C18 8 38 0 50 0s32 8 46 30c-14 22-34 30-46 30S18 52 4 30Z" strokeLinejoin="round" />
        <circle cx="50" cy="30" r="14" stroke="#1C7ED6" />
        <circle cx="50" cy="30" r="6" fill="#1C7ED6" stroke="none" />
      </svg>
    ),
  },
];

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

// ─── OVERVIEW ─────────────────────────────────────────────────────────────────

export const Overview = () => (
  <>
    <PageHero
      title="Company Overview"
      subtitle="A premium global trade partner for dry fruits, spices and agro commodities."
      image="https://images.unsplash.com/photo-1578574577315-52ac877e8a2d?auto=format&fit=crop&w=1400&q=80"
    />

    {/* ── WHO WE ARE ── */}
    <section className="section-pad relative">
      <div className="container-lux relative z-10">
        <SectionTitle
          eyebrow="Who We Are"
          title="Global Vision. Trusted Partnership. Timeless Quality."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
          }}
          className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.2fr] items-start"
        >
          {/* LEFT — image with badge */}
          <motion.div variants={scaleIn} className="relative mx-auto w-full max-w-md">
            {/* Gold offset frame */}
            <div className="pointer-events-none absolute -bottom-5 -left-5 h-full w-full border-2 border-mydex-gold" />

            <img
              src={whoWeAreImg}
              alt="Mydex International — Unjha facility"
              className="relative w-full rounded-2xl object-cover shadow-premium"
              style={{ minHeight: 420 }}
            />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="absolute -bottom-6 left-1/2 z-10 flex h-24 w-24 -translate-x-1/2 flex-col items-center justify-center rounded-full border border-mydex-gold bg-mydex-green text-center text-[10px] uppercase tracking-widest text-mydex-gold shadow-gold leading-snug"
            >
              Est.<br />1956<br />Unjha
            </motion.div>
          </motion.div>

          {/* RIGHT — text content */}
          <motion.div variants={fadeRight} className="space-y-6 pt-2 lg:pt-4">

            {/* Paragraph 1 */}
            <p className="text-gray-600 leading-relaxed">
              Mydex International is a{" "}
              <span className="font-semibold text-mydex-green">70-year-old company</span> — founded
              in 1956 in Unjha, Gujarat, one of India's oldest and most trusted spice trading hubs
              — and still family-run today. What started as a small dry fruits, spices and masala
              trading business has stood through three generations, changing markets and changing
              times, without ever changing the one thing that built it:{" "}
              <span className="italic text-mydex-green">our word.</span>
            </p>

            {/* Pull quote */}
            <blockquote className="border-l-4 border-mydex-gold pl-5 py-1">
              <p className="text-sm text-gray-500 leading-relaxed">
                For seven decades, we haven't chased quick sales. We've built loyalty — the kind
                where customers return year after year, not because they have to, but because they
                know exactly what they're getting: honest grading, real quality, and a business
                that treats every order like it matters. That's not old-fashioned thinking. It's
                the same standard modern international buyers are looking for — they just call it
                reliability.
              </p>
            </blockquote>

            {/* Paragraph 2 */}
            <p className="text-gray-600 leading-relaxed">
              We are an established, time-tested name — not a company learning as we go.{" "}
              <span className="font-semibold text-mydex-green">
                Modern in how we work, traditional in how we treat people.
              </span>{" "}
              Every partnership, whether it has run for decades or is just beginning, receives the
              same transparency, fair dealing and respect. At Mydex International, every handshake
              turns into a family relation. The company is led today by{" "}
              <span className="font-semibold text-mydex-green">Mr. Dushyant Patel, CEO.</span>
            </p>

            {/* Paragraph 3 */}
            <p className="text-gray-600 leading-relaxed">
              All sourcing, grading, processing and manufacturing take place at our own facility in
              Unjha, Gujarat — the heart of our operations since 1956. Owning our own facility
              means we control every stage ourselves, with nothing outsourced and nothing left to
              chance. To support our growing international trade, Mydex International also maintains
              a dedicated office in Hyderabad, established in 1990, which coordinates export
              documentation, buyer communication and logistics.
            </p>

            {/* Location cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-1">
              {[
                {
                  label: "Unjha, Gujarat — Est. 1956",
                  desc: "Our heartland — sourcing, grading, processing and packing, fully in-house. Nothing outsourced, nothing left to chance.",
                },
                {
                  label: "Hyderabad Office — Est. 1990",
                  desc: "Dedicated export documentation, buyer communication and international logistics coordination.",
                },
              ].map((loc) => (
                <div
                  key={loc.label}
                  className="rounded-lg border border-mydex-gold/30 bg-white p-4 shadow-sm"
                >
                  <p className="text-xs font-semibold tracking-wider text-mydex-green uppercase mb-1">
                    {loc.label}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">{loc.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* ── MISSION & VISION ── */}
    <section className="section-pad relative overflow-hidden bg-white">
      <div className="container-lux relative z-10">
        <SectionTitle
          eyebrow="Mission & Vision"
          title="What Drives Every Shipment We Send"
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.25, delayChildren: 0.15 } },
          }}
          className="mt-14 grid gap-16 sm:grid-cols-2 md:gap-10"
        >
          {missionVisionItems.map((item) => (
            <motion.div
              key={item.key}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="relative"
            >
              <span className={`pointer-events-none absolute -left-10 -top-8 h-40 w-40 rounded-full ${item.circles[0]}`} />
              <span className={`pointer-events-none absolute -left-4 top-20 h-24 w-24 rounded-full ${item.circles[1]}`} />
              <span className={`pointer-events-none absolute left-28 top-0 h-16 w-16 rounded-full ${item.circles[2]}`} />

              <div className="relative pl-2 pt-4">
                <div className="flex h-20 items-end">{item.icon}</div>
                <h3 className={`mt-6 font-serif text-2xl font-extrabold uppercase tracking-wide ${item.accentText}`}>
                  {item.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-500">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <Button to="/get-quote" variant="green">
            Request Partnership Quote
          </Button>
        </motion.div>
      </div>
    </section>
  </>
);

// ─── JOURNEY ──────────────────────────────────────────────────────────────────

export const Journey = () => (
  <>
    <PageHero title="Our Journey" subtitle="Two decades of building trust across continents." />
    <section className="section-pad">
      <div className="container-lux space-y-6">
        {journey.map((item, i) => (
          <div
            key={item.year}
            className={`grid items-center gap-6 md:grid-cols-12 ${i % 2 ? "md:text-right" : ""}`}
          >
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

// ─── CERTIFICATIONS ───────────────────────────────────────────────────────────

export const CertificationsPage = () => (
  <>
    <PageHero
      title="Certifications & Quality"
      subtitle="Compliance frameworks that protect buyers and brands."
    />
    <section className="section-pad">
      <div className="container-lux grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {["ISO", "HACCP", "FSSAI", "HALAL", "Organic", "Laboratory", "Quality Control"].map(
          (name) => (
            <div key={name} className="card-lux">
              <h3 className="font-serif text-2xl text-mydex-gold">{name}</h3>
              <p className="mt-3 text-sm text-gray-600">
                Documented processes, audited systems and batch-level controls for export confidence.
              </p>
            </div>
          )
        )}
      </div>
    </section>
  </>
);

// ─── GLOBAL NETWORK ───────────────────────────────────────────────────────────

export const GlobalNetwork = () => (
  <>
    <PageHero
      title="Global Network"
      subtitle="Serving buyers across 30+ countries with reliable trade lanes."
    />
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
            <Button to="/contact" variant="gold">
              Connect With Our Trade Desk
            </Button>
          </div>
        </div>
      </div>
    </section>
  </>
);