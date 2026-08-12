import { createProducts } from "../utils/createProduct";

import categoryImage from "../../assets/images/dry-fruits.png";

import almondImg    from "../../assets/images/dry-fruits/almond.png";
import cashewImg    from "../../assets/images/dry-fruits/cashew.png";
import pistachioImg from "../../assets/images/dry-fruits/pistachio.png";
import walnutImg    from "../../assets/images/dry-fruits/walnut.png";
import raisinImg    from "../../assets/images/dry-fruits/raisin.png";
import figImg       from "../../assets/images/dry-fruits/fig.png";
import datesImg     from "../../assets/images/dry-fruits/dates.png";
import apricotImg   from "../../assets/images/dry-fruits/apricot.png";
import hazelnutImg  from "../../assets/images/dry-fruits/hazelnut.png";


const slug = "dry-fruits";

export const dryFruitsCategory = {
  slug,
  name: "Dry Fruits",
  description: "Premium almonds, cashews, pistachios and more — export grade.",
  image: categoryImage,
};

export const dryFruitsProducts = createProducts(dryFruitsCategory.slug, categoryImage, [
{
  name: "Almond (Badam)",
  image: almondImg,

  tagline: "The Power Nut of Everyday Wellness",

  description:
    "Almonds are among the world’s most popular dry fruits, celebrated for their high protein, healthy fats, and brain-boosting properties. Used across cuisines and wellness products, almonds symbolize daily nutrition and vitality. Nesbee supplies high-grade almonds, sorted and packed to ensure uniform size, crunch, and freshness.",

  healthBenefits: [
    "High protein",
    "Healthy fats",
    "Brain-boosting properties",
    "Supports daily nutrition and vitality"
  ],

varieties: [
  {
    name: "Raw Almond",
    details: "Color: Light brown skin with cream kernel\n• Texture: Firm & crunchy\n• Moisture: 5–7%\n• Taste: Mild, nutty flavor"
  },
  {
    name: "Balanced Almond",
    details: "Appearance: Fine brownish powder\n• Processing: Made from premium sun-dried figs\n• Shelf Life: Long-lasting when stored properly\n• Solubility: Easy to blend"
  },
  {
    name: "Almond Powder",
    details: "Form: Fine almond powder\n• Processing: Made from high-quality almonds\n• Shelf Life: Long when properly stored"
  },
],

  applications: [
    "Daily Consumption & Gifting Packs",
    "Bakery, Cereals & Nutrition Bars",
    "Almond Butter & Milk Production"
  ],

  applicationDetails: [
    {
      title: "Daily Consumption & Gifting Packs",
      points: [
        "Consumed raw, roasted, or soaked as a daily health snack",
        "Popular in premium dry fruit gifting boxes and festive hampers"
      ]
    },
    {
      title: "Bakery, Cereals & Nutrition Bars",
      points: [
        "Widely used in cakes, cookies, muffins, and pastries"
      ]
    },
    {
      title: "Almond Butter & Milk Production",
      points: [
        "Processed into smooth almond butter for health foods",
        "Used in plant-based almond milk and dairy alternatives"
      ]
    }
  ]
},
  {
    name: "Cashew (Kaju)",
    image: cashewImg,
    tagline: "Creamy. Rich. Globally Trusted.",
    description: "Our export-grade cashews are hand-selected and processed at our Unjha facility. Available in W180, W210, W240, W320 and W450 grades, packed under vacuum or in nitrogen-flushed tins to preserve freshness across long international shipments.",
    healthBenefits: ["High in healthy monounsaturated fats", "Rich in magnesium and zinc", "Supports heart health", "Boosts immunity"],
    varieties: [
      { name: "W180", details: "Count: ~180 kernels/lb · Largest, whitest grade · Usage: Premium retail, gifting" },
      { name: "W210", details: "Count: ~210 kernels/lb · Large uniform kernel · Usage: Export retail packs" },
      { name: "W240", details: "Count: ~240 kernels/lb · Most popular grade · Usage: Everyday snacking, retail" },
      { name: "W320", details: "Count: ~320 kernels/lb · Medium kernel size · Usage: Bulk trade, confectionery" },
      { name: "W450", details: "Count: ~450 kernels/lb · Smaller uniform kernel · Usage: Food processing, cooking" },
      { name: "Cashew Splits", details: "Broken kernel halves · Cost-effective · Usage: Bakery, namkeen, chutneys" },
    ],
    applications: ["Snack Industry", "Confectionery", "Retail Packing", "Food Processing"],
  },
 {
  name: "Makhana (Regular/Flavoured)",
  image: pistachioImg,
  tagline: "Naturally Green. Naturally Premium.",
  description: "Premium pistachios graded by size and shell integrity. Mydex pistachios are processed hygienically, moisture-tested and packed to retain their natural crunch and flavour. Available as in-shell, open-shell or kernel, suitable for retail, bakery and confectionery buyers worldwide.",
  healthBenefits: ["Rich in antioxidants", "Supports weight management", "Good source of protein and fiber", "Promotes gut health"],
  varieties: [
    { name: "In-Shell Pistachio", details: "Naturally split shell · Roasted & salted option · Usage: Direct snacking, gifting" },
    { name: "Open Shell Pistachio", details: "Wide-open shell · Easy to crack · Usage: Premium retail packs" },
    { name: "Pistachio Kernel", details: "Shelled, bright green kernel · Usage: Bakery, ice cream, confectionery" },
    { name: "Roasted Pistachio", details: "Dry roasted, seasoned option · Usage: Ready-to-eat snacks" },
  ],
  applications: ["Confectionery", "Bakery", "Retail Snacks", "Ice Cream Industry"],
},
  {
    name: "Walnut (Akhrot)",
    image: walnutImg,
    tagline: "Brain Food. Heart Food. Pure Food.",
    description: "Sourced from high-altitude Indian growing regions, our walnuts are graded for kernel colour, oil content and size. Available as in-shell or shelled halves and pieces, Mydex walnuts are packed under controlled conditions to maintain their natural oil content and freshness.",
    healthBenefits: ["Excellent source of omega-3 fatty acids", "Supports brain health", "Rich in antioxidants", "Promotes heart health"],
    varieties: [
      { name: "In-Shell Walnut", details: "Light-colored shell · Easy crack · Usage: Retail, festive gifting" },
      { name: "Walnut Halves", details: "Light amber kernel halves · Usage: Bakery, salads, snacking" },
      { name: "Walnut Pieces", details: "Broken kernel pieces · Cost-effective · Usage: Confectionery, granola" },
      { name: "Walnut Powder", details: "Finely ground kernel · Usage: Health foods, bakery mixes" },
    ],
    applications: ["Bakery & Confectionery", "Health Foods", "Retail Packing", "Dairy Industry"],
  },
  {
    name: "Raisin (Kishmish)",
    image: raisinImg,
    tagline: "Naturally Sweet. Naturally Pure.",
    description: "Sundried and mechanically cleaned, Mydex raisins are free from additives and artificial colour. Graded by size and moisture level, they are ideal for confectionery, bakery, direct retail packing and health food applications. Available in Golden, Green and Black varieties.",
    healthBenefits: ["Natural source of energy", "Rich in iron and potassium", "Supports digestive health", "Good source of antioxidants"],
    varieties: [
      { name: "Golden Raisin", details: "Sulphur-treated, golden color · Usage: Bakery, festive sweets" },
      { name: "Green Raisin", details: "Naturally dried, tangy-sweet · Usage: Retail packs, cooking" },
      { name: "Black Raisin", details: "Sun-dried, deep flavor · Usage: Ayurvedic use, health snacking" },
      { name: "Sultana", details: "Seedless, light amber · Usage: Cereals, confectionery, baking" },
    ],
    applications: ["Bakery & Confectionery", "Breakfast Cereals", "Retail Packing", "Health Foods"],
  },
  {
    name: "Dry Fig (Anjeer)",
    image: figImg,
    tagline: "Soft. Nutrient-Rich. Naturally Energising.",
    description: "Dry Fig, popularly known as Anjeer, is one of the oldest cultivated fruits in the world, valued for its natural sweetness, digestive benefits, and rich mineral content. Traditionally used in Ayurveda and modern nutrition alike, figs are a powerhouse of fiber and energy. Mydex offers premium-grade dry figs, carefully dried and processed to retain their soft texture, rich flavor, and nutritional integrity.",
    healthBenefits: ["Supports digestion", "Rich in dietary fiber", "Boosts energy naturally", "Supports heart health"],
    varieties: [
      { name: "Dried Fig", details: "Soft-dried, natural sweetness · Usage: Direct snacking, gifting" },
      { name: "Fig Powder", details: "Finely ground dried fig · Usage: Health foods, smoothies" },
      { name: "Organic Dry Fig", details: "Certified organic, no additives · Usage: Clean-label products" },
    ],
    applications: ["Food & Beverage", "Sweets & Desserts", "Breakfast Cereals", "Ayurvedic Formulations"],
  },
  {
    name: "Dates (Khajoor)",
    image: datesImg,
    tagline: "Sweet. Natural. Energy Packed.",
    description: "Premium Medjool and Deglet Noor dates, sourced and repacked at our Unjha facility. Available pitted, unpitted or in blocks, with custom packaging options for retail, foodservice and industrial buyers. All batches are moisture-tested and quality-certified before shipment.",
    healthBenefits: ["Natural source of energy", "Rich in potassium and magnesium", "Supports bone health", "Good source of dietary fiber"],
    varieties: [
      { name: "Medjool Dates", details: "Large, soft & caramel-sweet · Usage: Premium retail, gifting" },
      { name: "Deglet Noor", details: "Firm texture, honey-colored · Usage: Bakery, retail packing" },
      { name: "Pitted Dates", details: "Seed removed, ready-to-eat · Usage: Snacking, food processing" },
      { name: "Date Paste", details: "Smooth blended paste · Usage: Natural sweetener, bakery" },
      { name: "Date Syrup", details: "Concentrated liquid syrup · Usage: Beverages, natural sugar substitute" },
    ],
    applications: ["Retail Packing", "Confectionery", "Health Foods", "Food Processing"],
  },
  {
    name: "Dry Apricot (Khubani)",
    image: apricotImg,
    tagline: "Sun-Dried. Naturally Sweet. Export Grade.",
    description: "Sun-dried apricots graded for colour, size and moisture. Mydex apricots are processed without sulphur dioxide on request, making them suitable for organic and clean-label product lines. Available as whole, halved or diced for multiple food industry applications.",
    healthBenefits: ["Rich in vitamin A and C", "Good source of dietary fiber", "Supports eye health", "Natural antioxidant properties"],
    varieties: [
      { name: "Whole Dried Apricot", details: "Sun-dried, tangy-sweet · Usage: Direct snacking, gifting" },
      { name: "Apricot Halves", details: "Pitted & halved · Usage: Bakery, muesli, retail packs" },
      { name: "Diced Apricot", details: "Small cut pieces · Usage: Confectionery, cereal bars" },
      { name: "Organic Apricot", details: "No sulphur, certified organic · Usage: Clean-label, nutraceuticals" },
    ],
    applications: ["Bakery & Confectionery", "Health Foods", "Retail Packing", "Nutraceuticals"],
  },
  {
    name: "Dry Dates (Chuhara)",
    image: hazelnutImg,
    tagline: "Rich. Buttery. Premium Export Grade.",
    description: "Export-grade hazelnuts sourced from quality-certified origins, graded by size and shell-out ratio. Available as in-shell, blanched or roasted, with vacuum or MAP packaging to protect flavour integrity across extended shelf life. Suitable for chocolate, bakery and snack manufacturers.",
    healthBenefits: ["Rich in vitamin E", "Good source of healthy fats", "Supports heart health", "Rich in antioxidants"],
    varieties: [
      { name: "In-Shell Hazelnut", details: "Natural shell, high shell-out ratio · Usage: Bulk trade, retail" },
      { name: "Blanched Hazelnut", details: "Skin removed, uniform kernel · Usage: Chocolate, bakery" },
      { name: "Roasted Hazelnut", details: "Dry roasted, rich aroma · Usage: Snacking, confectionery" },
      { name: "Hazelnut Paste", details: "Smooth ground paste · Usage: Spreads, chocolate manufacturing" },
    ],
    applications: ["Chocolate Industry", "Bakery", "Retail Snacks", "Confectionery"],
  },

]);

export default { category: dryFruitsCategory, products: dryFruitsProducts };