import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DiamondCard = ({ diamond, isFavorite, onToggleFavorite, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/diamonds/${diamond.id}`);
  window.scrollTo({ top: 0, behavior: "smooth" });

  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
    >
      <div
        className="relative aspect-square bg-gray-100 overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.img
          src={isHovered ? diamond.images.hover : diamond.images.main}
          alt={diamond.name}
          className="w-full h-full object-cover"
          initial={false}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
        />
        {diamond.badge && (
          <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
            {diamond.badge}
          </span>
        )}
        <button
          onClick={() => onToggleFavorite(diamond.id)}
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
        >
          <Heart
            className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
          />
        </button>
      </div>

      <div className="p-5">
        <h3 className="font-medium text-gray-900 mb-1 group-hover:text-black transition-colors">
          {diamond.name}
        </h3>
        <p className="text-sm text-gray-500 mb-3">{diamond.sku}</p>

        <div className="flex items-center gap-4 mb-3 text-xs text-gray-600">
          <span>{diamond.carat} ct</span>
          <span>•</span>
          <span>{diamond.color} • {diamond.clarity}</span>
          <span>•</span>
          <span>{diamond.cut}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-light text-gray-900">
            ${diamond.price.toLocaleString()}
          </span>
          <span className="text-xs text-gray-500">{diamond.certification}</span>
        </div>

        <button onClick={handleViewDetails} className="w-full mt-4 bg-black text-white py-2.5 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export default DiamondCard;