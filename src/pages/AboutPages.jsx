import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import SectionTitle from "../components/ui/SectionTitle";
import CountUp from "../components/CountUp";

import whoWeAreImg from "../assets/images/who-we-are.png";
import missionBgImg from "../assets/images/mission-bg.jpg";
import overviewHeroImg from "../assets/images/about/overview-hero.png";

const missionVisionItems = [
  {
    key: "mission",
    title: "Mission",
    text: "Our mission is to bring the true taste and authentic quality of Indian dry fruits, spices and masala products to international buyers, the same way we have proudly served customers across India and around the world for seventy years. Every almond, every spice, every masala blend that leaves our Unjha facility is graded, checked and packed to a standard we would trust for our own family — because trust, once earned, is what has carried this company across three generations and across borders. We do not just export products; we export a promise of consistency, honesty and reliability — the same promise that has built lasting loyalty with partners across international markets, shipment after shipment.",
    accentText: "text-[#E0334F]",
    accentBg: "bg-[#E0334F]",
    circles: ["bg-[#F4C6CE]/70", "bg-[#F9DEE2]/70", "bg-[#F4C6CE]/50"],
    icon: (
      <svg viewBox="0 0 100 100" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="2.2">
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
    accentBg: "bg-[#1C7ED6]",
    circles: ["bg-[#BFE0F7]/70", "bg-[#D9EDFB]/70", "bg-[#BFE0F7]/50"],
    icon: (
      <svg viewBox="0 0 100 60" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="2.2">
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
      className={`pointer-events-none absolute inset-0 z-0 ${resolvedTone === "light" ? "opacity-[0.08]" : "opacity-[0.05]"} ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cg fill='none' stroke='${stroke}' stroke-width='1.3'%3E%3Ccircle cx='70' cy='70' r='5'/%3E%3Cpath d='M70 70 C70 48 54 38 70 20 C86 38 70 48 70 70Z'/%3E%3Cpath d='M70 70 C92 70 102 54 120 70 C102 86 92 70 70 70Z'/%3E%3Cpath d='M70 70 C70 92 86 102 70 120 C54 102 70 92 70 70Z'/%3E%3Cpath d='M70 70 C48 70 38 86 20 70 C38 54 48 70 70 70Z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "140px 140px",
      }}
    />
  );
};

const AboutHero = ({ eyebrow, title, subtitle, image }) => (
  <section className="relative isolate overflow-hidden min-h-[420px] flex items-center">
    <img src={image} alt={title} className="absolute inset-0 -z-20 h-full w-full object-cover" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-mydex-green/70 via-mydex-green/40 to-mydex-green/10" />
    <div className="container-lux relative px-4 py-16 md:px-8 md:py-24">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } } }}
        className="max-w-2xl"
      >
        {eyebrow && (
          <motion.p variants={fadeLeft} className="eyebrow mb-3 text-mydex-gold drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)]">
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          variants={fadeLeft}
          className="font-serif text-4xl font-semibold leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] md:text-5xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p variants={fadeLeft} className="mt-4 max-w-xl text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </div>
    <div className="absolute inset-x-0 -bottom-px z-10 leading-[0] text-mydex-beige">
      <svg className="h-16 w-full sm:h-24 md:h-32" viewBox="0 0 1440 160" preserveAspectRatio="none">
        <path d="M0,70 C240,30 360,120 600,90 C840,60 960,10 1200,50 C1320,70 1380,85 1440,70 L1440,160 L0,160 Z" fill="currentColor" />
        <path d="M0,55 C240,15 360,105 600,75 C840,45 960,-5 1200,35 C1320,55 1380,70 1440,55" fill="none" stroke="currentColor" strokeOpacity="0.55" strokeWidth="2" />
        <path d="M20,95 C260,60 380,135 610,108" fill="none" stroke="#123B29" strokeOpacity="0.35" strokeWidth="1.5" />
        <path d="M900,72 C1080,40 1220,95 1420,68" fill="none" stroke="#123B29" strokeOpacity="0.35" strokeWidth="1.5" />
      </svg>
    </div>
  </section>
);

/* ─── WHO WE ARE — FLIP-OPEN IMAGE ───────────────────────────────────────────
   🆕 UPDATED: Image ab hover par ek book-cover ki tarah khulta hai (left edge
   se hinge karke), neeche ek "Who We Are" gold/green info panel reveal hota
   hai. Fully responsive — height same breakpoints follow karti hai jaise
   pehle thi (280 → 340 → 400 → 440px), taaki "Est. 1956" badge aur stats
   row bilkul waise hi align rahein jaise pehle the. Mobile par hinge angle
   thoda kam kiya hai (-100deg) taaki flap viewport se bahar na nikle, aur
   keyboard users ke liye :focus-within bhi handle kiya hai. */
const WhoWeAreImage = () => (
  <div className="relative mx-auto w-full max-w-md">
    <div className="who-flip-outer">
      <div className="who-flip-card">
        {/* front — the photo, hinges open on hover like a door/book cover */}
        <div className="who-flip-img">
          <img src={whoWeAreImg} alt="Mydex International — who we are" />
        </div>

        {/* back — revealed underneath as the image swings open */}
        <div className="who-flip-back">
          <svg viewBox="0 0 200 200" className="who-flip-back-pattern" aria-hidden="true">
            {Array.from({ length: 100 }).map((_, i) => {
              const cols = 10;
              const x = (i % cols) * 20 + 10;
              const y = Math.floor(i / cols) * 20 + 10;
              const seed = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
              return seed - Math.floor(seed) > 0.5
                ? <circle key={i} cx={x} cy={y} r="1.3" fill="#C89B3C" />
                : null;
            })}
          </svg>

          <div className="who-flip-back-inner">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-mydex-gold mb-2">
              Since 1956
            </p>
            <h3 className="font-serif text-2xl text-white mb-3">Who We Are</h3>
            <p className="text-xs leading-relaxed text-white/75">
              Three generations of trust — sourced, graded and packed at our
              own facility in Unjha, Gujarat.
            </p>
          </div>
        </div>
      </div>
    </div>

    <style>{`
      .who-flip-outer {
        position: relative;
        width: 100%;
        height: 280px;
        perspective: 1800px;
      }
      @media (min-width: 640px)  { .who-flip-outer { height: 340px; } }
      @media (min-width: 768px)  { .who-flip-outer { height: 400px; } }
      @media (min-width: 1024px) { .who-flip-outer { height: 440px; } }

      .who-flip-card {
        position: relative;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transform: perspective(1800px);
        transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        border-radius: 16px;
        box-shadow: 0 20px 45px -15px rgba(18, 59, 41, 0.35);
      }
      .who-flip-outer:hover .who-flip-card,
      .who-flip-outer:focus-within .who-flip-card {
        transform: perspective(1800px) rotate(-4deg);
        z-index: 25;
      }

      .who-flip-img {
        position: absolute;
        inset: 0;
        border-radius: 16px;
        overflow: hidden;
        border: 3px solid rgba(200, 155, 60, 0.35);
        transform-origin: left center;
        transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        z-index: 2;
        box-shadow: inset -40px 0 40px rgba(0, 0, 0, 0.25);
      }
      .who-flip-img img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .who-flip-outer:hover .who-flip-img,
      .who-flip-outer:focus-within .who-flip-img {
        transform: rotateY(-130deg);
      }

      .who-flip-back {
        position: absolute;
        inset: 0;
        z-index: 1;
        border-radius: 16px;
        overflow: hidden;
        background: linear-gradient(135deg, #123B29 0%, #1a4a30 55%, #0E2E20 100%);
        border: 1px solid rgba(200, 155, 60, 0.35);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.75rem;
      }
      .who-flip-back-pattern {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        opacity: 0.25;
      }
      .who-flip-back-inner {
        position: relative;
        text-align: center;
        opacity: 0;
        transform: translateY(14px);
        transition: opacity 0.5s ease 0.3s, transform 0.5s ease 0.3s;
      }
      .who-flip-outer:hover .who-flip-back-inner,
      .who-flip-outer:focus-within .who-flip-back-inner {
        opacity: 1;
        transform: translateY(0);
      }

      @media (max-width: 640px) {
        .who-flip-outer:hover .who-flip-img,
        .who-flip-outer:focus-within .who-flip-img {
          transform: rotateY(-100deg);
        }
      }
    `}</style>
  </div>
);

const Who3DPanel = () => {
  const bg = { backgroundImage: `url(${whoWeAreImg})` };
  return (
    <div className="who3d">
      <div className="who3d-block">
        <div className="who3d-side who3d-main" style={{ ...bg, backgroundPosition: "4% 50%", backgroundSize: "auto 130%" }} />
        <div className="who3d-side who3d-left" style={{ ...bg, backgroundPosition: "0 50%", backgroundSize: "auto 130%" }} />
      </div>
      <div className="who3d-block">
        <div className="who3d-side who3d-main" style={{ ...bg, backgroundPosition: "50% 0" }} />
        <div className="who3d-side who3d-left" style={{ ...bg, backgroundPosition: "28.5% 0" }} />
      </div>
      <div className="who3d-block">
        <div className="who3d-side who3d-main" style={{ ...bg, backgroundPosition: "96% 50%", backgroundSize: "auto 130%" }} />
        <div className="who3d-side who3d-left" style={{ ...bg, backgroundPosition: "78% 50%", backgroundSize: "auto 130%" }} />
      </div>
      <style>{`
        .who3d { position: relative; width: 100%; padding-top: 72%; margin: 0 auto; }
        .who3d-block { position: absolute; height: 100%; width: 30%; perspective: 1000px; }
        .who3d-block:nth-of-type(1) { height: 80%; top: 10%; left: 17%; width: 15%; }
        .who3d-block:nth-of-type(2) { top: 0; left: 35%; }
        .who3d-block:nth-of-type(3) { height: 80%; top: 10%; left: 64%; width: 15%; }
        .who3d-side { position: absolute; top: 0; left: 0; background-size: auto 100%; background-repeat: no-repeat; box-shadow: -1vw 0.5vw 1vw rgba(0,0,0,0.3); }
        .who3d-main { height: 100%; width: 100%; transform: rotateY(30deg); transform-origin: 0 50%; }
        .who3d-left { height: 100%; width: 20%; transform-origin: 0 50%; transform: rotateY(-60deg) translateX(-100%); filter: brightness(40%); }
      `}</style>
    </div>
  );
};

/* ─── WHO WE ARE — STAT TAGS ROW ─────────────────────────────────────────────
   🆕 NEW: teen tags ("70+ Years", "3 Generations", "30+ Countries") ab ek
   single row me dikhte hain, image ke neeche. `flex-nowrap` use kiya hai
   taaki wrap na ho, aur mobile par thoda gap/padding kam kiya hai taaki
   sab teen ek hi line me fit ho jaayein. Har tag apni jagah par ek chhota
   fade+rise animation ke saath scroll-in par aata hai (staggered). */
const statTags = ["70+ Years", "3 Generations", "30+ Countries"];

const WhoWeAreStatsRow = () => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.6 }}
    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
    className="mt-8 flex flex-nowrap items-center justify-center gap-2 sm:gap-4"
  >
    {statTags.map((tag) => (
      <motion.span
        key={tag}
        variants={{
          hidden: { opacity: 0, y: 12 },
          show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
        }}
        className="whitespace-nowrap rounded-full border border-mydex-gold/40 bg-mydex-cream px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-mydex-green shadow-sm sm:px-4 sm:text-xs"
      >
        {tag}
      </motion.span>
    ))}
  </motion.div>
);

/* ─── MISSION VISION CARD ─────────────────────────────────────────────────── */
const MissionVisionCard = ({ item }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    }}
    className="mission-wrap"
  >
    {/* ── Overlay (slides away on hover) ── */}
    <div className="mission-overlay">
      {/* Left accent strip */}
      <div className="mission-overlay-content">
        <div className="mission-icon">{item.icon}</div>
        <div className="mission-dots">
          <span className="mission-dot" />
          <span className="mission-dot" />
          <span className="mission-dot" />
        </div>
      </div>

      {/* Right decorative panel */}
      <div className="mission-image-content">
        <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full opacity-20">
          {Array.from({ length: 200 }).map((_, i) => {
            const cols = 20;
            const x = (i % cols) * 15 + 8;
            const y = Math.floor(i / cols) * 15 + 8;
            const seed = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
            return seed - Math.floor(seed) > 0.45
              ? <circle key={i} cx={x} cy={y} r="1.4" fill="#C89B3C" />
              : null;
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6">
          <span className="font-serif text-8xl font-bold text-white/10 select-none leading-none">
            {item.title.charAt(0)}
          </span>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-mydex-gold/60">
            {item.title}
          </p>
        </div>
      </div>
    </div>

    {/* ── Text panel (revealed on hover) ── */}
    <div className="mission-text">
      <div className="mission-text-inner">
        <p className={`text-[10px] font-semibold uppercase tracking-[0.3em] mb-3 ${item.accentText}`}>
          Our {item.title}
        </p>
        <h3 className={`font-serif text-2xl font-bold mb-4 ${item.accentText}`}>
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-600">{item.text}</p>
      </div>
      <div className={`mt-6 h-1 w-12 rounded-full ${item.accentBg}`} />
    </div>

    <style>{`
      .mission-wrap {
        position: relative;
        width: 100%;
        height: 360px;
        border: 2px solid #C89B3C33;
        border-radius: 16px;
        overflow: hidden;
        transition: box-shadow 0.35s ease, border-color 0.35s ease;
        cursor: pointer;
      }
      .mission-wrap:hover {
        box-shadow: 0 24px 48px -12px rgba(18,59,41,0.22);
        border-color: #C89B3C66;
      }

      /* ── Overlay ── */
      .mission-overlay {
        position: absolute;
        inset: 0;
        display: flex;
        width: 100%;
        height: 100%;
        background: #123B29;
        border-radius: 14px;
        transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        z-index: 2;
      }
      .mission-wrap:hover .mission-overlay {
        transform: translateX(-100%);
      }

      /* Left accent strip */
      .mission-overlay-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 68px;
        flex-shrink: 0;
        height: 100%;
        padding: 1.25rem 0 1.25rem 1rem;
        border-right: 2px solid transparent;
        border-image: linear-gradient(to bottom, #C89B3C 5%, #1a4a30 40% 60%, #C89B3C 95%) 0 100% 0 0;
        transition: transform 0.35s ease 0.1s;
      }
      .mission-wrap:hover .mission-overlay-content {
        transform: translateX(220%);
      }

      /* Icon */
      .mission-icon {
        color: #C89B3C;
        width: 38px;
        height: 38px;
        animation: missionPop 0.7s cubic-bezier(0.26,0.53,0.74,1.48) 0.4s both;
      }
      @keyframes missionPop {
        0%   { opacity: 0; transform: scale(0.5); }
        100% { opacity: 1; transform: scale(1); }
      }

      /* Dots */
      .mission-dots {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .mission-dot {
        width: 8px;
        height: 8px;
        background: #C89B3C;
        border-radius: 50%;
        transition: background 0.3s ease 0.25s;
      }
      .mission-dot:nth-child(1) { animation: missionSlideUp 0.7s ease 0.6s both; }
      .mission-dot:nth-child(2) { animation: missionSlideUp 0.7s ease 0.85s both; }
      .mission-dot:nth-child(3) { animation: missionSlideUp 0.7s ease 1.1s both; }
      @keyframes missionSlideUp {
        0%   { opacity: 0; transform: translateY(14px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .mission-wrap:hover .mission-dot { background: #fff; }

      /* Right decorative panel */
      .mission-image-content {
        position: relative;
        flex: 1;
        height: 100%;
        background: linear-gradient(135deg, #0E2E20 0%, #1a4a30 50%, #123B29 100%);
        overflow: hidden;
      }

      /* ── Text panel ── */
      .mission-text {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 2rem;
        background: #ffffff;
        box-shadow: inset 2px 2px 20px 0 rgba(0,0,0,0.06);
        border-radius: 14px;
        overflow-y: auto;
        z-index: 1;
      }

      /* Text inner slides in on hover */
      .mission-text-inner {
        transition: none;
      }
      .mission-wrap:hover .mission-text-inner {
        animation: missionSlideIn 0.5s cubic-bezier(0.26,0.53,0.74,1.48) 0.25s both;
      }
      @keyframes missionSlideIn {
        0%   { opacity: 0; transform: translateX(28px); }
        100% { opacity: 1; transform: translateX(0); }
      }

      /* accent bar at bottom also animates */
      .mission-wrap:hover .mission-text > div:last-child {
        animation: missionSlideIn 0.5s cubic-bezier(0.26,0.53,0.74,1.48) 0.4s both;
      }
    `}</style>
  </motion.div>
);

/* ─── OVERVIEW ────────────────────────────────────────────────────────────── */
export const Overview = () => (
  <>
    <AboutHero
      eyebrow="About Mydex International"
      title="Company Overview"
      subtitle="A premium global trade partner for dry fruits, spices and agro commodities."
      image={overviewHeroImg}
    />

    {/* WHO WE ARE */}
    <section className="section-pad relative overflow-hidden bg-mydex-beige">
      <FlowerWatermark />
      <div className="container-lux relative z-10">
        <SectionTitle eyebrow="Who We Are" title="Global Vision. Trusted Partnership. Timeless Quality." />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } } }}
          className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.2fr] items-start"
        >
          <motion.div variants={scaleIn} className="relative mx-auto w-full max-w-md">
            <WhoWeAreImage />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="absolute -bottom-2 left-1/2 z-30 flex h-24 w-24 -translate-x-1/2 flex-col items-center justify-center rounded-full border border-mydex-gold bg-mydex-green text-center text-[10px] uppercase tracking-widest text-mydex-gold shadow-gold leading-snug"
            >
              Est.<br />1956<br />Unjha
            </motion.div>

            {/* 🆕 Teeno stat tags ab ek row me, image ke neeche */}
            <WhoWeAreStatsRow />
          </motion.div>

          <motion.div variants={fadeRight} className="space-y-6 pt-2 lg:pt-4">
          <p className="text-gray-600 leading-relaxed">
  Mydex International is a{" "}
  <span className="font-semibold text-mydex-green">
    third-generation family business
  </span>{" "}
  established in 2012. Built on generations of experience in the dry fruits,
  spices, and masala trade, we bring together traditional knowledge with a
  modern approach to sourcing, quality, and international trade. Since 2012,
  our commitment has remained the same:{" "}
  <span className="italic text-mydex-green">quality, trust, and our word.</span>
</p>
            <blockquote className="border-l-4 border-mydex-gold pl-5 py-1">
              <p className="text-sm text-gray-500 leading-relaxed">
                For seven decades, we haven't chased quick sales. We've built loyalty the kind
                where customers return year after year, not because they have to, but because they
                know exactly what they're getting: honest grading, real quality, and a business
                that treats every order like it matters. That's not old-fashioned thinking. It's
                the same standard modern international buyers are looking for — they just call it
                reliability.
              </p>
            </blockquote>
            <p className="text-gray-600 leading-relaxed">
              We are an established, time-tested name — not a company learning as we go.{" "}
              <span className="font-semibold text-mydex-green">
                Modern in how we work, traditional in how we treat people.
              </span>{" "}
              Every partnership, whether it has run for decades or is just beginning, receives the
              same transparency, fair dealing and respect. At Mydex International, every handshake
              turns into a family relation. The company is led today by{" "}
              <span className="font-semibold text-mydex-green">Three Brothers Dushyant Patel, Mikin Patel and Yax Patel</span>
            </p>
            <p className="text-gray-600 leading-relaxed">
              All sourcing, grading, processing and manufacturing take place at our own facility in
              Unjha, Gujarat — the heart of our operations since 1956. Owning our own facility
              means we control every stage ourselves, with nothing outsourced and nothing left to
              chance. To support our growing international trade, Mydex International also maintains
              a dedicated office in Hyderabad, established in 1990, which coordinates export
              documentation, buyer communication and logistics.
            </p>
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
 {
  label: "Global Import & Export — Since 2012",
  desc: "Building on our legacy from Unjha (1956) and Hyderabad (1990), we began our dedicated import and export operations in 2012, connecting premium Indian products with markets worldwide through trusted sourcing, seamless documentation, and reliable international logistics.",
},
              ].map((loc) => (
                <div key={loc.label} className="rounded-lg border border-mydex-gold/30 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold tracking-wider text-mydex-green uppercase mb-1">{loc.label}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{loc.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* MISSION & VISION */}
    <section className="section-pad relative overflow-hidden bg-mydex-beige">
      <FlowerWatermark />
      <div className="container-lux relative z-10">
        <SectionTitle eyebrow="Mission & Vision" title="What Drives Every Shipment We Send" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.25, delayChildren: 0.15 } } }}
          className="mt-14 grid gap-8 sm:grid-cols-2"
        >
          {missionVisionItems.map((item) => (
            <MissionVisionCard key={item.key} item={item} />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="mt-5 text-center text-[11px] uppercase tracking-widest text-gray-400"
        >
          Hover on each card to reveal
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Button to="/get-quote" variant="green">Request Partnership Quote</Button>
        </motion.div>
      </div>
    </section>
  </>
);

/* ─── JOURNEY ─────────────────────────────────────────────────────────────── */
const generations = [
  {
    id: "01", year: "1956", place: "Unjha, Gujarat", gen: "First Generation", title: "The Foundation",
    text: "Our founder established the business in the Unjha APMC market — one of India's most iconic spice trading hubs — focused entirely on spice manufacturing and production. Built on honest trade and consistent quality, it quickly became one of the most reputed names in the market.",
    tags: ["Spice manufacturing", "Unjha APMC market"], accent: "gold",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M28 50c0 14 9.8 26 22 26s22-12 22-26" strokeLinecap="round" />
        <path d="M20 50h60" strokeLinecap="round" />
        <path d="M62 22 40 66" strokeLinecap="round" />
        <path d="M62 22c4 0 8 2.5 8 7s-4 7-8 7" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="36" cy="40" r="2.4" fill="currentColor" stroke="none" />
        <circle cx="46" cy="34" r="2.4" fill="currentColor" stroke="none" />
        <circle cx="54" cy="42" r="2.4" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: "02", year: "1990", place: "Begum Bazar, Hyderabad", gen: "Second Generation", title: "Expanding the Trade",
    text: "The second generation carried the legacy into Hyderabad's Begum Bazar, one of India's largest wholesale markets, growing the range from spices into dry fruits and operating as both wholesaler and retailer — earning the same reputation for reliability in a new market.",
    tags: ["Spices & dry fruits", "Wholesale + retail"], accent: "blue",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M18 40 26 18h48l8 22" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 40h64v6c0 3-3 5-6 5s-6-2-6-5c0 3-3 5-6 5s-6-2-6-5c0 3-3 5-6 5s-6-2-6-5c0 3-3 5-6 5s-6-2-6-5c0 3-3 5-6 5s-6-2-6-5v-6Z" strokeLinejoin="round" />
        <path d="M24 51v31h52V51" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42 82V64h16v18" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "03", year: "2012", place: "International Markets", gen: "Third Generation", title: "Going Global",
    text: "The third generation took the family business worldwide — expanding into dry fruits, healthy seeds, oil seeds, salt and more, importing from origin countries and exporting spices to buyers across the globe, all while holding to the same standard the business was built on in 1956.",
    tags: ["Import & export", "30+ countries"], accent: "green",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.2">
        <circle cx="50" cy="50" r="32" />
        <ellipse cx="50" cy="50" rx="13" ry="32" />
        <path d="M18 50h64" strokeLinecap="round" />
        <path d="M23 32c6 5 15 8 27 8s21-3 27-8" strokeLinecap="round" />
        <path d="M23 68c6-5 15-8 27-8s21 3 27 8" strokeLinecap="round" />
      </svg>
    ),
  },
];

const accentMap = {
  gold:  { text: "text-mydex-gold",    dot: "bg-mydex-gold border-mydex-gold",       ring: "bg-mydex-gold/15",    badge: "border-mydex-gold/40 text-mydex-gold bg-mydex-gold/5",       line: "from-mydex-gold" },
  blue:  { text: "text-[#1C7ED6]",     dot: "bg-[#1C7ED6] border-[#1C7ED6]",        ring: "bg-[#1C7ED6]/12",     badge: "border-[#1C7ED6]/40 text-[#1C7ED6] bg-[#1C7ED6]/5",          line: "from-[#1C7ED6]" },
  green: { text: "text-mydex-green",   dot: "bg-mydex-green border-mydex-green",     ring: "bg-mydex-green/12",   badge: "border-mydex-green/40 text-mydex-green bg-mydex-green/5",     line: "from-mydex-green" },
};

const JourneyCard = ({ item, flip }) => {
  const a = accentMap[item.accent];
  return (
    <motion.div
      variants={flip ? fadeLeft : fadeRight}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="card-lux relative overflow-hidden"
    >
      <span className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full ${a.ring}`} />
      <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${a.badge}`}>
        {item.gen}
      </div>
      <div className="mt-4 flex items-start gap-4">
        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-50 p-3 ${a.text}`}>
          {item.icon}
        </div>
        <div>
          <p className={`font-serif text-3xl font-bold leading-none ${a.text}`}>{item.year}</p>
          <p className="mt-1 text-xs uppercase tracking-widest text-gray-400">{item.place}</p>
        </div>
      </div>
      <h3 className="mt-5 font-serif text-2xl text-mydex-green">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.text}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.tags.map((t) => (
          <span key={t} className="rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-medium text-gray-500">{t}</span>
        ))}
      </div>
    </motion.div>
  );
};

export const Journey = () => (
  <>
    <AboutHero
      eyebrow="Since 1956"
      title="Our Journey"
      subtitle="Three generations, one family — from a single spice unit in Unjha to a trusted trade partner across the globe."
      image={overviewHeroImg}
    />
    <section className="section-pad relative overflow-hidden bg-mydex-beige">
      <FlowerWatermark />
      <div className="container-lux relative z-10">
        <SectionTitle eyebrow="Since 1956" title="Three Generations. One Standard of Trust." />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="mt-10 grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto text-center"
        >
          {[
            { n: "70", s: "+", l: "Years of Legacy" },
            { n: "3",  s: "",  l: "Generations" },
            { n: "30", s: "+", l: "Countries Served" },
          ].map((x) => (
            <div key={x.l} className="rounded-xl border border-mydex-gold/25 bg-white/60 py-4 shadow-sm">
              <p className="font-serif text-3xl text-mydex-green">
                <CountUp end={Number(x.n)} suffix={x.s} />
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-gray-400">{x.l}</p>
            </div>
          ))}
        </motion.div>

        <div className="relative mt-16">
          <motion.div
            initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-mydex-gold via-[#1C7ED6] to-mydex-green"
          />
          <motion.div
            initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
            className="md:hidden absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-mydex-gold via-[#1C7ED6] to-mydex-green"
          />
          <motion.div
            initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.25 } } }}
            className="space-y-14 md:space-y-24"
          >
            {generations.map((item, i) => {
              const a = accentMap[item.accent];
              const flip = i % 2 === 1;
              return (
                <div key={item.id} className="relative pl-14 md:pl-0">
                  <motion.span
                    initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.45, delay: 0.1, type: "spring", stiffness: 260, damping: 18 }}
                    className={`md:hidden absolute left-5 top-2 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white shadow ${a.dot}`}
                  />
                  <div className="grid md:grid-cols-2 md:gap-x-16 items-center">
                    <div className={flip ? "md:col-start-2" : ""}>
                      <JourneyCard item={item} flip={flip} />
                    </div>
                    <motion.div
                      initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.5, delay: 0.15, type: "spring", stiffness: 260, damping: 18 }}
                      className={`hidden md:flex absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-mydex-green shadow-premium ${a.text}`}
                    >
                      <span className="font-serif text-lg font-bold text-mydex-gold">{item.id}</span>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="mx-auto max-w-xl text-sm text-gray-500">
            From a single spice unit in Unjha's APMC market to a global trading house — the standard has never changed, only the scale.
          </p>
          <div className="mt-6">
            <Button to="/global-network" variant="gold">See Our Global Network</Button>
          </div>
        </motion.div>
      </div>
    </section>
  </>
);

/* ─── CERTIFICATIONS ──────────────────────────────────────────────────────── */
export const CertificationsPage = () => (
  <>
    <AboutHero
      eyebrow="Trust & Compliance"
      title="Certifications & Quality"
      subtitle="Compliance frameworks that protect buyers and brands."
      image={overviewHeroImg}
    />
    <section className="section-pad relative overflow-hidden bg-mydex-beige">
      <FlowerWatermark />
      <div className="container-lux relative z-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

/* ─── GLOBAL NETWORK ──────────────────────────────────────────────────────── */
export const GlobalNetwork = () => (
  <>
    <AboutHero
      eyebrow="Worldwide Presence"
      title="Global Network"
      subtitle="Serving buyers across 30+ countries with reliable trade lanes."
      image={overviewHeroImg}
    />
    <section className="section-pad relative overflow-hidden bg-mydex-beige">
      <FlowerWatermark />
      <div className="container-lux relative z-10">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { n: 30,   s: "+", l: "Countries Served" },
            { n: 1000, s: "+", l: "Happy Clients" },
            { n: 500,  s: "+", l: "Products Exported" },
            { n: 20,   s: "+", l: "Years Experience" },
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