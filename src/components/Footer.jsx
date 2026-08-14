import { FaDownload, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { company, productCategories } from "../data/siteData";

import footerBg from "../assets/images/footer-bg.png";
import logo from "../assets/logo.png";

const socialLinks = [
  { Icon: FaFacebookF, href: "https://www.facebook.com/people/Mydex-international/61592850341942/", external: true },
  { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/mydex-international-434b0b428", external: true },
  {
    Icon: FaInstagram,
    href: "https://www.instagram.com/mydex_international?igsh=MWpzYTVyb2lwcmppYw==",
    external: true,
  },
  {
    Icon: FaEnvelope,
    href: "/contact",
    external: false,
  },
];

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3 + i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    }),
    hover: {
      scale: 1.15,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  const headingVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <footer
      className="relative overflow-hidden text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(27, 65, 54, 0.85), rgba(27, 65, 54, 0.85)), url(${footerBg})`,
        backgroundAttachment: "fixed",
      }}
    >
      <motion.p
        aria-hidden="true"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute -bottom-6 right-0 z-0 select-none whitespace-nowrap font-serif text-[18vw] font-bold leading-none text-mydex-gold/[0.06] sm:text-[14vw] lg:right-6 lg:text-[10vw]"
      >
        EST. 1956
      </motion.p>

      {/* Main Footer Content */}
      <div className="container-lux relative z-10 grid gap-10 px-4 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-5">

        {/* Brand Section */}
        <motion.div
          className="lg:col-span-2"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="mb-5 flex items-center"
            variants={logoVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={logo}
              alt="Mydex International"
              className="h-28 w-auto sm:h-32 md:h-40 lg:h-48 max-w-[280px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[440px] object-contain drop-shadow-lg"
            />
          </motion.div>

          <motion.p
            className="max-w-sm text-sm text-white/70"
            variants={linkVariants}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Global importer & exporter of premium dry fruits, spices, herbs, seeds, pulses and agro commodities.
          </motion.p>

          <motion.div
            className="mt-4 flex items-center gap-2"
            variants={linkVariants}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex gap-0.5 text-mydex-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} size={13} />
              ))}
            </div>
            <span className="text-sm font-semibold text-white">4.9/5</span>
            <span className="text-xs text-white/60">· 1000+ Global Clients</span>
          </motion.div>

          <motion.div
            className="mt-5 flex gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {socialLinks.map(({ Icon, href, external }, i) => (
              <motion.a
                key={i}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="grid h-9 w-9 place-items-center rounded-full border border-mydex-gold text-mydex-gold transition"
                variants={socialIconVariants}
                custom={i}
                whileHover="hover"
                whileTap="tap"
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h4
            className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-mydex-gold"
            variants={headingVariants}
          >
            Quick Links
          </motion.h4>
          <motion.div className="space-y-2 text-sm text-white/75">
            {[
              { to: "/about/overview", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/gallery", label: "Gallery" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ].map((link, i) => (
              <motion.div
                key={i}
                variants={linkVariants}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Link
                  to={link.to}
                  className="block transition hover:text-mydex-gold hover:translate-x-1"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            {/* ✅ Download Brochure Button */}
            <motion.div
              variants={linkVariants}
              custom={5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="pt-2"
            >
              <motion.a
                href="/brochure.pdf"
                download="Mydex-International-Brochure.pdf"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded border border-mydex-gold px-4 py-2 text-xs font-semibold uppercase tracking-wider text-mydex-gold transition hover:bg-mydex-gold hover:text-mydex-green"
              >
                <FaDownload size={11} />
                Download Brochure
              </motion.a>
            </motion.div>

          </motion.div>
        </motion.div>

        {/* Products */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h4
            className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-mydex-gold"
            variants={headingVariants}
          >
            Products
          </motion.h4>
          <motion.div className="space-y-2 text-sm text-white/75">
            {productCategories.map((c, i) => (
              <motion.div
                key={c.slug}
                variants={linkVariants}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Link
                  to={`/products/${c.slug}`}
                  className="block transition hover:text-mydex-gold hover:translate-x-1"
                >
                  {c.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h4
            className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-mydex-gold"
            variants={headingVariants}
          >
            Contact
          </motion.h4>
          <motion.div className="space-y-3 text-sm text-white/75">
            <motion.p
              className="flex items-center gap-2"
              variants={linkVariants}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <FaPhoneAlt className="text-mydex-gold" /> {company.phone}
            </motion.p>
            <motion.p
              className="flex items-center gap-2"
              variants={linkVariants}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <FaEnvelope className="text-mydex-gold" /> {company.email}
            </motion.p>
            <motion.p
              variants={linkVariants}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {company.address}
            </motion.p>
            <motion.p
              variants={linkVariants}
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {company.hours}
            </motion.p>
          </motion.div>

          {/* Newsletter Form */}
          <motion.form
            className="mt-5 space-y-2"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing.");
            }}
            variants={linkVariants}
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.input
              type="email"
              required
              placeholder="Newsletter email"
              className="w-full border border-white/20 bg-white/5 px-3 py-2 text-sm outline-none transition focus:border-mydex-gold focus:bg-white/10"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              className="w-full bg-mydex-gold px-3 py-2 text-xs font-semibold uppercase tracking-wider text-mydex-green transition"
              whileHover={{ backgroundColor: "#d4af37", scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe
            </motion.button>
          </motion.form>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        className="relative z-10 border-t border-white/10 px-4 py-4 text-xs text-white/60 md:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="container-lux flex flex-col items-center justify-between gap-4 sm:flex-row">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            © {new Date().getFullYear()} Mydex International. All Rights Reserved.
          </motion.p>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link to="/privacy-policy" className="transition hover:text-mydex-gold">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition hover:text-mydex-gold">
              Terms & Conditions
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Made by Creador Designs */}
      <motion.div
        className="relative z-10 border-t border-white/10 px-4 py-3 text-center text-xs text-white/50 md:px-8"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="container-lux">
          <p className="inline-flex items-center gap-1.5">
            Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
              className="text-mydex-gold"
            >
              ♥
            </motion.span>
            {" "}
            by{" "}
            <a
              href="https://creadordesigns.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-mydex-gold transition hover:text-white"
            >
              Creador Designs
            </a>
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;