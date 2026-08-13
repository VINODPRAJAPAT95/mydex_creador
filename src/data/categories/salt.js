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
  name: "Himalayan Pink Salt (Sendha Namak)",
  image: himalayanImg,
  tagline: "From the Heart of the Himalayas. Naturally Beautiful. Eternally Pure.",
  description:
    "Hidden deep within the majestic Himalayan mountains lies a treasure over 250 million years old — the Himalayan Pink Salt, nature's purest and most mineral-rich salt on Earth. With its delicate rose hue and more than 84 trace minerals, this salt is not just a seasoning; it's a symbol of wellness, balance, and natural beauty. At Mydex International, we source the finest Himalayan Pink Salt from the ancient Khewra mines — the same source that supplies premium salt to gourmet brands and wellness companies worldwide. Processed with minimal handling and zero chemical treatment, our pink salt retains its natural color, flavor, and mineral integrity — a perfect fusion of purity and sophistication. Whether for gourmet kitchens, organic stores, or wellness brands, Mydex Himalayan Pink Salt stands as the hallmark of Indian authenticity and global luxury.",
  varieties: [
    { name: "Coarse Himalayan Salt", details: "Size: 2-5mm grains · Slow-dissolving · Usage: Grinders, cooking, seasoning" },
    { name: "Fine Himalayan Salt", details: "Size: <1mm · Table-ready texture · Usage: Daily cooking, table salt" },
    { name: "Himalayan Salt Powder", details: "Ultra-fine ground · Fast-dissolving · Usage: Spice blends, food processing" },
    { name: "Himalayan Salt Chunks", details: "Size: 20-50mm blocks · Natural pink hue · Usage: Cooking slabs, decor, spa products" },
  ],
  applications: [
    "Used in cooking, gourmet seasoning, and fine dining",
    "Added to marinades, sauces, and roasted dishes",
    "A favorite for premium organic and luxury food brands",
    "Used in bath salts, body scrubs, and detox blends",
    "Popular in Himalayan salt lamps and inhalers for natural purification",
    "Widely used in Ayurveda and aromatherapy",
    "Used in cosmetic formulations, salt rooms, and therapeutic wellness centers",
  ],
},
{
  name: "Iodized Salt (Namak)",
  image: iodizedImg,
  tagline: "Essential. Pure. Perfectly Balanced. The Soul of Every Kitchen.",
  description:
    "From the smallest household meal to the largest food factory, salt is the foundation of flavor and life. At Mydex International, we bring you Regular Refined Salt that defines purity, consistency, and trust, making it the preferred choice for kitchens and industries around the world. Harvested from the coastal salt pans of Gujarat and Tamil Nadu, our refined salt is processed using advanced crystallization technology to achieve perfect whiteness, fine granulation, and uniform texture. It's free from impurities and carefully graded for superior solubility and taste stability, ensuring that every pinch delivers perfection. Mydex Regular Salt is more than an ingredient — it's the invisible hero behind every recipe, product, and brand that values purity and performance.",
  varieties: [
    { name: "Fine Iodized Salt", details: "Grain size: <1mm · Free-flowing · Usage: Household cooking, table use" },
    { name: "Crystal Iodized Salt", details: "Grain size: 2-4mm · Slower dissolve · Usage: Pickling, bulk food processing" },
    { name: "Vacuum Evaporated Salt", details: "Purity: 99%+ · Uniform fine crystal · Usage: Food manufacturing, bakery" },
  ],
  applications: [
    "Used in household cooking and seasoning",
    "Key ingredient in snacks, sauces, bakery, and pickles",
    "Perfect for food processing and instant meal manufacturing",
    "Used in pharmaceuticals, chemical, textile, and detergent industries",
    "Water softening and purification plants",
    "De-icing roads and industrial cleaning",
    "Available for private labeling under global brands",
    "Distributed in retail packs and bulk packaging for importers",
  ],
},
{
  name: "Rock Salt (Sendha Namak)",
  image: blackImg, // ⚠️ needs a real import — this doesn't exist in your file yet
  tagline: "Pure. Powerful. Primal. India's Natural Salt of Balance and Healing.",
  description:
    "Long before modern wellness trends, India had already discovered a natural mineral secret — Rock Salt (Sendha Namak). Mined from the ancient salt deposits at the foothills of the Himalayas, this unrefined mineral salt has been cherished for centuries for its purity, therapeutic properties, and gentle flavor. At Mydex International, we bring you the purest Indian Rock Salt, sourced from mineral-rich deposits in Himachal Pradesh and northern India, where time and nature have preserved it in its most authentic form. Naturally pinkish-white and packed with trace minerals like calcium, magnesium, iron, and potassium, Mydex Rock Salt represents India's ancient science of health, reimagined for modern living. Used widely in Ayurveda, fasting rituals, gourmet cuisine, and spa therapy, our Rock Salt embodies both purity and purpose — a timeless gift from India's earth to the world.",
  varieties: [
    { name: "Rock Salt Crystal", details: "Pinkish-white, coarse crystal · Usage: Fasting foods, traditional cooking" },
    { name: "Rock Salt Powder", details: "Finely ground · Usage: Everyday cooking, spice blends" },
    { name: "Rock Salt Chunks", details: "Large mineral blocks · Usage: Cooking slabs, spa & decor products" },
  ],
  applications: [
    "Used as a healthier alternative to refined salt",
    "Common in fasting (vrat) foods, pickles, and Indian recipes",
    "Adds subtle flavor and mineral notes to dishes",
    "Used in Ayurvedic and naturopathic therapies",
    "Ingredient in bath salts, scrubs, and detox treatments",
    "Used for salt lamps and inhalation therapy for natural air purification",
    "Utilized in pharmaceutical and cosmetic manufacturing",
    "Used in salt blocks and wellness decor products",
  ],
},
]);

export default { category: saltCategory, products: saltProducts };