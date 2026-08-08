import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CountUp from "../components/CountUp";
import FAQAccordion from "../components/FAQAccordion";
import Button from "../components/ui/Button";
import SectionTitle from "../components/ui/SectionTitle";
import {
  blogs,
  faqs,
  productCategories,
  testimonials,
} from "../data/siteData";

/* Local hero background image — replace the path/filename with your actual asset */
import heroBg from "../assets/images/hero-dryfruits.png";
import logisticsImage from "../assets/images/logistics.png";
/* Local background image for the Global Trade section — replace the
   path/filename with your actual asset */
import globalTradeBg from "../assets/images/global-trade.png";
/* Local background image for the Get In Touch (CTA) section.
   TEMP fallback: reusing globalTradeBg's asset so the build compiles.
   Replace with your real photo at src/assets/images/get-in-touch.png
   and change the path below once that file exists. */
import ctaBg from "../assets/images/global-trade.png";
/* Local portrait image for the Why Choose Us section.
   TEMP fallback: reusing logisticsImage's asset so the build compiles.
   Replace with your real portrait at
   src/assets/images/why-choose-us-portrait.png and change the path
   below once that file exists. */
import whyChooseUsPortrait from "../assets/images/logistics.png";
/* Local transparent PNG for the testimonials split section — replace
   with your actual asset */
import testimonialsArt from "../assets/images/testimonials-art.png";

/* Local certification / authority logo PNGs for the auto-scrolling
   certifications strip — replace each with your actual logo asset.
   Transparent PNGs work best since the cards sit on a white background. */
import fdaLogo from "../assets/images/certifications/fda.png";
import fieoLogo from "../assets/images/certifications/fieo.png";
import spicesBoardLogo from "../assets/images/certifications/spices-board.png";
import isoLogo from "../assets/images/certifications/iso.png";
import makeInIndiaLogo from "../assets/images/certifications/make-in-india.png";
import fssaiLogo from "../assets/images/certifications/fssai.png";
import apedaLogo from "../assets/images/certifications/apeda.png";

/* Entrance animation: parent staggers its children in one after another.
   Each child type gets its own subtle motion so the reveal feels
   deliberate — eyebrow first, then heading, then paragraph, then buttons. */
const heroContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/* Kept as an alias so other sections below (About preview, etc.)
   that already reference heroItem continue to work unchanged. */
const heroItem = fadeUp;

/* "What We Stand For" — stagger container + per-card rise-and-settle motion,
   with a slight scale pop so the cards feel like they're "arriving" rather
   than simply fading in. */
const standForContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const standForCard = {
  hidden: { opacity: 0, y: 50, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const whatWeStandFor = [
  {
    title: "Purity & Authenticity",
    text: "Real spices, real masala, real dry fruits — no adulteration, no shortcuts.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 6c8 6 14 12 14 20a14 14 0 1 1-28 0c0-8 6-14 14-20Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 18v14M24 18c-3 0-5 2-5 4M24 18c3 0 5 2 5 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Consistent Grading",
    text: "The quality you receive in your first order is the same you will receive in your fiftieth.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 32V16M24 32V10M38 32V22" strokeLinecap="round" />
        <path d="M6 38h36" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Freshness in Every Shipment",
    text: "Packed to protect aroma, texture and shelf life across long journeys.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="18" width="32" height="22" rx="2" strokeLinejoin="round" />
        <path d="M8 24h32M18 18v-4a6 6 0 0 1 12 0v4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Family-First Trade",
    text: "Every buyer is a relationship, not a transaction.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="17" cy="16" r="5" />
        <circle cx="31" cy="16" r="5" />
        <path d="M6 38c0-7 5-12 11-12s11 5 11 12M20 38c0-7 5-12 11-12s11 5 11 12" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Heritage Sourcing & Manufacturing",
    text: "Seventy years of sourcing, grading and manufacturing at our own facility in Unjha, Gujarat.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 40V20l16-10 16 10v20" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 40V28h12v12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "International Trust & Loyalty",
    text: "Seventy years of consistent dealings have earned us the loyalty of buyers and partners across generations and across borders.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="16" />
        <path d="M8 24h32M24 8c4 4.5 6 10 6 16s-2 11.5-6 16c-4-4.5-6-10-6-16s2-11.5 6-16Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

/* Why Choose Us — six reasons rendered as a 2-column icon grid next to a
   portrait image. Icon boxes use the site's green/gold palette with an
   offset gold frame behind each icon, echoing the accent-square motif
   used elsewhere on the page. */
const whyChooseReasons = [
  {
    title: "70 Years in Dry Fruits & Spices",
    text: "Seventy years of experience — sourcing, grading and exporting to international markets everywhere.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="24" cy="24" r="17" />
        <path d="M24 14v10l7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Trusted Company",
    text: "Every batch checked before it leaves our own facility in Unjha, Gujarat.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M24 6 L40 12 V22 C40 33 33 40 24 43 C15 40 8 33 8 22 V12 Z" strokeLinejoin="round" />
        <path d="M16 24l5 5 11-11" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Authentic Sourcing",
    text: "Real spices and dry fruits, sourced and manufactured the same honest way since 1956.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M10 38C10 20 24 8 40 8c0 16-12 30-30 30Z" strokeLinejoin="round" />
        <path d="M12 36C20 28 28 20 38 10" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Freshness-First Packaging",
    text: "Built to protect quality across long shipments.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="8" y="18" width="32" height="22" rx="2" strokeLinejoin="round" />
        <path d="M8 24h32M18 18v-4a6 6 0 0 1 12 0v4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Transparent Documentation",
    text: "Certifications and compliance handled properly, every time, supported by our Hyderabad office.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 6h14l8 8v28a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
        <path d="M28 6v8h8" strokeLinejoin="round" />
        <path d="M17 26h14M17 32h14M17 20h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Personal, Family-Style Service",
    text: "Direct conversations, not automated sales.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path
          d="M12 8c2 0 4.5 0 6.5 4.5s-.5 6.5-2.5 8.5c2.5 6 6.5 10 12.5 12.5 2-2 4-4.5 8.5-2.5s4.5 4.5 4.5 6.5c0 4-4 6.5-8.5 6.5-15 0-27.5-12.5-27.5-27.5C6 12 8.5 8 12 8Z"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];
const ourServices = [
  {
    step: "01",
    title: "Own Sourcing & Manufacturing Facility",
    text: "All sourcing, grading, processing and packing take place at our own facility in Unjha, Gujarat, giving us complete, in-house control from raw material to export-ready pack.",
  },
  {
    step: "02",
    title: "Dedicated Hyderabad Office",
    text: "Established in 1990, our Hyderabad office manages export coordination, buyer communication and documentation support.",
  },
  {
    step: "03",
    title: "Dry Fruits Supply",
    text: "Almonds, cashews, raisins, walnuts and more, graded for both retail and bulk export.",
  },
  {
    step: "04",
    title: "Spice Trading",
    text: "Whole and ground spices — turmeric, chilli, coriander, cumin and other staples — sourced for consistent quality.",
  },
  {
    step: "05",
    title: "Masala & Blended Products",
    text: "Traditional masala blends prepared and packed to export standard.",
  },
  {
    step: "06",
    title: "Export-Grade Packaging",
    text: "Moisture-proof, freight-ready packaging that preserves aroma and freshness.",
  },
  {
    step: "07",
    title: "Documentation & Compliance Support",
    text: "Export paperwork, licences and quality certificates handled with full transparency.",
  },
  {
    step: "08",
    title: "Custom RFQ Handling",
    text: "Every buyer's quantity, grade and packaging requirement discussed and confirmed directly.",
  },
];

const servicesContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.15 },
  },
};

const serviceStep = {
  hidden: { opacity: 0, y: 45 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/* Certification / authority logos for the auto-scrolling strip. List is
   duplicated once when rendered so the marquee loop is seamless. */
const certificationLogos = [
  { name: "FSSAI", src: fssaiLogo },
  { name: "ISO", src: isoLogo },
  { name: "APEDA", src: apedaLogo },
  { name: "Spices Board India", src: spicesBoardLogo },
  { name: "FIEO", src: fieoLogo },
  { name: "FDA", src: fdaLogo },
  { name: "Make in India", src: makeInIndiaLogo },
];

/* Top 20 countries we trade with, for the auto-scrolling marquee strip
   at the bottom of the Global Trade section. List duplicated once when
   rendered so the loop is seamless. */
const tradeCountries = [
  "UAE", "USA", "United Kingdom", "Germany", "Netherlands",
  "Saudi Arabia", "China", "Japan", "Singapore", "Australia",
  "Canada", "South Africa", "Egypt", "Turkey", "Malaysia",
  "Indonesia", "Bangladesh", "Sri Lanka", "Vietnam", "France",
];

/* Small inline Google "G" mark, built from the four brand-color arcs —
   used to badge each review card as a Google-style review. */
const GoogleMark = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.5 29.6 4.5 24 4.5 12.7 4.5 3.5 13.7 3.5 25S12.7 45.5 24 45.5 44.5 36.3 44.5 25c0-1.6-.2-3.1-.9-4.5z" />
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 18.9 12.5 24 12.5c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.5 29.6 4.5 24 4.5c-8 0-14.8 4.6-17.7 10.2z" />
    <path fill="#4CAF50" d="M24 45.5c5.5 0 10.4-1.8 14.1-4.9l-6.5-5.3C29.6 37 26.9 38 24 38c-5.3 0-9.7-3.1-11.3-7.5l-6.6 5.1C9.1 40.9 15.9 45.5 24 45.5z" />
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.9 2.4-2.5 4.4-4.6 5.8l6.5 5.3C40.9 36.6 44.5 31.4 44.5 25c0-1.6-.2-3.1-.9-4.5z" />
  </svg>
);

/* Five-star row for the Google-review-style cards */
const StarRow = () => (
  <div className="flex gap-0.5 text-mydex-gold">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
        <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6L10 1.5Z" />
      </svg>
    ))}
  </div>
);

/* Subtle repeating watermark used on plain-color sections. Sits at z-0
   behind a section's content, which should be wrapped in a
   `relative z-10` container.

   motif="flower" (default) — a simple 6-petal flower.
     tone="gold"  (default) suits the cream/beige sections.
     tone="light" uses a pale cream stroke so it stays visible — but
       still subtle — on dark green panels.

   motif="kaju" — a cashew (kaju) nut paired with a small flower, for a
   dry-fruits-themed accent.
     tone="black" (default for this motif) gives a soft charcoal imprint
       on the cream sections. */
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

/* Testimonials list enriched with initials for the avatar circle —
   sourced from siteData, ratings default to 5 stars. */
const reviewCards = testimonials.map((t) => ({
  ...t,
  initial: t.name.trim().charAt(0).toUpperCase(),
}));

/* Builds a "slide in, pause, slide in, pause..." keyframe sequence for a
   horizontal auto-scrolling track. The track holds the review list
   duplicated once (for a seamless loop), and this function returns the
   x keyframes + times + total duration needed to step through the
   ORIGINAL list one card at a time, holding on each card for `hold`
   seconds and taking `move` seconds to slide to the next one. Because
   the track's second half is an exact duplicate of the first, stopping
   at -50% looks identical to 0%, so the loop restarts with no visible
   jump. */
const buildStepScroll = (cardCount, hold = 1.6, move = 0.7) => {
  const stepPercent = 50 / cardCount; // total shift to reveal the full list once = -50%
  const x = [];
  const times = [];
  const totalDuration = cardCount * (hold + move);

  for (let i = 0; i < cardCount; i++) {
    const valueNow = `-${(i * stepPercent).toFixed(4)}%`;
    const tStart = (i * (hold + move)) / totalDuration;
    const tHoldEnd = (i * (hold + move) + hold) / totalDuration;
    x.push(valueNow, valueNow);
    times.push(tStart, tHoldEnd);
  }
  // Final resting point after the last move — visually identical to 0%
  x.push(`-${(cardCount * stepPercent).toFixed(4)}%`);
  times.push(1);

  return { x, times, duration: totalDuration };
};

const Home = () => {
  const stepScroll = buildStepScroll(reviewCards.length, 1.6, 0.7);

  return (
  <>
    {/* Hero — image background, height trimmed down */}
    <section className="relative isolate overflow-hidden">
      {/* HD background image — local import instead of remote URL */}
      <img
        src={heroBg}
        alt="Premium dry fruits and spices"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      {/* Gradient overlay so white text stays readable over the image */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-mydex-green/50 via-mydex-green/25 to-transparent" />

      <div className="container-lux relative px-4 py-14 md:px-8 md:py-20">
        <motion.div
          initial="hidden"
          animate="show"
          variants={heroContainer}
          className="max-w-2xl"
        >
          <motion.p variants={slideFromLeft} className="eyebrow mb-4 text-black">
            Premium Quality. Global Reach.
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-serif text-4xl font-semibold leading-tight text-white md:text-6xl"
          >
            Global Importer &amp; Exporter of Dry Fruits &amp; Spices
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 max-w-xl text-white/85">
            Mydex International delivers export-grade agro commodities with Fortune-500 level
            reliability, documentation excellence and end-to-end supply chain care.
          </motion.p>

          <motion.div variants={scaleIn} className="mt-8 flex flex-wrap gap-4">
            <Button to="/products/dry-fruits" variant="gold">
              Explore Products
            </Button>
            <Button to="/services" variant="outline">
              <span className="text-white">Our Services</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Gold circular badge, floating accent on the background image.
          Delay pushed out so it lands after the text sequence finishes. */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
        className="absolute bottom-8 right-6 hidden h-28 w-28 flex-col items-center justify-center rounded-full border border-mydex-gold bg-mydex-green/90 text-center text-[10px] uppercase tracking-widest text-mydex-gold shadow-gold backdrop-blur-sm md:right-10 md:flex lg:h-32 lg:w-32"
      >
        Exporting
        <br />
        Excellence
        <br />
        Worldwide
      </motion.div>

      {/* Wavy bottom border with thin decorative accent lines,
          matching the reference: a smooth curve topped by a couple of
          slim squiggle strokes, transitioning into the cream section. */}
      <div className="absolute inset-x-0 -bottom-px z-10 leading-[0] text-mydex-beige">
        <svg
          className="h-16 w-full sm:h-24 md:h-32"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
        >
          <path
            d="M0,70 C240,30 360,120 600,90 C840,60 960,10 1200,50 C1320,70 1380,85 1440,70 L1440,160 L0,160 Z"
            fill="currentColor"
          />
          <path
            d="M0,55 C240,15 360,105 600,75 C840,45 960,-5 1200,35 C1320,55 1380,70 1440,55"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.55"
            strokeWidth="2"
          />
          <path
            d="M20,95 C260,60 380,135 610,108"
            fill="none"
            stroke="#123B29"
            strokeOpacity="0.35"
            strokeWidth="1.5"
          />
          <path
            d="M900,72 C1080,40 1220,95 1420,68"
            fill="none"
            stroke="#123B29"
            strokeOpacity="0.35"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </section>

    {/* About preview — plain background, unified to bg-mydex-beige + flower watermark, padding trimmed */}
    <section className="relative overflow-hidden bg-mydex-beige section-pad !py-10 md:!py-14">
      <FlowerWatermark />
      <div className="container-lux relative z-10 grid items-center gap-10 md:grid-cols-2">
        <motion.img
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          src={logisticsImage}
          alt="Global logistics"
          className="h-80 w-full object-cover"
          loading="lazy"
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
          }}
        >
          <motion.p variants={heroItem} className="eyebrow mb-3">
            About Mydex International
          </motion.p>
          <motion.h2 variants={heroItem} className="font-serif text-4xl text-mydex-green">
            Quality You Can Trust, Service You Can Rely On
          </motion.h2>
          <motion.p variants={heroItem} className="mt-4 text-gray-600">
            Founded in 1956 in Unjha, Gujarat, Mydex International is a 70-year-old, family-run company built on trust, quality, and three generations of expertise in the dry fruits, spices, and masala trade.
          </motion.p>
          <motion.div variants={heroItem} className="mt-6 grid grid-cols-3 gap-4">
            {[
              { n: 70, s: "+", l: "Years" },
              { n: 1000, s: "+", l: "Clients" },
              { n: 30, s: "+", l: "Countries" },
            ].map((stat) => (
              <div key={stat.l} className="border border-mydex-gold/30 bg-white/60 p-4 text-center">
                <p className="font-serif text-3xl text-mydex-gold">
                  <CountUp end={stat.n} suffix={stat.s} />
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">{stat.l}</p>
              </div>
            ))}
          </motion.div>
          <motion.div variants={heroItem} className="mt-8">
            <Button to="/about/overview" variant="gold">
              Know More About Us
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* What We Stand For — plain background, unified to bg-mydex-beige + flower watermark, padding trimmed */}
    <section className="section-pad !py-10 md:!py-14 relative overflow-hidden bg-mydex-beige">
      {/* Faint decorative watermark, purely aesthetic */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-mydex-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-mydex-green/10 blur-3xl" />
      <FlowerWatermark />

      <div className="container-lux relative z-10">
        <SectionTitle eyebrow="What We Stand For" title="The Principles Behind Every Shipment" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={standForContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whatWeStandFor.map((item) => (
            <motion.div
              key={item.title}
              variants={standForCard}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group relative overflow-hidden border border-mydex-gold/20 bg-white p-7 shadow-premium transition-shadow duration-300 hover:shadow-gold"
            >
              {/* Gold accent bar that grows in on hover */}
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-mydex-gold transition-transform duration-300 group-hover:scale-x-100" />

              <div className="flex h-14 w-14 items-center justify-center bg-mydex-green/5 text-mydex-gold transition-colors duration-300 group-hover:bg-mydex-green group-hover:text-mydex-gold">
                {item.icon}
              </div>

              <h3 className="mt-5 font-serif text-lg font-bold leading-snug text-mydex-green sm:text-xl md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Services — step-by-step reveal, unified to bg-mydex-beige + flower watermark, padding trimmed */}
    <section className="section-pad !py-10 md:!py-14 relative overflow-hidden bg-mydex-beige">
      {/* Soft watermark accents */}
      <div className="pointer-events-none absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-mydex-gold/5 blur-3xl" />
      <FlowerWatermark />

      <div className="container-lux relative z-10">
        <SectionTitle
          eyebrow="Our Services"
          title="End-to-End Export Solutions, Step by Step"
          titleClassName="font-extrabold"
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={servicesContainer}
          className="relative mt-4 grid gap-6 md:grid-cols-2"
        >
          {/* Vertical connecting line, desktop only — reinforces the "steps" feel */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-mydex-gold/0 via-mydex-gold/40 to-mydex-gold/0 md:block" />

          {ourServices.map((item) => (
            <motion.div
              key={item.step}
              variants={serviceStep}
              whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group relative flex gap-5 border border-mydex-gold/20 bg-white p-6 shadow-premium transition-shadow duration-300 hover:shadow-gold"
            >
              {/* Step number badge — bold, high-contrast circle so the
                  step count reads clearly at a glance */}
              <div className="flex-shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-mydex-gold bg-mydex-green font-serif text-lg font-extrabold tracking-wide text-mydex-gold shadow-gold transition-all duration-300 group-hover:scale-105 group-hover:bg-mydex-gold group-hover:text-mydex-green">
                  {item.step}
                </div>
              </div>

              <div>
                <h3 className="font-serif text-lg font-bold text-mydex-green md:text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.text}</p>
              </div>

              {/* Gold corner accent on hover */}
              <span className="absolute right-0 top-0 h-10 w-10 origin-top-right scale-0 bg-mydex-gold/10 transition-transform duration-300 group-hover:scale-100" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 text-center"
        >
          <Button to="/services" variant="green">
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Product categories — flip card on hover, plain background unified to bg-mydex-beige + black kaju/flower watermark, padding trimmed */}
    <section className="relative overflow-hidden section-pad !py-10 md:!py-14 bg-mydex-beige">
      <FlowerWatermark motif="kaju" />
      <div className="container-lux relative z-10">
        <SectionTitle eyebrow="Our Product Categories" title="Premium Commodities Portfolio" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={standForContainer}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {productCategories.map((cat) => (
            <motion.div key={cat.slug} variants={standForCard} className="h-full">
              <div className="flip-card">
                <Link to={`/products/${cat.slug}`} className="flip-card-inner">
                  {/* FRONT */}
                  <div className="flip-card-face flip-card-front">
                    <img src={cat.image} alt={cat.name} loading="lazy" />
                    <div className="flip-card-front-overlay">
                      <h3 className="font-serif text-2xl text-white">{cat.name}</h3>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="flip-card-face flip-card-back">
                    <h3 className="font-serif text-xl text-mydex-green">{cat.name}</h3>
                    <p className="mt-2 text-sm text-gray-700 line-clamp-4">{cat.description}</p>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-mydex-gold">
                      Explore →
                    </p>
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Global trade — HD image background, height trimmed down */}
    <section className="relative isolate overflow-hidden text-white">
      {/* HD background image — local import, shown full clarity, no color overlay */}
      <img
        src={globalTradeBg}
        alt="Global import and export network"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="container-lux relative px-4 py-14 md:px-8 md:py-18">
        <div className="max-w-xl">
          <p className="eyebrow mb-3 text-mydex-gold drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)]">
            Global Import & Export
          </p>
          <h2 className="font-serif text-4xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
            Bridging Continents with Trusted Trade
          </h2>
          <p className="mt-4 text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
            From Surat to destinations worldwide — coordinated logistics, compliant documentation and
            reliable delivery performance.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { n: 30, s: "+", l: "Countries" },
              { n: 500, s: "+", l: "Products" },
              { n: 99, s: "%", l: "On-Time" },
            ].map((x) => (
              <div key={x.l}>
                <p className="font-serif text-3xl text-mydex-gold drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                  <CountUp end={x.n} suffix={x.s} />
                </p>
                <p className="text-xs uppercase tracking-wider text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
                  {x.l}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button to="/about/global-network" variant="gold">
              Explore Global Trade
            </Button>
          </div>
        </div>
      </div>

      {/* Auto-scrolling marquee strip — top countries we trade with */}
      <div className="relative border-t border-mydex-gold/30 bg-mydex-green/90 py-4 backdrop-blur-sm">
        <div className="marquee-track">
          <motion.div
            className="marquee-group"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          >
            {[...tradeCountries, ...tradeCountries].map((country, i) => (
              <span
                key={`${country}-${i}`}
                className="mx-6 flex items-center gap-2 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.2em] text-mydex-gold"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-mydex-gold" />
                {country}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Local styles for the marquee: track clips overflow, group is
          double-width (two copies of the list) so the -50% loop is seamless. */}
      <style>{`
        .marquee-track {
          overflow: hidden;
          width: 100%;
        }
        .marquee-group {
          display: flex;
          width: max-content;
        }
      `}</style>
    </section>

    {/* Certifications — auto-scrolling strip of authority/certification logos.
        Plain background unified to bg-mydex-beige + flower watermark, padding trimmed.
        Logos enlarged and shown as transparent PNGs only — no white card
        background, border, or shadow behind each mark. */}
    <section className="relative overflow-hidden section-pad !py-10 md:!py-14 bg-mydex-beige">
      <FlowerWatermark />
      <div className="container-lux relative z-10">
        <SectionTitle eyebrow="Certifications" title="Standards That Build Confidence" />

        <div className="cert-marquee-mask relative mt-4 overflow-hidden">
          <div className="cert-marquee-track">
            {[...certificationLogos, ...certificationLogos].map((cert, i) => (
              <div
                key={`${cert.name}-${i}`}
                className="mx-4 flex h-32 w-52 flex-shrink-0 items-center justify-center transition-transform duration-300 hover:scale-105 sm:h-40 sm:w-64"
              >
                <img
                  src={cert.src}
                  alt={cert.name}
                  title={cert.name}
                  className="max-h-24 max-w-full object-contain drop-shadow-sm sm:max-h-32"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Fade masks left & right so logos scroll in/out softly rather
              than clipping abruptly at the edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-mydex-beige to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-mydex-beige to-transparent sm:w-24" />
        </div>
      </div>

      {/* Local styles for the certifications marquee: track is double-width
          (two copies of the logo list) animating from 0 to -50% on a
          continuous linear loop, pausing gently on hover. */}
      <style>{`
        .cert-marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: cert-marquee 26s linear infinite;
        }
        .cert-marquee-mask:hover .cert-marquee-track {
          animation-play-state: paused;
        }
        @keyframes cert-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>

    {/* Why choose us — split layout: portrait on the left, eyebrow + heading +
        description + a 2-column, 6-item icon grid of reasons on the right,
        matching the reference layout. Icon boxes carry an offset gold frame
        behind them (in place of the reference's pink), keeping the site's
        established green/gold palette. */}
    <section className="section-pad !py-12 md:!py-16 relative overflow-hidden bg-mydex-beige">
      <FlowerWatermark />
      <div className="container-lux relative z-10 grid items-start gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        {/* LEFT — portrait image with an offset gold frame behind it */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-sm lg:mx-0"
        >
          <div className="pointer-events-none absolute -bottom-5 -right-5 h-full w-full border-2 border-mydex-gold" />
          <img
            src={whyChooseUsPortrait}
            alt="Mydex International — trusted export partner"
            className="relative h-full w-full object-cover shadow-premium"
            loading="lazy"
          />
        </motion.div>

        {/* RIGHT — eyebrow, heading, description, reason grid */}
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-3"
          >
            Why Choose Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-3xl font-bold text-mydex-green md:text-4xl"
          >
            Reasons to Choose Mydex International
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-xl text-gray-600"
          >
            Three generations of sourcing, grading and exporting dry fruits, spices and masala —
            built on trust, transparency and family values.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
            }}
            className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2"
          >
            {whyChooseReasons.map((reason) => (
              <motion.div
                key={reason.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="flex gap-4"
              >
                {/* Icon box with an offset gold frame behind it */}
                <div className="relative flex-shrink-0">
                  <span className="absolute -bottom-2 -right-2 h-14 w-14 border-2 border-mydex-gold" />
                  <div className="relative flex h-14 w-14 items-center justify-center bg-mydex-green text-mydex-gold">
                    {reason.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-mydex-green md:text-lg">
                    {reason.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{reason.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

    {/* Testimonials — split layout: transparent art on the left,
    horizontal step-scroll Google-style review cards on the right.
    Cards slide in one at a time, hold for ~1.6s, then the next
    one slides in — not a continuous smooth scroll. Plain background
    unified to bg-mydex-beige + flower watermark, padding trimmed. */}
<section className="section-pad !py-10 md:!py-14 relative overflow-hidden bg-mydex-beige">
  <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-mydex-gold/10 blur-3xl" />
  <FlowerWatermark />

  <div className="container-lux relative z-10">
    <SectionTitle eyebrow="Testimonials" title="Trusted by Global Buyers" />

    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
      {/* LEFT — transparent PNG art */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative order-2 flex justify-center lg:order-1"
      >
        <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-mydex-green/5 blur-2xl" />
        <img
          src={testimonialsArt}
          alt="Happy buyers of Mydex International"
          className="w-full max-w-xs object-contain drop-shadow-xl lg:max-w-sm"
          loading="lazy"
        />
      </motion.div>

      {/* RIGHT — horizontal step-scroll review cards */}
      <div className="order-1 min-w-0 lg:order-2">
        {/* overflow-hidden container now has generous vertical + horizontal
            padding so the card's box-shadow has room to render fully
            instead of being clipped at the top/bottom/edges. Negative
            margin on the same amount cancels the padding's effect on
            outer layout spacing, so the section footprint doesn't shift. */}
        <div className="review-scroll-mask relative -mx-2 -my-6 overflow-hidden px-2 py-6">
          <motion.div
            className="review-scroll-track flex items-start gap-5"
            animate={{ x: stepScroll.x }}
            transition={{
              duration: stepScroll.duration,
              times: stepScroll.times,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            {[...reviewCards, ...reviewCards].map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="w-[260px] flex-shrink-0 rounded-xl border border-mydex-gold/20 bg-white p-5 shadow-premium sm:w-[300px] md:w-[320px]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {/* Avatar circle with initial */}
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-mydex-green font-serif text-lg text-mydex-gold">
                      {t.initial}
                    </div>
                    <div>
                      <p className="font-semibold text-mydex-green">{t.name}</p>
                      <p className="text-xs uppercase tracking-wider text-gray-500">{t.role}</p>
                    </div>
                  </div>
                  {/* Google mark badge */}
                  <GoogleMark className="h-5 w-5 flex-shrink-0" />
                </div>

                <div className="mt-3">
                  <StarRow />
                </div>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">"{t.quote}"</p>

                <p className="mt-4 text-[11px] font-medium uppercase tracking-wider text-gray-400">
                  Posted on Google
                </p>
              </div>
            ))}
          </motion.div>

          {/* Fade masks left & right — widened slightly and now sit
              inside the padded area so they still meet the section's
              background color cleanly at the true edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-mydex-beige to-transparent sm:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-mydex-beige to-transparent sm:w-20" />
        </div>
      </div>
    </div>
  </div>
</section>

    {/* Blogs — plain background unified to bg-mydex-beige + flower watermark, padding trimmed */}
    <section className="relative overflow-hidden section-pad !py-10 md:!py-14 bg-mydex-beige">
      <FlowerWatermark />
      <div className="container-lux relative z-10">
        <SectionTitle eyebrow="Latest Blogs" title="Insights from Global Trade" />
        <div className="grid gap-6 md:grid-cols-3">
          {blogs.map((b) => (
            <Link key={b.slug} to={`/blog/${b.slug}`} className="card-lux rounded-none overflow-hidden p-0 hover:shadow-gold">
              <img src={b.image} alt={b.title} className="h-44 w-full object-cover" loading="lazy" />
              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-mydex-gold">{b.category}</p>
                <h3 className="mt-2 font-serif text-xl text-mydex-green">{b.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{b.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* CTA / Get In Touch — image-background banner with wavy top/bottom
        borders, matching the reference image: local bg image, dark green
        gradient overlay, bold white heading, gold eyebrow, gold CTA button. */}
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative isolate overflow-hidden text-white"
    >
      {/* HD background image — local import, replace with your own asset */}
      <img
        src={ctaBg}
        alt="Get in touch with Mydex International"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      {/* Dark green gradient overlay so white text stays readable over the image */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-mydex-green/85 via-mydex-green/55 to-mydex-green/20" />

      {/* Wavy top border — mirrors the hero's bottom wave, flipped, so the
          section reads as a continuous ribbon between the cream sections. */}
      <div className="absolute inset-x-0 -top-px z-10 leading-[0] text-mydex-beige rotate-180">
        <svg
          className="h-14 w-full sm:h-20 md:h-28"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
        >
          <path
            d="M0,70 C240,30 360,120 600,90 C840,60 960,10 1200,50 C1320,70 1380,85 1440,70 L1440,160 L0,160 Z"
            fill="currentColor"
          />
          <path
            d="M0,55 C240,15 360,105 600,75 C840,45 960,-5 1200,35 C1320,55 1380,70 1440,55"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.55"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="container-lux relative z-10 flex flex-col items-center gap-8 px-4 py-16 text-center md:flex-row md:justify-between md:px-8 md:py-24 md:text-left">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-3 text-mydex-gold"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[2.75rem]"
          >
            Let&rsquo;s Build a Strong Global Partnership
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-white/80 md:text-base"
          >
            Ready to start your premium export journey with Mydex?
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <Button to="/get-quote" variant="gold" className="flex-shrink-0">
            Get In Touch
          </Button>
        </motion.div>
      </div>

      {/* Wavy bottom border, matching the hero exactly so the ribbon motif
          feels intentional and repeated across the page. */}
      <div className="absolute inset-x-0 -bottom-px z-10 leading-[0] text-mydex-beige">
        <svg
          className="h-14 w-full sm:h-20 md:h-28"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
        >
          <path
            d="M0,70 C240,30 360,120 600,90 C840,60 960,10 1200,50 C1320,70 1380,85 1440,70 L1440,160 L0,160 Z"
            fill="currentColor"
          />
          <path
            d="M0,55 C240,15 360,105 600,75 C840,45 960,-5 1200,35 C1320,55 1380,70 1440,55"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.55"
            strokeWidth="2"
          />
        </svg>
      </div>
    </motion.section>

    {/* FAQ preview — plain background unified to bg-mydex-beige + flower watermark, padding trimmed */}
    <section className="relative overflow-hidden section-pad !py-10 md:!py-14 bg-mydex-beige">
      <FlowerWatermark />
      <div className="container-lux relative z-10 max-w-4xl">
        <SectionTitle eyebrow="FAQs" title="Frequently Asked Questions" />
        <FAQAccordion items={faqs.slice(0, 4)} />
        <div className="mt-8 text-center">
          <Button to="/faqs" variant="outline">
            View All FAQs
          </Button>
        </div>
      </div>
    </section>
  </>
  );
};

export default Home;