import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  Heart,
  ShoppingBag,
  Truck,
  RefreshCw,
  Shield,
  Sparkles,
  ChevronRight,
  X,
} from "lucide-react";
import { getRingById, getRecommendedRings, ringProducts } from "./MasterData";
import ProductCard from "../components/ProductCard";

const JewelryDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("52");
  const [expandedSection, setExpandedSection] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [isAddToCartHovered, setIsAddToCartHovered] = useState(false);
  const contentRef = useRef(null);
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  // Get product from ringProducts data
  const product = getRingById(id);
  const [selectedColor, setSelectedColor] = useState(product?.metalColors[0]);

  useEffect(() => {
    if (product && product.metalColors.length > 0) {
      setSelectedColor(product.metalColors[0]);
    }
  }, [id, product]);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Product not found</h2>
          <button
            onClick={() => navigate("/jewelry/rings")}
            className="px-6 py-2 bg-black text-white hover:bg-gray-800"
          >
            Back to Rings
          </button>
        </div>
      </div>
    );
  }

  const currentImages = product.images[selectedColor];
  const sizes = product?.availableSizes || [
    "48",
    "50",
    "52",
    "54",
    "56",
    "58",
    "60",
  ];

  const getMetalColorClass = (color) => {
    switch (color) {
      case "White Gold":
        return "bg-gray-200";
      case "Rose Gold":
        return "bg-pink-300";
      case "Yellow Gold":
        return "bg-yellow-300";
      default:
        return "bg-gray-200";
    }
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Handle favorite toggle
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const viewedProducts = ringProducts.slice(0, 4);

  // Handle add to cart
  const handleAddToCart = (product, color) => {
    console.log("Adding to cart:", product.name, color);
    // Implement cart logic here
  };

  // Get recommended products using helper function
  const recommendedProducts = getRecommendedRings(parseInt(id), 4);

  // State for managing product card colors
  const [productColors, setProductColors] = useState({});

  // Size Guide Modal Component
  const SizeGuideModal = () => (
    <AnimatePresence>
      {showSizeGuide && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowSizeGuide(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white max-w-2xl w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSizeGuide(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-light mb-6">Ring Size Guide</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-3">
                  How to Measure Your Ring Size
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                  <li>Wrap a piece of string or paper around your finger</li>
                  <li>Mark where the ends meet</li>
                  <li>Measure the length in millimeters</li>
                  <li>Use the chart below to find your size</li>
                </ol>
              </div>

              <div>
                <h3 className="font-medium mb-3">Size Chart</h3>
                <div className="border border-gray-200">
                  <div className="grid grid-cols-3 gap-4 p-3 bg-gray-50 font-medium text-sm">
                    <div>EU Size</div>
                    <div>US Size</div>
                    <div>Circumference (mm)</div>
                  </div>
                  {[
                    { eu: "48", us: "4.5", circ: "48.0" },
                    { eu: "50", us: "5.5", circ: "50.0" },
                    { eu: "52", us: "6.5", circ: "52.0" },
                    { eu: "54", us: "7", circ: "54.0" },
                    { eu: "56", us: "8", circ: "56.0" },
                    { eu: "58", us: "8.5", circ: "58.0" },
                    { eu: "60", us: "9", circ: "60.0" },
                  ].map((size) => (
                    <div
                      key={size.eu}
                      className="grid grid-cols-3 gap-4 p-3 border-t border-gray-200 text-sm"
                    >
                      <div>{size.eu}</div>
                      <div>{size.us}</div>
                      <div>{size.circ}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = 6;
  const images = [...Array(totalImages)].map((_, idx) =>
    idx === 0 ? currentImages.main : currentImages.hover
  );

  // Optional auto-slide on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-white mt-20 min-h-screen">
      <SizeGuideModal />

      {/* Sticky Header */}
      <AnimatePresence>
        {isSticky && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="fixed md:block hidden top-16 left-0 right-0 bg-white z-40 shadow-sm shadow-gray-300"
          >
            <div className="max-w-7xl mx-auto px-12 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-50">
                  <img
                    src={currentImages.main}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-medium">{product.name}</h2>
                  <p className="text-sm text-gray-600">${product.price}</p>
                </div>
              </div>
              {/* <button 
                className="relative bg-black text-white px-8 py-3 overflow-hidden group"
                onMouseEnter={() => setIsAddToCartHovered(true)}
                onMouseLeave={() => setIsAddToCartHovered(false)}
              >
                <motion.div
                  className="absolute inset-0 bg-gray-800"
                  initial={{ x: '-100%' }}
                  animate={{ x: isAddToCartHovered ? '0%' : '-100%' }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  <ShoppingBag size={18} />
                  ADD TO BAG
                </span>
              </button> */}
              <button
                className="relative  bg-black text-white  px-8 py-2 overflow-hidden group font-medium"
                onMouseEnter={() => setIsAddToCartHovered(true)}
                onMouseLeave={() => setIsAddToCartHovered(false)}
              >
                <motion.div
                  className="absolute inset-0 bg-white border border-black"
                  initial={{ x: "-100%" }}
                  animate={{ x: isAddToCartHovered ? "0%" : "-100%" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />

                <motion.span
                  className="relative z-10 flex items-center justify-center gap-2"
                  animate={{
                    color: isAddToCartHovered ? "#000000" : "#FFFFFF",
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ShoppingBag size={18} />
                  ADD TO BAG
                </motion.span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Breadcrumb */}
     <div className="hidden md:flex mx-auto items-center  w-full px-12 py-4 text-sm text-gray-600 space-x-2">
      {/* Home */}
      <span
        className="cursor-pointer hover:text-black transition-colors"
        onClick={() => navigate("/")}
      >
        Home
      </span>
      <ChevronRight className="w-4 h-4 text-gray-400" />

      {/* Category */}
      <span
        className="cursor-pointer hover:text-black transition-colors"
        onClick={() => navigate("/jewelry/rings")}
      >
        Rings
      </span>
      <ChevronRight className="w-4 h-4 text-gray-400" />

      {/* Current Product */}
      <span className="text-black font-medium truncate max-w-[200px]">
        {product?.name || "Diamond"}
      </span>
    </div>

      <div ref={contentRef} className="w-full mx-auto px-4 md:px-12 pb-12">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-16">
          {/* Left Side - Images (65%) */}
          <div className=" hidden md:block lg:w-[65%]">
            <div className="grid grid-cols-2 gap-2">
              {[...Array(6)].map((_, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-gray-50"
                >
                  <img
                    src={idx === 0 ? currentImages.main : currentImages.hover}
                    alt={`${product.name} ${idx + 1}`}
                    className="w-full aspect-[4/5] object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:hidden relative overflow-hidden aspect-[4/5]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`${product.name} ${currentIndex + 1}`}
                className="w-full h-full object-cover absolute inset-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </AnimatePresence>

            {/* Navigation dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "bg-black" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Product Details (35%) - Sticky */}
          <div className="lg:w-[35%]">
            <div className="lg:sticky lg:top-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Header with Badge and Favorite */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    {product.badge && (
                      <div className="inline-block bg-gray-100 px-3 py-1 text-xs font-medium mb-3">
                        {product.badge}
                      </div>
                    )}
                    <h1 className="text-2xl  mb-1">{product.name}</h1>
                    <p className="text-sm text-gray-600">{product.material}</p>
                  </div>
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-black transition-colors"
                  >
                    <Heart
                      size={20}
                      className={
                        isFavorite
                          ? "fill-red-500 text-red-500"
                          : "text-gray-700"
                      }
                    />
                  </button>
                </div>

                {/* Color Selection */}
                {product.metalColors.length > 1 && (
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm font-medium">Color:</p>
                      <p className="text-sm text-gray-600">{selectedColor}</p>
                    </div>
                    <div className="flex gap-2">
                      {product.metalColors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`w-10 h-10 rounded-full border-2 ${
                            selectedColor === color
                              ? "border-black"
                              : "border-gray-300"
                          } flex items-center justify-center hover:border-gray-600 transition-colors`}
                          title={color}
                        >
                          <div
                            className={`w-8 h-8 rounded-full ${getMetalColorClass(
                              color
                            )}`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Size Selection - Single Row */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium">Size:</p>
                      <span className="text-sm text-gray-600">
                        {selectedSize}
                      </span>
                    </div>
                    <button
                      onClick={() => setShowSizeGuide(true)}
                      className="text-xs underline hover:no-underline"
                    >
                      View size guide
                    </button>
                  </div>
                  <div
                    className="
    flex flex-wrap lg:flex-nowrap
    gap-2 pb-2
    overflow-x-auto lg:overflow-visible
  "
                  >
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 text-sm border whitespace-nowrap ${
                          selectedSize === size
                            ? "border-black bg-black text-white"
                            : "border-gray-300 hover:border-black"
                        } transition-colors`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                <p className="text-2xl font-light mb-6">${product.price}</p>
                {/* Add to Bag Button with Animation */}
                <button
                  className="relative w-full bg-black text-white py-2 mb-4 overflow-hidden group font-medium"
                  onMouseEnter={() => setIsAddToCartHovered(true)}
                  onMouseLeave={() => setIsAddToCartHovered(false)}
                >
                  {/* Sliding white background animation */}
                  <motion.div
                    className="absolute inset-0 bg-white border border-black"
                    initial={{ x: "-100%" }}
                    animate={{ x: isAddToCartHovered ? "0%" : "-100%" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />

                  {/* Text content with color transition */}
                  <motion.span
                    className="relative z-10 flex items-center justify-center gap-2"
                    animate={{
                      color: isAddToCartHovered ? "#000000" : "#FFFFFF",
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ShoppingBag size={20} />
                    ADD TO BAG
                  </motion.span>
                </button>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-2 text-xs">
                    <Shield size={16} className="text-gray-600" />
                    <span>2 Years Warranty</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <RefreshCw size={16} className="text-gray-600" />
                    <span>30 Days Return</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Truck size={16} className="text-gray-600" />
                    <span>Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Sparkles size={16} className="text-gray-600" />
                    <span>Handcrafted</span>
                  </div>
                </div>

                {/* Expandable Sections */}
                <div className="border-t border-gray-200">
                  {/* Description */}
                  <div className="border-b border-gray-200">
                    <button
                      onClick={() => toggleSection("description")}
                      className="w-full py-4 flex items-center justify-between text-left"
                    >
                      <span className="font-medium text-sm">Description</span>
                      {expandedSection === "description" ? (
                        <Minus size={18} />
                      ) : (
                        <Plus size={18} />
                      )}
                    </button>
                    <AnimatePresence>
                      {expandedSection === "description" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-gray-600 pb-4 leading-relaxed">
                            {product.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Details */}
                  <div className="border-b border-gray-200">
                    <button
                      onClick={() => toggleSection("details")}
                      className="w-full py-4 flex items-center justify-between text-left"
                    >
                      <span className="font-medium text-sm">Details</span>
                      {expandedSection === "details" ? (
                        <Minus size={18} />
                      ) : (
                        <Plus size={18} />
                      )}
                    </button>
                    <AnimatePresence>
                      {expandedSection === "details" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="text-sm text-gray-600 pb-4 space-y-2">
                            <div className="flex justify-between">
                              <span>Material:</span>
                              <span className="font-medium text-black">
                                {product.material}
                              </span>
                            </div>
                          </div>{" "}
                          {/* ✅ properly closed inner div */}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Shipping */}
                  <div className="border-b border-gray-200">
                    <button
                      onClick={() => toggleSection("shipping")}
                      className="w-full py-4 flex items-center justify-between text-left"
                    >
                      <span className="font-medium text-sm">
                        Delivery & Shipping
                      </span>
                      {expandedSection === "shipping" ? (
                        <Minus size={18} />
                      ) : (
                        <Plus size={18} />
                      )}
                    </button>
                    <AnimatePresence>
                      {expandedSection === "shipping" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="text-sm text-gray-600 pb-4 space-y-3">
                            <div>
                              <p className="font-medium text-black mb-1">
                                Standard Delivery
                              </p>
                              <p>5 to 7 business days</p>
                            </div>
                            <div>
                              <p className="font-medium text-black mb-1">
                                Free Shipping
                              </p>
                              <p>On orders above $95</p>
                            </div>
                            <div>
                              <p className="font-medium text-black mb-1">
                                Express Delivery
                              </p>
                              <p>
                                2 to 3 business days (additional charges apply)
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Returns */}
                  <div>
                    <button
                      onClick={() => toggleSection("returns")}
                      className="w-full py-4 flex items-center justify-between text-left"
                    >
                      <span className="font-medium text-sm">
                        Exchange & Return
                      </span>
                      {expandedSection === "returns" ? (
                        <Minus size={18} />
                      ) : (
                        <Plus size={18} />
                      )}
                    </button>
                    <AnimatePresence>
                      {expandedSection === "returns" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="text-sm text-gray-600 pb-4 space-y-3">
                            <p>
                              The satisfaction of our customers is our priority.
                              Products may be exchanged or returned online or to
                              one of our boutiques, up to 30 days from the
                              delivery date.
                            </p>
                            <p className="font-medium text-black">
                              Items must be unworn and in original condition
                              with all tags attached.
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-600 mb-3">
                    <span className="font-medium text-black">
                      Lifetime Cleaning Service:
                    </span>{" "}
                    We offer complimentary professional cleaning service in our
                    boutiques.
                  </p>
                  <p className="text-xs text-gray-600">
                    <span className="font-medium text-black">
                      Handmade with Love:
                    </span>{" "}
                    Each piece is handcrafted in our ateliers with passion and
                    attention to detail.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
    </div>
        {/* Mid Banner */}
         <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative w-full bg-gray-100 my-16 py-12"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-6">
        {/* LEFT: Video */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-2xl shadow-lg"
        >
          <video
            src="https://www.pexels.com/download/video/6263491/"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[350px] lg:h-[450px] object-cover"
          />
        </motion.div>

        {/* RIGHT: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left"
        >
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xs tracking-widest uppercase text-gray-600 mb-2"
          >
            Handmade with Love
          </motion.p>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-light text-gray-900 mb-4"
          >
            Our Craftsmanship
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-gray-700 text-sm leading-relaxed max-w-md mx-auto lg:mx-0"
          >
            Each piece is carefully handcrafted by skilled artisans who
            dedicate their time and heart to ensure every detail reflects
            precision, elegance, and timeless beauty.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-80 overflow-hidden my-16"
        >
          <img
            src="https://images.pexels.com/photos/5731874/pexels-photo-5731874.jpeg"
            alt="Craftsmanship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
            <div>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xs tracking-widest uppercase mb-2"
              >
                Handmade with Love
              </motion.p>
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-2xl font-light mb-3"
              >
                Our Craftsmanship
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-sm max-w-md mx-auto"
              >
                Each piece is handcrafted with passion and attention to detail
              </motion.p>
            </div>
          </div>
        </motion.div> */}

        {/* Recommendation Carousel */}
        <div className="w-full mx-auto px-4 md:px-12 pb-12 mb-16 md:hidden">
          <h3 className="text-2xl font-light mb-6 text-center">
            You May Also Like
          </h3>

          {/* Carousel wrapper */}
          <motion.div
            ref={carouselRef}
            className="cursor-grab overflow-hidden"
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
          >
            <motion.div
              className="flex gap-4"
              drag="x"
              dragConstraints={{
                left: -((recommendedProducts.length - 1) * 250),
                right: 0,
              }}
              dragElastic={0.15}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {recommendedProducts.map((recProduct, index) => (
                <motion.div
                  key={recProduct.id}
                  className="
                flex-shrink-0
                w-[85%] sm:w-[60%] md:w-[45%] lg:w-[23%]
              "
                >
                  <ProductCard
                    product={recProduct}
                    index={index}
                    productType="rings"
                    onFavoriteToggle={toggleFavorite}
                    onAddToCart={handleAddToCart}
                    selectedColor={
                      productColors[recProduct.id] || recProduct.metalColors[0]
                    }
                    onColorChange={(productId, color) => {
                      setProductColors((prev) => ({
                        ...prev,
                        [productId]: color,
                      }));
                    }}
                    showActions={false}
                    showColorSelector={recProduct.metalColors.length > 1}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <div className=" w-full mx-auto px-4 md:px-12 pb-12 mb-16 hidden md:block">
          <h3 className="text-2xl font-light mb-6 text-center">
            You May Also Like
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {recommendedProducts.map((recProduct, index) => (
              <ProductCard
                key={recProduct.id}
                product={recProduct}
                index={index}
                productType="rings"
                onFavoriteToggle={toggleFavorite}
                onAddToCart={handleAddToCart}
                // isFavorite={favorites.includes(product.id)}
                selectedColor={
                  productColors[recProduct.id] || recProduct.metalColors[0]
                }
                onColorChange={(productId, color) => {
                  setProductColors((prev) => ({ ...prev, [productId]: color }));
                }}
                showActions={false}
                showColorSelector={recProduct.metalColors.length > 1}
              />
            ))}
          </div>
        </div>
        {/* Recently Viewed */}
        <div className="w-full mx-auto px-4 md:px-12 pb-12 mb-16 md:hidden">
          <h3 className="text-2xl font-light mb-6 text-center">
            Recently Viewed
          </h3>

          {/* Carousel wrapper */}
          <motion.div
            ref={carouselRef}
            className="cursor-grab overflow-hidden"
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div
              className="flex gap-4"
              drag="x"
              dragConstraints={{
                left: -((viewedProducts.length - 1) * 250),
                right: 0,
              }}
              dragElastic={0.15}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {viewedProducts.map((viewedProduct, index) => (
                <motion.div
                  key={viewedProduct.id}
                  className="
                flex-shrink-0
                w-[85%] sm:w-[60%] md:w-[45%] lg:w-[23%]
              "
                >
                  <ProductCard
                    product={viewedProduct}
                    index={index}
                    productType="rings"
                    onFavoriteToggle={toggleFavorite}
                    onAddToCart={handleAddToCart}
                    selectedColor={
                      productColors[viewedProduct.id] ||
                      viewedProduct.metalColors[0]
                    }
                    onColorChange={(productId, color) => {
                      setProductColors((prev) => ({
                        ...prev,
                        [productId]: color,
                      }));
                    }}
                    showActions={false}
                    showColorSelector={viewedProduct.metalColors.length > 1}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <div className="w-full mx-auto px-4 md:px-12 pb-12 mb-16 hidden md:block">
          <h3 className="text-2xl font-light mb-6 text-center">
            Recently Viewed
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ringProducts.slice(0, 4).map((viewedProduct, index) => (
              <ProductCard
                key={viewedProduct.id}
                product={viewedProduct}
                index={index}
                productType="rings"
                onFavoriteToggle={toggleFavorite}
                onAddToCart={handleAddToCart}
                selectedColor={
                  productColors[viewedProduct.id] ||
                  viewedProduct.metalColors[0]
                }
                onColorChange={(productId, color) => {
                  setProductColors((prev) => ({ ...prev, [productId]: color }));
                }}
                showActions={false}
                showColorSelector={viewedProduct.metalColors.length > 1}
              />
            ))}
          </div>
        </div>
  

      {/* Bottom Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-96 overflow-hidden"
      >
        <motion.img
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.pexels.com/photos/31730435/pexels-photo-31730435.jpeg"
          alt="Heritage Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
          <div>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xs tracking-widest uppercase mb-3"
            >
              Over 4 Decades of Heritage
            </motion.p>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl font-light mb-4"
            >
              Made with Passion
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-base max-w-2xl mx-auto leading-relaxed"
            >
              Experience and craftsmanship aligned with fine jewelry making.
              Hand-crafted in our production sites with sterling silver from
              recycled sources.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Craftsmanship Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-xs tracking-widest uppercase mb-3 text-gray-600">
              Our Commitment
            </p>
            <h2 className="text-3xl font-light mb-4">Handmade with Love</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Behind each jewel is an expert who dedicates time and the utmost
              attention to the craft. The magic is all in the details.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Craftsmanship",
                description:
                  "Each piece is meticulously handcrafted by skilled artisans with decades of experience",
              },
              {
                title: "Quality Materials",
                description:
                  "We use premium sterling silver 925, mostly from recycled sources, ensuring sustainability",
              },
              {
                title: "Attention to Detail",
                description:
                  "Every stage of production is overseen by our team to ensure perfection",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JewelryDetailPage;
