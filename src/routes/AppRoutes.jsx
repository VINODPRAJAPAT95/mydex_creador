import { Navigate, Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

// About Pages
import {
  CertificationsPage,
  GlobalNetwork,
  Journey,
  Overview,
} from "../pages/AboutPages";

// Blog Pages
import {
  BlogDetail,
  BlogList,
} from "../pages/BlogPages";

// Regular Pages
import Contact from "../pages/Contact";
import FAQs from "../pages/FAQs";
import Gallery from "../pages/Gallery";
import GetQuote from "../pages/GetQuote";
import Home from "../pages/Home";

// Legal Pages
import {
  PrivacyPolicy,
  Terms,
} from "../pages/LegalPages";

import NotFound from "../pages/NotFound";

// Product Pages
import {
  CategoryPage,
  ProductDetail,
  ProductsIndex,
} from "../pages/ProductPages";

import Services from "../pages/Services";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>

        {/* ==================== HOME ==================== */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* ==================== ABOUT ==================== */}

        <Route
          path="/about"
          element={
            <Navigate
              to="/about/overview"
              replace
            />
          }
        />

        <Route
          path="/about/overview"
          element={<Overview />}
        />

        <Route
          path="/about/journey"
          element={<Journey />}
        />

        <Route
          path="/about/certifications"
          element={<CertificationsPage />}
        />

        <Route
          path="/about/global-network"
          element={<GlobalNetwork />}
        />

        {/* ==================== PRODUCTS ==================== */}

        <Route
          path="/products"
          element={<ProductsIndex />}
        />

        <Route
          path="/products/:categorySlug"
          element={<CategoryPage />}
        />

        <Route
          path="/products/:categorySlug/:productSlug"
          element={<ProductDetail />}
        />

        {/* ==================== SERVICES ==================== */}

        <Route
          path="/services"
          element={<Services />}
        />

        {/* ==================== GALLERY ==================== */}

        <Route
          path="/gallery"
          element={<Gallery />}
        />

        {/* ==================== BLOG ==================== */}

        <Route
          path="/blog"
          element={<BlogList />}
        />

        <Route
          path="/blog/:slug"
          element={<BlogDetail />}
        />

        {/* ==================== CONTACT ==================== */}

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* ==================== GET QUOTE ==================== */}

        <Route
          path="/get-quote"
          element={<GetQuote />}
        />

        {/* ==================== FAQ ==================== */}

        <Route
          path="/faqs"
          element={<FAQs />}
        />

        {/* ==================== LEGAL ==================== */}

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
          path="/terms"
          element={<Terms />}
        />

        {/* ==================== 404 ==================== */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Route>
    </Routes>
  );
};

export default AppRoutes;