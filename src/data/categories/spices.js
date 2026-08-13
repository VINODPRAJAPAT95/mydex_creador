import { createProducts } from "../utils/createProduct";

import categoryImage from "../../assets/images/spices.png";

import redChilliImg   from "../../assets/images/spices/red-chilli.png";
import turmericImg    from "../../assets/images/spices/turmeric.png";
import cuminImg       from "../../assets/images/spices/cumin.png";
import corianderImg   from "../../assets/images/spices/coriander.png";
import fennelImg      from "../../assets/images/spices/fennel.png";
import fenugreekImg   from "../../assets/images/spices/fenugreek.png";
// import mustardImg     from "../../assets/images/spices/mustard.png";
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
    name: "Dry Red Chillies (Sookhi Lal Mirch)",
    image: redChilliImg,
    tagline: "Fiery. Vibrant. Naturally Sun-Dried.",
    description:
      "The Fiery Heart of Indian Cuisine\n\nFrom the vibrant fields of Andhra Pradesh to the spice markets of Karnataka, Indian Dry Red Chillies have set the world ablaze with their color, flavor, and heat.\n\nAt Mydex International, we take immense pride in exporting premium-quality red chillies — carefully sourced, sun-dried, and graded to meet global standards.\n\nMore than just a spice, red chillies symbolize India's passion for flavor — bold, bright, and full of life.",
    healthBenefits: [
      "Rich in capsaicin and antioxidants",
      "Supports metabolism",
      "Good source of vitamin C",
      "Boosts digestion",
    ],
    varieties: [
      { name: "Byadgi Chilli", details: "Karnataka · Low heat, deep red hue · Wrinkled skin · Usage: Color-rich curries, paste" },
      { name: "Guntur Chilli", details: "Andhra Pradesh · High pungency, bold heat · Usage: Spice powders, masalas, oleoresin" },
      { name: "Kashmiri Chilli", details: "Jammu & Kashmir · Mild heat, vivid red · Prized for color · Usage: Premium culinary blends" },
      { name: "Sannam (S4) Chilli", details: "Andhra Pradesh, Tamil Nadu · Mild heat, bright red · High ASTA color value · Usage: Color extraction, export" },
      { name: "Teja Chilli", details: "Andhra Pradesh · Heat: 40,000–50,000 SHU · High pungency · Usage: Chilli powder, oleoresin" },
    ],
    applications: [
      "Whole Chillies — Used for tempering (tadka) in curries and stews",
      "Ground Form — Blended into masalas, sauces, chutneys, and spice powders",
      "Infused Oils — Adds intense heat and flavor to cooking oils",
      "Processed Foods — Used in snacks, pickles, and spice-based seasonings",
    ],
  },

  {
    name: "Turmeric (Haldi)",
    image: turmericImg,
    tagline: "Golden Root. Global Superfood.",
    description:
      "Pure. Potent. Proudly Indian.\n\nKnown as the \"Golden Spice of India,\" turmeric is more than just a kitchen ingredient — it's a symbol of purity, healing, and tradition. From ancient Ayurveda to modern global cuisines, Indian turmeric has earned its place as one of the most valuable spices in the world.\n\nAt Mydex International, we export premium-quality turmeric sourced from India's most fertile regions, ensuring every batch is rich in color, curcumin, and aroma.\n\nOur turmeric embodies everything India stands for — warmth, wellness, and timeless flavor.",
    healthBenefits: [
      "High curcumin content",
      "Powerful anti-inflammatory properties",
      "Rich in antioxidants",
      "Supports immunity",
    ],
    varieties: [
      { name: "Alleppey Finger Turmeric", details: "Kerala · High curcumin 5–7% · Deep orange color · Usage: Extraction, nutraceuticals" },
      { name: "Erode Turmeric", details: "Tamil Nadu · Curcumin: 2–2.5% · High polish finish · Usage: Bulk trade, spice blends" },
      { name: "Rajapuri Turmeric", details: "Maharashtra · Bold fingers, mild aroma · Usage: Culinary, retail export" },
      { name: "Nizamabad Bulb Turmeric", details: "Telangana · Bulb type, high yield · Usage: Powder production, food coloring" },
      { name: "Salem Turmeric", details: "Tamil Nadu · Curcumin: ~3–3.5% · Bright yellow · Usage: Everyday cooking, export" },
      { name: "Sangli Turmeric", details: "Maharashtra · Fine texture, golden hue · Usage: Cosmetics, spice blends" },
      { name: "Madras Turmeric", details: "Tamil Nadu · Mild curcumin, light color · Usage: Food processing, seasoning" },
    ],
    applications: [
      "Culinary — Key ingredient in curries, sauces, and spice blends; adds natural color and earthy aroma to global dishes",
      "Pharmaceutical & Ayurvedic — Used in immunity boosters, supplements, and healing formulations",
      "Cosmetic — Found in creams, face masks, and herbal skincare products",
      "Textile & Dyeing — Used as a natural colorant for fabrics and crafts",
    ],
  },

  {
    name: "Cumin Seeds (Jeera)",
    image: cuminImg,
    tagline: "Earthy. Aromatic. Essential.",
    description:
      "Earthy, Fragrant, and Timelessly Indian\n\nCumin — known in India as Jeera — is one of the world's most ancient and beloved spices. Its warm, nutty aroma and earthy taste make it a staple in cuisines from India to the Middle East, Europe, and Latin America.\n\nAt Mydex International, we bring you premium-quality Indian cumin seeds, carefully sourced from the finest farms in Gujarat and Rajasthan.\n\nRenowned for their high oil content, bold aroma, and uniform size, our cumin seeds are celebrated globally for their purity, potency, and authentic flavor.",
    healthBenefits: [
      "Aids digestion",
      "Rich in iron",
      "Supports immune function",
      "Contains natural antioxidants",
    ],
    varieties: [
      { name: "European Grade", details: "Purity: 99.5%+ · Strict pesticide residue limits · Usage: EU-compliant premium export" },
      { name: "Singapore Grade", details: "Purity: 99% · Sortex cleaned, uniform size · Usage: Southeast Asia premium export" },
      { name: "Gujarat", details: "Bold aroma, high volatile oil · Machine cleaned · Usage: Bulk trade, food processing" },
      { name: "Rajasthan", details: "Earthy flavor, uniform grain · Low foreign matter · Usage: Spice blends, masalas" },
    ],
    applications: [
      "Culinary — Key ingredient in spice blends like garam masala and curry powder; used in soups, sauces, rice dishes, and pickles in Indian, Mexican, and Middle Eastern cooking",
      "Pharmaceutical & Ayurvedic — Used in digestive tonics, herbal teas, and immunity boosters",
      "Cosmetic & Wellness — Used in skincare for antibacterial and anti-inflammatory properties",
      "Essential Oils — Extracted for aromatherapy and medicinal formulations",
    ],
  },

  {
    name: "Coriander Seeds (Dhaniya)",
    image: corianderImg,
    tagline: "Citrusy. Mild. Timeless Flavor.",
    description:
      "Mild, Citrusy, and Wonderfully Aromatic\n\nSubtle yet powerful, Indian Coriander Seeds are the quiet hero of countless kitchens around the world. Known for their warm, citrusy aroma and sweet undertone, they add balance, freshness, and depth to every dish they touch.\n\nAt Mydex International, we export premium-grade coriander seeds sourced from India's leading spice belts — Gujarat, Rajasthan, and Madhya Pradesh.\n\nCarefully cleaned, graded, and processed under strict hygiene standards, our coriander seeds are prized for their uniform size, natural oils, and bold aroma, making them a favorite among importers, retailers, and food manufacturers worldwide.",
    healthBenefits: [
      "Supports digestive health",
      "Rich in dietary fiber",
      "Contains antioxidants",
      "May help regulate blood sugar",
    ],
    varieties: [
      { name: "Eagle", details: "Bold seed size · High oil content · Premium sortex cleaned · Usage: Premium retail, export" },
      { name: "Scooter", details: "Medium seed size · Consistent color & aroma · Usage: Bulk trade, spice blends" },
      { name: "Single Parrot", details: "Uniform grade · Good oil content · Usage: Food processing, masalas" },
      { name: "Double Parrot", details: "Larger bold seeds · Strong aroma · Usage: Premium export, direct retail" },
      { name: "Split", details: "Naturally split seeds · High surface area · Usage: Oil extraction, oleoresin processing" },
    ],
    applications: [
      "Culinary — Key ingredient in curry powders, garam masala, and spice blends; used whole for pickling and seasoning; ground form enhances sauces, soups, and chutneys",
      "Pharmaceutical & Ayurvedic — Used in traditional medicines for digestion, detox, and immunity",
      "Cosmetic & Personal Care — Used in skincare formulations for its anti-inflammatory and aromatic qualities",
      "Essential Oils & Extracts — Processed into essential oils used in perfumes, soaps, and herbal products",
    ],
  },

  {
    name: "Fennel Seeds (Saunf)",
    image: fennelImg,
    tagline: "Sweet. Aromatic. Naturally Soothing.",
    description:
      "Nature's Fragrant Gift from India\n\nDelicately sweet, refreshing, and deeply aromatic — Indian Fennel Seeds (Saunf) are one of nature's most delightful spices. Known for their cooling taste and vibrant green hue, they bring a touch of freshness to both the palate and the senses.\n\nAt Mydex International, we export premium-quality fennel seeds sourced from India's prime growing regions — Rajasthan and Gujarat. Our fennel seeds are carefully cleaned, graded, and processed to preserve their natural color, flavor, and essential oils, ensuring every batch meets the highest global quality standards.\n\nFrom spice blends to herbal teas and confectionery, Mydex's fennel seeds bring purity, freshness, and authenticity to every use.",
    healthBenefits: [
      "Supports digestion",
      "Rich in fiber and antioxidants",
      "Traditionally used to freshen breath",
      "May support respiratory health",
    ],
    varieties: [
      { name: "Premium Green", details: "Deep vibrant green · Bold size · High essential oil content · Usage: Premium retail, mouth fresheners" },
      { name: "Regular", details: "Uniform seed size · Consistent color & aroma · Usage: Bulk export, spice blends" },
      { name: "Bold", details: "Large bold seeds · Strong aroma · Sortex cleaned · Usage: Food processing, retail packs" },
      { name: "Split", details: "Naturally split seeds · High surface area · Usage: Oil extraction, herbal processing" },
      { name: "Organic", details: "Certified organic · No pesticide residue · Usage: Organic retail, herbal & wellness products" },
    ],
    applications: [
      "Culinary — Essential in Indian curries, pickles, and baked goods; used in spice blends, teas, and beverages; added to confectionery for aroma and sweetness",
      "Pharmaceutical & Herbal — Used in digestive tonics, cough syrups, and herbal teas",
      "Cosmetic — Used in natural skincare and oral care products for freshness",
      "Oil Extraction — Fennel seed oil is widely used in perfumes, aromatherapy, and herbal formulations",
    ],
  },

  {
    name: "Fenugreek Seeds (Methi)",
    image: fenugreekImg,
    tagline: "Bitter-Sweet. Nutrient-Dense. Time-Tested.",
    description:
      "Earthy, Aromatic, and Naturally Nutritious\n\nDistinctively bold, slightly bitter, and deeply aromatic — Indian Fenugreek Seeds (Methi) are one of the oldest cultivated spices known to humankind. Revered for their culinary versatility and medicinal value, these tiny golden seeds are a cornerstone of Indian tradition and an increasingly popular ingredient in global cuisines and wellness products.\n\nAt Mydex International, we supply and export premium-grade fenugreek seeds grown in the fertile lands of Rajasthan and Gujarat, where ideal soil and climate conditions yield seeds rich in flavor, color, and nutrition.\n\nEach Mydex fenugreek seed tells a story of purity, potency, and care — connecting ancient Indian heritage to modern health-conscious consumers worldwide.",
    healthBenefits: [
      "Supports blood sugar regulation",
      "Rich in soluble fiber",
      "May support lactation",
      "Contains antioxidant compounds",
    ],
    varieties: [
      { name: "Machine Cleaned", details: "Amber-yellow seed · Low foreign matter · Uniform size · Usage: Bulk export, food processing" },
      { name: "Sortex Cleaned", details: "Optical sortex processed · 99%+ purity · Usage: Premium retail, pharmaceutical grade" },
      { name: "Organic", details: "Certified organic · No pesticide residue · Usage: Organic retail, nutraceuticals, wellness products" },
    ],
    applications: [
      "Culinary — Integral to curry powders, pickles, and spice blends; used as a tempering agent in Indian, African, and Mediterranean cuisines; ground into powder for sauces and pastes",
      "Pharmaceutical & Ayurvedic — Used in herbal formulations for blood sugar management, digestion, and immunity",
      "Cosmetic & Nutraceutical — Common in hair oils, shampoos, and dietary supplements",
      "Industrial — Used as a base for flavoring extracts and natural thickeners",
    ],
  },

  // ✅ FIX: healthBenefits field add kiya
  // {
  //   name: "Mustard Seeds (Sarson/Rai)",
  //   image: mustardImg,
  //   tagline: "Small in Size, Big in Flavor",
  //   description:
  //     "Pungent, powerful, and full of personality — Indian Mustard Seeds (Rai) are among the most cherished spices across global cuisines. From sizzling Indian curries to tangy European mustards, these tiny seeds pack a punch of flavor that brings dishes to life. At Mydex International, we source and export premium-quality mustard seeds grown in India's leading agricultural regions — Rajasthan, Gujarat, and Madhya Pradesh. Each batch is meticulously cleaned, sorted, and tested, ensuring perfect aroma, oil content, and purity that meet the standards of the global spice trade. With Mydex, every mustard seed carries the authentic essence of India — robust, earthy, and full of character.",
  //   healthBenefits: [
  //     "Rich in omega-3 fatty acids",
  //     "Contains powerful antioxidant compounds",
  //     "May support heart health",
  //     "Good source of selenium and magnesium",
  //   ],
  //   varieties: [
  //     { name: "Yellow", scientificName: "Brassica Alba", details: "Mild pungency, golden color · Usage: Condiments, sauces" },
  //     { name: "Black", scientificName: "Brassica Nigra", details: "Sharp pungency, dark seed · Usage: Tempering, oil extraction" },
  //     { name: "Brown", scientificName: "Brassica Juncea", details: "Medium pungency · Usage: Pickling, spice blends" },
  //   ],
  //   applications: [
  //     "Tempering and seasoning in Indian and Asian dishes",
  //     "Essential in sauces, pickles, condiments, and salad dressings",
  //     "Used in mustard paste and oil production",
  //     "Extraction of mustard oil, used in cooking and massage",
  //     "Mustard seed powder used in herbal and detox formulations",
  //     "Employed in preservative and flavoring industries",
  //     "Used in skincare and haircare oils for natural nourishment",
  //   ],
  // },

  {
    name: "Annatto Seeds (Sindoori)",
    image: annattoImg,
    tagline: "Bringing Nature's Red-Gold to the World",
    description:
      "Vibrant, versatile, and 100% natural — Indian Annatto Seeds (Bixa Orellana) are a radiant gift from nature. Known for their deep orange-red hue, these seeds have been used for centuries as a natural colorant and flavor enhancer in foods, cosmetics, and textiles. At Mydex International, we supply and export premium-quality annatto seeds, carefully harvested from India's tropical regions where the air, soil, and sunlight combine to create the perfect pigment potency. Our annatto products are renowned globally for their rich color value, purity, and natural extraction properties — making them a preferred choice for food manufacturers, cosmetic brands, and health-conscious consumers worldwide.",
    healthBenefits: [
      "Natural source of carotenoids and antioxidants",
      "Contains tocotrienols (vitamin E compounds)",
      "Traditionally used for antimicrobial properties",
      "May support eye health",
    ],
    varieties: [
      { name: "Organic", details: "Grown without synthetic inputs · Usage: Clean-label food coloring" },
      { name: "Conventional", details: "Standard cultivation · Usage: Bulk food & industrial coloring" },
      { name: "Annatto Powder", details: "Finely ground, concentrated pigment · Usage: Food & cosmetic coloring" },
      { name: "Annatto Extract", scientificName: "Bixin & Norbixin", details: "Liquid/oil-based extract · Usage: Industrial coloring applications" },
    ],
    applications: [
      "Used as a coloring agent in cheese, butter, margarine, snacks, and beverages",
      "Blended into spice powders and sauces for natural tinting",
      "Used in organic and vegan food products as a clean-label pigment",
      "Found in lipsticks, soaps, and natural skin creams",
      "Used in herbal supplements and health formulations",
      "Used in eco-friendly dyeing of fabrics and natural fibers",
    ],
  },

  {
    name: "Black Pepper (Kali Mirch)",
    image: blackPepperImg,
    tagline: "Bold, Aromatic, and Timelessly Indian",
    description:
      "Known across the world as the \"King of Spices,\" Indian Black Pepper (Kali Mirch) is one of the oldest and most prized seasonings in human history. Native to the lush Western Ghats of India, black pepper was once known as black gold — treasured for its rich aroma, sharp heat, and health-boosting qualities. At Mydex International, we take pride in exporting premium Indian black pepper sourced from Kerala, Karnataka, and Tamil Nadu — regions famed for producing pepper of exceptional pungency, boldness, and essential oil content. Each peppercorn tells a story — of tropical rain, fertile soil, and India's legendary spice heritage brought to life in every grain.",
    healthBenefits: [
      "Contains piperine which enhances nutrient absorption",
      "Rich in antioxidants",
      "May support digestive health",
      "Traditionally used as an anti-inflammatory",
    ],
    varieties: [
      { name: "Malabar Garbled", scientificName: "MG1 / MG2", details: "Bold, clean berries · Usage: Premium export grade" },
      { name: "Tellicherry Garbled", scientificName: "TGSEB / TGEB", details: "Large, dense berries · Usage: Premium culinary export" },
      { name: "Malabar Ungarbled", scientificName: "MUG", details: "Unsorted, natural grade · Usage: Bulk trade, processing" },
      { name: "Organic", details: "Grown without synthetic inputs · Usage: Clean-label culinary export" },
    ],
    applications: [
      "A key seasoning in sauces, soups, marinades, and spice blends",
      "Used whole, cracked, or ground for diverse cuisines worldwide",
      "Enhances flavor in meats, vegetables, and beverages",
      "Used in Ayurvedic and modern supplements to improve nutrient absorption",
      "Key ingredient in digestive and anti-inflammatory formulations",
      "Used in essential oil production and natural preservatives",
    ],
  },

  {
    name: "Green Cardamom (Elaichi)",
    image: greenCardamomImg,
    tagline: "Elegant Aroma. Exquisite Flavor. Endlessly Indian.",
    description:
      "Fragrant, luxurious, and deeply evocative — Indian Green Cardamom (Elaichi) is known across the world as the \"Queen of Spices.\" Its enchanting aroma and subtly sweet flavor make it one of the most treasured spices in both Eastern and Western cuisines. At Mydex International, we proudly export premium-quality green cardamom sourced from the lush plantations of Kerala, Tamil Nadu, and Karnataka — regions blessed with tropical rains and fertile soils that yield the world's most aromatic pods. Our cardamom embodies the essence of India — rich in aroma, refined in flavor, and revered for purity.",
    healthBenefits: [
      "Supports digestive health",
      "Rich in antioxidants",
      "May support oral health",
      "Traditionally used to freshen breath",
    ],
    varieties: [
      { name: "Bold", scientificName: "8mm & above", details: "Deep green pods · Usage: Premium retail, gifting" },
      { name: "Superior", scientificName: "7–8mm", details: "Strong aroma · Usage: Culinary, beverage flavoring" },
      { name: "Medium", scientificName: "6–7mm", details: "Standard grade · Usage: Bulk trade, confectionery" },
      { name: "Small", scientificName: "Below 6mm", details: "Compact pods · Usage: Processing, powder production" },
      { name: "Organic", details: "Grown without synthetic inputs · Usage: Clean-label culinary export" },
    ],
    applications: [
      "Enhances flavor in curries, desserts, and beverages",
      "A key ingredient in chai blends, biryanis, and sweets",
      "Used in baking, confectionery, and flavored syrups",
      "Used in Ayurvedic tonics and natural digestion aids",
      "Added to herbal teas for aroma and detoxifying effects",
      "Cardamom oil used in perfumes, soaps, and essential oils",
      "Added to mouth fresheners and natural breath sprays",
    ],
  },

  {
    name: "Black Cardamom (Badi Elaichi)",
    image: blackCardamomImg,
    tagline: "Deep Aroma. Bold Flavor. True Indian Character.",
    description:
      "Rich, smoky, and irresistibly aromatic — Indian Black Cardamom (Badi Elaichi) stands as one of India's most powerful and distinctive spices. Known for its earthy flavor and warm notes, it brings depth and richness to both traditional and gourmet dishes worldwide. At Mydex International, we export premium-quality black cardamom sourced from India's northeastern regions, where the perfect blend of altitude, humidity, and soil yields pods packed with flavor and essential oils. Our black cardamom captures the essence of India's mountains — bold, smoky, and full of character — making it a favorite among chefs, food processors, and spice traders across continents.",
    healthBenefits: [
      "Rich in antioxidants",
      "Traditionally used to support respiratory health",
      "May aid digestion",
      "Contains natural antimicrobial compounds",
    ],
    varieties: [
      { name: "Whole Pods", details: "Sun-dried, smoky aroma · Usage: Masalas, savory dishes" },
      { name: "Split Pods", details: "Cracked open pods · Usage: Faster infusion, spice blends" },
      { name: "Seeds Only", scientificName: "Decorticated", details: "Pod-free seeds · Usage: Grinding, powder production" },
      { name: "Organic", details: "Grown without synthetic inputs · Usage: Clean-label culinary export" },
    ],
    applications: [
      "Essential in Indian curries, biryanis, and garam masala blends",
      "Adds depth to sauces, soups, and stews",
      "Used in meat marinades, pickles, and smoked foods",
      "Used in Ayurvedic medicines and digestive tonics",
      "Extracted for essential oils and natural aroma compounds",
      "Used in perfumery, aromatherapy, and natural deodorants",
    ],
  },

  {
    name: "Cloves (Laung)",
    image: cloveImg,
    tagline: "Intense Aroma. Timeless Healing. Pure Indian Essence.",
    description:
      "Rich, warm, and powerfully aromatic — Indian Cloves (Laung) are among the most treasured spices in global trade and traditional medicine. Their distinct flavor and unmistakable fragrance have made them a staple in kitchens, apothecaries, and perfumeries for centuries. At Mydex International, we export premium-quality Indian cloves sourced from India's renowned spice regions — Kerala, Tamil Nadu, and Karnataka — where the perfect tropical climate nurtures clove buds bursting with essential oil, warmth, and natural intensity. Each Mydex clove is a tiny powerhouse of flavor, aroma, and wellness, delivering purity that defines India's spice legacy.",
    healthBenefits: [
      "High in eugenol, a powerful antioxidant",
      "Traditionally used for dental pain relief",
      "May support liver health",
      "Contains natural antimicrobial properties",
    ],
    varieties: [
      { name: "Zanzibar Cloves", scientificName: "Indian Origin", details: "Hand-picked, sun-dried · High oil content · Usage: Culinary, oral care" },
      { name: "Madagascar Type Cloves", scientificName: "Indian Cultivation", details: "Bold aroma, plump buds · Usage: Premium export, spice blends" },
      { name: "Clove Stems & Clove Powder", details: "Finely ground stems and buds · Usage: Spice blends, extraction" },
      { name: "Organic", details: "Grown without synthetic inputs · Usage: Clean-label culinary export" },
    ],
    applications: [
      "Essential in curries, biryanis, soups, and stews",
      "Used in spice blends like garam masala and chai masala",
      "Adds warmth to bakery, desserts, and beverages",
      "Used in pain-relief balms, toothpastes, and cough syrups",
      "Common in natural antiseptic and anti-inflammatory products",
      "Extracted for clove essential oil used in perfumes and skincare",
      "Used in soaps and oral hygiene products for its soothing scent",
    ],
  },

  {
    name: "Bay Leaves (Tej Patta)",
    image: bayLeafImg,
    tagline: "Subtle Aroma. Timeless Taste. A Leaf from India's Heritage.",
    description:
      "Elegant and aromatic, Indian Bay Leaves (Tej Patta) are one of the most ancient and beloved flavoring agents in global cuisine. Known for their mild yet distinctive fragrance, they infuse dishes with depth, warmth, and character. At Mydex International, we export premium-quality bay leaves sourced from India's northeastern and Himalayan regions — areas renowned for their pure air, rich soil, and ideal climate that produce leaves with superior color, aroma, and natural oil content. Each bay leaf from Mydex is more than a spice — it's a whisper of India's culinary history, carried to kitchens around the world.",
    healthBenefits: [
      "Contains antioxidant compounds",
      "Traditionally used to support digestion",
      "May help manage blood sugar levels",
      "Rich in vitamins A and C",
    ],
    varieties: [
      { name: "Whole", scientificName: "Grade A", details: "Sun-dried, intact leaf · Usage: Soups, stocks, slow-cooked dishes" },
      { name: "Broken", scientificName: "Grade B", details: "Fragmented leaf, cost-effective · Usage: Bulk food processing" },
      { name: "Ground Bay Leaf Powder", details: "Finely ground · Usage: Spice blends, herbal products" },
    ],
    applications: [
      "Essential in curries, rice dishes, soups, and sauces",
      "Used in Indian garam masala and Mediterranean cuisines",
      "Adds depth to marinades, stews, and slow-cooked recipes",
      "Used in traditional medicine for digestion and respiratory health",
      "Infused into teas and essential oils for therapeutic benefits",
      "Used in perfumery, potpourri, and natural skincare formulations",
    ],
  },

  {
    name: "Cassia / Cinnamon Bark (Dalchini)",
    image: cassiaImg,
    tagline: "Spice of Warmth. Symbol of Tradition. Essence of India.",
    description:
      "Fragrant, woody, and comforting — Indian Cassia (Dalchini) is one of the world's most cherished spices, adding warmth and depth to cuisines and creations across continents. Often known as Indian cinnamon, cassia's sweet-spicy flavor and rich aroma make it a staple ingredient in baking, beverages, curries, and herbal blends alike. At Mydex International, we export premium-quality Indian cassia sourced from the spice-rich regions of Tamil Nadu, Kerala, and North-Eastern India. Every bark we select is naturally harvested, sun-dried, and carefully graded for color, texture, and essential oil content — ensuring unmatched purity and performance in every shipment. Our cassia carries the warmth of India's spice heritage — one that brings comfort to cuisines and value to brands worldwide.",
    healthBenefits: [
      "May help regulate blood sugar levels",
      "Contains antioxidant and anti-inflammatory compounds",
      "Traditionally used to support digestion",
      "Rich in cinnamaldehyde and essential oils",
    ],
    varieties: [
      { name: "Cassia Sticks", scientificName: "Quills", details: "Rolled bark sticks · Bold, sweet-spicy · Usage: Beverage flavoring, culinary" },
      { name: "Cassia Broken Pieces", scientificName: "Chips", details: "Fragmented bark pieces · Usage: Bulk trade, spice blends" },
      { name: "Cassia Powder", details: "Finely ground bark · Usage: Bakery, spice blends" },
    ],
    applications: [
      "Used in curries, spice mixes, desserts, and bakery products",
      "Adds flavor to teas, lattes, and mulled wines",
      "A key ingredient in garam masala and chai blends",
      "Used in herbal medicines for diabetes, digestion, and inflammation",
      "Added to tonics, supplements, and traditional remedies",
      "Cassia oil is used in perfumes, soaps, and aromatherapy",
      "Used in incense, natural room fragrances, and flavor extracts",
    ],
  },

  {
    name: "Dill Seeds (Sowa)",
    image: dillSeedsImg,
    tagline: "Mildly Sweet. Distinctly Aromatic. Wonderfully Indian.",
    description:
      "Delicate yet distinctive, Indian Dill Seeds (Suva or Sowa) bring a touch of herbal freshness and soft sweetness to kitchens and wellness blends across the world. Known for their unique aroma and mild, anise-like flavor, these seeds are as versatile as they are healthful. At Mydex International, we export premium-grade dill seeds cultivated in the fertile regions of Gujarat and Rajasthan, where perfect climate conditions ensure seeds with high essential oil content, superior aroma, and rich flavor. From culinary creations to pharmaceutical formulations, Mydex's dill seeds stand for purity, potency, and global quality excellence.",
    healthBenefits: [
      "Supports digestive health",
      "Rich in flavonoids and antioxidants",
      "May support bone health",
      "Traditionally used to reduce bloating",
    ],
    varieties: [
      { name: "Whole", details: "Well-matured, intact seed · Usage: Pickling, culinary use" },
      { name: "Sortex Cleaned", details: "Optical sortex processed, high purity · Usage: Premium retail, export" },
      { name: "Organic", details: "Grown without synthetic inputs · Usage: Clean-label culinary, wellness products" },
    ],
    applications: [
      "Used in pickles, soups, curries, and salads",
      "Adds flavor to breads, sauces, and seasoning blends",
      "Commonly used in European and Middle Eastern cuisines",
      "Used in digestive tonics, teas, and syrups",
      "Extracted for essential oils in herbal remedies",
      "Dill seed oil used in perfumes, soaps, and skincare products",
      "Added to aromatherapy blends for stress relief",
    ],
  },

  {
    name: "Dry Ginger (Sonth)",
    image: dryGingerImg,
    tagline: "Zesty Aroma. Healing Power. Ancient Indian Vitality.",
    description:
      "Fiery, fragrant, and full of life — Indian Dry Ginger (Sonth / Sukku) is one of nature's most potent spices, loved not only for its bold flavor but also for its remarkable health benefits. For centuries, ginger has been celebrated in Ayurveda as a warming tonic that revitalizes the body, strengthens immunity, and enhances digestion. At Mydex International, we export premium-quality dry ginger sourced from India's finest ginger-growing regions — Kerala, Meghalaya, and Sikkim. Our ginger is naturally sun-dried and processed to retain its strong aroma, sharp taste, and high volatile oil content, ensuring superior performance in culinary and pharmaceutical applications alike. Every root we export carries the legacy of India's spice heritage — pure, powerful, and globally trusted.",
    healthBenefits: [
      "Powerful anti-inflammatory and antioxidant properties",
      "Supports digestion and reduces nausea",
      "May support immune function",
      "Traditionally used for joint pain relief",
    ],
    varieties: [
      { name: "Whole", scientificName: "Split / Whole Form", details: "Sun-dried rhizome · Usage: Ayurvedic use, culinary" },
      { name: "Ginger Powder", scientificName: "Ground Form", details: "Finely ground, high oleoresin content · Usage: Beverages, nutraceuticals" },
      { name: "Coarse Cut Ginger Flakes", details: "Chopped, faster infusion · Usage: Extraction, food processing" },
    ],
    applications: [
      "Adds warmth and flavor to spice mixes, baked goods, and beverages",
      "Used in masala chai, curries, soups, and candies",
      "Common in sauces, marinades, and desserts",
      "Used in traditional medicines, tonics, and pain-relief formulations",
      "Common ingredient in herbal teas and supplements",
      "Used in the production of ginger oil and oleoresins",
      "Added to cosmetics and aromatherapy products for soothing properties",
    ],
  },

  {
    name: "Carom Seeds (Ajwain)",
    image: caromSeedsImg,
    tagline: "Bold Flavor. Ancient Remedy. True Indian Strength.",
    description:
      "Pungent, peppery, and powerfully aromatic — Indian Carom Seeds (Ajwain) are one of the most distinctive and therapeutic spices in Indian tradition. Known for their sharp taste and intense aroma, ajwain seeds are both a culinary essential and a natural healer. At Mydex International, we export premium-grade carom seeds cultivated in the arid yet fertile regions of Rajasthan and Gujarat, where the warm climate produces seeds rich in thymol, the compound responsible for their signature flavor and health benefits. Each Mydex ajwain seed is a symbol of India's traditional wisdom blended with modern purity standards — spicy, powerful, and remarkably pure.",
    healthBenefits: [
      "Rich in thymol, a natural antiseptic",
      "Traditionally used to relieve indigestion and bloating",
      "May support respiratory health",
      "Contains antifungal and antibacterial properties",
    ],
    varieties: [
      { name: "Machine Cleaned", details: "Amber-brown seed · Low foreign matter · Usage: Bulk export, food processing" },
      { name: "Sortex Cleaned", details: "Optical sortex processed · High purity · Usage: Premium retail, pharmaceutical grade" },
      { name: "Organic", details: "Grown without synthetic inputs · Usage: Clean-label culinary, wellness products" },
    ],
    applications: [
      "Essential in Indian tempering (tadka), curries, and bread (paratha, mathri)",
      "Used in pickles, snacks, and spice blends for strong aroma and taste",
      "Adds warmth to lentils, soups, and baked products",
      "Used in digestive tonics, antacids, and cold remedies",
      "Extracted for thymol oil used in medicines and disinfectants",
      "Used in natural antiseptic formulations and oral care products",
    ],
  },

  {
    name: "Chilli Seeds (Mirch ke Beej)",
    image: chilliSeedsImg,
    tagline: "Powerful. Pungent. Perfectly Indian.",
    description:
      "The heart of every fiery dish begins with a seed — Indian Chilli Seeds, the pure essence of heat and flavor. Known for their intense pungency, deep red pigment, and high capsaicin content, these seeds are prized globally not only as a source of spice but also as a key ingredient in oil extraction, spice cultivation, and natural flavor enhancement. At Mydex International, we export premium-quality chilli seeds sourced from India's leading chilli-growing belts — Andhra Pradesh, Telangana, Karnataka, and Madhya Pradesh. Each batch is meticulously cleaned, graded, and processed to preserve potency, color value, and oil content, ensuring top-tier quality for culinary and industrial applications. Our chilli seeds embody the true spirit of India — bold, fiery, and full of life.",
    healthBenefits: [
      "High in capsaicin, a natural metabolism booster",
      "Rich in vitamin C and antioxidants",
      "May support cardiovascular health",
      "Traditionally used as a natural pain reliever",
    ],
    varieties: [
      { name: "Sannam (S4)", details: "Mild heat, bright red · High ASTA color value · Usage: Color extraction, export" },
      { name: "Teja", details: "Heat: 40,000–50,000 SHU · High pungency · Usage: Chilli powder, oleoresin" },
      { name: "Byadgi", details: "Low heat, deep red hue · Wrinkled skin · Usage: Color-rich curries, paste" },
      { name: "Guntur", details: "High pungency, bold heat · Usage: Spice powders, masalas, oleoresin" },
      { name: "Kashmiri", details: "Mild heat, vivid red · Prized for color · Usage: Premium culinary blends" },
    ],
    applications: [
      "Used in spice powders, sauces, pickles, and seasoning mixes",
      "Key ingredient in chili oil and oleoresin production",
      "Used as high-quality planting seeds for commercial chili farming",
      "Used in the production of natural pain-relief balms and creams",
      "Extracted for capsaicin used in nutraceuticals and defense sprays",
    ],
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
      "Rich in essential minerals like manganese",
    ],
    varieties: [
      { name: "Whole Nutmeg", details: "Sun-dried, hand-sorted · Usage: Culinary, bakery" },
      { name: "Nutmeg Powder", details: "Finely milled · Sweet-spicy aroma · Usage: Bakery, confectionery" },
      { name: "Nutmeg Oil", details: "Steam-distilled essential oil · Usage: Ayurvedic formulations, aromatherapy" },
    ],
    applications: [
      "Culinary Use",
      "Bakery & Confectionery",
      "Ayurvedic Formulations",
      "Extraction & Oleoresins",
    ],
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
      "May support cognitive function",
    ],
    varieties: [
      { name: "Whole Mace Blades", details: "Hand-picked, lace-like blades · Usage: Culinary, bakery" },
      { name: "Mace Powder", details: "Finely ground · Delicate aroma · Usage: Ayurvedic formulations, extracts" },
    ],
    applications: [
      "Culinary Use",
      "Bakery",
      "Ayurvedic Formulations",
      "Extraction & Oleoresins",
    ],
  },
]);

export default { category: spicesCategory, products: spicesProducts };