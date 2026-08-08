export const createProduct = (category, name, index, image) => ({
  id: `${category}-${index + 1}`,
  slug: name.toLowerCase().replace(/\s+/g, "-"),
  category,
  name,
  priceLabel: "Export Quote",
  image,
  short: "Carefully sourced, quality-checked and packed for international shipment.",
  description: `${name} from Mydex International is selected for premium grade, consistency and export readiness. Our supply chain ensures hygienic processing, accurate grading and reliable documentation.`,
  specs: [
    { label: "Origin", value: "India" },
    { label: "Grade", value: "Export Premium" },
    { label: "Moisture", value: "As per buyer specs" },
    { label: "Packaging", value: "Cartons / Vacuum / Bulk" },
    { label: "Shelf Life", value: "12–24 months" },
    { label: "MOQ", value: "As per inquiry" },
  ],
  applications: ["Food industry", "Retail packing", "HoReCa", "Private label"],
  quality: "Lab tested with batch-wise quality control and export compliance.",
  countries: ["UAE", "USA", "UK", "EU", "Singapore", "Australia"],
  gallery: [
    image,
    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=800&q=80",
  ],
});

export const createProducts = (category, image, names) =>
  names.map((name, index) => createProduct(category, name, index, image));
