import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Menu, X, Search, ShoppingBag, User, MapPin, Mail, Phone, MessageCircle } from 'lucide-react';

export default function VraiHomepage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Minimal Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-sm' : 'bg-white'
        }`}
      >
        <div className="mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <motion.div 
            whileHover={{ opacity: 0.6 }}
            className="text-2xl font-light tracking-[0.4em] absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:translate-x-0"
          >
            VRAI
          </motion.div>

          <nav className="hidden lg:flex items-center space-x-12 text-sm tracking-wider">
            <a href="#" className="hover:opacity-60 transition-opacity">Engagement</a>
            <a href="#" className="hover:opacity-60 transition-opacity">Diamonds</a>
            <a href="#" className="hover:opacity-60 transition-opacity">Jewelry</a>
            <a href="#" className="hover:opacity-60 transition-opacity">Showrooms</a>
          </nav>

          <div className="flex items-center space-x-6">
            <button className="hover:opacity-60 transition-opacity hidden md:block">
              <Search className="w-5 h-5" />
            </button>
            <button className="hover:opacity-60 transition-opacity">
              <User className="w-5 h-5" />
            </button>
            <button className="hover:opacity-60 transition-opacity">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="px-6 py-6 space-y-4 text-sm tracking-wider">
                <a href="#" className="block py-2">Engagement</a>
                <a href="#" className="block py-2">Diamonds</a>
                <a href="#" className="block py-2">Jewelry</a>
                <a href="#" className="block py-2">Showrooms</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section className="relative h-screen mt-20 overflow-hidden bg-gray-50">
        <img 
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=2400&q=80"
          alt="Engagement Ring"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 tracking-tight leading-tight">
            ENGAGEMENT RINGS<br />
            <span className="text-4xl md:text-6xl lg:text-7xl">TRUE TO THE FUTURE</span>
          </h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white text-gray-900 px-10 py-4 text-sm tracking-widest hover:bg-gray-100 transition-all mt-4"
          >
            Design your own
          </motion.button>
        </motion.div>
      </section>

      {/* Three Feature Cards */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[3/4] mb-6 overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
                alt="VRAI Created Diamond"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-xl font-light mb-2 tracking-wide">VRAI CREATED DIAMOND</h3>
            <p className="text-sm text-gray-600 mb-4">Why unmatched</p>
            <a href="#" className="text-sm underline hover:opacity-60 transition-opacity">Learn more</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[3/4] mb-6 overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
                alt="Cut For You"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-xl font-light mb-2 tracking-wide">CUT FOR YOU™</h3>
            <p className="text-sm text-gray-600 mb-4">Start Cut for You™</p>
            <a href="#" className="text-sm underline hover:opacity-60 transition-opacity">Get started</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[3/4] mb-6 overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1621944190310-e3cca1564bd7?w=800&q=80"
                alt="Bitcoin Diamond"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-xl font-light mb-2 tracking-wide">A STORE OF VALUE</h3>
            <p className="text-sm text-gray-600 mb-4">Gift a Bitcoin Diamond™</p>
            <a href="#" className="text-sm underline hover:opacity-60 transition-opacity">Explore</a>
          </motion.div>
        </div>
      </section>

      {/* Dare To Section */}
      <section className="relative h-[85vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=2400&q=80"
          alt="Fine Jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-start px-6 md:px-20"
        >
          <div className="text-white max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-light mb-8 tracking-tight">DARE TO __</h2>
            <button className="border-2 border-white px-10 py-4 text-sm tracking-widest hover:bg-white hover:text-gray-900 transition-all">
              Shop fine jewelry
            </button>
          </div>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm tracking-[0.3em] mb-12 uppercase text-gray-500"
          >
            CATEGORIES
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { name: 'Necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
              { name: 'Bracelets', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80' },
              { name: 'Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' }
            ].map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square mb-4 overflow-hidden bg-white">
                  <img 
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-lg font-light tracking-wide">{cat.name}</h3>
              </motion.div>
            ))}
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm tracking-[0.3em] mb-12 uppercase text-gray-500"
          >
            SELECTION
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'VRAI Solitaire Necklace', img: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=800&q=80' },
              { name: 'Illuminate Bracelet', img: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80' },
              { name: 'Linked Tennis Earring', img: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80' }
            ].map((prod, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square mb-4 overflow-hidden bg-white">
                  <img 
                    src={prod.img}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h4 className="text-base font-light">{prod.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spotted in VRAI */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-light tracking-wide"
            >
              SPOTTED IN VRAI
            </motion.h2>
            <a href="#" className="text-sm underline hover:opacity-60 transition-opacity">See all</a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80',
              'https://images.unsplash.com/photo-1588444650700-d5c7bb5282b4?w=600&q=80',
              'https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=600&q=80',
              'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80'
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="aspect-square overflow-hidden bg-gray-100 cursor-pointer group"
              >
                <img 
                  src={img}
                  alt={`Spotted ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Us Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=2400&q=80"
          alt="Showroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-4 tracking-tight">MEET US IN Toronto</h2>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="border-2 border-white px-8 py-4 text-sm tracking-widest hover:bg-white hover:text-gray-900 transition-all">
              Visit showroom
            </button>
            <button className="border-2 border-white px-8 py-4 text-sm tracking-widest hover:bg-white hover:text-gray-900 transition-all">
              Meet us virtually
            </button>
          </div>
        </motion.div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light mb-4 tracking-wide"
          >
            Stay updated
          </motion.h2>
          <p className="text-gray-600 mb-8">Be first to hear about new designs.</p>
          <form className="flex gap-2 max-w-md mx-auto">
            <input 
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
            />
            <button 
              type="submit"
              className="px-8 py-4 bg-gray-900 text-white text-sm tracking-widest hover:bg-gray-800 transition-colors"
            >
              Join
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 md:px-12 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-sm tracking-widest uppercase mb-6 font-medium">Contact</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" /> Contact us
                </a></li>
                <li><a href="mailto:help@vrai.com" className="hover:text-gray-900 flex items-center gap-2">
                  <Mail className="w-4 h-4" /> help@vrai.com
                </a></li>
                <li><a href="tel:+18559564488" className="hover:text-gray-900 flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +1.855.956.4488
                </a></li>
                <li><a href="#" className="hover:text-gray-900">Speak with a diamond expert</a></li>
                <li><a href="#" className="hover:text-gray-900">Visit a showroom</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm tracking-widest uppercase mb-6 font-medium">Support</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">FAQs</a></li>
                <li><a href="#" className="hover:text-gray-900">Shipping</a></li>
                <li><a href="#" className="hover:text-gray-900">Returns policy</a></li>
                <li><a href="#" className="hover:text-gray-900">Lifetime care package</a></li>
                <li><a href="#" className="hover:text-gray-900">Payment plans</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm tracking-widest uppercase mb-6 font-medium">Company</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Our mission</a></li>
                <li><a href="#" className="hover:text-gray-900">Spotted in VRAI</a></li>
                <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900">Affiliates</a></li>
                <li><a href="#" className="hover:text-gray-900">Journal</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm tracking-widest uppercase mb-6 font-medium">Location</h3>
              <p className="text-sm text-gray-600 mb-6">United States</p>
              <h3 className="text-sm tracking-widest uppercase mb-6 font-medium">Language</h3>
              <p className="text-sm text-gray-600">English</p>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
            <div className="flex gap-6 mb-4 md:mb-0">
              <a href="#" className="hover:text-gray-900">Terms of use</a>
              <a href="#" className="hover:text-gray-900">Privacy policy</a>
            </div>
            <p>© 2025 VRAI by Diamond Foundry</p>
          </div>
        </div>
      </footer>
    </div>
  );
}