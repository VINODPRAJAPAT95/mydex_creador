import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const BrandLogo = () => {
  return (
    <Link to="/" className="group relative z-10 flex shrink-0 items-center gap-3" aria-label="Mydex International home">
      <motion.img
        src={logo}
        alt="Mydex International"
        className="h-24 w-auto object-contain -my-6 md:h-28 md:-my-7 lg:h-32 lg:-my-8"
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.03 }}
      />
    </Link>
  );
};

export default BrandLogo;