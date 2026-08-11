import { createProducts } from "../utils/createProduct";

import categoryImage from "../../assets/images/spices.png";

import redChilliImg   from "../../assets/images/spices/red-chilli.png";
import turmericImg    from "../../assets/images/spices/turmeric.png";
import cuminImg       from "../../assets/images/spices/cumin.png";
import corianderImg   from "../../assets/images/spices/coriander.png";
import fennelImg      from "../../assets/images/spices/fennel.png";
import fenugreekImg   from "../../assets/images/spices/fenugreek.png";
import mustardImg     from "../../assets/images/spices/mustard.png";
import annattoImg     from "../../assets/images/spices/annatto.png";
import blackPepperImg from "../../assets/images/spices/black-pepper.png";
import greenCardamomImg from "../../assets/images/spices/green-cardamom.png";
import blackCardamomImg from "../../assets/images/spices/black-cardamom.png";
import cloveImg       from "../../assets/images/spices/clove.png";
import bayLeafImg     from "../../assets/images/spices/bay-leaf.png";
import cassiaImg      from "../../assets/images/spices/cassia.png";
import dillSeedsImg   from "../../assets/images/spices/dill-seeds.png";
import dryGingerImg   from "../../assets/images/spices/dry-ginger.png";
import caromSeedsImg  from "../../assets/images/spices/carom-seeds.png";
import chilliSeedsImg from "../../assets/images/spices/chilli-seeds.png";
import nutmegImg      from "../../assets/images/spices/nutmeg.png";
import maceImg        from "../../assets/images/spices/mace.png";

const slug = "spices";

export const spicesCategory = {
  slug,
  name: "Spices",
  description: "Aromatic Indian spices sourced from trusted farms — export grade.",
  image: categoryImage,
};

export const spicesProducts = createProducts(spicesCategory.slug, categoryImage, [
  {
    name: "Dry Red Chillies",
    image: redChilliImg,
    tagline: "Fiery. Vibrant. Naturally Sun-Dried.",
    description:
      "Dry Red Chillies are a cornerstone of Indian cuisine, prized for their deep color, pungency, and versatility. Sourced from prime growing belts and sun-dried to lock in flavor, Mydex chillies are sorted by length, color value (ASTA) and heat level to meet the exact specifications of global buyers.",
    healthBenefits: [
      "Rich in capsaicin and antioxidants",
      "Supports metabolism",
      "Good source of vitamin C",
      "Boosts digestion",
    ],
    varieties: ["Teja", "334", "S4", "Byadgi", "Kashmiri", "Whole & Stemless"],
    applications: ["Spice Blends & Masalas", "Food Processing", "Sauces & Pickles", "Retail Packing"],
  },
  {
    name: "Turmeric",
    image: turmericImg,
    tagline: "Golden Root. Global Superfood.",
    description:
      "Turmeric is India's golden spice, celebrated worldwide for its color, flavor and wellness properties. Mydex turmeric is cultivated in mineral-rich soil, cured and polished to achieve high curcumin content and a vivid golden hue, available as whole fingers or finely milled powder.",
    healthBenefits: [
      "High curcumin content",
      "Powerful anti-inflammatory properties",
      "Rich in antioxidants",
      "Supports immunity",
    ],
    varieties: ["Turmeric Finger", "Turmeric Powder", "Salem Turmeric", "Erode Turmeric"],
    applications: ["Spice Blends", "Nutraceuticals", "Food Coloring", "Cosmetics & Wellness"],
  },
  {
    name: "Cumin Seeds",
    image: cuminImg,
    tagline: "Earthy. Aromatic. Essential.",
    description:
      "Cumin Seeds are one of the most widely traded spices globally, valued for their warm, earthy aroma and distinct flavor. Mydex cumin is cleaned, sortex-processed and graded by purity and oil content, meeting international food-safety and export standards.",
    healthBenefits: [
      "Aids digestion",
      "Rich in iron",
      "Supports immune function",
      "Contains natural antioxidants",
    ],
    varieties: ["Singapore Quality", "Europe Quality", "99% Pure", "Cumin Powder"],
    applications: ["Spice Blends & Masalas", "Snack Seasoning", "Food Processing", "Retail Packing"],
  },
  {
    name: "Coriander Seeds",
    image: corianderImg,
    tagline: "Citrusy. Mild. Timeless Flavor.",
    description:
      "Coriander Seeds bring a mild, citrusy warmth to cuisines across the world. Mydex sources whole, uncrushed seeds that are sortex-cleaned and graded by size and essential oil content, ideal for spice blends, extraction and direct retail use.",
    healthBenefits: [
      "Supports digestive health",
      "Rich in dietary fiber",
      "Contains antioxidants",
      "May help regulate blood sugar",
    ],
    varieties: ["Eagle Quality", "Scooter Quality", "Coriander Powder", "Split Coriander"],
    applications: ["Spice Blends", "Extraction & Oleoresins", "Food Processing", "Retail Packing"],
  },
  {
    name: "Fennel Seeds",
    image: fennelImg,
    tagline: "Sweet. Aromatic. Naturally Soothing.",
    description:
      "Fennel Seeds offer a distinct sweet, licorice-like aroma and are used across culinary, medicinal and mouth-freshener applications. Mydex fennel is machine-cleaned and graded for size and bold green color, ensuring consistent quality across every shipment.",
    healthBenefits: [
      "Supports digestion",
      "Rich in fiber and antioxidants",
      "Traditionally used to freshen breath",
      "May support respiratory health",
    ],
    varieties: ["Bold Fennel", "Machine Clean Fennel", "Fennel Powder", "Selected Fennel"],
    applications: ["Culinary Use", "Mouth Fresheners", "Herbal & Ayurvedic Products", "Food Processing"],
  },
  {
    name: "Fenugreek Seeds",
    image: fenugreekImg,
    tagline: "Bitter-Sweet. Nutrient-Dense. Time-Tested.",
    description:
      "Fenugreek Seeds are a traditional ingredient known for their distinct bitter-sweet flavor and long list of wellness benefits. Mydex fenugreek is sourced from prime belts, cleaned and graded to ensure purity, making it suitable for culinary, pharmaceutical and nutraceutical applications.",
    healthBenefits: [
      "Supports blood sugar regulation",
      "Rich in soluble fiber",
      "May support lactation",
      "Contains antioxidant compounds",
    ],
    varieties: ["Whole Fenugreek", "Fenugreek Powder", "Kasuri Methi"],
    applications: ["Spice Blends", "Pharmaceutical Extracts", "Nutraceuticals", "Food Processing"],
  },
  {
    name: "Mustard Seeds",
    image: mustardImg,
    tagline: "Pungent. Versatile. Farm Fresh.",
    description:
      "Mustard Seeds are a staple across Indian and international kitchens, used for tempering, oil extraction and condiment production. Mydex mustard seeds are sortex-cleaned and graded by size and purity, available in yellow and black varieties for diverse industrial applications.",
    healthBenefits: [
      "Rich in selenium and magnesium",
      "Contains anti-inflammatory compounds",
      "Good source of omega-3 fatty acids",
      "Supports metabolic health",
    ],
    varieties: ["Yellow Mustard", "Black Mustard", "Brown Mustard", "Mustard Powder"],
    applications: ["Oil Extraction", "Condiments & Sauces", "Spice Blends", "Food Processing"],
  },
  {
    name: "Annatto Seeds",
    image: annattoImg,
    tagline: "Natural Color. Subtle Flavor.",
    description:
      "Annatto Seeds are prized as a natural coloring agent, delivering a warm reddish-orange hue to food products without synthetic additives. Mydex supplies cleaned, graded annatto seeds suited for food coloring, cosmetics and natural dye applications worldwide.",
    healthBenefits: [
      "Natural source of carotenoids",
      "Contains antioxidant properties",
      "Free from synthetic additives",
    ],
    varieties: ["Whole Annatto Seed", "Annatto Powder", "Annatto Extract"],
    applications: ["Natural Food Coloring", "Cosmetics", "Textile Dyeing", "Food Processing"],
  },
  {
    name: "Black Pepper",
    image: blackPepperImg,
    tagline: "The King of Spices.",
    description:
      "Black Pepper has earned its place as the world's most traded spice, known for its sharp aroma and pungent bite. Mydex sources bold, high-density peppercorns that are cleaned and graded for oil content and purity, meeting strict international export benchmarks.",
    healthBenefits: [
      "Contains piperine, a powerful antioxidant",
      "Supports digestion",
      "May enhance nutrient absorption",
      "Rich in essential minerals",
    ],
    varieties: ["Malabar Garbled", "MG1", "Whole Black Pepper", "Black Pepper Powder"],
    applications: ["Spice Blends", "Food Processing", "Extraction & Oleoresins", "Retail Packing"],
  },
  {
    name: "Green Cardamom",
    image: greenCardamomImg,
    tagline: "The Queen of Spices.",
    description:
      "Green Cardamom is one of the most valuable spices in the world, treasured for its intense aroma and delicate sweetness. Mydex sources hand-picked cardamom pods, graded by size (bold, standard) and color, packed to preserve their essential oils and freshness.",
    healthBenefits: [
      "Rich in antioxidants",
      "Supports digestive health",
      "May help regulate blood pressure",
      "Contains anti-inflammatory compounds",
    ],
    varieties: ["8mm Bold", "7mm", "6mm", "Cardamom Powder"],
    applications: ["Culinary Use", "Beverage Flavoring", "Confectionery", "Ayurvedic Formulations"],
  },
  {
    name: "Black Cardamom",
    image: blackCardamomImg,
    tagline: "Smoky. Bold. Distinctly Aromatic.",
    description:
      "Black Cardamom delivers a smoky, robust flavor distinct from its green counterpart, widely used in savory dishes and masalas. Mydex sources sun-dried, hand-sorted pods graded for size and aroma intensity, ideal for culinary and spice-blend manufacturers.",
    healthBenefits: [
      "Supports digestive health",
      "Contains antioxidant compounds",
      "Traditionally used for respiratory wellness",
    ],
    varieties: ["Whole Black Cardamom", "Black Cardamom Powder"],
    applications: ["Spice Blends & Masalas", "Culinary Use", "Ayurvedic Formulations"],
  },
  {
    name: "Cloves",
    image: cloveImg,
    tagline: "Intense Aroma. Timeless Spice.",
    description:
      "Cloves are among the most aromatic spices, used in cuisines, oral care and traditional medicine worldwide. Mydex cloves are hand-picked, sun-dried and graded for size and oil content, ensuring a strong, consistent aroma across every batch.",
    healthBenefits: [
      "Rich in eugenol, a natural antioxidant",
      "Supports oral health",
      "Contains anti-inflammatory properties",
      "Traditionally used for digestive support",
    ],
    varieties: ["Whole Cloves", "Clove Powder", "Clove Oil"],
    applications: ["Culinary Use", "Oral Care Products", "Ayurvedic Formulations", "Extraction & Oleoresins"],
  },
  {
    name: "Bay Leaves",
    image: bayLeafImg,
    tagline: "Subtle. Fragrant. Kitchen Essential.",
    description:
      "Bay Leaves add a subtle herbal aroma to slow-cooked dishes, soups and stocks around the world. Mydex sources sun-dried bay leaves, sorted for size and color, and carefully packed to retain their natural fragrance during export.",
    healthBenefits: [
      "Contains antioxidant compounds",
      "Traditionally used to support digestion",
      "May help reduce inflammation",
    ],
    varieties: ["Whole Bay Leaves", "Broken Bay Leaves", "Bay Leaf Powder"],
    applications: ["Culinary Use", "Spice Blends", "Herbal Products"],
  },
  {
    name: "Cassia (Cinnamon Bark)",
    image: cassiaImg,
    tagline: "Warm. Sweet. Naturally Bold.",
    description:
      "Cassia, often referred to as Indian Cinnamon, offers a bold, sweet-spicy warmth used across culinary and beverage applications. Mydex sources sun-dried bark, graded by thickness and curl, and processed into quills, splits or powder for global buyers.",
    healthBenefits: [
      "Rich in antioxidants",
      "May support healthy blood sugar levels",
      "Contains anti-inflammatory compounds",
    ],
    varieties: ["Cassia Quills", "Cassia Splits", "Cassia Powder"],
    applications: ["Culinary Use", "Beverage Flavoring", "Bakery", "Spice Blends"],
  },
  {
    name: "Dill Seeds (Sowa)",
    image: dillSeedsImg,
    tagline: "Aromatic. Digestive. Time-Honored.",
    description:
      "Dill Seeds, known locally as Sowa, carry a warm, slightly bitter aroma and are widely used in pickling, culinary preparations and traditional remedies. Mydex sources clean, well-matured seeds graded for purity and consistent aroma.",
    healthBenefits: [
      "Traditionally used to support digestion",
      "Contains antioxidant compounds",
      "Rich in essential minerals",
    ],
    varieties: ["Whole Dill Seed", "Dill Seed Powder"],
    applications: ["Pickling", "Culinary Use", "Herbal & Ayurvedic Products"],
  },
  {
    name: "Dry Ginger",
    image: dryGingerImg,
    tagline: "Warming. Pungent. Naturally Potent.",
    description:
      "Dry Ginger is a concentrated form of fresh ginger, valued for its intense warmth and long list of traditional uses. Mydex processes sun-dried ginger into whole, split or powdered form, graded for oleoresin content and purity to meet pharmaceutical and culinary demands.",
    healthBenefits: [
      "Supports digestive health",
      "Contains gingerol, a powerful antioxidant",
      "Traditionally used to relieve nausea",
      "May help reduce inflammation",
    ],
    varieties: ["Dry Ginger Whole", "Dry Ginger Split", "Ginger Powder"],
    applications: ["Culinary Use", "Nutraceuticals", "Ayurvedic Formulations", "Beverage Industry"],
  },
  {
    name: "Carom Seeds (Ajwain)",
    image: caromSeedsImg,
    tagline: "Sharp. Medicinal. Deeply Aromatic.",
    description:
      "Carom Seeds, known as Ajwain, are prized for their sharp, thyme-like aroma and long-standing use in digestive remedies. Mydex sources cleaned, sortex-processed seeds graded for purity and essential oil content, suited for culinary and pharmaceutical buyers.",
    healthBenefits: [
      "Traditionally used to relieve indigestion",
      "Contains thymol, a natural antimicrobial",
      "Supports respiratory wellness",
    ],
    varieties: ["Whole Ajwain", "Ajwain Powder"],
    applications: ["Culinary Use", "Ayurvedic Formulations", "Pharmaceutical Extracts"],
  },
  {
    name: "Chilli Seeds",
    image: chilliSeedsImg,
    tagline: "Concentrated Heat. Versatile Use.",
    description:
      "Chilli Seeds are extracted from premium dry red chillies, offering a concentrated source of natural heat and color. Mydex processes and grades chilli seeds for use in oil extraction, spice manufacturing and agricultural applications.",
    healthBenefits: [
      "Contains capsaicin compounds",
      "Rich in natural oils",
    ],
    varieties: ["Whole Chilli Seed", "Crushed Chilli Seed"],
    applications: ["Oil Extraction", "Spice Manufacturing", "Agricultural Use"],
  },
  {
    name: "Nutmeg (Jaiphal)",
    image: nutmegImg,
    tagline: "Warm. Sweet. Richly Aromatic.",
    description:
      "Nutmeg, known as Jaiphal, delivers a warm, sweet-spicy flavor prized in both culinary and wellness applications. Mydex sources sun-dried, hand-sorted nutmeg graded by size and oil content, available whole or milled for global buyers.",
    healthBenefits: [
      "Contains antioxidant compounds",
      "Traditionally used to aid digestion",
      "May support relaxation and sleep",
    ],
    varieties: ["Whole Nutmeg", "Nutmeg Powder", "Nutmeg Oil"],
    applications: ["Culinary Use", "Bakery & Confectionery", "Ayurvedic Formulations", "Extraction & Oleoresins"],
  },
  {
    name: "Mace (Javitri)",
    image: maceImg,
    tagline: "Delicate. Exotic. Prized Spice.",
    description:
      "Mace, or Javitri, is the delicate lace-like covering of the nutmeg seed, offering a refined flavor slightly sweeter and more subtle than nutmeg itself. Mydex sources hand-picked, sun-dried mace graded for color and blade size, packed to preserve its rich aroma.",
    healthBenefits: [
      "Contains antioxidant compounds",
      "Traditionally used to support digestion",
      "Rich in essential oils",
    ],
    varieties: ["Whole Mace Blades", "Mace Powder"],
    applications: ["Culinary Use", "Bakery", "Ayurvedic Formulations", "Extraction & Oleoresins"],
  },
]);

export default { category: spicesCategory, products: spicesProducts };