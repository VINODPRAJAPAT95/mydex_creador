import { useState } from "react";
import { Link } from "react-router-dom";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ChevronDown,
  Handshake,
  Clock,
  MessageCircle,
} from "lucide-react";
import { company } from "../data/siteData";

import heroBg from "../assets/images/hero-contact.png";

const GREEN = "#123B29";
const GREEN_2 = "#0E2E20";
const GOLD = "#C89B3C";
const GOLD_LIGHT = "#E4C368";
const CREAM = "#F4EEE0";

const MotionLink = motion(Link);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

const contactInfo = [
  { icon: Phone, title: "Call Us", value: company?.phone ?? "+91 98765 43210" },
  { icon: Mail, title: "Email Us", value: company?.email ?? "info@mydexinternational.com" },
  { icon: MapPin, title: "Our Location", value: company?.address ?? "Surat, Gujarat, India" },
];

const subjects = [
  "Product Inquiry",
  "Export Quotation",
  "Private Label",
  "Partnership",
];

const inputBase =
  "w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#123B29] placeholder:text-gray-400 outline-none transition focus:shadow-[0_0_0_3px_rgba(200,155,60,0.15)]";

const Field = ({ as: Tag = "input", className = "", ...props }) => (
  <Tag
    className={`${inputBase} border-[#C89B3C]/25 focus:border-[#C89B3C] ${className}`}
    {...props}
  />
);

const Contact = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;

    try {
      const response = await emailjs.sendForm(
        "service_fjuvpiv",
        "template_13no2ik",
        form,
        {
          publicKey: "5gEv7BVsDTnN3b8Uy",
        }
      );

      console.log("Email sent:", response.status, response.text);

      setStatus("sent");
      form.reset();

      setTimeout(() => {
        setStatus("idle");
      }, 3500);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");

      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    }
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden min-h-[560px] sm:min-h-[620px] md:min-h-[680px] flex items-center">
        <img
          src={heroBg}
          alt="Mydex International contact and global trade"
          className="absolute inset-0 -z-30 h-full w-full object-cover"
        />

        <div
          className="absolute inset-0 -z-20"
          style={{
            background: `linear-gradient(100deg, ${CREAM} 0%, ${CREAM}F0 30%, ${CREAM}A6 55%, ${CREAM}33 80%, transparent 100%)`,
          }}
        />

        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `linear-gradient(180deg, rgba(18,59,41,0.18) 0%, transparent 18%, transparent 82%, rgba(18,59,41,0.22) 100%)`,
          }}
        />

        <div
          className="pointer-events-none absolute -left-24 top-1/2 -z-10 h-[420px] w-[420px] -translate-y-1/2 rounded-full blur-3xl"
          style={{ backgroundColor: `${GOLD}22` }}
        />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-14 sm:py-16 md:grid-cols-2 md:px-8 md:py-20">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <p
              className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: GOLD }}
            >
              Contact Us
            </p>
            <h1
              className="font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
              style={{ color: GREEN }}
            >
              Let&rsquo;s Build a Strong
              <br className="hidden sm:block" /> Global Partnership
            </h1>
            <p className="mt-5 max-w-md text-sm text-gray-600 sm:text-base">
              We are here to answer your questions and discuss how we can support your
              business with our premium products and reliable services.
            </p>

            <div
              className="mt-8 h-px w-16"
              style={{ backgroundColor: `${GOLD}66` }}
            />

            <motion.div
              className="mt-6 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-10"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.12 } } }}
            >
              {contactInfo.map(({ icon: Icon, title, value }, i) => (
                <motion.div key={title} custom={i} variants={fadeUp} className="flex items-start gap-3">
                  <Icon size={18} style={{ color: GOLD }} className="mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: GREEN }}>
                      {title}
                    </p>
                    <p className="mt-1 text-xs text-gray-600 sm:text-sm">{value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Decorative dotted world-map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative h-64 sm:h-80 md:h-96"
          >
            <svg viewBox="0 0 800 420" className="absolute inset-0 h-full w-full opacity-70">
              {Array.from({ length: 480 }).map((_, i) => {
                const cols = 40;
                const x = (i % cols) * 20 + 10;
                const y = Math.floor(i / cols) * 20 + 10;
                const seed = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
                const show = seed - Math.floor(seed) > 0.55;
                return show ? <circle key={i} cx={x} cy={y} r="1.8" fill={`${GOLD}99`} /> : null;
              })}
            </svg>

            <svg viewBox="0 0 800 420" className="absolute inset-0 h-full w-full">
              <path
                d="M120,300 Q400,120 680,260"
                fill="none"
                stroke={GOLD}
                strokeWidth="1.5"
                strokeDasharray="6 6"
                opacity="0.5"
              />
            </svg>

            {[
              { top: "28%", left: "16%" },
              { top: "22%", left: "62%" },
              { top: "55%", left: "80%" },
            ].map((pos, i) => (
              <motion.span
                key={i}
                style={{ ...pos, backgroundColor: GOLD, position: "absolute" }}
                className="h-2 w-2 rounded-full"
                animate={{ scale: [1, 1.8, 1], opacity: [0.9, 0.2, 0.9] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= FORM + OFFICE ================= */}
      <section className="py-14 sm:py-16 md:py-20" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-8 lg:grid-cols-2">

          {/* Send message form */}
          <motion.form
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            onSubmit={handleSubmit}
            className="rounded-2xl border bg-white/70 p-6 shadow-sm sm:p-8"
            style={{ borderColor: `${GOLD}30` }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: GOLD }}>
              Send Us a Message
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field required name="name" placeholder="Your Name *" />
              <Field name="company" placeholder="Company Name" />
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Field required type="email" name="email" placeholder="Email Address *" />
              <Field name="phone" placeholder="Phone Number" />
            </div>

            <div className="relative mt-4">
              <select
                required
                name="subject"
                defaultValue=""
                className={`${inputBase} appearance-none border-[#C89B3C]/25 focus:border-[#C89B3C]`}
              >
                <option value="" disabled>
                  Select Subject
                </option>
                {subjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>

            <textarea
              required
              name="message"
              rows={5}
              placeholder="Type your message here..."
              className={`${inputBase} mt-4 resize-none border-[#C89B3C]/25 focus:border-[#C89B3C]`}
            />

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: status === "sending" ? 1 : 1.03 }}
              whileTap={{ scale: status === "sending" ? 1 : 0.97 }}
              className="group mt-6 inline-flex items-center gap-2 rounded-md px-7 py-3 text-xs font-semibold uppercase tracking-wider transition disabled:opacity-70 disabled:cursor-not-allowed"
              style={{ backgroundColor: GOLD, color: GREEN }}
            >
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                ? "Message Sent ✓"
                : status === "error"
                ? "Try Again"
                : "Send Message"}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </motion.button>

            {status === "sent" && (
              <p className="mt-3 text-sm font-medium" style={{ color: GREEN }}>
                Thank you! We'll get back to you shortly.
              </p>
            )}
            {status === "error" && (
              <p className="mt-3 text-sm font-medium text-red-600">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </motion.form>

          {/* Office card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex flex-col overflow-hidden rounded-2xl text-white"
            style={{ backgroundColor: GREEN }}
          >
            <div className="flex-1 p-6 sm:p-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: GOLD }}>
                Our Office
              </p>
              <h3 className="font-serif text-lg font-semibold">MYDEX INTERNATIONAL</h3>
              <p className="mt-2 text-sm text-white/75">
                12-6-513, Begum Bazar
                <br /> Hyderabad – 500012,
                <br /> Telangana, India
              </p>

              <div className="mt-5 h-px w-16" style={{ backgroundColor: `${GOLD}4D` }} />

              <div className="mt-5 space-y-4">
                <div>
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider" style={{ color: GOLD }}>
                    <Phone size={14} /> Phone
                  </p>
                  <p className="mt-1 text-sm text-white/85">{company?.phone ?? "+91 98765 43210"}</p>
                </div>
                <div>
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider" style={{ color: GOLD }}>
                    <Mail size={14} /> Email
                  </p>
                  <p className="mt-1 text-sm text-white/85">{company?.email ?? "info@mydexinternational.com"}</p>
                </div>
                <div>
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider" style={{ color: GOLD }}>
                    <Clock size={14} /> Working Hours
                  </p>
                  <p className="mt-1 text-sm text-white/85">Mon – Sat: 9:00 AM – 6:00 PM</p>
                  <p className="text-sm text-white/85">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* WhatsApp strip */}
            <a
              href={`https://wa.me/${(company?.whatsapp ?? "919000001026").replace(/[^\d]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 px-6 py-4 text-sm font-semibold transition sm:px-8"
              style={{ backgroundColor: GREEN_2, color: GOLD }}
            >
              <span className="inline-flex items-center gap-2">
                <MessageCircle size={16} />
                Chat with us on WhatsApp
              </span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="pb-14 sm:pb-16 md:pb-20" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative overflow-hidden rounded-2xl shadow-sm"
            style={{ height: 420 }}
          >
            <iframe
              title="Mydex map"
              className="absolute inset-0 h-full w-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.741322865268!2d78.47399229999999!3d17.376176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9780be57533b%3A0xc4dba7a4fdbef564!2s12%2C%20Siddiamber%20Bazar%2C%20Begum%20Bazar%2C%20Afzal%20Gunj%2C%20Hyderabad%2C%20Telangana%20500012!5e0!3m2!1sen!2sin!4v1786618889554!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="absolute left-4 top-4 max-w-[260px] rounded-xl p-5 text-white sm:left-8 sm:top-8"
              style={{ backgroundColor: `${GREEN}F2`, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.35)" }}
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: GOLD }}>
                Find Us
              </p>
              <p className="text-sm text-white/85">
                We are strategically located in Surat, one of India&rsquo;s largest export hubs,
                well-connected to all major ports and airports.
              </p>
              <motion.a
                href="https://maps.app.goo.gl/k5oQP8Ar4rWuezKU8"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group mt-4 inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-xs font-semibold uppercase tracking-wider"
                style={{ backgroundColor: GOLD, color: GREEN }}
              >
                Get Directions
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="px-4 pb-14 sm:pb-16 md:pb-20 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-2xl px-6 py-8 sm:flex-row sm:px-10"
          style={{ background: `linear-gradient(120deg, ${GOLD}, ${GOLD_LIGHT})` }}
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <motion.span
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/60 sm:flex"
            >
              <Handshake size={26} style={{ color: GREEN }} />
            </motion.span>
            <div>
              <h3 className="font-serif text-xl font-semibold sm:text-2xl" style={{ color: GREEN }}>
                Ready to Start Your Business Journey?
              </h3>
              <p className="mt-1 text-sm" style={{ color: `${GREEN}CC` }}>
                Connect with us today and let&rsquo;s create a successful partnership.
              </p>
            </div>
          </div>

          {/* ✅ FIXED: motion(Link) instead of motion.a — no page reload, no 404 */}
          <MotionLink
            to="/get-quote"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="group inline-flex shrink-0 items-center gap-2 rounded-md px-7 py-3 text-xs font-semibold uppercase tracking-wider text-white"
            style={{ backgroundColor: GREEN }}
          >
            Get a Quote
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </MotionLink>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;