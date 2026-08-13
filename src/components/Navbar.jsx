import { useEffect, useRef, useState } from "react";
import { FaBars, FaChevronDown, FaSearch, FaTimes } from "react-icons/fa";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { aboutLinks, allProducts, productCategories } from "../data/siteData";
import Button from "./ui/Button";
import BrandLogo from "./BrandLogo";
import LanguageDropdown from "./LanguageDropdown";

/* Local HD background image for the navbar — replace with your actual asset */
import navbarBg from "../assets/images/navbar-bg.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  /* Mobile accordion state — separate from the desktop hover state above,
     so tapping "About" / "Products" on mobile expands them in place
     instead of relying on onMouseEnter/onMouseLeave, which never fires
     on touch devices (this was why the dropdowns looked "dead" on mobile). */
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    setOpen(false);
    setAboutOpen(false);
    setProductsOpen(false);
    setSearchOpen(false);
    setMobileAboutOpen(false);
    setMobileProductsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) setSearchOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  /* Lock body scroll while the full-height mobile menu is open, so the
     page behind it doesn't scroll along with it. */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const results = query
    ? allProducts.filter((p) => p.name.toLowerCase().includes(query.toLowerCase())).slice(0, 6)
    : [];

  // Framer Motion variants for desktop dropdown animations
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, pointerEvents: "none" },
    visible: {
      opacity: 1,
      y: 0,
      pointerEvents: "auto",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      pointerEvents: "none",
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.2 },
    }),
  };

  const productGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  /* Accordion body variants for mobile About/Products */
  const accordionVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.25, ease: "easeOut" },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <header className="sticky top-0 z-50 overflow-visible border-b border-mydex-gold/20 bg-mydex-green-deep text-white shadow-premium">
      {/* HD background image — bg-mydex-green-deep above renders instantly
          as a fallback so there's no white flash while this image loads
          on mobile connections; the image then sits on top of it. */}
      <img
        src={navbarBg}
        alt=""
        aria-hidden="true"
        fetchpriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-mydex-gold/70 to-transparent" />
      <div className="container-lux relative flex h-16 items-center justify-between gap-4 px-4 md:h-[70px] md:px-8">
        {/* Logo */}
        <BrandLogo />

        <nav className="hidden items-center gap-6 lg:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
                isActive ? "text-mydex-gold" : "text-white/90 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          {/* About Dropdown — desktop hover */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className="flex items-center gap-1 text-xs font-medium uppercase tracking-[0.2em] text-white/90 transition-colors hover:text-white">
              About
              <motion.div animate={{ rotate: aboutOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <FaChevronDown className="text-[10px]" />
              </motion.div>
            </button>
            <AnimatePresence>
              {aboutOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute left-0 top-full min-w-[240px] border border-mydex-gold/30 bg-white p-3 text-mydex-ink shadow-premium"
                >
                  <motion.div variants={productGridVariants} initial="hidden" animate="visible" className="space-y-1">
                    {aboutLinks.map((item, i) => (
                      <motion.div key={item.path} custom={i} variants={itemVariants}>
                        <Link
                          to={item.path}
                          className="block px-3 py-2 text-sm transition hover:bg-mydex-cream hover:text-mydex-green"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Products Dropdown — desktop hover */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center gap-1 text-xs font-medium uppercase tracking-[0.2em] text-white/90 transition-colors hover:text-white">
              Products
              <motion.div animate={{ rotate: productsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <FaChevronDown className="text-[10px]" />
              </motion.div>
            </button>
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute left-1/2 top-full z-50 w-[640px] -translate-x-1/2 border border-mydex-gold/30 bg-white p-5 text-mydex-ink shadow-premium"
                >
                  <motion.div variants={productGridVariants} initial="hidden" animate="visible" className="grid grid-cols-3 gap-3">
                    {productCategories.map((cat, i) => (
                      <motion.div key={cat.slug} custom={i} variants={itemVariants}>
                        <Link
                          to={`/products/${cat.slug}`}
                          className="group block border border-transparent p-3 transition hover:border-mydex-gold/40 hover:bg-mydex-cream"
                        >
                          <p className="font-semibold text-mydex-green group-hover:text-mydex-gold">{cat.name}</p>
                          <p className="mt-1 text-xs text-gray-500">{cat.description.slice(0, 48)}…</p>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
                isActive ? "text-mydex-gold" : "text-white/90 hover:text-white"
              }`
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
                isActive ? "text-mydex-gold" : "text-white/90 hover:text-white"
              }`
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
                isActive ? "text-mydex-gold" : "text-white/90 hover:text-white"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          {/* 🆕 Language Dropdown — sits right before the search icon */}
          <LanguageDropdown />

          {/* Search */}
          <div className="relative hidden md:block" ref={searchRef}>
            <button
              onClick={() => setSearchOpen((v) => !v)}
              className="rounded-full border border-mydex-gold/40 p-2.5 text-mydex-gold transition hover:bg-mydex-gold/10"
            >
              <FaSearch />
            </button>
            <AnimatePresence>
              {searchOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute right-0 top-full mt-2 w-72 border border-mydex-gold/30 bg-white p-3 text-mydex-ink shadow-premium"
                >
                  <input
                    autoFocus
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search products…"
                    className="w-full border border-mydex-beige px-3 py-2 text-sm outline-none focus:border-mydex-gold"
                  />
                  <motion.div className="mt-2 space-y-1">
                    <AnimatePresence mode="wait">
                      {results.map((p, i) => (
                        <motion.button
                          key={p.id}
                          custom={i}
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="block w-full px-2 py-1.5 text-left text-sm transition hover:bg-mydex-cream"
                          onClick={() => navigate(`/products/${p.category}/${p.slug}`)}
                        >
                          {p.name}
                        </motion.button>
                      ))}
                      {query && results.length === 0 && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="px-2 py-2 text-xs text-gray-500"
                        >
                          No products found
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="hidden sm:block">
            <Button to="/get-quote" variant="gold" className="!py-2 !text-xs">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="relative z-[60] rounded-md p-1 text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu — full-height overlay covering the rest of the
          viewport below the fixed header bar, with its own scroll if the
          link list is taller than the screen. Fixed positioning + inset
          means it always covers 100% of remaining height regardless of
          content length, instead of the old height:"auto" which only grew
          to fit content and left background gaps. */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 bottom-0 top-16 z-50 overflow-y-auto bg-mydex-green-deep px-4 py-6 lg:hidden md:top-[70px]"
          >
            <motion.div
              variants={productGridVariants}
              initial="hidden"
              animate="visible"
              className="space-y-1 text-sm uppercase tracking-wider"
            >
              {/* 🆕 Language Dropdown — top of the mobile menu, own row */}
              <motion.div variants={itemVariants} custom={0} className="flex justify-start border-b border-white/10 pb-3">
                <LanguageDropdown />
              </motion.div>

              <motion.div variants={itemVariants} custom={1}>
                <Link to="/" className="block border-b border-white/10 py-3">
                  Home
                </Link>
              </motion.div>

              {/* About — tap to expand */}
              <motion.div variants={itemVariants} custom={2} className="border-b border-white/10">
                <button
                  onClick={() => setMobileAboutOpen((v) => !v)}
                  className="flex w-full items-center justify-between py-3 text-left text-mydex-gold"
                  aria-expanded={mobileAboutOpen}
                >
                  About
                  <motion.span animate={{ rotate: mobileAboutOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <FaChevronDown className="text-[10px]" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {mobileAboutOpen && (
                    <motion.div
                      variants={accordionVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="overflow-hidden"
                    >
                      <div className="space-y-1 pb-2">
                        {aboutLinks.map((l) => (
                          <Link
                            key={l.path}
                            to={l.path}
                            className="block py-2 pl-3 text-white/80 normal-case tracking-normal"
                          >
                            {l.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Products — tap to expand */}
              <motion.div variants={itemVariants} custom={3} className="border-b border-white/10">
                <button
                  onClick={() => setMobileProductsOpen((v) => !v)}
                  className="flex w-full items-center justify-between py-3 text-left text-mydex-gold"
                  aria-expanded={mobileProductsOpen}
                >
                  Products
                  <motion.span animate={{ rotate: mobileProductsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <FaChevronDown className="text-[10px]" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {mobileProductsOpen && (
                    <motion.div
                      variants={accordionVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="overflow-hidden"
                    >
                      <div className="space-y-1 pb-2">
                        {productCategories.map((c) => (
                          <Link
                            key={c.slug}
                            to={`/products/${c.slug}`}
                            className="block py-2 pl-3 text-white/80 normal-case tracking-normal"
                          >
                            {c.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div variants={itemVariants} custom={4}>
                <Link to="/gallery" className="block border-b border-white/10 py-3">
                  Gallery
                </Link>
              </motion.div>
              <motion.div variants={itemVariants} custom={5}>
                <Link to="/blog" className="block border-b border-white/10 py-3">
                  Blog
                </Link>
              </motion.div>
              <motion.div variants={itemVariants} custom={6}>
                <Link to="/contact" className="block border-b border-white/10 py-3">
                  Contact
                </Link>
              </motion.div>
              <motion.div variants={itemVariants} custom={7} className="pt-4">
                <Link
                  to="/get-quote"
                  className="block bg-mydex-gold px-4 py-3 text-center font-semibold text-mydex-green"
                >
                  Get Quote
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;