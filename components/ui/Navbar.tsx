"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Beranda", href: "#" },
    { name: "Fitur", href: "#features" },
    { name: "Testimoni", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <a href="#" className="text-2xl font-extrabold text-blue-600 tracking-wide">
          RIAN<span className="text-indigo-600">DEV.ID</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
              >
                {link.name}
                <span className="block h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-lg transition-all"
            >
              Hubungi Kami
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white shadow-md overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="block text-gray-700 hover:text-blue-600 font-medium transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
