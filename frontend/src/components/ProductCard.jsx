import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ 
  product, 
  index = 0,
  productType = 'rings', // 'rings', 'earrings', 'bracelets', 'necklaces', etc.
  onFavoriteToggle,
  onAddToCart,
  onQuickView,
  isFavorite = false,
  selectedColor,
  onColorChange,
  showActions = true,
  showColorSelector = true,
  animationDelay = 0.05
}) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  
  // Get current color or default to first available
  const currentColor = selectedColor || product.metalColors?.[0] || 'Yellow Gold';
  
  // Get images for current color
  const currentImages = product.images?.[currentColor] || {
    main: product.images?.[Object.keys(product.images)[0]]?.main,
    hover: product.images?.[Object.keys(product.images)[0]]?.hover
  };

  // Color class mapping
  const getMetalColorClass = (color) => {
    const colorMap = {
      'White Gold': 'bg-gray-200',
      'Rose Gold': 'bg-pink-300',
      'Yellow Gold': 'bg-yellow-300',
      'Silver': 'bg-gray-300',
      'Platinum': 'bg-gray-100'
    };
    return colorMap[color] || 'bg-gray-200';
  };

  // Handle navigation to product detail page
  const handleProductClick = () => {
    navigate(`/jewelry/${productType}/${product.id}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle favorite toggle
  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (onFavoriteToggle) {
      onFavoriteToggle(product.id);
    }
  };

  // Handle add to cart
  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(product, currentColor);
    }
  };

  // Handle quick view
  const handleQuickView = (e) => {
    e.stopPropagation();
    if (onQuickView) {
      onQuickView(product);
    }
  };

  // Handle color change
  const handleColorChange = (e, color) => {
    e.stopPropagation();
    if (onColorChange) {
      onColorChange(product.id, color);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * animationDelay }}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleProductClick}
    >
      {/* Image Container */}
      <div className="relative mb-4 bg-gray-50 overflow-hidden">
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-white px-3 py-1 text-xs font-medium z-10 shadow-sm">
            {product.badge}
          </div>
        )}

        {/* Action Icons (show only on hover and if enabled) */}
        {showActions && (
          <div className="absolute top-3 right-3 flex flex-col gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* Favorite Button */}
            <button
              onClick={handleFavoriteClick}
              className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
              aria-label="Add to favorites"
            >
              <Heart
                size={18}
                className={isFavorite ? "fill-red-500 text-red-500" : "text-gray-700"}
              />
            </button>

            {/* Add to Cart Button */}
            {onAddToCart && (
              <button
                onClick={handleAddToCart}
                className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                aria-label="Add to cart"
              >
                <ShoppingBag size={18} className="text-gray-700" />
              </button>
            )}

            {/* Quick View Button */}
            {onQuickView && (
              <button
                onClick={handleQuickView}
                className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                aria-label="Quick view"
              >
                <Eye size={18} className="text-gray-700" />
              </button>
            )}
          </div>
        )}

        {/* Product Image */}
        <motion.img
          src={isHovered && currentImages.hover ? currentImages.hover : currentImages.main}
          alt={product.name}
          className="w-full aspect-[3/4] object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Product Info */}
      <div className="text-left">
        <h3 className="text-sm mb-1 font-medium group-hover:text-gray-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm font-light text-gray-600">
          <span className="font-normal ml-1 text-gray-900">${product.price}</span>
        </p>

        {/* Additional Info (optional) */}
        {product.material && (
          <p className="text-xs text-gray-500 mt-1">{product.material}</p>
        )}
      </div>

      {/* Color Selector */}
      {showColorSelector && product.metalColors && product.metalColors.length > 1 && (
        <div className="flex gap-2 mt-3 justify-start">
          {product.metalColors.map((color) => (
            <button
              key={color}
              onClick={(e) => handleColorChange(e, color)}
              className={`w-5 h-5 rounded-full border-2 ${
                currentColor === color ? "border-gray-800" : "border-gray-300"
              } bg-white flex items-center justify-center cursor-pointer hover:border-gray-600 transition-colors`}
              title={color}
              aria-label={`Select ${color}`}
            >
              <div className={`w-4 h-4 rounded-full ${getMetalColorClass(color)}`} />
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ProductCard;