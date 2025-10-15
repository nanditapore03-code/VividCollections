import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Grid, List, Search } from "lucide-react";
import DiamondCard from "../components/DiamondCard";
import DiamondListItem from "../components/DiamondListItem";
import {
  diamondData,
  diamondProducts,
  getCategoriesForType,
  getSubcategoriesForCategory,
  getShapesForSubcategory,
  getColorsForShape,
  getClaritiesForColor,
} from "./DiamondData";

const DiamondPage = () => {
  const [viewMode, setViewMode] = useState("list");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("carat-asc");
  const [favorites, setFavorites] = useState([]);

  // Selection states
  const [selectedType, setSelectedType] = useState("Natural");
  const [selectedCategory, setSelectedCategory] = useState("natural-melee");
  const [selectedSubcategory, setSelectedSubcategory] = useState("Standard");
  const [selectedShape, setSelectedShape] = useState("Round");
  // Remove the toggleSection function and replace useEffect with this:
  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 768;
      if (isDesktop) {
        setOpenSections({
          colorClarity: true,
          caratPrice: true,
          cut: true,
          polishSymmetry: true,
          fluorescenceCert: true,
        });
      }
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add this handler function (replaces the old one)
  const handleToggle = (section, e) => {
    const isDesktop = window.innerWidth >= 768;

    if (isDesktop) {
      // Prevent default toggle behavior on desktop
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    // Allow toggle on mobile
    setOpenSections((prev) => ({
      ...prev,
      [section]: e.target.open,
    }));
  };

  const [openSections, setOpenSections] = useState({
    colorClarity: true,
    caratPrice: true,
    cut: false,
    polishSymmetry: false,
    fluorescenceCert: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Get available options based on selections
  const categories = useMemo(
    () => getCategoriesForType(selectedType),
    [selectedType]
  );

  const subcategories = useMemo(
    () => getSubcategoriesForCategory(selectedType, selectedCategory),
    [selectedType, selectedCategory]
  );

  const availableShapes = useMemo(
    () =>
      getShapesForSubcategory(
        selectedType,
        selectedCategory,
        selectedSubcategory
      ),
    [selectedType, selectedCategory, selectedSubcategory]
  );

  const availableColors = useMemo(
    () =>
      getColorsForShape(
        selectedType,
        selectedCategory,
        selectedSubcategory,
        selectedShape
      ),
    [selectedType, selectedCategory, selectedSubcategory, selectedShape]
  );

  const availableClarities = useMemo(() => {
    let clarityMap = {};
    availableColors.forEach((color) => {
      clarityMap[color] = getClaritiesForColor(
        selectedType,
        selectedCategory,
        selectedSubcategory,
        selectedShape,
        color
      );
    });
    return clarityMap;
  }, [
    selectedType,
    selectedCategory,
    selectedSubcategory,
    selectedShape,
    availableColors,
  ]);

  // Filter states
  const [filters, setFilters] = useState({
    colorClarity: {},
    cut: [],
    polish: [],
    symmetry: [],
    fluorescence: [],
    certification: [],
    caratRange: [0, 10],
    priceRange: [0, 50000],
  });

  // Update shape when available shapes change
  React.useEffect(() => {
    if (
      availableShapes.length > 0 &&
      !availableShapes.includes(selectedShape)
    ) {
      setSelectedShape(availableShapes[0]);
    }
  }, [availableShapes, selectedShape]);

  // Update subcategory when available subcategories change
  React.useEffect(() => {
    if (subcategories.length > 0) {
      const subcategoryIds = subcategories.map((s) => s.id);
      if (!subcategoryIds.includes(selectedSubcategory)) {
        setSelectedSubcategory(subcategories[0].id);
      }
    }
  }, [subcategories, selectedSubcategory]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id]
    );
  };

  const toggleColorClarityFilter = (color, clarity) => {
    setFilters((prev) => {
      const currentColorClarity = { ...prev.colorClarity };

      if (!currentColorClarity[color]) {
        currentColorClarity[color] = [clarity];
      } else if (currentColorClarity[color].includes(clarity)) {
        currentColorClarity[color] = currentColorClarity[color].filter(
          (c) => c !== clarity
        );
        if (currentColorClarity[color].length === 0) {
          delete currentColorClarity[color];
        }
      } else {
        currentColorClarity[color] = [...currentColorClarity[color], clarity];
      }

      return {
        ...prev,
        colorClarity: currentColorClarity,
      };
    });
  };

  const toggleFilter = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((v) => v !== value)
        : [...prev[filterType], value],
    }));
  };

  const clearFilters = () => {
    setFilters({
      colorClarity: {},
      cut: [],
      polish: [],
      symmetry: [],
      fluorescence: [],
      certification: [],
      caratRange: [0, 10],
      priceRange: [0, 50000],
    });
  };

  const filteredDiamonds = useMemo(() => {
    let result = diamondProducts.filter(
      (d) =>
        d.type?.toLowerCase() === selectedType?.toLowerCase() &&
        d.category === selectedCategory &&
        d.subcategory === selectedSubcategory &&
        d.shape?.toLowerCase() === selectedShape?.toLowerCase()
    );

    if (searchQuery) {
      result = result.filter(
        (d) =>
          d.sku?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.certNumber?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Color-Clarity filter
    if (Object.keys(filters.colorClarity).length > 0) {
      result = result.filter((d) => {
        const selectedClaritiesForColor = filters.colorClarity[d.color];
        return (
          selectedClaritiesForColor &&
          selectedClaritiesForColor.includes(d.clarity)
        );
      });
    }

    // Cut filter
    if (filters.cut.length > 0) {
      result = result.filter((d) => filters.cut.includes(d.cut));
    }

    // Polish filter
    if (filters.polish.length > 0) {
      result = result.filter((d) => filters.polish.includes(d.polish));
    }

    // Symmetry filter
    if (filters.symmetry.length > 0) {
      result = result.filter((d) => filters.symmetry.includes(d.symmetry));
    }

    // Fluorescence filter
    if (filters.fluorescence.length > 0) {
      result = result.filter((d) =>
        filters.fluorescence.includes(d.fluorescence)
      );
    }

    // Certification filter
    if (filters.certification.length > 0) {
      result = result.filter((d) =>
        filters.certification.includes(d.certification)
      );
    }

    // Range filters
    result = result.filter(
      (d) =>
        d.carat >= filters.caratRange[0] &&
        d.carat <= filters.caratRange[1] &&
        d.price >= filters.priceRange[0] &&
        d.price <= filters.priceRange[1]
    );

    // Sort
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "carat-asc":
        result.sort((a, b) => a.carat - b.carat);
        break;
      case "carat-desc":
        result.sort((a, b) => b.carat - a.carat);
        break;
      default:
        break;
    }

    return result;
  }, [
    diamondProducts,
    selectedType,
    selectedCategory,
    selectedSubcategory,
    selectedShape,
    searchQuery,
    filters,
    sortBy,
  ]);

  const activeFiltersCount =
    Object.keys(filters.colorClarity).reduce(
      (sum, color) => sum + filters.colorClarity[color].length,
      0
    ) +
    filters.cut.length +
    filters.polish.length +
    filters.symmetry.length +
    filters.fluorescence.length +
    filters.certification.length;

  return (
    <div className="min-h-screen mt-32 bg-white">
      {/* Top Bar */}
     <div className="border-b border-stone-200">
  <div className="max-w-[1600px] mx-auto px-8 py-6">
    {/* Header */}
    <h1 className="text-xl font-medium text-stone-900 mb-6">
      Diamonds
    </h1>

    {/* Type Selection - Segmented Control */}
    <div className="inline-flex bg-stone-100 rounded-lg p-0.5 mb-6">
      <button
        onClick={() => {
          setSelectedType("Natural");
          setSelectedCategory("natural-melee");
        }}
        className={`px-4 py-1.5 text-xs font-medium rounded-md transition-all ${
          selectedType.toLowerCase() === "natural"
            ? "bg-white text-stone-900 shadow-sm"
            : "text-stone-600 hover:text-stone-900"
        }`}
      >
        Natural
      </button>
      <button
        onClick={() => {
          setSelectedType("Lab-Grown");
          setSelectedCategory("lab-melee");
        }}
        className={`px-4 py-1.5 text-xs font-medium rounded-md transition-all ${
          selectedType.toLowerCase() === "lab-grown"
            ? "bg-white text-stone-900 shadow-sm"
            : "text-stone-600 hover:text-stone-900"
        }`}
      >
        Lab-Grown
      </button>
    </div>

    {/* Category Selection */}
    <div className="flex gap-2 mb-6">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
          className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
            selectedCategory === category.id
              ? "bg-stone-900 text-white"
              : "bg-stone-100 text-stone-700 hover:bg-stone-200"
          }`}
        >
          {selectedType} {category.name}
        </button>
      ))}
    </div>

    {/* Subcategory Tabs */}
    <div className="border-b border-stone-200 mb-6">
      <div className="flex gap-6">
        {subcategories.map((subcategory) => (
          <button
            key={subcategory.id}
            onClick={() => setSelectedSubcategory(subcategory.id)}
            className={`pb-2 text-xs font-medium transition-all relative ${
              selectedSubcategory === subcategory.id
                ? "text-stone-900"
                : "text-stone-500 hover:text-stone-700"
            }`}
          >
            {subcategory.name}
            {selectedSubcategory === subcategory.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-900" />
            )}
          </button>
        ))}
      </div>
    </div>

    {/* Shape Selection */}
    <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
      {availableShapes.map((shapeName) => {
        const shapeIcon = diamondData.shapes[shapeName.toLowerCase()];
        return (
          <button
            key={shapeName}
            onClick={() => setSelectedShape(shapeName)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
              selectedShape.toLowerCase() === shapeName.toLowerCase()
                ? "bg-stone-900 text-white"
                : "bg-stone-100 text-stone-700 hover:bg-stone-200"
            }`}
          >
            <span className="text-sm">{shapeIcon}</span>
            {shapeName}
          </button>
        );
      })}
    </div>

    {/* Filters Section */}
    <div className="bg-stone-50 rounded-lg p-5 mb-4">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-stone-900">
          Filters
        </h3>
        {activeFiltersCount > 0 && (
          <button
            onClick={clearFilters}
            className="text-xs font-medium text-stone-600 hover:text-stone-900 flex items-center gap-1.5"
          >
            Clear All
            <span className="px-1.5 py-0.5 bg-stone-900 text-white rounded text-[10px]">
              {activeFiltersCount}
            </span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
        {/* Color & Clarity Filter */}
        <div className="col-span-2">
          <button
            onClick={() => {
              if (window.innerWidth < 768) {
                setOpenSections((prev) => ({
                  ...prev,
                  colorClarity: !prev.colorClarity,
                }));
              }
            }}
            className="flex items-center justify-between w-full mb-3 md:cursor-default"
          >
            <span className="text-[11px] font-semibold uppercase tracking-wide text-stone-700">
              Color & Clarity
            </span>
            <svg
              className={`w-4 h-4 text-stone-400 transition-transform md:hidden ${
                openSections.colorClarity ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div
            className={`space-y-2 max-h-64 overflow-y-auto pr-1 ${
              window.innerWidth < 768 && !openSections.colorClarity
                ? "hidden"
                : "block"
            } md:block`}
          >
            {availableColors.map((color) => {
              const clarityOptions = availableClarities[color] || [];
              const selectedClarities = filters.colorClarity[color] || [];

              return (
                <div
                  key={color}
                  className="flex items-center gap-2 bg-white rounded-md p-2 border border-stone-200"
                >
                  <div className="text-xs font-semibold text-stone-900 min-w-[20px]">
                    {color}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {clarityOptions.map((clarity) => (
                      <label
                        key={clarity}
                        className="flex items-center gap-1 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={selectedClarities.includes(clarity)}
                          onChange={() => toggleColorClarityFilter(color, clarity)}
                          className="w-3 h-3 rounded border-stone-300 text-stone-900 focus:ring-1 focus:ring-stone-900 cursor-pointer"
                        />
                        <span className="text-[11px] font-medium text-stone-600 group-hover:text-stone-900">
                          {clarity}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carat & Price Range */}
        <div className="md:col-span-1 col-span-2">
          <button
            onClick={() => {
              if (window.innerWidth < 768) {
                setOpenSections((prev) => ({
                  ...prev,
                  caratPrice: !prev.caratPrice,
                }));
              }
            }}
            className="flex items-center justify-between w-full mb-3 md:cursor-default"
          >
            <span className="text-[11px] font-semibold uppercase tracking-wide text-stone-700">
              Carat & Price
            </span>
            <svg
              className={`w-4 h-4 text-stone-400 transition-transform md:hidden ${
                openSections.caratPrice ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div
            className={`space-y-4 ${
              !openSections.caratPrice ? "hidden" : "block"
            } md:block`}
          >
            {/* Carat */}
            <div className="bg-white rounded-md p-3 border border-stone-200">
              <div className="text-[10px] font-semibold uppercase text-stone-500 mb-2">Carat</div>
              <div className="flex justify-between text-[11px] text-stone-600 mb-2">
                <span>{filters.caratRange[0]}</span>
                <span>{filters.caratRange[1]}</span>
              </div>
              <div className="relative h-1.5">
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.1"
                  value={filters.caratRange[0]}
                  onChange={(e) => {
                    const val = parseFloat(e.target.value);
                    if (val <= filters.caratRange[1]) {
                      setFilters((prev) => ({
                        ...prev,
                        caratRange: [val, prev.caratRange[1]],
                      }));
                    }
                  }}
                  className="absolute w-full h-1.5 bg-transparent appearance-none cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-stone-900 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow"
                  style={{ zIndex: filters.caratRange[0] > 5 ? 5 : 3 }}
                />
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.1"
                  value={filters.caratRange[1]}
                  onChange={(e) => {
                    const val = parseFloat(e.target.value);
                    if (val >= filters.caratRange[0]) {
                      setFilters((prev) => ({
                        ...prev,
                        caratRange: [prev.caratRange[0], val],
                      }));
                    }
                  }}
                  className="absolute w-full h-1.5 bg-transparent appearance-none cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-stone-900 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow"
                  style={{ zIndex: 4 }}
                />
                <div className="absolute w-full h-1.5 bg-stone-200 rounded-full" style={{ zIndex: 1 }}>
                  <div
                    className="absolute h-full bg-stone-900 rounded-full"
                    style={{
                      left: `${(filters.caratRange[0] / 10) * 100}%`,
                      right: `${100 - (filters.caratRange[1] / 10) * 100}%`,
                      zIndex: 2,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="bg-white rounded-md p-3 border border-stone-200">
              <div className="text-[10px] font-semibold uppercase text-stone-500 mb-2">Price</div>
              <div className="flex justify-between text-[11px] text-stone-600 mb-2">
                <span>${filters.priceRange[0].toLocaleString()}</span>
                <span>${filters.priceRange[1].toLocaleString()}</span>
              </div>
              <div className="relative h-1.5">
                <input
                  type="range"
                  min="0"
                  max="50000"
                  step="100"
                  value={filters.priceRange[0]}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    if (val <= filters.priceRange[1]) {
                      setFilters((prev) => ({
                        ...prev,
                        priceRange: [val, prev.priceRange[1]],
                      }));
                    }
                  }}
                  className="absolute w-full h-1.5 bg-transparent appearance-none cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-stone-900 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow"
                  style={{ zIndex: filters.priceRange[0] > 25000 ? 5 : 3 }}
                />
                <input
                  type="range"
                  min="0"
                  max="50000"
                  step="100"
                  value={filters.priceRange[1]}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    if (val >= filters.priceRange[0]) {
                      setFilters((prev) => ({
                        ...prev,
                        priceRange: [prev.priceRange[0], val],
                      }));
                    }
                  }}
                  className="absolute w-full h-1.5 bg-transparent appearance-none cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-stone-900 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow"
                  style={{ zIndex: 4 }}
                />
                <div className="absolute w-full h-1.5 bg-stone-200 rounded-full" style={{ zIndex: 1 }}>
                  <div
                    className="absolute h-full bg-stone-900 rounded-full"
                    style={{
                      left: `${(filters.priceRange[0] / 50000) * 100}%`,
                      right: `${100 - (filters.priceRange[1] / 50000) * 100}%`,
                      zIndex: 2,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cut */}
        <div className="md:col-span-1 col-span-2">
          <button
            onClick={() => {
              if (window.innerWidth < 768) {
                setOpenSections((prev) => ({
                  ...prev,
                  cut: !prev.cut,
                }));
              }
            }}
            className="flex items-center justify-between w-full mb-3 md:cursor-default"
          >
            <span className="text-[11px] font-semibold uppercase tracking-wide text-stone-700">
              Cut
            </span>
            <svg
              className={`w-4 h-4 text-stone-400 transition-transform md:hidden ${
                openSections.cut ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div
            className={`space-y-1.5 ${
              !openSections.cut ? "hidden" : "block"
            } md:block`}
          >
            {diamondData.attributes.cut.map((cut) => (
              <label
                key={cut}
                className="flex items-center gap-2 cursor-pointer group bg-white rounded-md p-2 border border-stone-200 hover:border-stone-300 transition-colors"
              >
                <input
                  type="checkbox"
                  checked={filters.cut.includes(cut)}
                  onChange={() => toggleFilter("cut", cut)}
                  className="w-3 h-3 rounded border-stone-300 text-stone-900 focus:ring-1 focus:ring-stone-900 cursor-pointer"
                />
                <span className="text-[11px] font-medium text-stone-700 group-hover:text-stone-900">
                  {cut}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Polish & Symmetry */}
        <div className="md:col-span-1 col-span-2">
          <button
            onClick={() => {
              if (window.innerWidth < 768) {
                setOpenSections((prev) => ({
                  ...prev,
                  polishSymmetry: !prev.polishSymmetry,
                }));
              }
            }}
            className="flex items-center justify-between w-full mb-3 md:cursor-default"
          >
            <span className="text-[11px] font-semibold uppercase tracking-wide text-stone-700">
              Polish & Symmetry
            </span>
            <svg
              className={`w-4 h-4 text-stone-400 transition-transform md:hidden ${
                openSections.polishSymmetry ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div
            className={`${
              !openSections.polishSymmetry ? "hidden" : "block"
            } md:block`}
          >
            <div className="space-y-1.5 mb-4">
              <div className="text-[10px] font-semibold uppercase text-stone-500 mb-1.5">Polish</div>
              {diamondData.attributes.polish.map((polish) => (
                <label
                  key={polish}
                  className="flex items-center gap-2 cursor-pointer group bg-white rounded-md p-2 border border-stone-200 hover:border-stone-300 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={filters.polish.includes(polish)}
                    onChange={() => toggleFilter("polish", polish)}
                    className="w-3 h-3 rounded border-stone-300 text-stone-900 focus:ring-1 focus:ring-stone-900 cursor-pointer"
                  />
                  <span className="text-[11px] font-medium text-stone-700 group-hover:text-stone-900">
                    {polish}
                  </span>
                </label>
              ))}
            </div>

            <div className="space-y-1.5">
              <div className="text-[10px] font-semibold uppercase text-stone-500 mb-1.5">Symmetry</div>
              {diamondData.attributes.symmetry.map((symmetry) => (
                <label
                  key={symmetry}
                  className="flex items-center gap-2 cursor-pointer group bg-white rounded-md p-2 border border-stone-200 hover:border-stone-300 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={filters.symmetry.includes(symmetry)}
                    onChange={() => toggleFilter("symmetry", symmetry)}
                    className="w-3 h-3 rounded border-stone-300 text-stone-900 focus:ring-1 focus:ring-stone-900 cursor-pointer"
                  />
                  <span className="text-[11px] font-medium text-stone-700 group-hover:text-stone-900">
                    {symmetry}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Fluorescence & Certification */}
        <div>
          <button
            onClick={() => {
              if (window.innerWidth < 768) {
                setOpenSections((prev) => ({
                  ...prev,
                  fluorescenceCert: !prev.fluorescenceCert,
                }));
              }
            }}
            className="flex items-center justify-between w-full mb-3 md:cursor-default"
          >
            <span className="text-[11px] font-semibold uppercase tracking-wide text-stone-700">
              Fluorescence & Cert
            </span>
            <svg
              className={`w-4 h-4 text-stone-400 transition-transform md:hidden ${
                openSections.fluorescenceCert ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div
            className={`${
              !openSections.fluorescenceCert ? "hidden" : "block"
            } md:block`}
          >
            <div className="space-y-1.5 mb-4">
              <div className="text-[10px] font-semibold uppercase text-stone-500 mb-1.5">Fluorescence</div>
              {diamondData.attributes.fluorescence.map((fluor) => (
                <label
                  key={fluor}
                  className="flex items-center gap-2 cursor-pointer group bg-white rounded-md p-2 border border-stone-200 hover:border-stone-300 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={filters.fluorescence.includes(fluor)}
                    onChange={() => toggleFilter("fluorescence", fluor)}
                    className="w-3 h-3 rounded border-stone-300 text-stone-900 focus:ring-1 focus:ring-stone-900 cursor-pointer"
                  />
                  <span className="text-[11px] font-medium text-stone-700 group-hover:text-stone-900">
                    {fluor}
                  </span>
                </label>
              ))}
            </div>

            <div className="space-y-1.5">
              <div className="text-[10px] font-semibold uppercase text-stone-500 mb-1.5">Certification</div>
              {diamondData.attributes.certification.map((cert) => (
                <label
                  key={cert}
                  className="flex items-center gap-2 cursor-pointer group bg-white rounded-md p-2 border border-stone-200 hover:border-stone-300 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={filters.certification.includes(cert)}
                    onChange={() => toggleFilter("certification", cert)}
                    className="w-3 h-3 rounded border-stone-300 text-stone-900 focus:ring-1 focus:ring-stone-900 cursor-pointer"
                  />
                  <span className="text-[11px] font-medium text-stone-700 group-hover:text-stone-900">
                    {cert}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Results Section */}
      <div className="max-w-[1600px] mx-auto px-8 py-8">
        {/* Search and Controls */}
        <div className="flex items-center gap-2 md:gap-0 flex-col md:flex-row md:justify-between mb-6">
          <div className="flex items-center gap-6">
            <p className="text-sm text-nowrap text-stone-600">
              {filteredDiamonds.length}{" "}
              {filteredDiamonds.length === 1 ? "diamond" : "diamonds"}
            </p>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                placeholder="Search SKU or Certificate"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:border-stone-900 bg-white"
              />
            </div>
          </div>

          <div className="flex items-center md:justify-end justify-between w-full gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-stone-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-0 bg-white text-stone-700 cursor-pointer"
            >
              <option value="carat-asc">Carat: Low to High</option>
              <option value="carat-desc">Carat: High to Low</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>

            <div className="flex border border-stone-300 rounded overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 ${
                  viewMode === "grid"
                    ? "bg-stone-900 text-white"
                    : "text-stone-600 hover:bg-stone-50"
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 ${
                  viewMode === "list"
                    ? "bg-stone-900 text-white"
                    : "text-stone-600 hover:bg-stone-50"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Grid/List */}
        <AnimatePresence mode="wait">
          {filteredDiamonds.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-stone-500 mb-4">No diamonds found</p>
              <button
                onClick={clearFilters}
                className="text-sm text-stone-900 underline"
              >
                Clear filters
              </button>
            </motion.div>
          ) : viewMode === "list" ? (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-3"
            >
              {filteredDiamonds.map((diamond, index) => (
                <DiamondListItem
                  key={diamond.id}
                  diamond={diamond}
                  isFavorite={favorites.includes(diamond.id)}
                  onToggleFavorite={toggleFavorite}
                  index={index}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {filteredDiamonds.map((diamond, index) => (
                <DiamondCard
                  key={diamond.id}
                  diamond={diamond}
                  isFavorite={favorites.includes(diamond.id)}
                  onToggleFavorite={toggleFavorite}
                  index={index}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DiamondPage;
