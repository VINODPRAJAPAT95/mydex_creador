import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { CertificationsPage, GlobalNetwork, Journey, Overview } from "../pages/AboutPages";
import { BlogDetail, BlogList } from "../pages/BlogPages";
import Contact from "../pages/Contact";
import FAQs from "../pages/FAQs";
import Gallery from "../pages/Gallery";
import GetQuote from "../pages/GetQuote";
import Home from "../pages/Home";
import { PrivacyPolicy, Terms } from "../pages/LegalPages";
import NotFound from "../pages/NotFound";
import { CategoryPage, ProductDetail, ProductsIndex } from "../pages/ProductPages";
import Services from "../pages/Services";

const AppRoutes = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Navigate to="/about/overview" replace />} />
      <Route path="/about/overview" element={<Overview />} />
      <Route path="/about/journey" element={<Journey />} />
      <Route path="/about/certifications" element={<CertificationsPage />} />
      <Route path="/about/global-network" element={<GlobalNetwork />} />
      <Route path="/products" element={<ProductsIndex />} />
      <Route path="/products/:categorySlug" element={<CategoryPage />} />
      <Route path="/products/:categorySlug/:productSlug" element={<ProductDetail />} />
      <Route path="/services" element={<Services />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/get-quote" element={<GetQuote />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default AppRoutes;
