import { useEffect, useRef, useState } from "react";
import { FaBars, FaChevronDown, FaSearch, FaTimes } from "react-icons/fa";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { aboutLinks, allProducts, productCategories } from "../data/siteData";
import Button from "./ui/Button";
import BrandLogo from "./BrandLogo";

/* Local HD background image for the navbar — replace with your actual asset */
import navbarBg from "../assets/images/navbar-bg.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    setOpen(false);
    setAboutOpen(false);
    setProductsOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) setSearchOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const results = query
    ? allProducts.filter((p) => p.name.toLowerCase().includes(query.toLowerCase())).slice(0, 6)
    : [];

  // Framer Motion variants for dropdown animations
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      pointerEvents: "none",
    },
    visible: {
      opacity: 1,
      y: 0,
      pointerEvents: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      pointerEvents: "none",
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.2,
      },
    }),
  };

  const productGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <header className="sticky top-0 z-50 overflow-visible border-b border-mydex-gold/20 text-white shadow-premium">
      {/* HD background image — local import, no overlay on top */}
      <img
        src={navbarBg}
        alt=""
        aria-hidden="true"
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

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className="flex items-center gap-1 text-xs font-medium uppercase tracking-[0.2em] text-white/90 transition-colors hover:text-white">
              About
              <motion.div
                animate={{ rotate: aboutOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
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
                  <motion.div
                    variants={productGridVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-1"
                  >
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

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center gap-1 text-xs font-medium uppercase tracking-[0.2em] text-white/90 transition-colors hover:text-white">
              Products
              <motion.div
                animate={{ rotate: productsOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
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
                  <motion.div
                    variants={productGridVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-3 gap-3"
                  >
                    {productCategories.map((cat, i) => (
                      <motion.div key={cat.slug} custom={i} variants={itemVariants}>
                        <Link
                          to={`/products/${cat.slug}`}
                          className="group block border border-transparent p-3 transition hover:border-mydex-gold/40 hover:bg-mydex-cream"
                        >
                          <p className="font-semibold text-mydex-green group-hover:text-mydex-gold">
                            {cat.name}
                          </p>
                          <p className="mt-1 text-xs text-gray-500">
                            {cat.description.slice(0, 48)}…
                          </p>
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
            className="rounded-md p-1 text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="relative border-t border-white/10 bg-mydex-green-deep px-4 py-4 lg:hidden overflow-hidden"
          >
            <motion.div
              variants={productGridVariants}
              initial="hidden"
              animate="visible"
              className="space-y-3 text-sm uppercase tracking-wider"
            >
              <motion.div variants={itemVariants} custom={0}>
                <Link to="/" className="block">
                  Home
                </Link>
              </motion.div>

              <motion.p variants={itemVariants} custom={1} className="text-mydex-gold">
                About
              </motion.p>
              {aboutLinks.map((l, i) => (
                <motion.div key={l.path} variants={itemVariants} custom={i + 2}>
                  <Link
                    to={l.path}
                    className="ml-3 block text-white/80 normal-case tracking-normal"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}

              <motion.p variants={itemVariants} custom={aboutLinks.length + 2} className="text-mydex-gold">
                Products
              </motion.p>
              {productCategories.map((c, i) => (
                <motion.div key={c.slug} variants={itemVariants} custom={aboutLinks.length + i + 3}>
                  <Link
                    to={`/products/${c.slug}`}
                    className="ml-3 block text-white/80 normal-case tracking-normal"
                  >
                    {c.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={itemVariants} custom={aboutLinks.length + productCategories.length + 3}>
                <Link to="/gallery" className="block">
                  Gallery
                </Link>
              </motion.div>
              <motion.div variants={itemVariants} custom={aboutLinks.length + productCategories.length + 4}>
                <Link to="/blog" className="block">
                  Blog
                </Link>
              </motion.div>
              <motion.div variants={itemVariants} custom={aboutLinks.length + productCategories.length + 5}>
                <Link to="/contact" className="block">
                  Contact
                </Link>
              </motion.div>
              <motion.div variants={itemVariants} custom={aboutLinks.length + productCategories.length + 6}>
                <Link to="/get-quote" className="block text-mydex-gold">
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