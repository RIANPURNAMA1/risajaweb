"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function JoinPartnerSection() {
  return (
    <section className="relative w-full max-w-6xl px-6 py-20 mx-auto">
      {/* Background decorative circles */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-200 opacity-20 rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-300 opacity-20 rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-white/80 to-blue-50 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-16 gap-10"
      >
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800">
            Ingin <span className="text-blue-600">Bekerja Sama</span> dengan Kami?
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Gabung sebagai partner atau reseller dan dapatkan penghasilan tambahan dengan menjual layanan pembuatan website <span className="font-semibold text-blue-700">RianDev</span>.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
            Daftar Sekarang
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="https://image.web.id/images/19362653.jpg"
            alt="Partner"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </motion.div>
    </section>
  );
}
