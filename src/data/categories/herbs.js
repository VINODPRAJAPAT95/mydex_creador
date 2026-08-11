import { createProducts } from "../utils/createProduct";

import categoryImage from "../../assets/images/herbs.png";

import basilLeavesImg   from "../../assets/images/herbs/basil-leaves.png";
import amlaImg          from "../../assets/images/herbs/amla.png";
import psylliumHuskImg  from "../../assets/images/herbs/psyllium-husk.png";
import fenugreekImg     from "../../assets/images/herbs/fenugreek-leaves.png";
import cassiaTOraImg    from "../../assets/images/herbs/cassia-tora.png";
import rosePetalsImg    from "../../assets/images/herbs/rose-petals.png";
import psylliumSeedImg  from "../../assets/images/herbs/psyllium-seeds.png";
import basilSeedsImg    from "../../assets/images/herbs/basil-seeds.png";

const slug = "herbs";

export const herbsCategory = {
  slug,
  name: "Herbs",
  description: "Naturally sourced herbs for culinary and wellness markets.",
  image: categoryImage,
};

export const herbsProducts = createProducts(herbsCategory.slug, categoryImage, [
  {
    name: "Basil Leaves",
    image: basilLeavesImg,

    tagline: "The Aromatic Heart of Global Cuisines",

    description:
      "Basil leaves are one of the most widely used culinary herbs in the world, prized for their fresh, sweet aroma and versatility across Mediterranean, Asian, and Ayurvedic traditions. Rich in essential oils and antioxidants, they are used fresh, dried, or powdered in a vast range of food and wellness applications. Our basil leaves are carefully harvested, cleaned, and processed to preserve their natural colour, aroma, and potency.",

    healthBenefits: [
      "Rich in antioxidants",
      "Anti-inflammatory properties",
      "Supports digestive health",
      "Natural antibacterial qualities"
    ],

    varieties: ["Dried Basil Leaves", "Basil Powder", "Organic Basil Leaves"],

    applications: [
      "Culinary & Food Processing",
      "Herbal Teas & Beverages",
      "Nutraceuticals & Supplements"
    ],

    applicationDetails: [
      {
        title: "Culinary & Food Processing",
        points: [
          "Used in pasta sauces, pesto, soups, and marinades",
          "Widely used as a seasoning in packaged and processed foods"
        ]
      },
      {
        title: "Herbal Teas & Beverages",
        points: [
          "Blended into herbal infusions and wellness teas",
          "Used in flavoured drink formulations"
        ]
      },
      {
        title: "Nutraceuticals & Supplements",
        points: [
          "Encapsulated as dietary supplements for its anti-inflammatory benefits",
          "Included in Ayurvedic formulations for immunity and digestion"
        ]
      }
    ]
  },

  {
    name: "Amla (Indian Gooseberry)",
    image: amlaImg,

    tagline: "The Ancient Superfruit of Ayurveda",

    description:
      "Amla, or Indian Gooseberry, is one of the richest natural sources of Vitamin C and has been a cornerstone of Ayurvedic medicine for thousands of years. Known for its immune-boosting, anti-ageing, and rejuvenating properties, amla is used across health foods, herbal supplements, and cosmetic formulations. We supply premium-grade dried amla — whole, sliced, and powdered — processed to retain maximum nutritional value.",

    healthBenefits: [
      "Extremely high in Vitamin C",
      "Powerful antioxidant and anti-ageing properties",
      "Boosts immunity and metabolism",
      "Supports hair, skin, and eye health"
    ],

    varieties: ["Dried Amla Whole", "Dried Amla Slices", "Amla Powder", "Organic Amla Powder"],

    applications: [
      "Ayurvedic & Herbal Formulations",
      "Health Foods & Nutraceuticals",
      "Cosmetics & Personal Care"
    ],

    applicationDetails: [
      {
        title: "Ayurvedic & Herbal Formulations",
        points: [
          "Key ingredient in Chyawanprash and Triphala preparations",
          "Used in traditional tonics and herbal supplements"
        ]
      },
      {
        title: "Health Foods & Nutraceuticals",
        points: [
          "Incorporated into immunity-boosting supplements and powders",
          "Used in health drinks, energy bars, and functional foods"
        ]
      },
      {
        title: "Cosmetics & Personal Care",
        points: [
          "Added to hair oils, shampoos, and scalp treatments",
          "Used in skin-care products for its antioxidant properties"
        ]
      }
    ]
  },

  {
    name: "Psyllium Husk",
    image: psylliumHuskImg,

    tagline: "Nature's Most Effective Dietary Fibre",

    description:
      "Psyllium husk, derived from the seeds of Plantago ovata, is one of the world's leading sources of soluble dietary fibre. India is the global leader in psyllium production, and our Unjha facility is at the heart of this supply chain. Used extensively in pharmaceuticals, health foods, and functional beverages, psyllium husk is available in multiple purity grades to suit diverse industrial needs.",

    healthBenefits: [
      "Excellent source of soluble dietary fibre",
      "Supports digestive health and regularity",
      "Aids in cholesterol management",
      "Helps control blood sugar levels"
    ],

    varieties: ["Psyllium Husk 85%", "Psyllium Husk 95%", "Psyllium Husk 98%", "Psyllium Husk Powder"],

    applications: [
      "Pharmaceuticals",
      "Health Foods & Nutraceuticals",
      "Food & Beverage Industry"
    ],

    applicationDetails: [
      {
        title: "Pharmaceuticals",
        points: [
          "Used as a bulk-forming laxative in tablet and sachet formulations",
          "Incorporated into fibre-supplement capsules and powders"
        ]
      },
      {
        title: "Health Foods & Nutraceuticals",
        points: [
          "Added to high-fibre cereals, health bars, and functional powders",
          "Used in weight-management and digestive health products"
        ]
      },
      {
        title: "Food & Beverage Industry",
        points: [
          "Used as a natural thickener and stabiliser in food processing",
          "Incorporated into gluten-free baking formulations"
        ]
      }
    ]
  },

  {
    name: "Fenugreek Leaves",
    image: fenugreekImg,

    tagline: "A Staple Herb with Deep Wellness Roots",

    description:
      "Fenugreek leaves, known as Methi in India, are a cornerstone of South Asian culinary tradition and Ayurvedic medicine. Their distinctive bitter-sweet flavour enhances curries, flatbreads, and spice blends, while their rich phytochemical profile makes them valuable in health and wellness applications. We supply sun-dried and mechanically processed fenugreek leaves, cleaned and graded for consistent quality.",

    healthBenefits: [
      "Supports blood sugar regulation",
      "Rich in iron and essential vitamins",
      "Promotes lactation and hormonal balance",
      "Supports digestive health"
    ],

    varieties: ["Dried Fenugreek Leaves (Kasuri Methi)", "Fenugreek Leaf Powder", "Organic Fenugreek Leaves"],

    applications: [
      "Culinary & Spice Industry",
      "Herbal Supplements",
      "Food Processing"
    ],

    applicationDetails: [
      {
        title: "Culinary & Spice Industry",
        points: [
          "Used as a key flavouring in Indian curries, dals, and parathas",
          "Incorporated into spice blends and seasoning mixes"
        ]
      },
      {
        title: "Herbal Supplements",
        points: [
          "Used in formulations targeting blood sugar and cholesterol management",
          "Included in lactation support and women's health supplements"
        ]
      },
      {
        title: "Food Processing",
        points: [
          "Added to ready-to-eat meals and packaged ethnic food products",
          "Used in freeze-dried herb blends for the food service industry"
        ]
      }
    ]
  },

  {
    name: "Cassia Tora",
    image: cassiaTOraImg,

    tagline: "Industrial Herb with Global Demand",

    description:
      "Cassia Tora is a hardy herb cultivated primarily in India and valued for its seeds, which yield Cassia Tora Gum — a natural thickening and binding agent widely used in industrial, food, and animal feed applications. The plant's leaves and seeds also have traditional medicinal uses. Our Cassia Tora is carefully harvested and processed to ensure high purity and consistent gum yield.",

    healthBenefits: [
      "Traditional use in skin conditions and detoxification",
      "Natural laxative properties",
      "Rich in anthraquinones with antifungal properties",
      "Supports liver health in traditional medicine"
    ],

    varieties: ["Cassia Tora Seeds", "Cassia Tora Splits", "Cassia Tora Powder", "Cassia Tora Gum Powder"],

    applications: [
      "Animal Feed Industry",
      "Food & Textile Industry",
      "Pet Food Manufacturing"
    ],

    applicationDetails: [
      {
        title: "Animal Feed Industry",
        points: [
          "Used as a binder and thickener in livestock and poultry feed",
          "Incorporated into aquafeed formulations"
        ]
      },
      {
        title: "Food & Textile Industry",
        points: [
          "Cassia gum used as a food-grade thickener and stabiliser (E499)",
          "Applied as a sizing agent in textile manufacturing"
        ]
      },
      {
        title: "Pet Food Manufacturing",
        points: [
          "Used as a gelling agent in wet cat and dog food formulations",
          "Provides texture and consistency in premium pet food products"
        ]
      }
    ]
  },

  {
    name: "Rose Petals",
    image: rosePetalsImg,

    tagline: "The Essence of Purity and Fragrance",

    description:
      "Dried rose petals are harvested from premium Rosa damascena and Rosa centifolia varieties, prized for their intense fragrance, vibrant colour, and rich polyphenol content. Used across food, beverages, cosmetics, and Ayurvedic formulations, rose petals bridge the worlds of luxury and wellness. Our petals are shade-dried to preserve colour and volatile oils, then packed hygienically for export.",

    healthBenefits: [
      "Rich in antioxidants and polyphenols",
      "Supports skin health and hydration",
      "Natural mood-enhancing and calming properties",
      "Anti-inflammatory benefits"
    ],

    varieties: ["Whole Dried Rose Petals", "Rose Petal Powder", "Organic Rose Petals", "Rose Buds"],

    applications: [
      "Food & Beverage",
      "Cosmetics & Aromatherapy",
      "Ayurvedic & Herbal Formulations"
    ],

    applicationDetails: [
      {
        title: "Food & Beverage",
        points: [
          "Used in herbal teas, rose sherbet, and floral infusions",
          "Added to confectionery, jams, and gourmet food products"
        ]
      },
      {
        title: "Cosmetics & Aromatherapy",
        points: [
          "Used in face masks, toners, and skin-care formulations",
          "Incorporated into bath products, soaps, and aromatherapy blends"
        ]
      },
      {
        title: "Ayurvedic & Herbal Formulations",
        points: [
          "Used in cooling and detoxifying Ayurvedic preparations",
          "Included in herbal supplements targeting stress and skin wellness"
        ]
      }
    ]
  },

  {
    name: "Psyllium Seeds",
    image: psylliumSeedImg,

    tagline: "The Source of the World's Finest Fibre",

    description:
      "Psyllium seeds are the raw form from which psyllium husk and psyllium seed powder are derived. Rich in mucilage, these small seeds swell significantly when in contact with water, forming a gel that supports gut health and regularity. India supplies the vast majority of the global psyllium crop, and our facility processes both seeds and husk to meet pharmaceutical, nutraceutical, and food-grade specifications.",

    healthBenefits: [
      "High in soluble and insoluble fibre",
      "Supports bowel regularity and gut health",
      "Aids in managing cholesterol and blood sugar",
      "Useful in weight management programmes"
    ],

    varieties: ["Psyllium Seeds", "Psyllium Seed Powder", "Psyllium Seed Husk"],

    applications: [
      "Pharmaceuticals",
      "Animal Feed",
      "Nutraceuticals"
    ],

    applicationDetails: [
      {
        title: "Pharmaceuticals",
        points: [
          "Processed into husk and powder for laxative and fibre supplement products",
          "Used in bulk-forming agents and digestive health formulations"
        ]
      },
      {
        title: "Animal Feed",
        points: [
          "Used as a natural fibre supplement in livestock and poultry nutrition",
          "Incorporated into speciality pet food and veterinary products"
        ]
      },
      {
        title: "Nutraceuticals",
        points: [
          "Included in functional food and dietary supplement formulations",
          "Used in colon health and detox product lines"
        ]
      }
    ]
  },

  {
    name: "Basil Seeds",
    image: basilSeedsImg,

    tagline: "The Wellness Seed Taking the World by Storm",

    description:
      "Basil seeds, also known as Sabja or Tukmaria, are the tiny black seeds of the sweet basil plant. When soaked in water, they swell into a gel-like form packed with fibre, omega-3 fatty acids, and minerals. Long used in Ayurveda and Southeast Asian cuisine, basil seeds have gained global popularity as a functional ingredient in health beverages, desserts, and weight-management products.",

    healthBenefits: [
      "Excellent source of dietary fibre",
      "Natural cooling and digestive properties",
      "Supports weight management",
      "Rich in omega-3 fatty acids and minerals"
    ],

    varieties: ["Raw Basil Seeds", "Cleaned & Sorted Basil Seeds", "Organic Basil Seeds"],

    applications: [
      "Beverages & Health Drinks",
      "Desserts & Confectionery",
      "Nutraceuticals & Supplements"
    ],

    applicationDetails: [
      {
        title: "Beverages & Health Drinks",
        points: [
          "Used in falooda, bubble tea, and flavoured health drinks",
          "Added to functional wellness beverages for fibre and texture"
        ]
      },
      {
        title: "Desserts & Confectionery",
        points: [
          "Incorporated into puddings, ice creams, and traditional Asian sweets",
          "Used as a topping for yogurt parfaits and health bowls"
        ]
      },
      {
        title: "Nutraceuticals & Supplements",
        points: [
          "Formulated into fibre and omega-3 supplement capsules",
          "Included in weight management and detox product lines"
        ]
      }
    ]
  },

  // {
  //   name: "Chia Seed",
  //   image: chiaImg,

  //   tagline: "The Global Superfood. Naturally Nutritious.",

  //   description:
  //     "Chia seeds are one of the most nutrient-dense superfoods in the world, delivering an exceptional combination of omega-3 fatty acids, plant-based protein, dietary fibre, and essential minerals. Originally cultivated by ancient Aztec and Mayan civilisations, chia seeds have become a global health food staple. We supply export-grade chia seeds, cleaned and sorted to meet international food safety standards.",

  //   healthBenefits: [
  //     "Rich in omega-3 fatty acids",
  //     "Excellent source of plant-based protein and fibre",
  //     "Supports heart health and bone density",
  //     "Helps regulate blood sugar and energy levels"
  //   ],

  //   varieties: ["Black Chia Seeds", "White Chia Seeds", "Organic Chia Seeds", "Milled Chia Seeds"],

  //   applications: [
  //     "Health Foods & Functional Foods",
  //     "Bakery & Beverages",
  //     "Nutraceuticals & Supplements"
  //   ],

  //   applicationDetails: [
  //     {
  //       title: "Health Foods & Functional Foods",
  //       points: [
  //         "Used in chia puddings, smoothie bowls, and energy bars",
  //         "Added to breakfast cereals, granola, and health snacks"
  //       ]
  //     },
  //     {
  //       title: "Bakery & Beverages",
  //       points: [
  //         "Incorporated into breads, muffins, and gluten-free baked goods",
  //         "Used as a topping and thickener in functional beverages and juices"
  //       ]
  //     },
  //     {
  //       title: "Nutraceuticals & Supplements",
  //       points: [
  //         "Encapsulated as omega-3 and fibre dietary supplements",
  //         "Included in meal replacement and sports nutrition formulations"
  //       ]
  //     }
  //   ]
  // },
]);

export default { category: herbsCategory, products: herbsProducts };