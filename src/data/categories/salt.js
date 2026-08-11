import { createProducts } from "../utils/createProduct";

import categoryImage from "../../assets/images/salt.png";

import himalayanImg from "../../assets/images/salt/himalayan-pink.png";
import iodizedImg   from "../../assets/images/salt/regular.png";
import blackImg     from "../../assets/images/salt/rock.png";

const slug = "salt";

export const saltCategory = {
  slug,
  name: "Salt",
  description: "Premium edible and industrial-grade salt for global markets.",
  image: categoryImage,
};

export const saltProducts = createProducts(saltCategory.slug, categoryImage, [
  {
    name: "Himalayan Pink Salt",
    image: himalayanImg,
    tagline: "Pure. Mineral-Rich. Naturally Pink.",
    description: "Mydex Himalayan Pink Salt is mined from ancient salt deposits and minimally processed to retain its natural mineral content and signature pink hue. Available in coarse, fine and powder grades, it meets strict purity standards for culinary, cosmetic and wellness buyers worldwide.",
    healthBenefits: ["Rich in trace minerals", "Contains lower sodium content than table salt", "Free from additives and anti-caking agents", "Supports electrolyte balance"],
    varieties: ["Coarse Himalayan Salt", "Fine Himalayan Salt", "Himalayan Salt Powder", "Himalayan Salt Chunks"],
    applications: ["Culinary Use", "Spa & Cosmetic Products", "Bath Salts", "Retail Packing"],
  },
  {
    name: "Iodized Salt",
    image: iodizedImg,
    tagline: "Refined. Fortified. Everyday Essential.",
    description: "Mydex Iodized Salt is refined and fortified with potassium iodate to support daily nutritional needs. Processed under strict hygiene standards and free-flowing for consistent use, it is widely trusted by households and food manufacturers alike.",
    healthBenefits: ["Supports thyroid function", "Helps prevent iodine deficiency disorders", "Free-flowing and easy to use", "Consistent fine texture"],
    varieties: ["Fine Iodized Salt", "Crystal Iodized Salt", "Vacuum Evaporated Salt"],
    applications: ["Household Use", "Food Processing", "Bakery", "Retail Packing"],
  },
  {
    name: "Black Salt",
    image: blackImg,
    tagline: "Pungent. Traditional. Naturally Sourced.",
    description: "Mydex Black Salt (Kala Namak) is sourced and processed to preserve its distinctive sulphurous aroma and dark colour, prized in traditional and Ayurvedic cooking. Available in crystal and powder forms, it is suited for spice blenders, food brands and culinary exporters.",
    healthBenefits: ["Traditionally supports digestion", "Contains natural trace minerals", "Low in additives", "Used in Ayurvedic formulations"],
    varieties: ["Black Salt Crystal", "Black Salt Powder"],
    applications: ["Culinary Blends", "Spice Industry", "Ayurvedic Formulations", "Retail Packing"],
  },
]);

export default { category: saltCategory, products: saltProducts };