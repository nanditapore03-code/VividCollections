import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DiamondListItem = ({ diamond, isFavorite, onToggleFavorite, index }) => {
    const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/diamonds/${diamond.id}`);
    
  window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.02 }}
      onClick={handleViewDetails}
      className="bg-white border border-gray-200 hover:border-gray-400 transition-all duration-200 rounded-lg overflow-hidden"
    >
      <div className="flex items-center p-4 gap-6">
        {/* Left: Basic Info */}
        <div className="flex-shrink-0 min-w-[280px]">
          <div className="flex items-start gap-2 mb-1.5">
            <h3 className="text-sm font-medium text-gray-900 leading-tight flex-1">{diamond.name}</h3>
            {diamond.badge && (
              <span className="bg-gray-900 text-white text-[10px] px-2 py-0.5 rounded-full flex-shrink-0 whitespace-nowrap">
                {diamond.badge}
              </span>
            )}
          </div>
          <p className="text-[11px] text-gray-400 font-mono mb-2">{diamond.sku}</p>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] text-gray-600 bg-gray-50 px-2 py-0.5 rounded">{diamond.type}</span>
            {diamond.certification && diamond.certification !== 'None' && (
              <div className="flex items-center gap-1 bg-gray-50 px-2 py-0.5 rounded">
                <Award className="w-3 h-3 text-gray-500" />
                <span className="text-[11px] text-gray-600">{diamond.certification}</span>
              </div>
            )}
          </div>
        </div>

        {/* Center: Specifications Grid */}
        <div className="flex-1 grid grid-cols-6 gap-4 px-6 border-l border-r border-gray-100 min-w-0">
          <div className="text-center">
            <p className="text-xs font-medium text-gray-900 truncate">{diamond.shape}</p>
            <p className="text-[10px] text-gray-400 mt-0.5 uppercase tracking-wider">Shape</p>
          </div>

          <div className="text-center">
            <p className="text-xs font-medium text-gray-900 truncate">{diamond.carat} ct</p>
            <p className="text-[10px] text-gray-400 mt-0.5 uppercase tracking-wider">Carat</p>
          </div>

          <div className="text-center">
            <p className="text-xs font-medium text-gray-900 truncate">{diamond.color}</p>
            <p className="text-[10px] text-gray-400 mt-0.5 uppercase tracking-wider">Color</p>
          </div>

          <div className="text-center">
            <p className="text-xs font-medium text-gray-900 truncate">{diamond.clarity}</p>
            <p className="text-[10px] text-gray-400 mt-0.5 uppercase tracking-wider">Clarity</p>
          </div>

          <div className="text-center">
            <p className="text-xs font-medium text-gray-900 truncate">{diamond.cut}</p>
            <p className="text-[10px] text-gray-400 mt-0.5 uppercase tracking-wider">Cut</p>
          </div>

          <div className="text-center">
            <p className="text-xs font-medium text-gray-900 truncate">{diamond.polish}</p>
            <p className="text-[10px] text-gray-400 mt-0.5 uppercase tracking-wider">Polish</p>
          </div>
        </div>

        {/* Right: Price & Actions */}
        <div className="flex items-center gap-4 flex-shrink-0">
          {/* Price */}
          <div className="text-right min-w-[100px]">
            <p className="text-lg font-medium text-gray-900">${diamond.price.toLocaleString()}</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-wide">USD</p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleFavorite(diamond.id)}
              className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all"
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              <Heart
                className={`w-4 h-4 transition-colors ${
                  isFavorite ? 'fill-gray-900 text-gray-900' : 'text-gray-400'
                }`}
              />
            </button>
            <button onClick={handleViewDetails} className="px-4 py-2 bg-gray-900 text-white text-xs font-medium rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap">
              View Details
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 text-xs font-medium rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
              Compare
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DiamondListItem;