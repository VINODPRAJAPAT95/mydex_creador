export const createProduct = (category, name, index, image, extras = {}) => ({
  id: `${category}-${index + 1}`,
  slug: name.toLowerCase().replace(/\s+/g, "-"),
  category,
  name,
  priceLabel: "Export Quote",
  image,
  short:          extras.short          || "Carefully sourced, quality-checked and packed for international shipment.",
  tagline:        extras.tagline        || "Premium. Pure. Export Ready.",
  description:    extras.description    || `${name} from Mydex International is selected for premium grade, consistency and export readiness. Our supply chain ensures hygienic processing, accurate grading and reliable documentation.`,
  healthBenefits: extras.healthBenefits || [],
  varieties:      extras.varieties      || [],
  specs: extras.specs || [
    { label: "Origin",     value: "India" },
    { label: "Grade",      value: "Export Premium" },
    { label: "Moisture",   value: "As per buyer specs" },
    { label: "Packaging",  value: "Cartons / Vacuum / Bulk" },
    { label: "Shelf Life", value: "12–24 months" },
    { label: "MOQ",        value: "As per inquiry" },
  ],
  applications: extras.applications || ["Food industry", "Retail packing", "HoReCa", "Private label"],
  quality:       extras.quality      || "Lab tested with batch-wise quality control and export compliance.",
  gallery: [
    image,
    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=800&q=80",
  ],
});

export const createProducts = (category, fallbackImage, items) =>
  items.map((item, index) => {
    const name   = typeof item === "string" ? item          : item.name;
    const image  = typeof item === "string" ? fallbackImage : item.image;
    const extras = typeof item === "string" ? {}            : item;
    return createProduct(category, name, index, image, extras);
  });