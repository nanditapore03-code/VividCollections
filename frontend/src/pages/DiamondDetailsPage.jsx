import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Share2,
  Printer,
  Mail,
  Check,
  Award,
  Shield,
  Package,
  RotateCcw,
  Clock,
  X,
  Phone,
} from "lucide-react";
import { useParams } from "react-router-dom";

import { diamondProducts } from "./DiamondData";
import { useNavigate } from "react-router-dom";

const DiamondDetailsPage = () => {
  const {id} = useParams();
  const diamond = diamondProducts.find((d) => String(d.id) === String(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [addedToCart, setAddedToCart] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
  const backToDiamonds = () => {
    navigate('/diamonds');
      window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const images = diamond.images?.gallery || [diamond.images?.main];

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen mt-20 bg-white">
      {/* Minimal Top Bar */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
         <div className="md:block hidden md:flexitems-center justify-between h-12 md:mb-4">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-xs md:text-sm text-gray-500">
        <span
          onClick={() => navigate("/")}
          
          className="cursor-pointer hover:text-gray-900 transition-colors"
        >
          Home
        </span>
        <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
        <span
          onClick={() => navigate("/diamonds")}
          className="cursor-pointer hover:text-gray-900 transition-colors"
        >
          Diamonds
        </span>
        <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
        <span className="text-gray-900 font-medium truncate max-w-[160px]">
          {diamond?.name || "Details"}
        </span>
      </nav>

      {/* Back Button (Right-aligned) */}
      <button
        onClick={backToDiamonds}
        className="md:block hidden md:flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 hover:text-black transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back
      </button>
          {/* <button
        onClick={backToDiamonds}
        className="flex items-center md:hidden gap-2 text-xs uppercase tracking-wider border border-gray-500 rounded-full text-gray-500 hover:text-black transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
  
      </button> */}
    </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-8">
        <div className="md:grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Image Gallery */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            {/* Main Image */}
            <div className="relative bg-gray-50 aspect-square mb-4 overflow-hidden group">
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                src={images[selectedImage]}
                alt={diamond.name}
                className="w-full h-full object-contain md:p-12"
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage(prev => prev === 0 ? images.length - 1 : prev - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-2 hover:bg-white transition-all opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft className="w-4 h-4 text-gray-900" />
                  </button>
                  <button
                    onClick={() => setSelectedImage(prev => prev === images.length - 1 ? 0 : prev + 1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-2 hover:bg-white transition-all opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight className="w-4 h-4 text-gray-900" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="grid grid-cols-5 gap-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square bg-gray-50 overflow-hidden transition-all ${
                      selectedImage === idx ? 'ring-1 ring-black' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Details */}
          <div className="lg:pt-2">
            {/* Header */}
            <div className="pb-8 border-b border-gray-100">
              <div className="flex items-start justify-between mb-6">
               <div className="flex-1">
  {/* Type */}
  <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
    {diamond.type} Diamond
  </p>

  {/* Name + Carat + Shape */}
  <h1 className="text-xl lg:text-2xl font-light text-gray-900 mb-1 tracking-tight">
    {diamond.name || `${diamond.carat} Carat ${diamond.shape}`}
  </h1>

  {/* If you want both name + specs */}
  <p className="text-sm text-gray-500 mb-2">
    {diamond.carat} Carat &middot; {diamond.shape}
  </p>

  {/* SKU + Stock Info */}
  <div className="flex items-center gap-3 text-xs text-gray-400 uppercase tracking-wider">
    <span>{diamond.sku}</span>
    {diamond.inStock && (
      <>
        <span>•</span>
        <span className="text-gray-900">In Stock</span>
      </>
    )}
  </div>
</div>

                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="p-2 hover:bg-gray-50 rounded-full transition-colors"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      isWishlisted ? 'fill-black text-black' : 'text-gray-300'
                    }`}
                  />
                </button>
              </div>
              
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-light text-gray-900 tracking-tight">
                  ${diamond.price.toLocaleString()}
                </span>
                <span className="text-sm text-gray-400 uppercase tracking-wider">USD</span>
              </div>
            </div>

            {/* Quick Specs */}
            <div className="py-8 border-b border-gray-100">
              <div className="grid md:grid-cols-3 grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { label: 'Shape', value: diamond.shape },
                  { label: 'Carat Weight', value: diamond.carat },
                  { label: 'Color Grade', value: diamond.color },
                  { label: 'Clarity Grade', value: diamond.clarity },
                  { label: 'Cut Grade', value: diamond.cut },
                  { label: 'Polish', value: diamond.polish },
                  { label: 'Symmetry', value: diamond.symmetry },
                  { label: 'Fluorescence', value: diamond.fluorescence },
                ].map((spec, idx) => (
                  <div key={idx}>
                    <div className="text-xs uppercase tracking-widest font-medium text-gray-800 mb-1.5">
                      {spec.label}
                    </div>
                    <div className="text-base text-gray-900 font-light">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="py-8 space-y-3">
             <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={handleAddToCart}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full overflow-hidden bg-black text-white border border-black py-4 px-6 text-sm uppercase tracking-widest flex items-center justify-center gap-3 font-medium"
    >
      {/* Sliding White Overlay */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "0%" : "-100%" }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
      />

      {/* Text & Icon (color transitions dynamically) */}
      <AnimatePresence mode="wait">
        {addedToCart ? (
          <motion.span
            key="added"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, color: isHovered ? "#000" : "#fff" }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 flex items-center gap-2"
          >
            <Check className="w-4 h-4" />
            Added to Cart
          </motion.span>
        ) : (
          <motion.span
            key="add"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, color: isHovered ? "#000" : "#fff" }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
              
              <button className="w-full border border-gray-200 text-gray-900 py-4 px-6 text-sm uppercase tracking-widest hover:border-gray-900 transition-colors flex items-center justify-center gap-3">
                <Phone className="w-4 h-4" />
                Schedule Consultation
              </button>
            </div>

            {/* Trust Badges */}
            <div className="py-8 border-t border-gray-100 space-y-4">
              {[
                { icon: Package, text: 'Complimentary Shipping & Insurance' },
                { icon: RotateCcw, text: '30-Day Return Policy' },
                { icon: Shield, text: 'Lifetime Warranty Included' },
                { icon: Award, text: 'GIA Certified Authenticity' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 text-sm text-gray-600">
                  <item.icon className="w-4 h-4 text-gray-800 flex-shrink-0" />
                  <span className="">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Detailed Information Tabs */}
            <div className="pt-8 border-t border-gray-100">
              {/* Section Tabs */}
              <div className="flex gap-8 mb-8 overflow-x-auto">
                {['overview', 'measurements', 'certification', 'specifications'].map((section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`pb-3 text-xs uppercase tracking-widest whitespace-nowrap transition-colors relative ${
                      activeSection === section
                        ? 'text-gray-900'
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    {section}
                    {activeSection === section && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-px bg-black"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Section Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm"
                >
                  {activeSection === 'overview' && (
                    <div className="space-y-8">
                      <p className="text-gray-600 leading-relaxed font-light text-base">
                        {diamond.detailedDescription || diamond.description}
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { label: 'Type', value: diamond.type },
                          { label: 'Origin', value: diamond.origin },
                          { label: 'Treatment', value: diamond.treatment },
                          { label: 'Category', value: diamond.category },
                        ].map((item, idx) => (
                          <div key={idx} className="py-4 border-t border-gray-100">
                            <div className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                              {item.label}
                            </div>
                            <div className="text-gray-900 font-light">{item.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeSection === 'measurements' && (
                    <div className="grid grid-cols-3 gap-6">
                      {[
                        { label: 'Length', value: `${diamond.measurements.length} mm` },
                        { label: 'Width', value: `${diamond.measurements.width} mm` },
                        { label: 'Depth', value: `${diamond.measurements.depth} mm` },
                        { label: 'Depth Percentage', value: `${diamond.measurements.depthPercentage}%` },
                        { label: 'Table Percentage', value: `${diamond.measurements.tablePercentage}%` },
                        diamond.measurements.lengthToWidthRatio && { label: 'L/W Ratio', value: diamond.measurements.lengthToWidthRatio },
                      ].filter(Boolean).map((item, idx) => (
                        <div key={idx} className="py-4 border-t border-gray-100">
                          <div className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                            {item.label}
                          </div>
                          <div className="text-gray-900 font-light text-lg">{item.value}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeSection === 'certification' && (
                    <div className="space-y-6">
                      {diamond.certification !== 'None' ? (
                        <>
                          <div className="p-6 bg-gray-50 border border-gray-100">
                            <div className="flex items-start gap-4">
                              <Award className="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
                              <div>
                                <div className="text-base text-gray-900 mb-2">
                                  {diamond.certification} Certified
                                </div>
                                <div className="text-sm text-gray-500 font-light">
                                  Certificate: {diamond.certNumber}
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 leading-relaxed font-light">
                            Professionally certified by {diamond.certification}, verifying all quality 
                            characteristics and ensuring authenticity through rigorous gemological analysis.
                          </p>
                        </>
                      ) : (
                        <p className="text-gray-600 leading-relaxed font-light">
                          This diamond is offered without third-party certification, providing exceptional 
                          value while maintaining our quality standards.
                        </p>
                      )}
                    </div>
                  )}

                  {activeSection === 'specifications' && (
                    <div className="grid grid-cols-2 gap-6">
                      {Object.entries(diamond.specifications).map(([key, value]) => (
                        <div key={key} className="py-4 border-t border-gray-100">
                          <div className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                          <div className="text-gray-900 font-light">
                            {typeof value === 'number' && key.toLowerCase().includes('angle') ? `${value}°` : value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Key Features */}
            {diamond.features && diamond.features.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-100">
                <h3 className="text-xs uppercase tracking-widest text-gray-800 mb-6">
                  Key Features
                </h3>
                <div className="space-y-3">
                  {diamond.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1 h-1 bg-gray-800 rounded-full mt-2 flex-shrink-0" />
                      <span className="">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

   
      </div>
               <section className="relative w-full h-[70vh] my-20 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://www.pexels.com/download/video/5106444/"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-xl md:text-3xl font-light tracking-wide mb-4"
        >
          Exquisite Diamonds
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg md:text-xl font-light text-gray-200 max-w-2xl"
        >
          Discover brilliance beyond compare — ethically sourced, expertly cut,
          timelessly elegant.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-8 flex gap-4"
        >
          <button className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition">
            Explore Collection
          </button>
          <button className="px-8 py-3 border border-white text-white rounded-full hover:bg-white/10 transition">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
    </div>
  );
};

export default DiamondDetailsPage;