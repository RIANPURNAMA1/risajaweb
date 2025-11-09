"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiArrowRight } from "react-icons/fi";

export default function CTASection() {
  return (
    <section className="relative py-24 bg-gradient-to-r from-blue-500 to-indigo-600 overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white opacity-10 rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white opacity-10 rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-3xl mx-auto px-6 text-center bg-white/10 backdrop-blur-md rounded-3xl py-16 shadow-2xl"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
          Tingkatkan Bisnismu Sekarang!
        </h2>
        <p className="text-lg md:text-xl mb-8 text-white/90">
          Dapatkan solusi digital terbaik untuk mengembangkan bisnis Anda bersama tim profesional kami.
        </p>
        <Button className="flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-blue-50 transition-all duration-300">
          Hubungi Kami <FiArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </section>
  );
}
