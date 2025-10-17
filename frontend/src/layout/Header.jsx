import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  Search,
  User,
  Mail,
  Phone,
  MapPin,
  Award,
  Shield,
  Gem,
  Clock,
  Heart,
  ShoppingBag,
  LogIn,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { menuData } from "../pages/DiamondData";

const messages = [
  "✨ FREE SHIPPING WORLDWIDE ✨",
  "💎 PREMIUM QUALITY GUARANTEED 💎",
  "⚡ NEW COLLECTION DROPPING SOON ⚡",
];

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000); // change message every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handleNavigation = (title) => {
    const lowerTitle = title.toLowerCase();

    if (lowerTitle === "diamonds") {
      navigate("/diamonds");
    } else if (lowerTitle === "jewelry") {
      navigate("/jewelry");
    } else if (lowerTitle === "rings") {
      navigate("/jewelry/rings");
    } else {
      navigate("/");
    }

    // Close menu and scroll to top
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

            
  const toggleMobileSubmenu = (key) => {
    setMobileExpandedMenu(mobileExpandedMenu === key ? null : key);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white shadow-sm shadow-gray-300 ${
          scrolled ? "" : ""
        }`}
      >
        <div className={`relative bg-stone-900/60 text-white ${scrolled ? "hidden" : ""}`}>
      {/* Persistent line */}
      {/* <div className="fixed bottom-0 left-0 w-full h-[3px] bg-stone-400" /> */}

      {/* Animated text */}
      <div className="h-8 flex items-center justify-center text-xs sm:text-sm tracking-wider font-light relative z-10">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="inline-block"
          >
            {messages[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
    <div className="w-full bg-gray-50/40 px-6 md:px-6 mx-1 mt-1 py-3 flex flex-col gap-2 items-center">
  <div className="relative flex items-center justify-between w-full">
    {/* Left: Menu Button */}
    <button
      className="lg:hidden z-50"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? (
        <X className="w-6 h-6" />
      ) : (
        <Menu className="w-6 h-6" />
      )}
    </button>

    {/* Center: Title */}
    <motion.div
      whileHover={{ opacity: 0.6 }}
      className="absolute left-1/2 -translate-x-1/2 text-base md:text-2xl text-stone-700/70 uppercase font-serif tracking-[0.2em] whitespace-nowrap"
    >
      <a href="/">VIVID COLLECTIONS</a>
    </motion.div>

    {/* Right: Icon Group */}
    <div className="flex items-center text-stone-700/50 space-x-5 ml-auto">
      <button className="hover:opacity-60 transition-opacity hidden md:block">
        <Search className="w-5 h-5" />
      </button>
      <button className="hover:opacity-60 transition-opacity">
        <Heart className="w-5 h-5" />
      </button>
      <button className="hover:opacity-60 hidden md:block transition-opacity">
        <User className="w-5 h-5" />
      </button>
      <button className="hover:opacity-60 transition-opacity">
        <ShoppingBag className="w-5 h-5" />
      </button>
    </div>
  </div>

  {/* Navigation Below */}
  <nav className="hidden lg:flex items-center py-4 mb-1 space-x-16 text-xs tracking-wider">
    {Object.keys(menuData).map((key) => (
      <div
        key={key}
        className="relative group"
        onMouseEnter={() => setActiveMenu(key)}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <a
          href={menuData[key].path}
          className="relative tracking-[0.1em] uppercase font-medium text-gray-900 hover:text-stone-900/50 transition-opacity inline-block"
        >
          {menuData[key].title}
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-0.5 bg-stone-900/40 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: activeMenu === key ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </a>
      </div>
    ))}
  </nav>
</div>

    
        {/* Desktop Mega Menu */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-full left-0 w-full bg-white border-t shadow-2xl"
              onMouseEnter={() => setActiveMenu(activeMenu)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="max-w-7xl bg-gray-50/40 mx-auto px-12 py-12">
                <div className="grid grid-cols-4 gap-12">
                  {menuData[activeMenu].sections.map((section, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                    >
                      <h3 className="text-xs font-semibold tracking-widest mb-6 text-gray-400 uppercase">
                        {section.title}
                      </h3>
                      <ul className="space-y-3">
                        {section.items.map((item, itemIdx) => (
                          <motion.li
                            key={itemIdx}
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            <a
                              href="#"
                              className={`text-sm hover:opacity-60 transition-opacity block ${
                                item.featured ? "font-semibold" : ""
                              }`}
                            >
                              {item.name}
                            </a>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="relative overflow-hidden group cursor-pointer"
                  >
                    <div className="relative h-full">
                      <img
                        src={menuData[activeMenu].featured.image}
                        alt={menuData[activeMenu].featured.title}
                        className="w-full h-64 object-cover rounded-sm"
                      />
                      <motion.div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex flex-col justify-end p-6">
                        <h4 className="text-white text-xl font-light mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {menuData[activeMenu].featured.title}
                        </h4>
                        <p className="text-white text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {menuData[activeMenu].featured.subtitle}
                        </p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          className="bg-white text-black px-6 py-2 text-xs tracking-wider hover:bg-gray-100 transition-colors self-start opacity-0 group-hover:opacity-100"
                        >
                          {menuData[activeMenu].featured.cta}
                        </motion.button>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                onClick={() => setMenuOpen(false)}
              />

              {/* Sliding Menu */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="fixed top-0 left-0 h-full w-80 bg-white z-50 lg:hidden overflow-y-auto shadow-2xl"
              >
                <div className="p-6">
                  {/* Logo/Header */}
                  <div className="flex items-center justify-between  pb-6 border-b">
                    <h2 className="text-xl font-normal tracking-[0.2em]">
                      MENU
                    </h2>
                    <button onClick={() => setMenuOpen(false)}>
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Main Navigation */}
                  <nav className="space-y-2 overflow-x-auto">
                    {Object.keys(menuData).map((key) => (
                      <div key={key} className="border-b">
                        <button
                          onClick={() => toggleMobileSubmenu(key)}
                          className="flex items-center justify-between w-full py-4 text-sm tracking-wider hover:opacity-60 transition-opacity"
                        >
                          <span
                            className="capitalize font-medium cursor-pointer hover:text-black transition-colors"
                            onClick={() =>
                              handleNavigation(menuData[key].title)
                            }
                          >
                            {menuData[key].title}
                          </span>
                          <motion.div
                            animate={{
                              rotate: mobileExpandedMenu === key ? 180 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {mobileExpandedMenu === key && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-4 pl-4 space-y-4">
                                {menuData[key].sections.map((section, idx) => (
                                  <div key={idx}>
                                    <h4 className="text-xs font-semibold tracking-widest mb-3 text-gray-400 uppercase">
                                      {section.title}
                                    </h4>
                                    <ul className="space-y-2">
                                      {section.items.map((item, itemIdx) => (
                                        <motion.li
                                          key={itemIdx}
                                          initial={{ x: -10, opacity: 0 }}
                                          animate={{ x: 0, opacity: 1 }}
                                          transition={{ delay: itemIdx * 0.05 }}
                                        >
                                          <a
                                            href="#"
                                            className={`text-sm hover:opacity-60 transition-opacity block py-1 ${
                                              item.featured
                                                ? "font-semibold"
                                                : ""
                                            }`}
                                          >
                                            {item.name}
                                          </a>
                                        </motion.li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </nav>

                  <div className=" fixed w-[75%] bg-white bottom-4 left-0 right-0 flex z-50 items-center justify-center">
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="flex items-center justify-center w-full gap-3 rounded-xl border border-gray-800 py-3 px-4 text-sm font-medium tracking-wider ml-6 text-white
                   bg-gray-800 bg-[length:200%_auto]
                   hover:bg-gray-900  hover:shadow-md transition-all duration-300 ease-in-out"
                    >
                      <User className="w-5 h-5" />
                      <span>Login</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
