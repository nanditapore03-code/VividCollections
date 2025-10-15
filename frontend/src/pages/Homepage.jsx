import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  ShoppingBag,
  Search,
  Sparkles,
  Award,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";
import diamond_bracelet from "../assets/Diamond_bracelet.png";
import red_gemstone from "../assets/red_gemstone.png";
import round_cut from "../assets/round_cut.png";
import princess_cut from "../assets/princess_cut.png";
import emrald_cut from "../assets/emrald_cut.png";
import oval_cut from "../assets/oval_cut.png";
import cushion_cut from "../assets/cushion_cut.png";
import pear_cut from "../assets/pear_cut.png";


import { useInView,useAnimation } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Jewelry",
    desc: "Exquisite handcrafted pieces",
    images: [
      "https://images.pexels.com/photos/12194317/pexels-photo-12194317.jpeg",
      "https://images.pexels.com/photos/17925119/pexels-photo-17925119.jpeg"
    ]
  },
  {
    title: "Gemstones",
    desc: "Certified rare gemstones",
    images: [
      "https://images.pexels.com/photos/12486665/pexels-photo-12486665.jpeg",
      "https://images.pexels.com/photos/15684182/pexels-photo-15684182.jpeg"
    ]
  },
  {
    title: "Diamonds",
    desc: "Brilliant cut diamonds",
    images: [
      "https://images.pexels.com/photos/9544361/pexels-photo-9544361.jpeg",
      "https://images.pexels.com/photos/15684128/pexels-photo-15684128.jpeg"
    ]
  }
];


const ParallaxBannerSection = () => {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section className="relative w-full">
      {/* Fixed Parallax Banner */}
      <div className="h-[400px] relative">
        <div className="sticky top-0 h-[400px] bg-[url('https://images.pexels.com/photos/206743/pexels-photo-206743.jpeg')] bg-cover bg-center flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h2 className="text-3xl md:text-6xl font-extralight mb-4">What We Provide</h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Explore our curated offerings in Jewelry, Gemstones, and Diamonds
            </p>
          </div>
        </div>
      </div>

      {/* Scroll-triggered Cards */}
      <div ref={sectionRef} className="bg-white py-24 px-6">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -100 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: idx * 0.2 } },
              }}
              className="group relative cursor-pointer overflow-hidden shadow-lg rounded-md"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-light mb-2">{service.title}</h3>
                <p className="text-sm text-zinc-600">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};




export default function VividCollectionsHomepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const diamonds = [
    {
      img: round_cut,
      name: "Round Cut Radiance",
      price: "$6,800",
    },
    {
      img: princess_cut,
      name: "Princess Cut Majesty",
      price: "$3,900",
    },
    {
      img: emrald_cut,
      name: "Emerald Cut Elegance",
      price: "$4,200",
    },
    {
      img: oval_cut,
      name: "Oval Cut Grace",
      price: "$5,500",
    },
    {
      img: cushion_cut,
      name: "Cushion Cut Vintage",
      price: "$7,000",
    },
    {
      img: pear_cut,
      name: "Pear Cut Delight",
      price: "$6,500",
    },
    {
      img: cushion_cut,
      name: "Cushion Cut Vintage",
      price: "$7,000",
    },
  ];

  const heroSlides = [
    {
      image:
        "https://images.pexels.com/photos/8766215/pexels-photo-8766215.jpeg",
      title: "Where Dreams Begin",
      subtitle: "Handcrafted engagement rings that tell your unique love story",
      accent: "NEW COLLECTION",
    },
    {
      image:
        "https://images.pexels.com/photos/10160119/pexels-photo-10160119.jpeg",
      title: "Brilliance Reimagined",
      subtitle: "Lab-grown diamonds with conscious luxury",
      accent: "SUSTAINABLE CHOICE",
    },
    {
      image:
        "https://images.pexels.com/photos/13307186/pexels-photo-13307186.jpeg",
      title: "Color Your World",
      subtitle: "Exquisite gemstones in every hue imaginable",
      accent: "VIBRANT COLLECTION",
    },
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );

  return (
    <div className="bg-zinc-50 text-zinc-900">
      {/* Hero Banner */}
      <section className="relative h-screen overflow-hidden bg-zinc-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-zinc-900/20 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-start px-8 md:px-20">
              <div className="text-left text-white max-w-3xl">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="mb-5"
                >
                  <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md text-xs tracking-[0.3em] uppercase rounded-full">
                    {heroSlides[currentSlide].accent}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-3xl md:text-4xl font-light mb-6 tracking-tight leading-tight"
                >
                  {heroSlides[currentSlide].title}
                </motion.h1>

                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="text-base md:text-xl font-light mb-10 tracking-wide text-white/90 max-w-xl"
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.p>

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="flex gap-4 flex-wrap"
                >
                  <button className="group relative px-4 py-2 bg-white text-zinc-900 overflow-hidden rounded-full">
                    <span className="relative z-10 text-xs md:text-sm tracking-[0.25em]">
                      DISCOVER MORE
                    </span>
                    <div className="absolute inset-0 bg-stone-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                    <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-xs md:text-sm tracking-[0.25em]">
                      DISCOVER MORE
                    </span>
                  </button>

                  <button className="px-4 py-2 border border-white/70 text-white rounded-full hover:bg-white hover:text-zinc-900 transition-all duration-300 text-xs md:text-sm tracking-[0.25em]">
                    EXPLORE COLLECTION
                  </button>
                </motion.div>
              </div>
            </div>

            {/* Chevron Controls */}
            <div className="absolute hidden md:block bottom-10 left-10 gap-6 md:flex items-center justify-between px-6 md:px-12">
              <button
                onClick={prevSlide}
                className="w-10 h-10 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all duration-300 flex items-center justify-center group"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all duration-300 flex items-center justify-center group"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all duration-500 ${
                idx === currentSlide
                  ? "bg-white w-16 h-1"
                  : "bg-white/30 w-8 h-1 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Engagement Rings Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-stone-600 text-sm tracking-[0.3em] uppercase mb-2">
              The Beginning
            </span>
            <h2 className="text-3xl md:text-4xl font-extralight tracking-tight mb-4">
              Engagement Rings
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Each ring is a promise, crafted to perfection with unparalleled
              artistry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Solitaire Elegance",
                price: "$3,200",
                img: "https://images.pexels.com/photos/16438530/pexels-photo-16438530.jpeg",
                tag: "BESTSELLER",
              },
              {
                name: "Halo Romance",
                price: "$4,800",
                img: "https://images.pexels.com/photos/15871491/pexels-photo-15871491.jpeg",
                tag: "NEW",
              },
              {
                name: "Vintage Dream",
                price: "$5,500",
                img: "https://images.pexels.com/photos/7662841/pexels-photo-7662841.jpeg",
                tag: "TRENDING",
              },
              {
                name: "Modern Minimalist",
                price: "$2,900",
                img: "https://images.pexels.com/photos/12194368/pexels-photo-12194368.jpeg",
                tag: "EXCLUSIVE",
              },
            ].map((ring, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 mb-5">
                  <img
                    src={ring.img}
                    alt={ring.name}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 text-[10px] tracking-[0.2em] font-medium">
                    {ring.tag}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="w-full bg-white py-3 text-xs tracking-[0.2em] hover:bg-stone-600 hover:text-white transition-colors">
                      QUICK VIEW
                    </button>
                  </div>
                </div>
                <h3 className="text-lg tracking-wide mb-2 group-hover:text-stone-600 transition-colors">
                  {ring.name}
                </h3>
                {/* <p className="text-sm text-zinc-500">Starting at {ring.price}</p> */}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <button className="group relative px-8 py-2 border-2 border-zinc-900 text-zinc-900 overflow-hidden">
              <span className="relative z-10 text-sm tracking-[0.2em]">
                VIEW ALL ENGAGEMENT RINGS
              </span>
              <div className="absolute inset-0 bg-zinc-900 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm tracking-[0.2em]">
                VIEW ALL ENGAGEMENT RINGS
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Jewelry Section with Tabs */}
      <section className="py-12 px-6 bg-zinc-50">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-stone-600 text-sm tracking-[0.3em] uppercase mb-3">
              Timeless Pieces
            </span>
            <h2 className="text-3xl md:text-4xl font-extralight tracking-tight mb-6">
              Fine Jewellery
            </h2>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-2"
            >
              {[
                {
                  img: "https://images.pexels.com/photos/20594288/pexels-photo-20594288.jpeg",
                  name: "Necklace",
                  price: "$6,800",
                },
                { img: diamond_bracelet, name: "Bracelet", price: "$3,900" },
                {
                  img: "https://images.pexels.com/photos/20594285/pexels-photo-20594285.jpeg",
                  name: "Earring",
                  price: "$3,900",
                },
                {
                  img: "https://images.pexels.com/photos/32652454/pexels-photo-32652454.jpeg",
                  name: "Ring",
                  price: "$4,200",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-white mb-4 shadow-lg rounded-lg">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* existing hover dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* text at bottom on hover */}
                    <div className="absolute bottom-0 left-0 w-full px-3 pb-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">
                      <h3 className="text-sm font-medium tracking-wide">
                        {item.name}
                      </h3>
                      {/* <p className="text-xs opacity-90">{item.price}</p> */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Full Width Banner */}
      <section className="relative h-[75vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <img
            src="https://images.pexels.com/photos/31642937/pexels-photo-31642937.jpeg"
            alt="Luxury Collection"
            className="w-full h-full object-cover hidden md:block"
          />
          <img
            src="https://images.pexels.com/photos/2799862/pexels-photo-2799862.jpeg"
            alt="Luxury Collection"
            className="w-full h-full object-cover md:hidden"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center px-12 md:px-20"
        >
          <div className="text-white max-w-2xl">
            <span className="inline-block text-sm tracking-[0.3em] uppercase mb-4 text-rose-300">
              Limited Edition
            </span>
            <h2 className="text-3xl md:text-6xl font-extralight mb-6 tracking-tight leading-tight">
              The Heritage
              <br />
              Collection
            </h2>
            <p className="text-xl font-light mb-10 leading-relaxed text-white/90">
              Timeless designs inspired by centuries of craftsmanship
            </p>
            <button className="px-10 py-4 bg-white text-zinc-900 hover:bg-rose-600 hover:text-white transition-all duration-300 text-sm tracking-[0.2em]">
              EXPLORE HERITAGE
            </button>
          </div>
        </motion.div>
      </section>

      {/*Diamond Collections*/}
      <section className="py-24 bg-gradient-to-b from-white to-stone-100 text-center overflow-hidden">
        {/* <h2 className="text-4xl font-light text-center mb-12"></h2> */}
        <span className="inline-block text-stone-600 text-sm tracking-[0.3em] text-center uppercase mb-2">
          Eternal Glow
        </span>
        <h2 className="text-3xl md:text-4xl mb-4 font-extralight text-center tracking-tight">
          {" "}
          Diamond Collections
        </h2>
        <p className="text-lg mb-16 text-nowrap text-zinc-600 max-w-2xl mx-auto text-center">
          Each diamond is meticulously selected to reflect brilliance, purity,
          and timeless beauty.
        </p>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {/* Duplicate the array to create infinite scroll illusion */}
            {[...diamonds, ...diamonds].map((diamond, idx) => (
              <div
                key={idx}
                className="min-w-[250px] relative cursor-pointer group"
              >
                <div className="aspect-[4/5] overflow-hidden bg-zinc-100">
                  <img
                    src={diamond.img}
                    alt={diamond.name}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-sm">{diamond.name}</h3>
                    {/* <p className="text-xs opacity-90">{diamond.price}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gemstones Section */}
      <section className="py-12 px-6 bg-gradient-to-br from-rose-50 via-white to-indigo-50">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-stone-600 text-sm tracking-[0.3em] uppercase mb-3">
              Nature's Palette
            </span>
            <h2 className="text-3xl md:text-4xl font-extralight tracking-tight mb-6">
              Precious Gemstones
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Discover the vibrant world of colored gemstones, each with its own
              unique story
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              {
                name: "Sapphires",
                color: "Deep Blue",
                img: "https://images.pexels.com/photos/9073784/pexels-photo-9073784.jpeg",
                accent: "bg-blue-500",
              },
              {
                name: "Emeralds",
                color: "Vivid Green",
                img: "https://images.pexels.com/photos/15684101/pexels-photo-15684101.jpeg",
                accent: "bg-emerald-500",
              },
              {
                name: "Rubies",
                color: "Passionate Red",
                img: red_gemstone,
                accent: "bg-red-500",
              },
              {
                name: "Tanzanite",
                color: "Royal Purple",
                img: "https://images.pexels.com/photos/11444939/pexels-photo-11444939.jpeg",
                accent: "bg-purple-500",
              },
            ].map((gem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-white shadow-xl mb-4">
                  <img
                    src={gem.img}
                    alt={gem.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 ${gem.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-xs tracking-widest uppercase">
                      {gem.color}
                    </p>
                  </div>
                </div>
                <h3 className="text-base tracking-wide text-center group-hover:text-rose-600 transition-colors">
                  {gem.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diamonds Section */}
      <section className="py-12 px-6 bg-zinc-50 text-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-stone-600 text-sm tracking-[0.3em] uppercase mb-3">
              Pure Brilliance
            </span>
            <h2 className="text-3xl md:text-4xl font-extralight text-stone-900 tracking-tight mb-6">
              Our Diamonds
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group cursor-pointer overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/31642922/pexels-photo-31642922.jpeg"
                  alt="Lab Diamonds"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <span className="inline-block text-xs tracking-[0.3em] uppercase mb-3 text-rose-300">
                  Sustainable Luxury
                </span>
                <h3 className="text-3xl font-extralight mb-4 tracking-tight">
                  Lab-Grown Diamonds
                </h3>
                {/* <p className="text-sm mb-6 text-white/80">
                  Identical to natural diamonds in every way—chemically, physically, and optically. Created with cutting-edge technology.
                </p> */}
                <button className="px-6 py-2 border border-white hover:bg-white hover:text-zinc-900 transition-all duration-300 text-sm tracking-[0.2em]">
                  EXPLORE LAB DIAMONDS
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group cursor-pointer overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/14353725/pexels-photo-14353725.jpeg"
                  alt="Natural Diamonds"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <span className="inline-block text-xs tracking-[0.3em] uppercase mb-3 text-rose-300">
                  Timeless Rarity
                </span>
                <h3 className="text-3xl font-extralight mb-4 tracking-tight">
                  Natural Diamonds
                </h3>
                {/* <p className="text-sm mb-6 text-white/80">
                  Formed over billions of years deep within the Earth. Each stone carries a unique geological history.
                </p> */}
                <button className="px-6 py-2 border border-white hover:bg-white hover:text-zinc-900 transition-all duration-300 text-sm tracking-[0.2em]">
                  EXPLORE NATURAL DIAMONDS
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Creative Interactive Section */}
 

    <section className="py-12 px-6 bg-stone-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block text-stone-600 text-sm tracking-[0.3em] uppercase mb-3">
            Your Vision, Our Craft
          </span>
          <h2 className="text-3xl md:text-4xl font-extralight tracking-tight mb-6">
            Our Collections
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Explore our curated offerings in Jewelry, Diamonds, and Gemstones
          </p>
        </motion.div>

        {/* 3 Cards */}
   <div className="grid md:grid-cols-3 gap-6 mb-16">
  {services.map((service, idx) => (
    <motion.div
      key={idx}
      className="group relative cursor-pointer overflow-hidden shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.2 }}
    >
      {/* Image container */}
      <div className="aspect-square relative overflow-hidden">
        <motion.div
          className="absolute inset-0 flex"
          whileHover={{ x: service.images ? `-${(service.images.length - 1) * 100}%` : 0 }}
          transition={{ type: "tween", duration: 0.8 }}
        >
          {service.images.map((img, imgIdx) => (
            <img
              key={imgIdx}
              src={img}
              alt={`${service.title} ${imgIdx + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </motion.div>

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

        {/* Text on top */}
        <div className="absolute bottom-4 left-0 w-full text-center text-white px-4">
          <h3 className="text-2xl font-semibold">{service.title}</h3>
          <p className="text-sm">{service.desc}</p>
        </div>
      </div>
    </motion.div>
  ))}
</div>


        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative px-8 py-3 border hover:text-white border-stone-800 text-stone-800 overflow-hidden text-sm tracking-[0.2em] rounded">
            <span className="relative z-10">EXPLORE COLLECTIONS</span>
            <div className="absolute inset-0 bg-zinc-900  transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            <span className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              EXPLORE COLLECTIONS
            </span>
          </button>
        </motion.div>
      </div>
    </section>

      {/* Parallax Banner Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <motion.div style={{ y: 0 }} className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7436101/pexels-photo-7436101.jpeg "
            alt="Craftsmanship"
            className="w-full h-full object-cover scale-110"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex flex-col items-start justify-center text-white text-left px-6"
        >
          <div className="max-w-4xl">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {/* <Sparkles className="w-16 h-16 mx-auto mb-6 text-rose-400" /> */}
              <h2 className="text-3xl md:text-4xl font-extralight mb-6 tracking-tight">
                Crafted with Passion
              </h2>
              <p className="text-xl md:text-2xl font-light mb-8 text-white/90">
                Every piece tells a story of dedication, precision, and artistry
              </p>
              <div className="flex flex-col sm:flex-row gap-4 ">
                <button className="px-8 py-3 bg-white text-zinc-900 hover:bg-stone-600 hover:text-white transition-all duration-300 text-sm tracking-[0.2em]">
                  OUR CRAFTSMANSHIP
                </button>
                <button className="px-8 py-3 border-2 border-white hover:bg-white hover:text-zinc-900 transition-all duration-300 text-sm tracking-[0.2em]">
                  VISIT SHOWROOM
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6 bg-gray-50 text-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* <Sparkles className="w-12 h-12 mx-auto mb-6" /> */}
            <h2 className="text-4xl md:text-4xl font-extralight mb-6 tracking-tight">
              Join the Vivid Family
            </h2>
            <p className="text-lg md:text-xl font-light mb-12 text-black max-w-2xl mx-auto">
              Be the first to discover new collections, exclusive offers, and
              jewelry care tips
            </p>

            <div className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-md border border-gray-700 text-black placeholder-gray-800 focus:outline-none focus:border-black transition-colors text-sm"
                />
                <button
                  onClick={() => console.log("Subscribed:", email)}
                  className="px-10 py-3 bg-white border border-stone-600 text-stone-600 hover:bg-zinc-900 hover:text-white transition-all duration-300 text-sm tracking-[0.2em] font-medium whitespace-nowrap"
                >
                  SUBSCRIBE
                </button>
              </div>
              <p className="text-xs text-black mt-4">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              {[
                { number: "50K+", label: "Happy Clients" },
                { number: "15+", label: "Years of Excellence" },
                { number: "99%", label: "Satisfaction Rate" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                >
                  <p className="text-4xl font-extralight mb-2">{stat.number}</p>
                  <p className="text-sm text-stone-800 tracking-wide">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
