import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ChevronDown, Star, Sparkles, Diamond, Award, Shield, Heart, Clock, ArrowRight } from 'lucide-react';
// import diamondVideo from './assets/diamond.mp4';
// import daimond_video from './assets/daimond_video.mp4';

export default function SamplePage() {
  const [activeCollection, setActiveCollection] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { damping: 30 });

  const collections = [
    {
      title: "Diamond Eternity",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
      description: "Ethically sourced brilliance",
      price: "From $15,000"
    },
    {
      title: "Gold Sovereign",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338",
      description: "Timeless craftsmanship",
      price: "From $8,500"
    },
    {
      title: "Sapphire Dreams",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
      description: "Rare & exquisite",
      price: "From $12,000"
    }
  ];

  const features = [
    { icon: Diamond, text: "GIA Certified", desc: "Every stone authenticated" },
    { icon: Shield, text: "Lifetime Warranty", desc: "Protected forever" },
    { icon: Star, text: "Bespoke Design", desc: "Your vision realized" },
    { icon: Award, text: "Master Artisans", desc: "25+ years expertise" }
  ];

  const testimonials = [
    { name: "Sarah M.", text: "The craftsmanship is absolutely breathtaking. My engagement ring is a masterpiece.", rating: 5 },
    { name: "James K.", text: "Unparalleled service and quality. Worth every penny.", rating: 5 },
    { name: "Emma L.", text: "They brought my vision to life perfectly. Forever grateful.", rating: 5 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCollection((prev) => (prev + 1) % collections.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="bg-stone-50 text-stone-900 font-serif overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-md shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            className="text-xl font-semibold tracking-[0.1em] bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            PRESTRO TRADE
          </motion.div>
          <div className="hidden md:flex gap-10 text-sm tracking-wider">
            {['Collections', 'Diamonds', 'Bespoke', 'Heritage'].map((item, i) => (
              <motion.a
                key={item}
                href="#"
                className="text-stone-700 hover:text-teal-700 transition-colors relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-teal-800 group-hover:w-full transition-all duration-500"></span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ 
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.2]),
            opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0])
          }}
        >
          {/* <img
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0"
            alt="Luxury Jewelry"
            className="w-full h-full object-cover brightness-110"
          /> */}
          {/* <video src={diamondVideo} autoPlay loop muted className="w-full h-full object-cover brightness-110"/> */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/20 via-teal-900/10 to-stone-50/60"></div>
        </motion.div>

        <motion.div
          className="absolute inset-0 z-0"
          animate={{
            background: [
              "radial-gradient(circle at 30% 50%, rgba(217,119,6,0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 50%, rgba(217,119,6,0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 50%, rgba(217,119,6,0.08) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <motion.h1 
              className="text-2xl md:text-4xl font-light tracking-[0.2em] text-stone-800 mb-6"
            >
              Eternal Elegance
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-2xl text-white font-light tracking-[0.2em] mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Where Diamonds Meet Destiny
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              {/* <motion.button
                className="relative bg-gradient-to-r from-teal-700 to-teal-900  text-white px-7 py-3 text-sm tracking-[0.1em] font-semibold shadow-xl overflow-hidden group"
                whileHover={{ scale: 1.05, shadow: "0 20px 40px rgba(180,83,9,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Explore Collections</span>
                <motion.div
                  className="absolute inset-0 bg-teal-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button> */}
            </motion.div>
          </motion.div>

          {/* <motion.div
            className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-10 h-10 text-teal-800" />
          </motion.div> */}
        </div>
      </section>

      {/* Fixed Background Section */}
      <div className="relative">
     
  <div className="fixed inset-0 h-screen -z-10 bottom-10">
          <img
            // src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9"
            src="https://images.unsplash.com/photo-1616837874254-8d5aaa63e273?q=80&w=856&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Background"
            className="w-full h-full object-cover brightness-105"
          />
       <div className="absolute inset-0 bg-gradient-to-b from-stone-900/20 via-teal-900/10 to-stone-50/60"></div>
        </div>
        {/* Collections Overlay */}
        <div className="relative z-10 bg-gradient-to-b from-stone-50/95 via-white/90 to-stone-50/95">
          <section className="py-32">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20"
              >
                <motion.div
                  className="inline-block mb-6"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Diamond className="w-12 h-12 text-teal-700" />
                </motion.div>
                <h2 className="text-5xl md:text-6xl tracking-wider text-stone-800 mb-4 font-light">
                  Signature Collections
                </h2>
                <p className="text-lg text-stone-600 font-sans">
                  Curated masterpieces for the discerning connoisseur
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {collections.map((collection, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.8 }}
                    className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow duration-500"
                    whileHover={{ y: -10 }}
                  >
                    <div className="aspect-[3/4] overflow-hidden">
                      <motion.img
                        src={collection.image}
                        alt={collection.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                    <div className="p-6 bg-gradient-to-t from-white to-stone-50">
                      <h3 className="text-2xl tracking-wider text-stone-800 mb-2">{collection.title}</h3>
                      <p className="text-teal-700 font-sans text-sm mb-1">{collection.description}</p>
                      <p className="text-stone-600 font-sans text-lg mb-4">{collection.price}</p>
                      <motion.button
                        className="border-2 border-teal-700 text-teal-700 px-6 py-2.5 text-xs tracking-wider hover:bg-teal-700 hover:text-white transition-all flex items-center justify-center gap-2 w-full font-semibold"
                        whileHover={{ scale: 1.02 }}
                      >
                        Discover <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white px-4 py-1.5 text-xs tracking-wider font-bold shadow-lg">
                      NEW
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-24 bg-gradient-to-b from-teal-50/30 to-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-4 gap-12">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="text-center group"
                  >
                    <motion.div
                      className="inline-block mb-6 p-6 bg-gradient-to-br from-teal-100 to-teal-50 rounded-full shadow-md"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="w-10 h-10 text-teal-700" />
                    </motion.div>
                    <h3 className="text-xl tracking-wide text-stone-800 mb-2 font-semibold">{feature.text}</h3>
                    <p className="text-stone-600 font-sans text-sm">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Pieces Grid */}
          <section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <motion.h2 
                className="text-5xl text-center mb-20 text-stone-800 tracking-wider font-light"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Featured Masterpieces
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
                  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338",
                  "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908",
                  "https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
                  "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
                  "https://images.unsplash.com/photo-1573408301185-9146fe634ad0",
                  "https://images.unsplash.com/photo-1603561596112-0a132b757442",
                  "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0"
                ].map((img, i) => (
                  <motion.div
                    key={i}
                    className="relative group overflow-hidden aspect-square bg-white shadow-md hover:shadow-xl transition-shadow duration-500"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03, zIndex: 10 }}
                  >
                    <img
                      src={img}
                      alt="Jewelry"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-teal-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <Sparkles className="w-12 h-12 text-white" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Bespoke Section */}
          <section className="py-32 bg-gradient-to-br from-teal-50/50 via-white to-stone-50">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <motion.div
                  className="inline-block mb-6"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Heart className="w-14 h-14 text-teal-700" />
                </motion.div>
                <h2 className="text-5xl mb-6 text-stone-800 tracking-wide font-light">Bespoke Atelier</h2>
                <p className="text-lg text-stone-700 font-sans leading-relaxed mb-10">
                  Transform your dreams into tangible brilliance. Our master craftsmen collaborate with you 
                  to create one-of-a-kind treasures that tell your unique story.
                </p>
                <div className="space-y-4 mb-10">
                  {[
                    "Private consultation with master jeweler",
                    "3D visualization of your design",
                    "Hand-selected stones from our vault",
                    "Lifetime complimentary maintenance"
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-4 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-gradient-to-r from-teal-600 to-teal-800 rounded-full"
                        whileHover={{ scale: 2 }}
                      />
                      <span className="text-stone-700 font-sans group-hover:text-teal-800 transition-colors">{item}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.button
                  className="border-2 border-teal-700 text-teal-700 px-10 py-3.5 tracking-wider hover:bg-teal-700 hover:text-white transition-all text-sm font-semibold shadow-md hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  Begin Your Journey
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <motion.div
                  className="relative z-10 shadow-2xl"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1603561596112-0a132b757442"
                    alt="Bespoke Jewelry"
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/10 to-transparent"></div>
                </motion.div>
                <motion.div
                  className="absolute -bottom-8 -right-8 bg-gradient-to-br from-teal-600 to-teal-800 text-white p-8 shadow-2xl z-20"
                  animate={{ 
                    y: [0, -10, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <p className="text-5xl font-bold mb-1">25+</p>
                  <p className="text-xs tracking-wider font-sans font-semibold">YEARS LEGACY</p>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
              <motion.h2 
                className="text-5xl text-center mb-16 text-stone-800 tracking-wide font-light"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Client Stories
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="bg-gradient-to-br from-teal-50 to-white border border-teal-200 p-8 hover:border-teal-400 transition-all shadow-md hover:shadow-lg"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <Star key={j} className="w-5 h-5 fill-teal-500 text-teal-500" />
                      ))}
                    </div>
                    <p className="text-stone-700 font-sans italic mb-4 leading-relaxed">"{testimonial.text}"</p>
                    <p className="text-teal-800 font-sans text-sm tracking-wide font-semibold">— {testimonial.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-32 bg-gradient-to-b from-stone-50 to-white">
            <div className="max-w-7xl mx-auto px-6">
              <motion.h2 
                className="text-5xl text-center mb-20 text-stone-800 tracking-wide font-light"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                The Prestro Experience
              </motion.h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { step: "01", title: "Consultation", desc: "Share your vision with our experts" },
                  { step: "02", title: "Design", desc: "Witness your dream take shape" },
                  { step: "03", title: "Crafting", desc: "Master artisans bring it to life" },
                  { step: "04", title: "Forever", desc: "Lifetime care and service" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="relative group"
                  >
                    <motion.div
                      className="text-8xl font-bold text-teal-200/40 mb-4 group-hover:text-teal-300/60 transition-colors"
                      whileHover={{ scale: 1.2 }}
                    >
                      {item.step}
                    </motion.div>
                    <h3 className="text-2xl tracking-wide text-stone-800 mb-3 font-semibold">{item.title}</h3>
                    <p className="text-stone-600 font-sans text-sm leading-relaxed">{item.desc}</p>
                    {i < 3 && (
                      <motion.div
                        className="hidden md:block absolute top-12 -right-4 w-8 h-px bg-gradient-to-r from-teal-400 to-transparent"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + 0.5 }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
           
      </div>

      {/* Final CTA */}
      <section className="relative py-40 overflow-hidden bg-gradient-to-br from-teal-100 via-white to-stone-100">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(217,119,6,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(217,119,6,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(217,119,6,0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Clock className="w-16 h-16 text-teal-700 mx-auto mb-8" />
          <h2 className="text-5xl md:text-6xl text-stone-800 mb-6 tracking-wide font-light">
            Your Legacy Awaits
          </h2>
          <p className="text-xl text-stone-700 font-sans mb-14 leading-relaxed">
            Visit our atelier for an exclusive private viewing
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              className="bg-gradient-to-r from-teal-700 to-teal-900 text-white px-12 py-4 text-sm tracking-wider font-semibold shadow-xl"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(180,83,9,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Book Private Viewing
            </motion.button>
            <motion.button
              className="border-2 border-teal-700 text-teal-700 px-12 py-4 text-sm tracking-wider font-semibold hover:bg-teal-700 hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Catalogue
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-stone-100 to-stone-200 border-t border-teal-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-teal-800 text-3xl mb-3 font-serif tracking-[0.3em] font-bold">PRESTRO</p>
            <p className="text-stone-600 font-sans text-xs tracking-widest mb-6">LUXURY REDEFINED SINCE 2000</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center text-stone-700 font-sans text-sm">
            <div>
              <p className="text-teal-800 mb-2 tracking-wide font-semibold">Atelier</p>
              <p className="text-xs">123 Diamond Avenue, Artist Village</p>
            </div>
            <div>
              <p className="text-teal-800 mb-2 tracking-wide font-semibold">Inquiries</p>
              <p className="text-xs">contact@prestrotrade.com</p>
            </div>
            <div>
              <p className="text-teal-800 mb-2 tracking-wide font-semibold">Hours</p>
              <p className="text-xs">By Appointment Only</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-teal-200 text-center">
            <p className="text-stone-500 text-xs tracking-widest">&copy; 2025 PRESTRO TRADE. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}