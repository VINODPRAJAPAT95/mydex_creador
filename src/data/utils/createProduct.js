// 🔧 FIX: Proper slugify function.
// Purana code: name.toLowerCase().replace(/\s+/g, "-")
// Sirf spaces ko "-" me convert karta tha, baaki special characters
// (/, (, ), &, comma, etc.) waise hi reh jaate the.
//
// Isse "Basil Seeds (Sabja / Tukmaria)" jaisa naam ek slug banata tha:
//   basil-seeds-(sabja-/-tukmaria)
// Jisme "/" hone ki wajah se URL ek extra path segment me toot jaata tha,
// aur route (/products/:categorySlug/:productSlug) kabhi match nahi hota
// tha — isiliye "Product not found" aata tha.
//
// Naya slugify() function:
// 1. Lowercase karta hai
// 2. "&" ko "and" se replace karta hai (readability ke liye)
// 3. Sab kuch jo letter/number nahi hai use "-" se replace karta hai
//    (yeh "/", "(", ")", ",", "%" — sab handle kar leta hai)
// 4. Multiple "-" ko ek single "-" me collapse karta hai
// 5. Shuru/aakhir ke extra "-" hata deta hai
const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

export const createProduct = (category, name, index, image, overrides = {}) => ({
  id: `${category}-${index + 1}`,
  slug: overrides.slug || slugify(name),
  category,
  name,
  priceLabel: "Export Quote",
  image,
  short:
    overrides.short ||
    overrides.tagline ||
    "Carefully sourced, quality-checked and packed for international shipment.",
  description:
    overrides.description ||
    `${name} from Mydex International is selected for premium grade, consistency and export readiness. Our supply chain ensures hygienic processing, accurate grading and reliable documentation.`,
  tagline: overrides.tagline || "",
  specs: overrides.specs || [
    { label: "Origin",     value: "India" },
    { label: "Grade",      value: "Export Premium" },
    { label: "Moisture",   value: "As per buyer specs" },
    { label: "Packaging",  value: "Cartons / Vacuum / Bulk" },
    { label: "Shelf Life", value: "12–24 months" },
    { label: "MOQ",        value: "As per inquiry" },
  ],
  healthBenefits: overrides.healthBenefits || [],
  varieties: overrides.varieties || [],
  applications: overrides.applications || ["Food industry", "Retail packing", "HoReCa", "Private label"],
  quality: overrides.quality || "Lab tested with batch-wise quality control and export compliance.",
  gallery: overrides.gallery || [
    image,
    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=800&q=80",
  ],
});

export const createProducts = (category, fallbackImage, items) =>
  items.map((item, index) => {
    if (typeof item === "string") {
      return createProduct(category, item, index, fallbackImage);
    }
    return createProduct(category, item.name, index, item.image, item);
  });