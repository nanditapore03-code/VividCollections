// Import all ring images
import five_hoops from "../assets/rings/five_hoops_ring.png";
import five_hoops_hand from "../assets/rings/five_hoops_ring_hand.png";
import double_sliding_hoops from "../assets/rings/double_sliding_hoops_ring.png";
import double_sliding_hoops_hand from "../assets/rings/double_sliding_hoops_ring_hand.png";
import triple_sliding_hoops_white_gold from "../assets/rings/triple_sliding_hoops_ring_white_gold.png";
import triple_sliding_hoops_white_gold_hand from "../assets/rings/triple_sliding_hoops_ring_white_gold_hand.png";
import triple_sliding_hoops_rose_gold from "../assets/rings/triple_sliding_hoops_ring_rose_gold.png";
import triple_sliding_hoops_rose_gold_hand from "../assets/rings/triple_sliding_hoops_ring_rose_gold_hand.png";
import linear_pave from "../assets/rings/linear_pave_ring.png";
import linear_pave_hand from "../assets/rings/linear_pave_ring_hand.png";
import baby_snow_white_gold from "../assets/rings/baby_snow_ring_white_gold.png";
import baby_snow_white_gold_hand from "../assets/rings/baby_snow_ring_white_gold_hand.png";
import statement_galet from "../assets/rings/statement_galet_ring.png";
import statement_galet_hand from "../assets/rings/statement_galet_ring_hand.png";
import wavy_gold from "../assets/rings/wavy_gold_ring.png";
import wavy_gold_hand from "../assets/rings/wavy_gold_ring_hand.png";
import love_morse_code from "../assets/rings/love_morse_code_ring.png";
import love_morse_code_hand from "../assets/rings/love_morse_code_ring_hand.png";
import up_and_down_white_gold from "../assets/rings/up_and_down_ring_white_gold.png";
import up_and_down_white_gold_hand from "../assets/rings/up_and_down_ring_white_gold_hand.png";
import up_and_down_rose_gold from "../assets/rings/up_and_down_ring_rose_gold.png";
import up_and_down_rose_gold_hand from "../assets/rings/up_and_down_ring_rose_gold_hand.png";
import triple_sliding_hoops_diamond_rose_gold from "../assets/rings/triple_sliding_hoops_diamond_ring_rose_gold.png";
import triple_sliding_hoops_diamond_rose_gold_hand from "../assets/rings/triple_sliding_hoops_diamond_ring_rose_gold_hand.png";
import triple_sliding_hoops_diamond_white_gold from "../assets/rings/triple_sliding_hoops_diamond_ring_white_gold.png";
import triple_sliding_hoops_diamond_white_gold_hand from "../assets/rings/triple_sliding_hoops_diamond_ring_white_gold_hand.png";
import triple_sliding_hoops_diamond_yellow_gold from "../assets/rings/triple_sliding_hoops_diamond_ring_yellow_gold.png";
import triple_sliding_hoops_diamond_yellow_gold_hand from "../assets/rings/triple_sliding_hoops_diamond_ring_yellow_gold_hand.png";
import linear_chain from "../assets/rings/linear_chain_ring.png";
import linear_chain_hand from "../assets/rings/linear_chain_ring_hand.png";
import dome_ring from "../assets/rings/dome_ring.png";
import dome_ring_hand from "../assets/rings/dome_ring_hand.png";

// Categories for Rings
export const ringCategories = [
  'All Rings',
  'Dainty',
  'Pave',
  'Stacking',
  'Statement',
  'Wedding Bands'
];

// Available ring sizes
export const ringSizes = ['48', '50', '52', '54', '56', '58', '60'];

// Ring-specific filter options
export const ringFilterOptions = {
  color: ['White Gold', 'Yellow Gold', 'Rose Gold'],
  stone: ['Zirconia', 'Malachite', 'Nacre', 'Diamond'],
  collection: ['Classic', 'Modern', 'Vintage', 'Baby Snow'],
  style: ['Minimalist', 'Ornate', 'Geometric', 'Organic'],
  size: ['48', '50', '52', '54', '56', '58', '60']
};

// Ring Products Data
export const ringProducts = [
  {
    id: 1,
    type: 'ring',
    name: 'Five-Hoop Ring',
    price: 185,
    badge: null,
    category: 'Statement',
    metalColors: ['Yellow Gold'],
    material: 'Sterling silver',
    stone: 'White cubic zirconia',
    collection: 'Modern',
    style: 'Geometric',
    availableSizes: ['48', '50', '52', '54', '56', '58', '60'],
    description: 'A stunning five-hoop design that creates a bold statement. This architectural piece features interlocking hoops that move gracefully with your hand.',
    sku: 'A23701YG-052',
    images: {
      'Yellow Gold': {
        main: five_hoops,
        hover: five_hoops_hand
      }
    }
  },
  {
    id: 2,
    type: 'ring',
    name: 'Double Ring with Sliding Hoops',
    price: 155,
    badge: null,
    category: 'Stacking',
    metalColors: ['Yellow Gold'],
    material: 'Sterling silver',
    stone: 'White cubic zirconia',
    collection: 'Modern',
    style: 'Geometric',
    availableSizes: ['48', '50', '52', '54', '56', '58', '60'],
    description: 'An innovative design featuring two sliding hoops that create a dynamic, playful aesthetic. Perfect for modern jewelry lovers.',
    sku: 'A23702YG-052',
    images: {
      'Yellow Gold': {
        main: double_sliding_hoops,
        hover: double_sliding_hoops_hand
      }
    }
  },
  {
    id: 3,
    type: 'ring',
    name: 'Triple Ring with Sliding Hoops',
    price: 182,
    badge: 'Must Have',
    category: 'Stacking',
    metalColors: ['White Gold', 'Rose Gold'],
    material: 'Sterling silver',
    stone: 'White cubic zirconia',
    collection: 'Modern',
    style: 'Geometric',
    availableSizes: ['48', '50', '52', '54', '56', '58', '60'],
    description: 'Three interlocking hoops slide gracefully, creating endless styling possibilities. A versatile piece that transitions from day to night.',
    sku: 'A23703WG-052',
    images: {
      'White Gold': {
        main: triple_sliding_hoops_white_gold,
        hover: triple_sliding_hoops_white_gold_hand
      },
      'Rose Gold': {
        main: triple_sliding_hoops_rose_gold,
        hover: triple_sliding_hoops_rose_gold_hand
      }
    }
  },
  {
    id: 4,
    type: 'ring',
    name: 'Diamond Triple Ring with Sliding Hoops',
    price: 182,
    badge: null,
    category: 'Pave',
    metalColors: ['Rose Gold', 'White Gold', 'Yellow Gold'],
    material: 'Sterling silver',
    stone: 'Diamond',
    collection: 'Modern',
    style: 'Ornate',
    availableSizes: ['48', '50', '52', '54', '56', '58', '60'],
    description: 'Elevated with sparkling pavé diamonds, this triple hoop design combines movement with brilliance. A luxurious take on our signature style.',
    sku: 'A23704RG-052',
    images: {
      'Rose Gold': {
        main: triple_sliding_hoops_diamond_rose_gold,
        hover: triple_sliding_hoops_diamond_rose_gold_hand
      },
      'White Gold': {
        main: triple_sliding_hoops_diamond_white_gold,
        hover: triple_sliding_hoops_diamond_white_gold_hand
      },
      'Yellow Gold': {
        main: triple_sliding_hoops_diamond_yellow_gold,
        hover: triple_sliding_hoops_diamond_yellow_gold_hand
      }
    }
  },
  {
    id: 5,
    type: 'ring',
    name: 'Linear Pave Ring',
    price: 91,
    badge: null,
    category: 'Pave',
    metalColors: ['Yellow Gold'],
    material: 'Sterling silver',
    stone: 'Zirconia',
    collection: 'Classic',
    style: 'Minimalist',
    availableSizes: ['48', '50', '52', '54', '56', '58', '60'],
    description: 'A sleek linear design adorned with pavé stones creates a contemporary, minimalist aesthetic. Perfect for everyday elegance.',
    sku: 'A23705YG-052',
    images: {
      'Yellow Gold': {
        main: linear_pave,
        hover: linear_pave_hand
      }
    }
  },
  {
    id: 6,
    type: 'ring',
    name: 'Linear Chain Ring',
    price: 200,
    badge: null,
    category: 'Dainty',
    metalColors: ['White Gold'],
    material: 'Sterling silver',
    stone: 'White cubic zirconia',
    collection: 'Classic',
    style: 'Minimalist',
    availableSizes: ['48', '50', '52', '54', '56', '58', '60'],
    description: 'Delicate chain details create a refined, sophisticated look. This dainty piece adds subtle texture and movement.',
    sku: 'A23706WG-052',
    images: {
      'White Gold': {
        main: linear_chain,
        hover: linear_chain_hand
      }
    }
  },
  {
    id: 7,
    type: 'ring',
    name: 'Baby Snow Yummy Bear Ring with Beads',
    price: 117,
    badge: 'Baby Snow',
    category: 'Statement',
    metalColors: ['White Gold', 'Yellow Gold'],
    material: 'Sterling silver',
    stone: 'White cubic zirconia',
    collection: 'Baby Snow',
    style: 'Ornate',
    availableSizes: ['48', '50', '52', '54', '56', '58', '60'],
    description: 'From our playful Baby Snow collection, this whimsical design features charming bead details that bring joy to any outfit.',
    sku: 'A23707WG-052',
    images: {
      'White Gold': {
        main: baby_snow_white_gold,
        hover: baby_snow_white_gold_hand
      },
      'Yellow Gold': {
        main: baby_snow_white_gold,
        hover: baby_snow_white_gold_hand
      }
    }
  },
  {
    id: 8,
    type: 'ring',
    name: 'Up And Down Ring',
    price: 104,
    badge: null,
    category: 'Dainty',
    metalColors: ['White Gold', 'Rose Gold'],
    material: 'Sterling silver',
    stone: 'White cubic zirconia',
    collection: 'Modern',
    style: 'Minimalist',
    availableSizes: ['48', '50', '52', '54', '56', '58', '60'],
    description: 'An asymmetric design that plays with proportion and balance. Delicate yet distinctive, perfect for the modern minimalist.',
    sku: 'A23708WG-052',
    images: {
      'White Gold': {
        main: up_and_down_white_gold,
        hover: up_and_down_white_gold_hand
      },
      'Rose Gold': {
        main: up_and_down_rose_gold,
        hover: up_and_down_rose_gold_hand
      }
    }
  },
  {
    id: 9,
    type: 'ring',
    name: 'Dome Ring',
    price: 104,
    badge: null,
    category: 'Statement',
    metalColors: ['White Gold'],
    material: 'Sterling silver',
    stone: 'White cubic zirconia',
    collection: 'Classic',
    style: 'Geometric',
    availableSizes: ['48', '50', '52', '54', '56', '58', '60'],
    description: 'A bold dome silhouette creates architectural interest. This statement piece captures light beautifully from every angle.',
    sku: 'A23709WG-052',
    images: {
      'White Gold': {
        main: dome_ring,
        hover: dome_ring_hand
      }
    }
  },
  {
    id: 10,
    type: 'ring',
    name: 'Love Morse Code Ring',
    price: 91,
    badge: null,
    category: 'Dainty',
    metalColors: ['Yellow Gold'],
    material: 'Sterling silver',
    stone: 'White cubic zirconia',
    collection: 'Vintage',
    style: 'Minimalist',
    availableSizes: ['48', '50', '52', '54', '56', '58', '60'],
    description: 'A secret message of love encoded in morse code. This romantic piece carries a hidden sentiment close to your heart.',
    sku: 'A23710YG-052',
    images: {
      'Yellow Gold': {
        main: love_morse_code,
        hover: love_morse_code_hand
      }
    }
  },
  {
    id: 11,
    type: 'ring',
    name: 'Wavy Gold Ring',
    price: 73,
    badge: null,
    category: 'Statement',
    metalColors: ['Yellow Gold'],
    material: 'Sterling silver',
    stone: 'White cubic zirconia',
    collection: 'Modern',
    style: 'Organic',
    availableSizes: ['48', '50', '52', '54', '56', '58', '60'],
    description: 'Organic waves create a fluid, sculptural form. This artisanal design celebrates the beauty of natural movement.',
    sku: 'A23711YG-052',
    images: {
      'Yellow Gold': {
        main: wavy_gold,
        hover: wavy_gold_hand
      }
    }
  },
  {
    id: 12,
    type: 'ring',
    name: 'Statement Galet Ring',
    price: 194,
    badge: null,
    category: 'Statement',
    metalColors: ['Yellow Gold'],
    material: 'Sterling silver',
    stone: 'White cubic zirconia',
    collection: 'Vintage',
    style: 'Ornate',
    availableSizes: ['48', '50', '52', '54', '56', '58', '60'],
    description: 'Drawing inspiration from the cobblestones of "I San Pietrini" street in Rome, this ring transforms iconic architectural details into a stunning statement piece. The perfect balance between tradition and modernity.',
    sku: 'A23717OX-052',
    images: {
      'Yellow Gold': {
        main: statement_galet,
        hover: statement_galet_hand
      }
    }
  }
];


// Helper function to get ring by ID
export const getRingById = (id) => {
  return ringProducts.find(p => p.id === parseInt(id));
};

// Helper function to filter rings
export const filterRings = (filters) => {
  return ringProducts.filter(ring => {
    if (filters.category && filters.category !== 'All Rings' && ring.category !== filters.category) {
      return false;
    }
    if (filters.color && filters.color.length > 0) {
      const hasMatchingColor = ring.metalColors.some(color => filters.color.includes(color));
      if (!hasMatchingColor) return false;
    }
    if (filters.stone && filters.stone.length > 0) {
      if (!filters.stone.some(s => ring.stone.toLowerCase().includes(s.toLowerCase()))) {
        return false;
      }
    }
    if (filters.collection && filters.collection.length > 0) {
      if (!filters.collection.includes(ring.collection)) {
        return false;
      }
    }
    if (filters.style && filters.style.length > 0) {
      if (!filters.style.includes(ring.style)) {
        return false;
      }
    }
    if (filters.size && filters.size.length > 0) {
      const hasSize = filters.size.some(s => ring.availableSizes.includes(s));
      if (!hasSize) return false;
    }
    return true;
  });
};

// Helper function to get rings by category
export const getRingsByCategory = (category) => {
  if (category === 'All Rings') return ringProducts;
  return ringProducts.filter(p => p.category === category);
};

// Helper function to get recommended rings (excluding current ring)
export const getRecommendedRings = (currentRingId, limit = 4) => {
  return ringProducts
    .filter(p => p.id !== currentRingId)
    .slice(0, limit);
};

// Helper function to check if size is available for a ring
export const isSizeAvailable = (ringId, size) => {
  const ring = getRingById(ringId);
  return ring ? ring.availableSizes.includes(size) : false;
};

// Backwards compatibility - keep 'products' export
export const products = ringProducts;

export default {
  ringProducts,
  products: ringProducts, // alias for backwards compatibility
  ringCategories,
  ringSizes,
  ringFilterOptions,
  getRingById,
  filterRings,
  getRingsByCategory,
  getRecommendedRings,
  isSizeAvailable
};