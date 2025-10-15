// Import all diamond images
import brilliant_round_main from "../assets/diamonds/brilliant_round_diamond.png";
import brilliant_round_side from "../assets/diamonds/brilliant_round_side_diamond.png";
import brilliant_round_top from "../assets/diamonds/brilliant_round_diamond.png";
import brilliant_round_cert from "../assets/diamonds/brilliant_round_diamond.png";
import brilliant_round_video from "../assets/diamond.mp4";

import oval_fancy_main from "../assets/diamonds/oval_fancy_diamond.png";
import oval_fancy_side from "../assets/diamonds/oval_fancy_side_diamond.png";
import oval_fancy_hand from "../assets/diamonds/oval_fancy_diamond.png";
import oval_fancy_video from "../assets/daimond_video.mp4";

// Diamond Data Structure
// export const diamondData = {
//   types: {
//     NATURAL: 'Natural',
//     LAB_GROWN: 'Lab-Grown'
//   },
  
//   categories: {
//     NATURAL_MELEE: { 
//       id: 'natural-melee', 
//       name: 'Natural Melee', 
//       type: 'Natural', 
//       minCarat: 0.001, 
//       maxCarat: 0.18 
//     },
//     NATURAL_LARGE: { 
//       id: 'natural-large', 
//       name: 'Natural Large', 
//       type: 'Natural', 
//       minCarat: 0.18, 
//       maxCarat: 10 
//     },
//     LAB_MELEE: { 
//       id: 'lab-melee', 
//       name: 'Lab-Grown Melee', 
//       type: 'Lab-Grown', 
//       minCarat: 0.001, 
//       maxCarat: 0.18 
//     },
//     LAB_LARGE: { 
//       id: 'lab-large', 
//       name: 'Lab-Grown Large', 
//       type: 'Lab-Grown', 
//       minCarat: 0.18, 
//       maxCarat: 10 
//     }
//   },
  
//   // Subcategories with their available shapes
//   subcategories: {
//     'Standard': {
//       name: 'Standard',
//       shapes: ['Round', 'Princess', 'Cushion', 'Oval', 'Emerald', 'Pear', 'Marquise', 'Heart', 'Radiant', 'Asscher']
//     },
//     'Color Enhanced': {
//       name: 'Color Enhanced',
//       shapes: ['Round', 'Cushion', 'Oval', 'Radiant', 'Princess']
//     },
//     'Unique Cut': {
//       name: 'Unique Cut',
//       shapes: ['Asscher', 'Marquise', 'Heart', 'Trillion', 'Baguette']
//     },
//     'Matched Pairs': {
//       name: 'Matched Pairs',
//       shapes: ['Round', 'Pear', 'Oval', 'Marquise']
//     }
//   },
  
//   shapes: {
//     'Round': { name: 'Round', icon: '●' },
//     'Princess': { name: 'Princess', icon: '◆' },
//     'Cushion': { name: 'Cushion', icon: '◈' },
//     'Oval': { name: 'Oval', icon: '⬭' },
//     'Emerald': { name: 'Emerald', icon: '▭' },
//     'Pear': { name: 'Pear', icon: '◐' },
//     'Marquise': { name: 'Marquise', icon: '◊' },
//     'Heart': { name: 'Heart', icon: '♥' },
//     'Radiant': { name: 'Radiant', icon: '◇' },
//     'Asscher': { name: 'Asscher', icon: '◻' },
//     'Trillion': { name: 'Trillion', icon: '▲' },
//     'Baguette': { name: 'Baguette', icon: '▬' }
//   },
  
//   // Color grades based on subcategory
//   colors: {
//     white: ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
//     fancy: ['Fancy Light Yellow', 'Fancy Yellow', 'Fancy Intense Yellow', 'Fancy Vivid Yellow', 'Fancy Light Pink', 'Fancy Pink']
//   },
  
//   // Clarity grades (available after color selection)
//   clarity: {
//     'D': ['FL', 'IF', 'VVS1', 'VVS2'],
//     'E': ['FL', 'IF', 'VVS1', 'VVS2', 'VS1'],
//     'F': ['IF', 'VVS1', 'VVS2', 'VS1', 'VS2'],
//     'G': ['VVS1', 'VVS2', 'VS1', 'VS2', 'SI1'],
//     'H': ['VVS2', 'VS1', 'VS2', 'SI1', 'SI2'],
//     'I': ['VS1', 'VS2', 'SI1', 'SI2'],
//     'J': ['VS2', 'SI1', 'SI2'],
//     'K': ['SI1', 'SI2', 'I1'],
//     'L': ['SI1', 'SI2', 'I1'],
//     'M': ['SI2', 'I1', 'I2'],
//     // Fancy colors
//     'Fancy Light Yellow': ['VVS1', 'VVS2', 'VS1', 'VS2', 'SI1'],
//     'Fancy Yellow': ['VVS1', 'VVS2', 'VS1', 'VS2'],
//     'Fancy Intense Yellow': ['VVS1', 'VVS2', 'VS1'],
//     'Fancy Vivid Yellow': ['VVS1', 'VVS2', 'VS1'],
//     'Fancy Light Pink': ['VVS1', 'VVS2', 'VS1', 'VS2'],
//     'Fancy Pink': ['VVS1', 'VVS2', 'VS1']
//   },
  
//   cut: ['Ideal', 'Excellent', 'Very Good', 'Good'],
//   polish: ['Excellent', 'Very Good', 'Good'],
//   symmetry: ['Excellent', 'Very Good', 'Good'],
//   fluorescence: ['None', 'Faint', 'Medium', 'Strong'],
//   certification: ['GIA', 'IGI', 'AGS', 'HRD', 'GCAL', 'None']
// };

export const diamondData = {
  types: {
    natural: {
      name: "Natural",
      categories: {
        "natural-melee": {
          name: "Melee",
          range: [0.001, 0.18],
          subcategories: {
            "Standard": {
              name: "Standard",
              shapes: {
                round: {
                  colors: {
                    D: ["FL", "IF", "VVS1", "VVS2", "VS1"],
                    E: ["IF", "VVS1", "VVS2", "VS1"],
                    F: ["VVS1", "VVS2", "VS1", "VS2"],
                    G: ["VS1", "VS2", "SI1"],
                    H: ["SI1", "SI2"]
                  }
                },
                princess: {
                  colors: {
                    D: ["IF", "VVS1", "VVS2"],
                    E: ["VVS1", "VVS2", "VS1"],
                    F: ["VS1", "VS2", "SI1"],
                    H: ["SI1"]
                  }
                },
                cushion: {
                  colors: {
                    F: ["VVS1", "VVS2", "VS1"],
                    G: ["VS1", "VS2", "SI1", "SI2"]
                  }
                },
                oval: {
                  colors: {
                    F: ["VS1"]
                  }
                }
              }
            },
            "Matched Pairs": {
              name: "Matched Pairs",
              shapes: {
                round: {
                  colors: {
                    G: ["VS2"]
                  }
                },
                pear: {
                  colors: {
                    F: ["VS1"]
                  }
                }
              }
            },
            "Fancy Color": {
              name: "Fancy Color",
              shapes: {
                round: {
                  colors: {
                    "Fancy Light Yellow": ["VVS1", "VVS2", "VS1"],
                    "Fancy Yellow": ["VVS1", "VVS2", "VS1", "VS2"],
                    "Fancy Pink": ["VVS1", "VS1", "VS2"]
                  }
                },
                cushion: {
                  colors: {
                    "Fancy Light Yellow": ["VVS1", "VS1"],
                    "Fancy Pink": ["VVS1", "VS1"]
                  }
                }
              }
            }
          }
        },

        "natural-large": {
          name: "Large",
          range: [0.18, 10],
          subcategories: {
            "Standard": {
              name: "Standard",
              shapes: {
                round: {
                  colors: {
                    D: ["FL", "IF", "VVS1", "VVS2", "VS1"],
                    E: ["IF", "VVS1", "VVS2", "VS1", "VS2"],
                    F: ["VVS1", "VS1", "VS2"],
                    G: ["VVS2"]
                  }
                },
                princess: {
                  colors: {
                    E: ["VS1"]
                  }
                },
                oval: {
                  colors: {
                    D: ["IF", "VVS1", "VVS2"],
                    F: ["VS1", "VS2", "SI1"]
                  }
                },
                emerald: {
                  colors: {
                    G: ["VVS2"]
                  }
                },
                pear: {
                  colors: {
                    D: ["IF"]
                  }
                },
                cushion: {
                  colors: {
                    E: ["VVS2"]
                  }
                },
                radiant: {
                  colors: {
                    F: ["VS1"]
                  }
                }
              }
            },
            "Color Enhanced": {
              name: "Color Enhanced",
              shapes: {
                round: {
                  colors: {
                    "Fancy Yellow": ["VS1"]
                  }
                },
                cushion: {
                  colors: {
                    "Fancy Intense Yellow": ["VVS2"]
                  }
                }
              }
            },
            "Unique Cut": {
              name: "Unique Cut",
              shapes: {
                asscher: {
                  colors: {
                    F: ["VVS1"]
                  }
                },
                heart: {
                  colors: {
                    G: ["VVS2", "VS1", "VS2"],
                    H: ["VS1", "VS2", "SI1", "SI2"]
                  }
                },
                marquise: {
                  colors: {
                    G: ["VS2"],
                    H: ["VS1", "VS2", "SI1"],
                    I: ["VS2", "SI1", "SI2"]
                  }
                }
              }
            }
          }
        }
      }
    },

    lab: {
      name: "Lab-Grown",
      categories: {
        "lab-melee": {
          name: "Melee",
          range: [0.001, 0.18],
          subcategories: {
            "Standard": {
              name: "Standard",
              shapes: {
                round: {
                  colors: {
                    D: ["IF", "VVS1", "VVS2", "VS1"],
                    E: ["VVS1", "VVS2", "VS1", "VS2"],
                    F: ["VS1", "VS2", "SI1"],
                    G: ["VS2"]
                  }
                },
                princess: {
                  colors: {
                    E: ["VVS1", "VVS2", "VS1"],
                    F: ["VS1", "VS2", "SI1"],
                    G: ["VS2"]
                  }
                }
              }
            },
            "Matched Pairs": {
              name: "Matched Pairs",
              shapes: {
                round: {
                  colors: {
                    E: ["VVS2"]
                  }
                }
              }
            },
            "Fancy Color": {
              name: "Fancy Color",
              shapes: {
                round: {
                  colors: {
                    "Fancy Yellow": ["VVS1", "VS1", "VS2"],
                    "Fancy Pink": ["VVS1", "VS1"]
                  }
                },
                radiant: {
                  colors: {
                    "Fancy Light Yellow": ["VVS1", "VS1"],
                    "Fancy Yellow": ["VVS1", "VS1"]
                  }
                }
              }
            }
          }
        },

        "lab-large": {
          name: "Large",
          range: [0.18, 10],
          subcategories: {
            "Standard": {
              name: "Standard",
              shapes: {
                round: {
                  colors: {
                    D: ["IF", "VVS1", "VVS2", "VS1"],
                    E: ["VVS1", "VVS2", "VS1", "VS2", "IF"],
                    F: ["VS1", "VS2", "SI1", "VVS2"]
                  }
                },
                princess: {
                  colors: {
                    D: ["IF", "VVS1", "VVS2", "VS1"],
                    E: ["VVS1", "VVS2", "VS1"],
                    F: ["VS1", "VS2", "SI1"]
                  }
                },
                cushion: {
                  colors: {
                    F: ["VVS1", "VVS2", "VS1", "VS2"],
                    G: ["VS1", "VS2", "SI1"]
                  }
                },
                oval: {
                  colors: {
                    E: ["VVS1", "VS1"],
                    F: ["VVS2", "VS1", "VS2"]
                  }
                },
                emerald: {
                  colors: {
                    F: ["VVS2", "VS1"],
                    G: ["VS1", "VS2"]
                  }
                }
              }
            },
            "Color Enhanced": {
              name: "Color Enhanced",
              shapes: {
                round: {
                  colors: {
                    "Fancy Intense Yellow": ["VS1", "VVS1"]
                  }
                },
                oval: {
                  colors: {
                    "Fancy Pink": ["VVS2"]
                  }
                },
                cushion: {
                  colors: {
                    "Fancy Vivid Yellow": ["VS1"]
                  }
                },
                radiant: {
                  colors: {
                    "Fancy Yellow": ["VVS1"]
                  }
                }
              }
            },
            "Unique Cut": {
              name: "Unique Cut",
              shapes: {
                asscher: {
                  colors: {
                    D: ["IF"]
                  }
                },
                heart: {
                  colors: {
                    E: ["VVS1"]
                  }
                },
                marquise: {
                  colors: {
                    F: ["VS1"]
                  }
                }
              }
            },
            "Matched Pairs": {
              name: "Matched Pairs",
              shapes: {
                round: {
                  colors: {
                    D: ["VVS2"]
                  }
                },
                pear: {
                  colors: {
                    E: ["VS1"]
                  }
                }
              }
            }
          }
        }
      }
    }
  },

  shapes: {
    round: "●",
    princess: "◆",
    cushion: "◈",
    oval: "⬭",
    heart: "♥",
    marquise: "◊",
    radiant: "◇",
    emerald: "▭",
    asscher: "◫",
    pear: "◐"
  },

  attributes: {
    cut: ["Ideal", "Excellent", "Very Good", "Good"],
    polish: ["Excellent", "Very Good", "Good"],
    symmetry: ["Excellent", "Very Good", "Good"],
    fluorescence: ["None", "Faint", "Medium", "Strong"],
    certification: ["GIA", "IGI", "AGS", "HRD", "GCAL", "None"]
  }
};

// Diamond Products Array
export const diamondProducts = [
  // ==================== NATURAL MELEE - STANDARD ====================
  {
    id: 1,
    type: 'Natural',
    category: 'natural-melee',
    categoryName: 'Natural Melee',
    subcategory: 'Standard',
    name: 'Round Brilliant Melee Diamond',
    shape: 'Round',
    carat: 0.10,
    color: 'G',
    clarity: 'VS2',
    cut: 'Very Good',
    polish: 'Very Good',
    symmetry: 'Very Good',
    fluorescence: 'None',
    certification: 'None',
    certNumber: null,
    price: 150,
    measurements: {
      length: 3.0,
      width: 3.0,
      depth: 1.8,
      depthPercentage: 60.0,
      tablePercentage: 57.0
    },
    description: 'Small round brilliant melee diamond perfect for accent stones in jewelry settings.',
    sku: 'NAT-MEL-STD-RND-001',
    inStock: true,
    quantity: 100,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main, brilliant_round_side],
      hover: brilliant_round_side
    },
    videos: []
  },
  {
    id: 2,
    type: 'Natural',
    category: 'natural-melee',
    categoryName: 'Natural Melee',
    subcategory: 'Standard',
    name: 'Princess Melee Diamond',
    shape: 'Princess',
    carat: 0.12,
    color: 'H',
    clarity: 'SI1',
    cut: 'Good',
    polish: 'Good',
    symmetry: 'Good',
    fluorescence: 'Faint',
    certification: 'None',
    certNumber: null,
    price: 120,
    measurements: {
      length: 2.9,
      width: 2.9,
      depth: 2.0,
      depthPercentage: 68.0,
      tablePercentage: 65.0
    },
    description: 'Square princess cut melee diamond ideal for side stones.',
    sku: 'NAT-MEL-STD-PRI-002',
    inStock: true,
    quantity: 80,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main],
      hover: brilliant_round_side
    },
    videos: []
  },
  {
    id: 3,
    type: 'Natural',
    category: 'natural-melee',
    categoryName: 'Natural Melee',
    subcategory: 'Standard',
    name: 'Oval Melee Diamond',
    shape: 'Oval',
    carat: 0.15,
    color: 'F',
    clarity: 'VS1',
    cut: 'Very Good',
    polish: 'Excellent',
    symmetry: 'Very Good',
    fluorescence: 'None',
    certification: 'None',
    certNumber: null,
    price: 180,
    measurements: {
      length: 3.5,
      width: 2.5,
      depth: 1.6,
      depthPercentage: 64.0,
      tablePercentage: 58.0
    },
    description: 'Elegant oval melee diamond with excellent proportions.',
    sku: 'NAT-MEL-STD-OVL-003',
    inStock: true,
    quantity: 60,
    images: {
      main: oval_fancy_main,
      gallery: [oval_fancy_main, oval_fancy_side],
      hover: oval_fancy_side
    },
    videos: []
  },

  // ==================== NATURAL MELEE - MATCHED PAIRS ====================
  {
    id: 4,
    type: 'Natural',
    category: 'natural-melee',
    categoryName: 'Natural Melee',
    subcategory: 'Matched Pairs',
    name: 'Round Melee Diamond Pair',
    shape: 'Round',
    carat: 0.08,
    color: 'G',
    clarity: 'VS2',
    cut: 'Excellent',
    polish: 'Excellent',
    symmetry: 'Excellent',
    fluorescence: 'None',
    certification: 'None',
    certNumber: null,
    price: 320,
    measurements: {
      length: 2.8,
      width: 2.8,
      depth: 1.7,
      depthPercentage: 60.7,
      tablePercentage: 56.0
    },
    description: 'Perfectly matched pair of round melee diamonds for earrings.',
    sku: 'NAT-MEL-PAR-RND-004',
    inStock: true,
    quantity: 25,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main, brilliant_round_side],
      hover: brilliant_round_side
    },
    videos: []
  },
  {
    id: 5,
    type: 'Natural',
    category: 'natural-melee',
    categoryName: 'Natural Melee',
    subcategory: 'Matched Pairs',
    name: 'Pear Melee Diamond Pair',
    shape: 'Pear',
    carat: 0.10,
    color: 'F',
    clarity: 'VS1',
    cut: 'Very Good',
    polish: 'Very Good',
    symmetry: 'Very Good',
    fluorescence: 'None',
    certification: 'None',
    certNumber: null,
    price: 380,
    measurements: {
      length: 3.5,
      width: 2.3,
      depth: 1.5,
      depthPercentage: 65.0,
      tablePercentage: 58.0
    },
    description: 'Beautiful matched pear-shaped melee pair.',
    sku: 'NAT-MEL-PAR-PEA-005',
    inStock: true,
    quantity: 15,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main],
      hover: brilliant_round_side
    },
    videos: []
  },

  // ==================== NATURAL LARGE - STANDARD ====================
  {
    id: 6,
    type: 'Natural',
    category: 'natural-large',
    categoryName: 'Natural Large',
    subcategory: 'Standard',
    name: 'Round Brilliant Natural Diamond',
    shape: 'Round',
    carat: 1.0,
    color: 'D',
    clarity: 'VVS1',
    cut: 'Excellent',
    polish: 'Excellent',
    symmetry: 'Excellent',
    fluorescence: 'None',
    certification: 'GIA',
    certNumber: 'GIA-2345678901',
    price: 7500,
    measurements: {
      length: 6.5,
      width: 6.5,
      depth: 4.0,
      depthPercentage: 61.5,
      tablePercentage: 57.0
    },
    description: 'An exceptional D color, VVS1 clarity round brilliant diamond with triple excellent cut grades.',
    sku: 'NAT-LRG-STD-RND-006',
    inStock: true,
    quantity: 1,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main, brilliant_round_side, brilliant_round_top, brilliant_round_cert],
      hover: brilliant_round_side,
      certificate: brilliant_round_cert
    },
    videos: [
      {
        url: brilliant_round_video,
        type: '360-view',
        thumbnail: brilliant_round_main
      }
    ]
  },
  {
    id: 7,
    type: 'Natural',
    category: 'natural-large',
    categoryName: 'Natural Large',
    subcategory: 'Standard',
    name: 'Princess Cut Natural Diamond',
    shape: 'Princess',
    carat: 0.9,
    color: 'E',
    clarity: 'VS1',
    cut: 'Excellent',
    polish: 'Excellent',
    symmetry: 'Excellent',
    fluorescence: 'None',
    certification: 'IGI',
    certNumber: 'IGI-3456789012',
    price: 4200,
    measurements: {
      length: 5.5,
      width: 5.5,
      depth: 3.6,
      depthPercentage: 65.5,
      tablePercentage: 65.0
    },
    description: 'Modern princess cut diamond with excellent proportions.',
    sku: 'NAT-LRG-STD-PRI-007',
    inStock: true,
    quantity: 2,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main],
      hover: brilliant_round_side
    },
    videos: []
  },
  {
    id: 8,
    type: 'Natural',
    category: 'natural-large',
    categoryName: 'Natural Large',
    subcategory: 'Standard',
    name: 'Oval Natural Diamond',
    shape: 'Oval',
    carat: 1.2,
    color: 'F',
    clarity: 'VS2',
    cut: 'Very Good',
    polish: 'Very Good',
    symmetry: 'Very Good',
    fluorescence: 'Faint',
    certification: 'GIA',
    certNumber: 'GIA-4567890123',
    price: 6800,
    measurements: {
      length: 7.5,
      width: 5.5,
      depth: 3.8,
      depthPercentage: 62.0,
      tablePercentage: 58.0
    },
    description: 'Stunning oval diamond with elongated elegant shape.',
    sku: 'NAT-LRG-STD-OVL-008',
    inStock: true,
    quantity: 1,
    images: {
      main: oval_fancy_main,
      gallery: [oval_fancy_main, oval_fancy_side, oval_fancy_hand],
      hover: oval_fancy_side
    },
    videos: [
      {
        url: oval_fancy_video,
        type: '360-view',
        thumbnail: oval_fancy_main
      }
    ]
  },
  {
    id: 9,
    type: 'Natural',
    category: 'natural-large',
    categoryName: 'Natural Large',
    subcategory: 'Standard',
    name: 'Emerald Cut Natural Diamond',
    shape: 'Emerald',
    carat: 2.0,
    color: 'G',
    clarity: 'VVS2',
    cut: 'Excellent',
    polish: 'Excellent',
    symmetry: 'Excellent',
    fluorescence: 'None',
    certification: 'GIA',
    certNumber: 'GIA-5678901234',
    price: 12500,
    measurements: {
      length: 8.0,
      width: 6.0,
      depth: 4.5,
      depthPercentage: 62.5,
      tablePercentage: 62.0
    },
    description: 'Spectacular emerald cut with hall-of-mirrors effect.',
    sku: 'NAT-LRG-STD-EME-009',
    inStock: true,
    quantity: 1,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main],
      hover: brilliant_round_side
    },
    videos: []
  },

  // ==================== NATURAL LARGE - COLOR ENHANCED ====================
  {
    id: 10,
    type: 'Natural',
    category: 'natural-large',
    categoryName: 'Natural Large',
    subcategory: 'Color Enhanced',
    name: 'Fancy Yellow Round Diamond',
    shape: 'Round',
    carat: 1.5,
    color: 'Fancy Yellow',
    clarity: 'VS1',
    cut: 'Excellent',
    polish: 'Excellent',
    symmetry: 'Excellent',
    fluorescence: 'None',
    certification: 'GIA',
    certNumber: 'GIA-6789012345',
    price: 9500,
    measurements: {
      length: 7.2,
      width: 7.2,
      depth: 4.4,
      depthPercentage: 61.1,
      tablePercentage: 57.0
    },
    description: 'Beautiful fancy yellow diamond with vibrant color.',
    sku: 'NAT-LRG-CLR-RND-010',
    inStock: true,
    quantity: 1,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main, brilliant_round_side],
      hover: brilliant_round_side
    },
    videos: []
  },
  {
    id: 11,
    type: 'Natural',
    category: 'natural-large',
    categoryName: 'Natural Large',
    subcategory: 'Color Enhanced',
    name: 'Fancy Intense Yellow Cushion',
    shape: 'Cushion',
    carat: 1.3,
    color: 'Fancy Intense Yellow',
    clarity: 'VVS2',
    cut: 'Very Good',
    polish: 'Very Good',
    symmetry: 'Very Good',
    fluorescence: 'None',
    certification: 'IGI',
    certNumber: 'IGI-7890123456',
    price: 11500,
    measurements: {
      length: 6.8,
      width: 6.5,
      depth: 4.2,
      depthPercentage: 63.0,
      tablePercentage: 61.0
    },
    description: 'Intense yellow cushion cut with exceptional color saturation.',
    sku: 'NAT-LRG-CLR-CUS-011',
    inStock: true,
    quantity: 1,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main],
      hover: brilliant_round_side
    },
    videos: []
  },

  // ==================== NATURAL LARGE - UNIQUE CUT ====================
  {
    id: 12,
    type: 'Natural',
    category: 'natural-large',
    categoryName: 'Natural Large',
    subcategory: 'Unique Cut',
    name: 'Asscher Cut Natural Diamond',
    shape: 'Asscher',
    carat: 1.1,
    color: 'F',
    clarity: 'VVS1',
    cut: 'Excellent',
    polish: 'Excellent',
    symmetry: 'Excellent',
    fluorescence: 'None',
    certification: 'GIA',
    certNumber: 'GIA-8901234567',
    price: 8200,
    measurements: {
      length: 6.0,
      width: 6.0,
      depth: 4.2,
      depthPercentage: 70.0,
      tablePercentage: 62.0
    },
    description: 'Vintage-inspired Asscher cut with distinctive step facets.',
    sku: 'NAT-LRG-UNQ-ASS-012',
    inStock: true,
    quantity: 1,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main],
      hover: brilliant_round_side
    },
    videos: []
  },
  {
    id: 13,
    type: 'Natural',
    category: 'natural-large',
    categoryName: 'Natural Large',
    subcategory: 'Unique Cut',
    name: 'Heart Shape Natural Diamond',
    shape: 'Heart',
    carat: 0.95,
    color: 'G',
    clarity: 'VS2',
    cut: 'Very Good',
    polish: 'Very Good',
    symmetry: 'Very Good',
    fluorescence: 'Faint',
    certification: 'IGI',
    certNumber: 'IGI-9012345678',
    price: 5800,
    measurements: {
      length: 6.2,
      width: 6.2,
      depth: 3.8,
      depthPercentage: 61.3,
      tablePercentage: 58.0
    },
    description: 'Romantic heart-shaped diamond with excellent symmetry.',
    sku: 'NAT-LRG-UNQ-HRT-013',
    inStock: true,
    quantity: 1,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main],
      hover: brilliant_round_side
    },
    videos: []
  },

  // ==================== LAB-GROWN MELEE - STANDARD ====================
  {
    id: 14,
    type: 'Lab-Grown',
    category: 'lab-melee',
    categoryName: 'Lab-Grown Melee',
    subcategory: 'Standard',
    name: 'Round Lab Melee Diamond',
    shape: 'Round',
    carat: 0.08,
    color: 'F',
    clarity: 'VS1',
    cut: 'Very Good',
    polish: 'Very Good',
    symmetry: 'Very Good',
    fluorescence: 'None',
    certification: 'None',
    certNumber: null,
    price: 75,
    measurements: {
      length: 2.8,
      width: 2.8,
      depth: 1.7,
      depthPercentage: 60.7,
      tablePercentage: 56.0
    },
    description: 'Lab-grown melee diamond perfect for accent stones.',
    sku: 'LAB-MEL-STD-RND-014',
    inStock: true,
    quantity: 200,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main],
      hover: brilliant_round_side
    },
    videos: []
  },
  {
    id: 15,
    type: 'Lab-Grown',
    category: 'lab-melee',
    categoryName: 'Lab-Grown Melee',
    subcategory: 'Standard',
    name: 'Princess Lab Melee Diamond',
    shape: 'Princess',
    carat: 0.10,
    color: 'G',
    clarity: 'VS2',
    cut: 'Good',
    polish: 'Good',
    symmetry: 'Good',
    fluorescence: 'None',
    certification: 'None',
    certNumber: null,
    price: 65,
    measurements: {
      length: 2.9,
      width: 2.9,
      depth: 2.0,
      depthPercentage: 68.0,
      tablePercentage: 65.0
    },
    description: 'Square princess cut lab melee for side stones.',
    sku: 'LAB-MEL-STD-PRI-015',
    inStock: true,
    quantity: 150,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main],
      hover: brilliant_round_side
    },
    videos: []
  },

  // ==================== LAB-GROWN MELEE - MATCHED PAIRS ====================
  {
    id: 16,
    type: 'Lab-Grown',
    category: 'lab-melee',
    categoryName: 'Lab-Grown Melee',
    subcategory: 'Matched Pairs',
    name: 'Round Lab Melee Pair',
    shape: 'Round',
    carat: 0.08,
    color: 'E',
    clarity: 'VVS2',
    cut: 'Excellent',
    polish: 'Excellent',
    symmetry: 'Excellent',
    fluorescence: 'None',
    certification: 'None',
    certNumber: null,
    price: 180,
    measurements: {
      length: 2.8,
      width: 2.8,
      depth: 1.7,
      depthPercentage: 60.7,
      tablePercentage: 56.0
    },
    description: 'Perfectly matched lab-grown round pair.',
    sku: 'LAB-MEL-PAR-RND-016',
    inStock: true,
    quantity: 40,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main, brilliant_round_side],
      hover: brilliant_round_side
    },
    videos: []
  },

  // ==================== LAB-GROWN LARGE - STANDARD ====================
  {
    id: 17,
    type: 'Lab-Grown',
    category: 'lab-large',
    categoryName: 'Lab-Grown Large',
    subcategory: 'Standard',
    name: 'Round Brilliant Lab Diamond',
    shape: 'Round',
    carat: 1.5,
    color: 'E',
    clarity: 'VVS1',
    cut: 'Excellent',
    polish: 'Excellent',
    symmetry: 'Excellent',
    fluorescence: 'None',
    certification: 'IGI',
    certNumber: 'IGI-LG2345678901',
    price: 4800,
    measurements: {
      length: 7.2,
      width: 7.2,
      depth: 4.4,
      depthPercentage: 61.1,
      tablePercentage: 57.0
    },
    description: 'Large lab-grown diamond with exceptional quality.',
    sku: 'LAB-LRG-STD-RND-017',
    inStock: true,
    quantity: 3,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main],
      hover: brilliant_round_side
    },
    videos: []
  },
  {
    id: 18,
    type: 'Lab-Grown',
    category: 'lab-large',
    categoryName: 'Lab-Grown Large',
    subcategory: 'Standard',
    name: 'Princess Lab Diamond',
    shape: 'Princess',
    carat: 1.0,
    color: 'D',
    clarity: 'VS1',
    cut: 'Excellent',
    polish: 'Excellent',
    symmetry: 'Excellent',
    fluorescence: 'None',
    certification: 'IGI',
    certNumber: 'IGI-LG3456789012',
    price: 3200,
    measurements: {
      length: 5.8,
      width: 5.8,
      depth: 3.9,
      depthPercentage: 67.2,
      tablePercentage: 66.0
    },
    description: 'Perfect lab-grown princess cut with D color.',
    sku: 'LAB-LRG-STD-PRI-018',
    inStock: true,
    quantity: 2,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main],
      hover: brilliant_round_side
    },
    videos: []
  },
  {
    id: 19,
    type: 'Lab-Grown',
    category: 'lab-large',
    categoryName: 'Lab-Grown Large',
    subcategory: 'Standard',
    name: 'Cushion Lab Diamond',
    shape: 'Cushion',
    carat: 1.2,
    color: 'F',
    clarity: 'VS2',
    cut: 'Very Good',
    polish: 'Very Good',
    symmetry: 'Very Good',
    fluorescence: 'None',
    certification: 'None',
    certNumber: null,
    price: 2800,
    measurements: {
      length: 6.2,
      width: 5.8,
      depth: 3.9,
      depthPercentage: 63.0,
      tablePercentage: 61.0
    },
    description: 'Beautiful lab-grown cushion cut with great value.',
    sku: 'LAB-LRG-STD-CUS-019',
    inStock: true,
    quantity: 5,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main],
      hover: brilliant_round_side
    },
    videos: []
  },
  {
    id: 20,
    type: 'Lab-Grown',
    category: 'lab-large',
    categoryName: 'Lab-Grown Large',
    subcategory: 'Standard',
    name: 'Oval Lab Diamond',
    shape: 'Oval',
    carat: 1.4,
    color: 'E',
    clarity: 'VS1',
    cut: 'Excellent',
    polish: 'Excellent',
    symmetry: 'Excellent',
    fluorescence: 'None',
    certification: 'IGI',
    certNumber: 'IGI-LG4567890123',
    price: 4200,
    measurements: {
      length: 8.0,
      width: 5.8,
      depth: 3.7,
      depthPercentage: 61.5,
      tablePercentage: 58.0
    },
    description: 'Elegant oval lab-grown diamond.',
    sku: 'LAB-LRG-STD-OVL-020',
    inStock: true,
    quantity: 2,
    images: {
      main: oval_fancy_main,
      gallery: [oval_fancy_main, oval_fancy_side],
      hover: oval_fancy_side
    },
    videos: []
  },
  {
    id: 21,
    type: 'Lab-Grown',
    category: 'lab-large',
    categoryName: 'Lab-Grown Large',
    subcategory: 'Standard',
    name: 'Emerald Lab Diamond',
    shape: 'Emerald',
    carat: 1.8,
    color: 'F',
    clarity: 'VVS2',
    cut: 'Very Good',
    polish: 'Very Good',
    symmetry: 'Very Good',
    fluorescence: 'None',
    certification: 'IGI',
    certNumber: 'IGI-LG5678901234',
    price: 5500,
    measurements: {
      length: 7.8,
      width: 5.8,
      depth: 4.2,
      depthPercentage: 62.8,
      tablePercentage: 62.0
    },
    description: 'Step-cut emerald lab diamond with clarity.',
    sku: 'LAB-LRG-STD-EME-021',
    inStock: true,
    quantity: 1,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main],
      hover: brilliant_round_side
    },
    videos: []
  },

  // ==================== LAB-GROWN LARGE - COLOR ENHANCED ====================
  {
    id: 22,
    type: 'Lab-Grown',
    category: 'lab-large',
    categoryName: 'Lab-Grown Large',
    subcategory: 'Color Enhanced',
    name: 'Fancy Yellow Lab Round',
    shape: 'Round',
    carat: 1.3,
    color: 'Fancy Intense Yellow',
    clarity: 'VS1',
    cut: 'Excellent',
    polish: 'Excellent',
    symmetry: 'Excellent',
    fluorescence: 'None',
    certification: 'IGI',
    certNumber: 'IGI-LG6789012345',
    price: 3800,
    measurements: {
      length: 6.9,
      width: 6.9,
      depth: 4.2,
      depthPercentage: 60.9,
      tablePercentage: 57.0
    },
    description: 'Vibrant fancy yellow lab-grown diamond.',
    sku: 'LAB-LRG-CLR-RND-022',
    inStock: true,
    quantity: 2,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main, brilliant_round_side],
      hover: brilliant_round_side
    },
    videos: []
  },
  {
    id: 23,
    type: 'Lab-Grown',
    category: 'lab-large',
    categoryName: 'Lab-Grown Large',
    subcategory: 'Color Enhanced',
    name: 'Fancy Pink Lab Oval',
    shape: 'Oval',
    carat: 1.1,
    color: 'Fancy Pink',
    clarity: 'VVS2',
    cut: 'Very Good',
    polish: 'Very Good',
    symmetry: 'Very Good',
    fluorescence: 'None',
    certification: 'IGI',
    certNumber: 'IGI-LG7890123456',
    price: 6500,
    measurements: {
      length: 7.5,
      width: 5.5,
      depth: 3.6,
      depthPercentage: 61.8,
      tablePercentage: 58.0
    },
    description: 'Rare fancy pink lab-grown oval diamond.',
    sku: 'LAB-LRG-CLR-OVL-023',
    inStock: true,
    quantity: 1,
    images: {
      main: oval_fancy_main,
      gallery: [oval_fancy_main, oval_fancy_side, oval_fancy_hand],
      hover: oval_fancy_side
    },
    videos: [
      {
        url: oval_fancy_video,
        type: '360-view',
        thumbnail: oval_fancy_main
      }
    ]
  },
  {
    id: 24,
    type: 'Lab-Grown',
    category: 'lab-large',
    categoryName: 'Lab-Grown Large',
    subcategory: 'Color Enhanced',
    name: 'Fancy Yellow Lab Cushion',
    shape: 'Cushion',
    carat: 1.6,
    color: 'Fancy Vivid Yellow',
    clarity: 'VS1',
    cut: 'Excellent',
    polish: 'Excellent',
    symmetry: 'Excellent',
    fluorescence: 'None',
    certification: 'GCAL',
    certNumber: 'GCAL-LG8901234567',
    price: 5200,
    measurements: {
      length: 7.0,
      width: 6.8,
      depth: 4.5,
      depthPercentage: 64.7,
      tablePercentage: 62.0
    },
    description: 'Vivid yellow cushion lab diamond with intense color.',
    sku: 'LAB-LRG-CLR-CUS-024',
    inStock: true,
    quantity: 1,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main],
      hover: brilliant_round_side
    },
    videos: []
  },
  {
    id: 25,
    type: 'Lab-Grown',
    category: 'lab-large',
    categoryName: 'Lab-Grown Large',
    subcategory: 'Color Enhanced',
    name: 'Fancy Yellow Lab Radiant',
    shape: 'Radiant',
    carat: 1.4,
    color: 'Fancy Yellow',
    clarity: 'VVS1',
    cut: 'Very Good',
    polish: 'Very Good',
    symmetry: 'Very Good',
    fluorescence: 'None',
    certification: 'IGI',
    certNumber: 'IGI-LG9012345678',
    price: 4100,
    measurements: {
      length: 7.2,
      width: 5.8,
      depth: 4.0,
      depthPercentage: 63.5,
      tablePercentage: 60.0
    },
    description: 'Radiant cut fancy yellow lab diamond.',
    sku: 'LAB-LRG-CLR-RAD-025',
    inStock: true,
    quantity: 1,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main],
      hover: brilliant_round_side
    },
    videos: []
  },

  // ==================== LAB-GROWN LARGE - UNIQUE CUT ====================
  {
    id: 26,
    type: 'Lab-Grown',
    category: 'lab-large',
    categoryName: 'Lab-Grown Large',
    subcategory: 'Unique Cut',
    name: 'Asscher Lab Diamond',
    shape: 'Asscher',
    carat: 1.2,
    color: 'D',
    clarity: 'IF',
    cut: 'Excellent',
    polish: 'Excellent',
    symmetry: 'Excellent',
    fluorescence: 'None',
    certification: 'IGI',
    certNumber: 'IGI-LG0123456789',
    price: 3900,
    measurements: {
      length: 6.2,
      width: 6.2,
      depth: 4.4,
      depthPercentage: 71.0,
      tablePercentage: 63.0
    },
    description: 'Art deco inspired Asscher cut lab diamond.',
    sku: 'LAB-LRG-UNQ-ASS-026',
    inStock: true,
    quantity: 1,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main],
      hover: brilliant_round_side
    },
    videos: []
  },
  {
    id: 27,
    type: 'Lab-Grown',
    category: 'lab-large',
    categoryName: 'Lab-Grown Large',
    subcategory: 'Unique Cut',
    name: 'Heart Lab Diamond',
    shape: 'Heart',
    carat: 0.85,
    color: 'E',
    clarity: 'VVS1',
    cut: 'Very Good',
    polish: 'Very Good',
    symmetry: 'Very Good',
    fluorescence: 'None',
    certification: 'None',
    certNumber: null,
    price: 2200,
    measurements: {
      length: 5.9,
      width: 5.9,
      depth: 3.6,
      depthPercentage: 61.0,
      tablePercentage: 58.0
    },
    description: 'Romantic heart-shaped lab diamond.',
    sku: 'LAB-LRG-UNQ-HRT-027',
    inStock: true,
    quantity: 2,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main],
      hover: brilliant_round_side
    },
    videos: []
  },
  {
    id: 28,
    type: 'Lab-Grown',
    category: 'lab-large',
    categoryName: 'Lab-Grown Large',
    subcategory: 'Unique Cut',
    name: 'Marquise Lab Diamond',
    shape: 'Marquise',
    carat: 1.0,
    color: 'F',
    clarity: 'VS1',
    cut: 'Very Good',
    polish: 'Very Good',
    symmetry: 'Very Good',
    fluorescence: 'Faint',
    certification: 'IGI',
    certNumber: 'IGI-LG1234567890',
    price: 2900,
    measurements: {
      length: 9.5,
      width: 4.5,
      depth: 3.0,
      depthPercentage: 60.0,
      tablePercentage: 58.0
    },
    description: 'Elongated marquise lab diamond.',
    sku: 'LAB-LRG-UNQ-MAR-028',
    inStock: true,
    quantity: 1,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main],
      hover: brilliant_round_side
    },
    videos: []
  },

  // ==================== LAB-GROWN LARGE - MATCHED PAIRS ====================
  {
    id: 29,
    type: 'Lab-Grown',
    category: 'lab-large',
    categoryName: 'Lab-Grown Large',
    subcategory: 'Matched Pairs',
    name: 'Round Lab Diamond Pair',
    shape: 'Round',
    carat: 0.50,
    color: 'D',
    clarity: 'VVS2',
    cut: 'Excellent',
    polish: 'Excellent',
    symmetry: 'Excellent',
    fluorescence: 'None',
    certification: 'IGI',
    certNumber: 'IGI-LG-PAIR-001',
    price: 2400,
    measurements: {
      length: 5.1,
      width: 5.1,
      depth: 3.2,
      depthPercentage: 62.7,
      tablePercentage: 57.0
    },
    description: 'Perfectly matched pair of lab round diamonds.',
    sku: 'LAB-LRG-PAR-RND-029',
    inStock: true,
    quantity: 3,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main, brilliant_round_side],
      hover: brilliant_round_side
    },
    videos: []
  },
  {
    id: 30,
    type: 'Lab-Grown',
    category: 'lab-large',
    categoryName: 'Lab-Grown Large',
    subcategory: 'Matched Pairs',
    name: 'Pear Lab Diamond Pair',
    shape: 'Pear',
    carat: 0.60,
    color: 'E',
    clarity: 'VS1',
    cut: 'Very Good',
    polish: 'Very Good',
    symmetry: 'Very Good',
    fluorescence: 'None',
    certification: 'IGI',
    certNumber: 'IGI-LG-PAIR-002',
    price: 2800,
    measurements: {
      length: 6.5,
      width: 4.2,
      depth: 2.8,
      depthPercentage: 62.2,
      tablePercentage: 58.0
    },
    description: 'Matched pear-shaped lab diamond pair for earrings.',
    sku: 'LAB-LRG-PAR-PEA-030',
    inStock: true,
    quantity: 2,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main],
      hover: brilliant_round_side
    },
    videos: []
  },

  // ==================== ADDITIONAL NATURAL LARGE ====================
  {
    id: 31,
    type: 'Natural',
    category: 'natural-large',
    categoryName: 'Natural Large',
    subcategory: 'Standard',
    name: 'Pear Natural Diamond',
    shape: 'Pear',
    carat: 1.1,
    color: 'D',
    clarity: 'IF',
    cut: 'Excellent',
    polish: 'Excellent',
    symmetry: 'Excellent',
    fluorescence: 'None',
    certification: 'GIA',
    certNumber: 'GIA-7890123456',
    price: 11000,
    measurements: {
      length: 8.0,
      width: 5.0,
      depth: 3.5,
      depthPercentage: 62.0,
      tablePercentage: 58.0
    },
    description: 'Exquisite pear-shaped diamond with flawless clarity.',
    sku: 'NAT-LRG-STD-PEA-031',
    inStock: true,
    quantity: 1,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main],
      hover: brilliant_round_side
    },
    videos: []
  },
  {
    id: 32,
    type: 'Natural',
    category: 'natural-large',
    categoryName: 'Natural Large',
    subcategory: 'Standard',
    name: 'Cushion Natural Diamond',
    shape: 'Cushion',
    carat: 1.5,
    color: 'E',
    clarity: 'VVS2',
    cut: 'Excellent',
    polish: 'Excellent',
    symmetry: 'Excellent',
    fluorescence: 'None',
    certification: 'GIA',
    certNumber: 'GIA-8901234567',
    price: 9200,
    measurements: {
      length: 7.0,
      width: 6.8,
      depth: 4.5,
      depthPercentage: 64.3,
      tablePercentage: 61.0
    },
    description: 'Classic cushion cut with exceptional brilliance.',
    sku: 'NAT-LRG-STD-CUS-032',
    inStock: true,
    quantity: 1,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main],
      hover: brilliant_round_side
    },
    videos: []
  },
  {
    id: 33,
    type: 'Natural',
    category: 'natural-large',
    categoryName: 'Natural Large',
    subcategory: 'Standard',
    name: 'Radiant Natural Diamond',
    shape: 'Radiant',
    carat: 1.3,
    color: 'F',
    clarity: 'VS1',
    cut: 'Very Good',
    polish: 'Very Good',
    symmetry: 'Very Good',
    fluorescence: 'None',
    certification: 'IGI',
    certNumber: 'IGI-9012345678',
    price: 7800,
    measurements: {
      length: 7.0,
      width: 5.6,
      depth: 4.2,
      depthPercentage: 63.0,
      tablePercentage: 60.0
    },
    description: 'Brilliant radiant cut with trimmed corners.',
    sku: 'NAT-LRG-STD-RAD-033',
    inStock: true,
    quantity: 1,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main],
      hover: brilliant_round_side
    },
    videos: []
  },
  {
    id: 34,
    type: 'Natural',
    category: 'natural-large',
    categoryName: 'Natural Large',
    subcategory: 'Unique Cut',
    name: 'Marquise Natural Diamond',
    shape: 'Marquise',
    carat: 1.2,
    color: 'G',
    clarity: 'VS2',
    cut: 'Very Good',
    polish: 'Very Good',
    symmetry: 'Very Good',
    fluorescence: 'Faint',
    certification: 'GIA',
    certNumber: 'GIA-0123456789',
    price: 6900,
    measurements: {
      length: 10.0,
      width: 4.8,
      depth: 3.2,
      depthPercentage: 60.4,
      tablePercentage: 58.0
    },
    description: 'Dramatic marquise cut that maximizes carat weight.',
    sku: 'NAT-LRG-UNQ-MAR-034',
    inStock: true,
    quantity: 1,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main],
      hover: brilliant_round_side
    },
    videos: []
  }
];

// Helper Functions

// Get available shapes for subcategory
// export const getShapesForSubcategory = (subcategory) => {
//   return diamondData.subcategories[subcategory]?.shapes || [];
// };

// Get available clarity for color
export const getClarityForColor = (color) => {
  return diamondData.clarity[color] || [];
};

// Get diamonds by filters
export const getDiamondsByFilters = (type, category, subcategory, shape) => {
  return diamondProducts.filter(d => 
    d.type === type &&
    d.category === category &&
    d.subcategory === subcategory &&
    d.shape === shape
  );
};

// Get all available colors for subcategory
export const getColorsForSubcategory = (subcategory) => {
  if (subcategory === 'Color Enhanced') {
    return diamondData.colors.fancy;
  }
  return diamondData.colors.white;
};

// Get diamond by ID
export const getDiamondById = (id) => {
  return diamondProducts.find(d => d.id === id);
};

// Filter diamonds with advanced filters
export const filterDiamonds = (baseFilters, advancedFilters) => {
  let result = diamondProducts.filter(d => 
    d.type === baseFilters.type &&
    d.category === baseFilters.category &&
    d.subcategory === baseFilters.subcategory &&
    d.shape === baseFilters.shape
  );

  // Apply advanced filters
  if (advancedFilters.color && advancedFilters.color.length > 0) {
    result = result.filter(d => advancedFilters.color.includes(d.color));
  }

  if (advancedFilters.clarity && advancedFilters.clarity.length > 0) {
    result = result.filter(d => advancedFilters.clarity.includes(d.clarity));
  }

  if (advancedFilters.cut && advancedFilters.cut.length > 0) {
    result = result.filter(d => advancedFilters.cut.includes(d.cut));
  }

  if (advancedFilters.polish && advancedFilters.polish.length > 0) {
    result = result.filter(d => advancedFilters.polish.includes(d.polish));
  }

  if (advancedFilters.symmetry && advancedFilters.symmetry.length > 0) {
    result = result.filter(d => advancedFilters.symmetry.includes(d.symmetry));
  }

  if (advancedFilters.fluorescence && advancedFilters.fluorescence.length > 0) {
    result = result.filter(d => advancedFilters.fluorescence.includes(d.fluorescence));
  }

  if (advancedFilters.certification && advancedFilters.certification.length > 0) {
    result = result.filter(d => advancedFilters.certification.includes(d.certification));
  }

  if (advancedFilters.caratMin !== undefined) {
    result = result.filter(d => d.carat >= advancedFilters.caratMin);
  }

  if (advancedFilters.caratMax !== undefined) {
    result = result.filter(d => d.carat <= advancedFilters.caratMax);
  }

  if (advancedFilters.priceMin !== undefined) {
    result = result.filter(d => d.price >= advancedFilters.priceMin);
  }

  if (advancedFilters.priceMax !== undefined) {
    result = result.filter(d => d.price <= advancedFilters.priceMax);
  }

  if (advancedFilters.inStockOnly) {
    result = result.filter(d => d.inStock);
  }

  return result;
};

// Sort diamonds
export const sortDiamonds = (diamonds, sortBy) => {
  const sorted = [...diamonds];
  
  switch(sortBy) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'carat-asc':
      return sorted.sort((a, b) => a.carat - b.carat);
    case 'carat-desc':
      return sorted.sort((a, b) => b.carat - a.carat);
    default:
      return sorted;
  }
};


// --- Utility helpers for nested lookups ---
export const getCategoriesForType = (typeKey) => {
  const normalizedType = typeKey.toLowerCase().replace('-grown', ''); // 'Natural' -> 'natural', 'Lab-Grown' -> 'lab'
  const categories = diamondData.types[normalizedType]?.categories || {};
  return Object.keys(categories).map(key => ({
    id: key,
    name: categories[key].name
  }));
};

export const getSubcategoriesForCategory = (typeKey, categoryKey) => {
  const normalizedType = typeKey.toLowerCase().replace('-grown', '');
  const subcategories = diamondData.types[normalizedType]?.categories[categoryKey]?.subcategories || {};
  return Object.keys(subcategories).map(key => ({
    id: key,
    name: subcategories[key].name
  }));
};

export const getShapesForSubcategory = (typeKey, categoryKey, subKey) => {
  const normalizedType = typeKey.toLowerCase().replace('-grown', '');
  const sub = diamondData.types[normalizedType]?.categories[categoryKey]?.subcategories[subKey];
  return sub ? Object.keys(sub.shapes || {}) : [];
};

export const getColorsForShape = (typeKey, categoryKey, subKey, shapeKey) => {
  const normalizedType = typeKey.toLowerCase().replace('-grown', '');
  const normalizedShape = shapeKey.toLowerCase();
  const shape = diamondData.types[normalizedType]?.categories[categoryKey]?.subcategories[subKey]?.shapes[normalizedShape];
  return shape ? Object.keys(shape.colors || {}) : [];
};

export const getClaritiesForColor = (typeKey, categoryKey, subKey, shapeKey, color) => {
  const normalizedType = typeKey.toLowerCase().replace('-grown', '');
  const normalizedShape = shapeKey.toLowerCase();
  return diamondData.types[normalizedType]?.categories[categoryKey]?.subcategories[subKey]?.shapes[normalizedShape]?.colors[color] || [];
};

export const menuData = {
  jewellery: {
    title: "Jewellery",
    path: "/jewellery",
    sections: [
      {
        title: "By Category",
        items: [
          { name: "Rings" },
          { name: "Earrings" },
          { name: "Necklaces" },
          { name: "Bracelets" },
          { name: "View All" },
        ],
      },
      {
        title: "By Metal",
        items: [
          { name: "White Gold" },
          { name: "Yellow Gold" },
          { name: "Rose Gold" },
          { name: "Platinum" },
        ],
      },
      {
        title: "By Occasion",
        items: [
          { name: "Daily Wear" },
          { name: "Festive" },
          { name: "Wedding" },
          { name: "Party" },
        ],
      },
    ],
    featured: {
      image:
        "https://images.pexels.com/photos/4595723/pexels-photo-4595723.jpeg",
      title: "Timeless Designs",
      subtitle: "Jewellery for every occasion",
      cta: "Explore Collection",
    },
  },

  diamonds: {
    title: "Diamonds",
    path: "/diamonds",
    sections: [
      {
        title: "Lab Diamonds",
        items: [
          { name: "Round" },
          { name: "Princess" },
          { name: "Cushion" },
          { name: "Oval" },
          { name: "View All" },
        ],
      },
      {
        title: "Natural Diamonds",
        items: [
          { name: "Round Cut" },
          { name: "Princess Cut" },
          { name: "Emerald Cut" },
          { name: "Cushion Cut" },
          { name: "View All" },
        ],
      },
      {
        title: "By Certification",
        items: [
          { name: "GIA Certified" },
          { name: "IGI Certified" },
          { name: "AGS Certified" },
          { name: "HRD Certified" },
        ],
      },
    ],
    featured: {
      image:
        "https://images.pexels.com/photos/11099147/pexels-photo-11099147.jpeg",
      title: "Diamonds That Shine",
      subtitle: "Lab-grown and natural certified diamonds",
      cta: "Shop Diamonds",
    },
  },

  engagementRings: {
    title: "Engagement Rings",
    path: "/engagement-rings",
    sections: [
      {
        title: "By Style",
        items: [
          { name: "Solitaire Rings" },
          { name: "Halo Rings" },
          { name: "Three Stone Rings" },
          { name: "Vintage Rings" },
          { name: "View All" },
        ],
      },
      {
        title: "By Metal",
        items: [
          { name: "White Gold" },
          { name: "Yellow Gold" },
          { name: "Rose Gold" },
          { name: "Platinum" },
          { name: "View All" },
        ],
      },
      {
        title: "By Shape",
        items: [
          { name: "Round" },
          { name: "Oval" },
          { name: "Emerald" },
          { name: "Cushion" },
          { name: "View All" },
        ],
      },
    ],
    featured: {
      image:
        "https://images.pexels.com/photos/15871491/pexels-photo-15871491.jpeg",
      title: "Forever Starts Here",
      subtitle: "Find your perfect engagement ring",
      cta: "Shop Now",
    },
  },

  gemstones: {
    title: "Gemstones",
    path: "/gemstones",
    sections: [
      {
        title: "By Type",
        items: [
          { name: "Sapphire" },
          { name: "Ruby" },
          { name: "Emerald" },
          { name: "Aquamarine" },
          { name: "View All" },
        ],
      },
      {
        title: "By Color",
        items: [
          { name: "Blue" },
          { name: "Red" },
          { name: "Green" },
          { name: "Yellow" },
        ],
      },
      {
        title: "By Zodiac",
        items: [
          { name: "Birthstones" },
          { name: "Lucky Stones" },
          { name: "Healing Crystals" },
        ],
      },
    ],
    featured: {
      image:
        "https://images.pexels.com/photos/15684180/pexels-photo-15684180.jpeg",
      title: "Color Your Story",
      subtitle: "Explore precious and semi-precious gems",
      cta: "Browse Gems",
    },
  },

  weddingRings: {
    title: "Wedding Rings",
    path: "/wedding-rings",
    sections: [
      {
        title: "For Her",
        items: [
          { name: "Diamond Bands" },
          { name: "Eternity Rings" },
          { name: "Classic Bands" },
          { name: "Custom Rings" },
          { name: "View All" },
        ],
      },
      {
        title: "For Him",
        items: [
          { name: "Gold Bands" },
          { name: "Platinum Bands" },
          { name: "Titanium Bands" },
          { name: "Engraved Styles" },
          { name: "View All" },
        ],
      },
      {
        title: "By Metal",
        items: [
          { name: "White Gold" },
          { name: "Yellow Gold" },
          { name: "Rose Gold" },
          { name: "Platinum" },
        ],
      },
    ],
    featured: {
      image:
        "https://images.pexels.com/photos/15684126/pexels-photo-15684126.jpeg",
      title: "Celebrate Love",
      subtitle: "Wedding bands that last a lifetime",
      cta: "Explore Rings",
    },
  },

  gifts: {
    title: "Gifts",
    path: "/gifts",
    sections: [
      {
        title: "For Her",
        items: [
          { name: "Rings" },
          { name: "Earrings" },
          { name: "Bracelets" },
          { name: "Necklaces" },
        ],
      },
      {
        title: "For Him",
        items: [
          { name: "Cufflinks" },
          { name: "Tie Pins" },
          { name: "Bracelets" },
          { name: "Accessories" },
        ],
      },
      {
        title: "By Occasion",
        items: [
          { name: "Anniversary" },
          { name: "Birthday" },
          { name: "Valentine’s Day" },
          { name: "Festive" },
        ],
      },
    ],
    featured: {
      image:
        "https://images.pexels.com/photos/28146843/pexels-photo-28146843.jpeg",
      title: "The Perfect Gift",
      subtitle: "Celebrate moments that matter",
      cta: "Find a Gift",
    },
  },
};


export default {
  diamondData,
  diamondProducts,
  getCategoriesForType,
  getSubcategoriesForCategory,
  getShapesForSubcategory,
  getColorsForShape,
  getClaritiesForColor
} 

// export default {
//   diamondData,
//   diamondProducts,
//   getCategoriesForType,
//   getSubcategoriesForCategory,
//   getShapesForSubcategory,
//   getClarityForColor,
//   getDiamondsByFilters,
//   getColorsForSubcategory,
//   getDiamondById,
//   filterDiamonds,
//   sortDiamonds
// };