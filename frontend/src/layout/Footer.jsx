import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 px-6 md:px-12 border-t bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Contact */}
          <div>
            <h3 className="text-sm tracking-widest uppercase mb-6 font-medium">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="mailto:contact@vividcollections.com" className="hover:text-gray-900 flex items-center gap-2">
                  <Mail className="w-4 h-4" /> contact@vividcollections.com
                </a>
              </li>
              <li>
                <a href="tel:+85298765432" className="hover:text-gray-900 flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +852 9876 5432
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Dubai
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">Schedule a Consultation</a>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-sm tracking-widest uppercase mb-6 font-medium">Collections</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Vivid Solitaires</a></li>
              <li><a href="#" className="hover:text-gray-900">Color Gemstones</a></li>
              <li><a href="#" className="hover:text-gray-900">Luxury Sets</a></li>
              <li><a href="#" className="hover:text-gray-900">Signature Cuts</a></li>
              <li><a href="#" className="hover:text-gray-900">Certified Gems</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm tracking-widest uppercase mb-6 font-medium">Services</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Custom Jewelry Design</a></li>
              <li><a href="#" className="hover:text-gray-900">Gem Appraisals</a></li>
              <li><a href="#" className="hover:text-gray-900">Certification & Grading</a></li>
              <li><a href="#" className="hover:text-gray-900">Jewelry Care & Maintenance</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm tracking-widest uppercase mb-6 font-medium">Company</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">About Vivid Collections</a></li>
              <li><a href="#" className="hover:text-gray-900">Our Story</a></li>
              <li><a href="#" className="hover:text-gray-900">Exhibitions & Shows</a></li>
              <li><a href="#" className="hover:text-gray-900">News & Press</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Terms of Service</a>
          </div>
          <p>© 2025 Vivid Collections. Established 2005. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
