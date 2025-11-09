"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HeroSection() {

  const router = useRouter();
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse md:flex-row items-center justify-between overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 opacity-20 rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-200 opacity-20 rounded-full"></div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 space-y-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
          Bangun <span className="text-blue-600">Website Impianmu</span> Bersama <span className="text-indigo-600">RIANDEV.ID</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Kami membantu bisnis, personal, dan brand memiliki website profesional yang modern, cepat, dan SEO-friendly.
        </p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          {/* Button Konsultasi Gratis (internal link) */}
      <button
        onClick={() => router.push("#contact")}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-transform hover:scale-105"
      >
        Konsultasi Gratis
      </button>

      {/* Button Lihat Portofolio (eksternal link) */}
      <button
        onClick={() => window.open("https://portopolio-rian.vercel.app", "_blank")}
        className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-2xl font-semibold transition-transform hover:scale-105"
      >
        Lihat Portofolio
      </button>
        </motion.div>

        <p className="pt-4 text-sm text-gray-500">
          ✨ Telah dipercaya oleh lebih dari <strong>50+</strong> klien dari berbagai bidang.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 flex justify-center mb-10 md:mb-0"
      >
        <Image
          src="https://img.freepik.com/premium-photo/cartoon-programmer-working-software-testing_1138224-13049.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Developer Illustration"
          width={500}
          height={500}
          className="rounded-3xl  hover:scale-105 transition-transform duration-300"
        />
      </motion.div>
    </section>
  );
}
