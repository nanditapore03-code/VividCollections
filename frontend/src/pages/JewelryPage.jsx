import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X, SlidersHorizontal, ArrowUpDown, Award, Shield, Clock, Gem } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { 
  ringProducts, 
  ringCategories, 
  ringFilterOptions,
  filterRings 
} from './MasterData';

const JewelryPage = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedColors, setSelectedColors] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('All Rings');
  const [favorites, setFavorites] = useState([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [mobileSortOpen, setMobileSortOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(true);
  const [sortBy, setSortBy] = useState('Featured');
  
  // Filter states
  const [activeFilters, setActiveFilters] = useState({
    color: [],
    stone: [],
    collection: [],
    style: [],
    size: []
  });

  // Sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      const bottomBanner = document.getElementById('bottom-banner');
      if (bottomBanner) {
        const bannerTop = bottomBanner.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight;
        setIsSticky(scrollPosition < bannerTop);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     if (!e.target.closest('.dropdown-container')) {
  //       setActiveDropdown(null);
  //     }
  //   };

  //   document.addEventListener('click', handleClickOutside);
  //   return () => document.removeEventListener('click', handleClickOutside);
  // }, []);

  // Banner configuration
  const bannerSlides = [
    {
      image: "https://images.pexels.com/photos/31642922/pexels-photo-31642922.jpeg",
      title: "EXQUISITE RING COLLECTION",
      subtitle: "Handcrafted elegance for every occasion"
    }
  ];

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setActiveFilters(prev => {
      const currentValues = prev[filterType] || [];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value];
      
      return { ...prev, [filterType]: newValues };
    });
  };

  // Clear all filters
  const clearAllFilters = () => {
    setActiveFilters({
      color: [],
      stone: [],
      collection: [],
      style: [],
      size: []
    });
    setSelectedCategory('All Rings');
  };

  // Get active filter count
  const getActiveFilterCount = () => {
    return Object.values(activeFilters).flat().length + 
           (selectedCategory !== 'All Rings' ? 1 : 0);
  };

  // Filter and sort products
  const getFilteredAndSortedProducts = () => {
    // First filter by category
    let filtered = selectedCategory === 'All Rings' 
      ? ringProducts 
      : ringProducts.filter(p => p.category === selectedCategory);

    // Apply advanced filters
    filtered = filterRings({
      category: selectedCategory,
      ...activeFilters
    });

    // Sort products
    let sorted = [...filtered];
    switch(sortBy) {
      case 'Price, low to high':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'Price, high to low':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'Alphabetically, A-Z':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'Alphabetically, Z-A':
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'Best selling':
        // Could implement based on a 'sold' property
        break;
      case 'Featured':
      default:
        // Keep original order or prioritize badges
        sorted.sort((a, b) => {
          if (a.badge && !b.badge) return -1;
          if (!a.badge && b.badge) return 1;
          return 0;
        });
    }

    return sorted;
  };

  const filteredProducts = getFilteredAndSortedProducts();

  // Handle favorite toggle
  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  // Handle color change
  const handleColorChange = (productId, color) => {
    setSelectedColors(prev => ({
      ...prev,
      [productId]: color
    }));
  };

  // Handle add to cart
  const handleAddToCart = (product, color) => {
    console.log('Adding to cart:', product.name, color);
    // Implement cart logic here
  };

  // Handle sort change
  const handleSortChange = (option) => {
    setSortBy(option);
    setMobileSortOpen(false);
    setActiveDropdown(null);
  };

  // Sort options
  const sortOptions = [
    'Featured', 
    'Best selling', 
    'Price, low to high', 
    'Price, high to low', 
    'Alphabetically, A-Z', 
    'Alphabetically, Z-A'
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[450px] bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 overflow-hidden"
      >
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={bannerSlides[0].image}
          alt={bannerSlides[0].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        <div className="absolute bottom-24 left-60 text-nowrap transform -translate-x-1/2 text-left text-white px-6 z-10">
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm tracking-widest uppercase mb-3"
          >
            Handcrafted Elegance
          </motion.p>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-3xl font-light mb-4 tracking-wide"
          >
            {bannerSlides[0].title}
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg text-gray-100 max-w-xl mx-auto"
          >
            {bannerSlides[0].subtitle}
          </motion.p>
        </div>
      </motion.div>

     

      {/* Mobile Filter Bar */}
      <div className={`border-b border-gray-300 ${isSticky ? 'sticky top-0' : ''} bg-white z-40 md:hidden transition-all duration-300`}>
        <div className="px-4 py-2 flex divide-x divide-gray-300 justify-between gap-4">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex-1 flex items-center justify-center gap-2 py-2 text-sm hover:bg-gray-50 transition-colors"
          >
            <SlidersHorizontal size={16} />
            Filters
            {getActiveFilterCount() > 0 && (
              <span className="bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {getActiveFilterCount()}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileSortOpen(true)}
            className="flex-1 flex items-center justify-center gap-2 py-2 border-gray-300 text-sm hover:bg-gray-50 transition-colors"
          >
            <ArrowUpDown size={16} />
            Sort
          </button>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setMobileFiltersOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween' }}
              className="fixed left-0 top-0 bottom-0 w-80 bg-white z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium">
                    Filters {getActiveFilterCount() > 0 && `(${getActiveFilterCount()})`}
                  </h3>
                  <button onClick={() => setMobileFiltersOpen(false)}>
                    <X size={24} />
                  </button>
                </div>

                {getActiveFilterCount() > 0 && (
                  <button
                    onClick={clearAllFilters}
                    className="text-sm text-red-600 mb-4 hover:underline"
                  >
                    Clear all filters
                  </button>
                )}

                {Object.keys(ringFilterOptions).map((filterKey) => (
                  <div key={filterKey} className="mb-6">
                    <h4 className="font-medium mb-3 capitalize">
                      {filterKey}
                      {activeFilters[filterKey]?.length > 0 && (
                        <span className="ml-2 text-sm text-gray-500">
                          ({activeFilters[filterKey].length})
                        </span>
                      )}
                    </h4>
                    {ringFilterOptions[filterKey].map((option) => (
                      <label key={option} className="flex items-center py-2 cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="mr-3"
                          checked={activeFilters[filterKey]?.includes(option) || false}
                          onChange={() => handleFilterChange(filterKey, option)}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                ))}

                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-full bg-black text-white py-3 mt-4 hover:bg-gray-800 transition-colors"
                >
                  View {filteredProducts.length} products
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Sort Modal */}
      <AnimatePresence>
        {mobileSortOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setMobileSortOpen(false)}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'tween' }}
              className="fixed left-0 right-0 bottom-0 bg-white z-50 rounded-t-2xl"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium">Sort By</h3>
                  <button onClick={() => setMobileSortOpen(false)}>
                    <X size={24} />
                  </button>
                </div>
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    className={`w-full text-left py-3 hover:bg-gray-50 transition-colors ${
                      sortBy === option ? 'font-medium bg-gray-50' : ''
                    }`}
                    onClick={() => handleSortChange(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className='flex justify-between'>
<div className="flex flex-col w-[15%]">
  <div
    className={`${
      isSticky ? "sticky top-20" : ""
    } bg-white z-40 hidden md:block transition-all duration-300`}
  >
    <div className="w-full px-6 py-6">
      <div className="flex flex-col gap-4">
        <h2 className="py-2 mt-2 font-semibold text-xl">Filters</h2>

        {/* ALL FILTERS */}
        {["category", ...Object.keys(ringFilterOptions), "sort"].map(
          (filterKey) => {
            const isCategory = filterKey === "category";
            const isSort = filterKey === "sort";
            const options = isCategory
              ? ringCategories
              : isSort
              ? sortOptions
              : ringFilterOptions[filterKey];

            const activeCount = isCategory
              ? selectedCategory.length
              : isSort
              ? sortBy ? 1 : 0
              : activeFilters[filterKey]?.length || 0;

            return (
              <div key={filterKey}>
                {/* Header */}
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === filterKey ? null : filterKey
                    )
                  }
                  className="flex items-center justify-between w-full text-sm font-medium capitalize text-gray-800 hover:opacity-80 transition"
                >
                  <span className="flex items-center gap-2">
                    {isCategory
                      ? "Category"
                      : isSort
                      ? "Sort by"
                      : filterKey}
                    {activeCount > 0 && (
                      <span className="bg-black text-white text-xs rounded-full px-2 py-0.5">
                        {activeCount}
                      </span>
                    )}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      activeDropdown === filterKey ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Collapsible Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: activeDropdown === filterKey ? "auto" : 0,
                    opacity: activeDropdown === filterKey ? 1 : 0,
                  }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden pt-2"
                >
                  <div className="space-y-1">
                    {options.map((option) => {
                      // Sort single-select checkbox behavior
                      if (isSort) {
                        const checked = sortBy === option;
                        return (
                          <label
                            key={option}
                            className="flex items-center px-2 py-1 text-sm hover:bg-gray-50 cursor-pointer rounded"
                          >
                            <input
                              type="checkbox"
                              className="mr-2 accent-black"
                              checked={checked}
                              onChange={() => handleSortChange(option)}
                            />
                            {option}
                          </label>
                        );
                      }

                      // Category & filters multi-select
                      const checked = isCategory
                        ? selectedCategory.includes(option)
                        : activeFilters[filterKey]?.includes(option) || false;

                      return (
                        <label
                          key={option}
                          className="flex items-center px-2 py-1 text-sm hover:bg-gray-50 cursor-pointer rounded"
                        >
                          <input
                            type="checkbox"
                            className="mr-2 accent-black"
                            checked={checked}
                            onChange={() => {
                              if (isCategory) {
                                if (checked) {
                                  setSelectedCategory(
                                    selectedCategory.filter((c) => c !== option)
                                  );
                                } else {
                                  setSelectedCategory([
                                    ...selectedCategory,
                                    option,
                                  ]);
                                }
                              } else {
                                handleFilterChange(filterKey, option);
                              }
                            }}
                          />
                          {option}
                        </label>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            );
          }
        )}
      </div>
    </div>
  </div>
</div>



      <div className="md:w-[85%] mx-auto px-3 md:px-6 py-12">
        {/* Results info */}
        <div className="mb-6 text-sm text-gray-600">
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          {getActiveFilterCount() > 0 && (
            <button
              onClick={clearAllFilters}
              className="ml-4 text-red-600 hover:underline"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-2 md:gap-x-6 gap-y-5 md:gap-y-10">
            {filteredProducts.map((product, idx) => (
              <ProductCard
                key={product.id}
                product={product}
                index={idx}
                productType="rings"
                onFavoriteToggle={toggleFavorite}
                onAddToCart={handleAddToCart}
                isFavorite={favorites.includes(product.id)}
                selectedColor={selectedColors[product.id]}
                onColorChange={handleColorChange}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg mb-4">No products found</p>
            <button
              onClick={clearAllFilters}
              className="text-black underline hover:no-underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
      </div>

      {/* Bottom Banner */}
      <motion.div
        id="bottom-banner"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-96 overflow-hidden mt-10"
      >
        <motion.img
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.pexels.com/photos/2498853/pexels-photo-2498853.jpeg"
          alt="Collection Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-start text-left text-white px-6">
          <div>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xs tracking-widest uppercase mb-2"
            >
              Artisan Collection
            </motion.p>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-3xl font-light mb-4"
            >
              Handcrafted with Passion
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-base max-w-md mx-auto"
            >
              Each piece tells a unique story of artistry and dedication
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Trust Indicators */}
      {/* <section className="py-16 px-6 md:px-12 border-t">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Award, title: "PREMIUM QUALITY", desc: "Handcrafted with finest materials" },
            { icon: Shield, title: "LIFETIME WARRANTY", desc: "Protected for years to come" },
            { icon: Clock, title: "FAST SHIPPING", desc: "Delivered to your doorstep" },
            { icon: Gem, title: "CERTIFIED STONES", desc: "Authentic gemstones guaranteed" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-medium uppercase">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default JewelryPage;