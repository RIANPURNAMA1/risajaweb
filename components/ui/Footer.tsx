"use client";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo & Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">RianDev</h2>
          <p className="text-gray-400 text-sm">
            Kami menyediakan solusi website profesional untuk bisnis, brand, dan personal. Modern, cepat, dan SEO-friendly.
          </p>
        </div>

        {/* Navigasi */}
        <div className="space-y-2">
          <h3 className="text-white font-semibold mb-2">Menu</h3>
          <ul className="space-y-1">
            <li><a href="#services" className="hover:text-blue-500 transition">Layanan</a></li>
            <li><a href="#pricing" className="hover:text-blue-500 transition">Paket</a></li>
            <li><a href="#faq" className="hover:text-blue-500 transition">FAQ</a></li>
            <li><a href="#contact" className="hover:text-blue-500 transition">Kontak</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-2">
          <h3 className="text-white font-semibold mb-2">Ikuti Kami</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition text-white">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-pink-500 transition text-white">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-blue-400 transition text-white">
              <FaLinkedinIn size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-sky-400 transition text-white">
              <FaTwitter size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © 2025 RianDev. All rights reserved.
      </div>
    </footer>
  );
}
